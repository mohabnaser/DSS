import { useState } from 'react'
import type { PageId } from '../types'
import { ArabicNote, Callout, CompareTable, KeyIdea, PageHeader, Pill, Tag } from '../components/ui'
import { Icon } from '../components/Icon'

const flashcards = [
  {
    front: 'Decision-support cycle',
    back: 'Identify & bound → gather data → analyse → develop options → decide → internal approval → implement & follow up. The cycle closes through feedback.',
  },
  {
    front: 'DSS — technical definition',
    back: 'Interactive, flexible and adaptable computer-based information system for semi-structured / unstructured problems; uses data and models, an easy interface, and allows the decision maker’s own insights.',
  },
  {
    front: 'MIS vs DSS vs EIS',
    back: 'MIS: planned reports, relational DB, lower/middle management, structured. DSS: ad-hoc, models, middle/senior, semi-structured. EIS: executive dashboard, internal + external, top, strategic.',
  },
  {
    front: 'Data warehouse — four characteristics',
    back: 'Subject-oriented · integrated · time-variant · non-volatile. OLTP is application-oriented, current and continuously updated.',
  },
  {
    front: 'OLTP vs OLAP',
    back: 'OLTP: transactions, current detailed records, relational DB, planned reports. OLAP: multi-dimensional, historical integrated data, ad-hoc views and analytical operations.',
  },
  {
    front: 'OLAP operations',
    back: 'Viewing: slice (fix one dimension), dice (select a sub-cube). Manipulation: roll-up (aggregate up), drill-down (finer detail), pivot (rotate the view).',
  },
  {
    front: 'Hindsight · insight · foresight',
    back: 'Hindsight: reporting, warehouse, OLAP. Insight: statistics, data mining, patterns and relationships. Foresight: optimisation, simulation, scenarios, expert systems.',
  },
  {
    front: 'Model-centered DSS',
    back: 'Not one model: a managed model base + MBMS + modelling language + solvers + data access + interface + experimentation and explanation.',
  },
  {
    front: 'MBMS functions',
    back: 'Creation/updating: formulation, generation, editing, validation, documentation. Management/use: storage, retrieval, selection, linking, execution, versioning, what-if, sensitivity, output analysis.',
  },
  {
    front: 'Modelling hierarchy',
    back: 'Domain (real system and data) → specific model structure (algebra) → model instance (numbers handed to a solver). New data creates a new instance, not a new structure.',
  },
  {
    front: 'Structured modelling',
    back: 'Represent the domain with entities, attributes, relationships, functions and constraints. The database stores known attributes only; decision outputs such as Q and T are variables.',
  },
  {
    front: 'GAMS program shape',
    back: 'SETS → data (PARAMETER/TABLE/SCALAR) → VARIABLES → EQUATIONS → MODEL → SOLVE … USING … → DISPLAY. Declarative: the model is stated; a separate solver executes it.',
  },
  {
    front: 'Efficiency vs effectiveness',
    back: 'Efficiency: model coverage, compact formulation, productivity, solver set, support for model-building phases. Effectiveness: decision-maker communication, what-if, explanation, visualisation.',
  },
  {
    front: 'Production-shipping decisions',
    back: 'Q(i,j): production quantity. T(i,j,k): amount shipped. TPC = Σ U(j)·Q(i,j); TSC = Σ S(i,j,k)·T(i,j,k); minimise TPC + TSC subject to capacity, flow and demand.',
  },
  {
    front: 'Three scenarios',
    back: 'I: deterministic LP. II: goal seeking and policy/scenario simulation. III: stochastic LP because demand D is uncertain; risk attitude chooses average, lowest or highest demand.',
  },
  {
    front: 'Simulation vs optimisation',
    back: 'Optimisation searches for the best decision under a mathematical structure. Simulation runs a dynamic, stochastic system through time to observe queues, bottlenecks and performance; it does not guarantee optimality.',
  },
  {
    front: 'AHP steps',
    back: 'Build goal–criteria–alternatives hierarchy → pairwise comparisons on Saaty’s 1–9 scale → normalise each column, average rows for weights → weight alternatives → composite ranking.',
  },
  {
    front: 'AHP classification',
    back: 'A tool / method-oriented special purpose DSS. It is analytical and hierarchical, and it tolerates uncertainty and inconsistency in judgments.',
  },
]

const traps = [
  ['“DSS is mainly planned reporting with a few simple analytical programs.”', 'False', 'That is MIS. DSS is defined by strong analytical and modelling support for semi-structured decisions.'],
  ['“OLAP provides insight; data mining provides hindsight.”', 'False — reversed', 'OLAP/reporting = hindsight. Data mining/statistics = insight.'],
  ['“Models are essentially needed to validate and approve a decision.”', 'False', 'Models assess alternatives, costs and risks. Approval is managerial and organisational.'],
  ['“A data warehouse is current and volatile.”', 'False', 'It is historical, integrated, subject-oriented and non-volatile.'],
  ['“ETL is a database management system.”', 'False', 'ETL is extract–transform–load: an integration pipeline that feeds the warehouse.'],
  ['“A comprehensive solver set is an effectiveness feature.”', 'False', 'It is an efficiency feature. Effectiveness concerns communication, experimentation and explanation.'],
  ['“A declarative modelling language concentrates on the solution strategy.”', 'False', 'It states the mathematical model; a separate solver handles the strategy.'],
  ['“AHP is a domain-oriented DSS.”', 'False', 'It is tool/method-oriented: the domain changes, the method stays.'],
  ['“The database should store production quantity Q(i,j).”', 'False', 'Q is an unknown decision output. The database stores known attributes such as capacity, demand and unit cost.'],
  ['“A risk-averse decision maker uses the highest demand value.”', 'False', 'Risk-averse uses the lowest value; risk-neutral uses the average; risk-seeking uses the highest.'],
  ['“General purpose DSS is always better than special purpose DSS.”', 'False', 'Fit matters. Special purpose is cheaper and bounded; general purpose needs institutional support and is reusable.'],
  ['“Simulation guarantees the optimal design.”', 'False', 'It evaluates a design or policy under stochastic behaviour. Optimisation searches for an optimum within a model.'],
  ['“The model changes whenever the data change.”', 'False', 'The model structure stays; a new model instance is generated from new data.'],
  ['“The user is a component inside the DSS system boundary.”', 'False', 'In the integrated conceptual model, the decision maker and policy analyst are outside the boundary, supplying judgment and accountability.'],
]

const commandWords = [
  ['Identify / state', 'Name the item or distinction precisely. No long introduction.', 'Writing a paragraph that never names the concept.'],
  ['List', 'Numbered or bulleted items; usually one line each. Match the count implied by the marks.', 'Giving three vague points when the question asks for six capabilities.'],
  ['Explain', 'Mechanism + why it matters. Use because / therefore / which means.', 'Defining the term and stopping.'],
  ['Compare', 'Use a criterion-by-criterion table or parallel structure. State the basis of comparison.', 'Two disconnected descriptions with no explicit contrast.'],
  ['Draw / schematic', 'Label all components, show arrows and boundary. Add a one-line legend.', 'An unlabelled box diagram with no direction.'],
  ['Formulate', 'Define sets, parameters, variables, objective and constraints. State units and index domains.', 'Writing an objective with no constraints or undefined symbols.'],
  ['Discuss / evaluate', 'Give both sides, a criterion and a judgment. Acknowledge limitations.', 'Listing advantages only, or pretending a model is neutral.'],
]

const dayPlan = [
  ['Morning · 90 min', 'Draw from memory', 'Decision cycle, integrated DSS architecture, data pipeline, modelling hierarchy. Check omissions against the sections.'],
  ['Morning · 60 min', 'Comparison grids', 'MIS/DSS/EIS; OLTP/OLAP; special/general purpose; data/model/knowledge-centered; hindsight/insight/foresight.'],
  ['Afternoon · 90 min', 'Calculation and code', 'One AHP matrix from scratch; one GAMS rewrite with data/model separation; one LP formulation.'],
  ['Afternoon · 60 min', 'Exam writing', 'Attempt two full past papers without notes. Then compare structure, not just facts.'],
  ['Evening · 45 min', 'Traps and flags', 'Read the trap list and the two unresolved 2017 items. Make sure you know why each statement is false.'],
  ['Final · 30 min', 'Recall only', 'Flashcards and the “numbers to remember” strip. Stop adding new material.'],
]

function FlashcardDeck() {
  const [order, setOrder] = useState(() => flashcards.map((_, index) => index))
  const [position, setPosition] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const card = flashcards[order[position]]

  function next() {
    setFlipped(false)
    setPosition((value) => (value + 1) % order.length)
  }

  function previous() {
    setFlipped(false)
    setPosition((value) => (value - 1 + order.length) % order.length)
  }

  function shuffleDeck() {
    setOrder(shuffle(order))
    setPosition(0)
    setFlipped(false)
  }

  return (
    <div className="flashcard-deck">
      <div className="flashcard-deck__top">
        <span className="micro-label">Active recall</span>
        <span>{position + 1} / {order.length}</span>
        <button type="button" className="text-button" onClick={shuffleDeck}>
          <Icon name="RefreshCcw" size={13} /> shuffle
        </button>
      </div>
      <button type="button" className={`flashcard ${flipped ? 'is-flipped' : ''}`} onClick={() => setFlipped((value) => !value)}>
        <span className="flashcard__side">{flipped ? 'Answer' : 'Prompt'}</span>
        <strong>{flipped ? card.back : card.front}</strong>
        <span className="flashcard__hint">
          {flipped ? 'Tap to return to the prompt' : 'Say the answer out loud, then tap to check'}
        </span>
      </button>
      <div className="flashcard-deck__nav">
        <button type="button" className="btn btn--ghost btn--sm" onClick={previous}>
          <Icon name="ChevronLeft" size={15} /> Previous
        </button>
        <button type="button" className="btn btn--soft btn--sm" onClick={next}>
          Next card <Icon name="ChevronRight" size={15} />
        </button>
      </div>
    </div>
  )
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export function Revision({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  return (
    <article className="revision-page">
      <PageHeader
        eyebrow="Fast, connected recall"
        title="Revision & cheat sheet"
        intro="A compressed view of the whole course: comparison grids, formulas, traps, answer templates and active-recall cards. Use it after you understand the sections — not as a substitute for them."
        ar="دي صفحة المراجعة السريعة: جداول مقارنة، equations، أخطاء شائعة، وقوالب إجابة. استخدمها بعد ما تفهم الأقسام، مش بدلًا عنها. الأهم إنك تقدر ترسم وتشرح من غير ما تبص."
        meta={
          <>
            <Pill icon="ListChecks">One-page recall</Pill>
            <Pill icon="AlertTriangle" tone="amber">Trap list</Pill>
            <Pill icon="Layers" tone="teal">Flashcards</Pill>
          </>
        }
      />

      <nav className="revision-nav" aria-label="Revision sections">
        {[
          ['revision-models', 'Mental models'],
          ['revision-grids', 'Comparison grids'],
          ['revision-formulas', 'Formulas & numbers'],
          ['revision-traps', 'Exam traps'],
          ['revision-command', 'Command words'],
          ['revision-cards', 'Flashcards'],
          ['revision-plan', 'Last-day plan'],
        ].map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          >
            {label}
          </button>
        ))}
      </nav>

      <section className="content-section" id="revision-models">
        <div className="subheading">
          <span>01 · The whole course in four sentences</span>
          <h2>If you remember nothing else, remember the chain</h2>
        </div>
        <div className="revision-chain">
          <div><span>01</span><strong>A decision is a cycle</strong><p>Frame, gather, analyse, design options, choose, approve, implement, feed back.</p></div>
          <div><span>02</span><strong>Support has three analytical directions</strong><p>Data for hindsight, models for foresight, knowledge for rules and explanation.</p></div>
          <div><span>03</span><strong>Integration is the architecture</strong><p>Data + models + knowledge + interface, with the decision maker outside the boundary.</p></div>
          <div><span>04</span><strong>The decision maker still decides</strong><p>Models and analytics assess alternatives; judgment, risk attitude and accountability remain human.</p></div>
        </div>

        <div className="formula-strip formula-strip--wide">
          <span>DATA</span><b>→</b><span>INFORMATION</span><b>→</b><span>KNOWLEDGE</span><b>+</b>
          <span>JUDGMENT</span><b>→</b><span className="formula-strip__accent">DECISION</span>
        </div>

        <div className="revision-two-col">
          <div className="revision-note-card">
            <span className="micro-label">The three lenses</span>
            <h3>Hindsight → Insight → Foresight</h3>
            <p><strong>Hindsight:</strong> What happened? Warehousing, OLAP, reporting.</p>
            <p><strong>Insight:</strong> Why? Data mining, statistics, patterns.</p>
            <p><strong>Foresight:</strong> What if / what should we do? Optimisation, simulation, scenarios, expert systems.</p>
          </div>
          <div className="revision-note-card revision-note-card--amber">
            <span className="micro-label">The integration test</span>
            <h3>Can you trace a number?</h3>
            <p>Database table → parameter → model equation → solver → result → interface → decision. If you can trace that chain, you understand the DSS architecture.</p>
          </div>
        </div>

        <KeyIdea>
          The exam rewards precise structure. For almost every written question, start by naming the framework, then
          give the components in order, then state the managerial implication.
        </KeyIdea>
      </section>

      <section className="content-section content-section--shaded" id="revision-grids">
        <div className="subheading">
          <span>02 · Comparison grids</span>
          <h2>The tables examiners reuse</h2>
        </div>

        <CompareTable
          caption="MIS · DSS · EIS"
          compact
          headers={['Criterion', 'MIS', 'DSS', 'EIS']}
          rows={[
            ['Reports', 'Planned / standard', 'Ad-hoc, flexible', 'Executive dashboard, drill-down'],
            ['Database', 'Relational / operational', 'Analytical DB + model base', 'Integrated internal/external; DSS backend'],
            ['Analytics', 'Few / simple', 'Strong models, what-if', 'Simple but powerful; expert opinion, forecasting'],
            ['Management level', 'Lower / middle', 'Middle / senior', 'Top executives'],
            ['Data sources', 'Mainly internal', 'Internal + external', 'Internal + external, strategic'],
            ['Decision type', 'Structured / repetitive', 'Semi-structured', 'Unstructured / strategic'],
          ]}
        />

        <CompareTable
          caption="OLTP · OLAP · data warehouse"
          compact
          headers={['Dimension', 'OLTP', 'OLAP', 'Data warehouse']}
          rows={[
            ['Purpose', 'Run transactions', 'Analyse multi-dimensionally', 'Integrate historical analytical data'],
            ['Data', 'Current, detailed, normalised', 'Multi-dimensional views', 'Subject-oriented, integrated, time-variant, non-volatile'],
            ['Workload', 'Insert / update / short queries', 'Complex reads and aggregation', 'Load and read; controlled updates'],
            ['Reports', 'Planned', 'Ad-hoc', 'Source for marts, OLAP and mining'],
            ['User', 'Operational staff', 'Analysts / managers', 'Analysts and decision makers'],
          ]}
        />

        <div className="revision-grid-2">
          <CompareTable
            caption="Special vs general purpose DSS"
            compact
            headers={['Criterion', 'Special purpose', 'General purpose']}
            rows={[
              ['Scope', 'One problem or method', 'Many decisions and domains'],
              ['Cost', 'Usually lower', 'Higher initial investment'],
              ['Sustainability', 'Bounded', 'Reusable; needs institutional support'],
              ['Examples', 'Production-shipping; AHP tool', 'Integrated university DSS'],
            ]}
          />
          <CompareTable
            caption="Data · model · knowledge-centered"
            compact
            headers={['Orientation', 'Main tools', 'Lens']}
            rows={[
              ['Data-centered', 'Warehouse, OLAP, mining, reporting', 'Hindsight + insight'],
              ['Model-centered', 'Model base, MBMS, GAMS, solvers', 'Foresight'],
              ['Knowledge-centered', 'Rules, inference, expert systems', 'Foresight + explanation'],
            ]}
          />
        </div>

        <CompareTable
          caption="OLAP operations"
          compact
          headers={['Operation', 'Class', 'One-line definition', 'Example']}
          rows={[
            ['Slice', 'Viewing', 'Fix one dimension to one value', 'Sales for 2025 only'],
            ['Dice', 'Viewing', 'Select a sub-cube on two or more dimensions', '2025–2026, two products, three regions'],
            ['Roll-up', 'Manipulation', 'Aggregate upward along a hierarchy', 'Month → quarter → year'],
            ['Drill-down', 'Manipulation', 'Move to finer detail', 'Year → quarter → month'],
            ['Pivot', 'Manipulation', 'Rotate the view', 'Move product from rows to columns'],
          ]}
        />
      </section>

      <section className="content-section" id="revision-formulas">
        <div className="subheading">
          <span>03 · Formulas and numbers</span>
          <h2>What must be exact</h2>
        </div>

        <div className="number-strip">
          {[
            ['7', 'decision-cycle stages'],
            ['4', 'warehouse characteristics'],
            ['5', 'OLAP operations'],
            ['6', 'MIS/DSS/EIS criteria'],
            ['3', 'production-shipping scenarios'],
            ['3', 'risk attitudes'],
            ['5', 'AHP steps'],
            ['3', 'analytical lenses'],
          ].map(([number, label]) => (
            <div key={label}><strong>{number}</strong><span>{label}</span></div>
          ))}
        </div>

        <div className="formula-cheat-grid">
          <div className="formula-cheat">
            <span className="micro-label">Production-shipping</span>
            <code>TPC = Σ(i,j) U(j)·Q(i,j)</code>
            <code>TSC = Σ(i,j,k) S(i,j,k)·T(i,j,k)</code>
            <code>TC = TPC + TSC</code>
            <code>Q(i,j) ≤ C(i,j)</code>
            <code>Σ(k) T(i,j,k) ≤ Q(i,j)</code>
            <code>Σ(i) T(i,j,k) ≤ D(j,k)</code>
            <p>State your demand interpretation: “satisfy” suggests ≥, while the slide writes ≤. Flag the ambiguity instead of mixing it silently.</p>
          </div>
          <div className="formula-cheat">
            <span className="micro-label">AHP composite score</span>
            <code>S(k) = Σ(c) w(c) · p(k,c)</code>
            <p>w(c) = criterion weight; p(k,c) = local priority of alternative k under criterion c.</p>
            <span className="micro-label">Reciprocal rule</span>
            <code>a(ji) = 1 / a(ij)</code>
            <p>If Experience is 4× Salary, the reverse cell is 0.25. Normalise columns, then average rows.</p>
          </div>
          <div className="formula-cheat">
            <span className="micro-label">Structured model</span>
            <code>Known attributes → database</code>
            <code>Unknown outputs → decision variables</code>
            <p>Database tables: PLANT, ITEM, WAREHOUSE, PLANT_ITEM, WAREHOUSE_ITEM, PLANT_ITEM_WARE.</p>
            <span className="micro-label">Model instance</span>
            <code>Same structure + new data = new instance</code>
          </div>
          <div className="formula-cheat">
            <span className="micro-label">GAMS shape</span>
            <code>SETS → DATA → VARIABLES → EQUATIONS → MODEL → SOLVE → DISPLAY</code>
            <p>Data/model separation; compact indexed equations; modular blocks; separate solver.</p>
            <span className="micro-label">Transportation demand</span>
            <code>Σ(i) x(i,j) ≥ b(j)</code>
            <p>Total supply 950, total demand 900 → 50 cases of unused capacity unless extra constraints are imposed.</p>
          </div>
        </div>

        <Callout tone="exam" title="Six-word answers that earn marks">
          <strong>“Data-centered → hindsight. Model-centered → foresight. Knowledge-centered → explanation.”</strong>{' '}
          Add the tool examples and the management level and you have a complete comparison.
        </Callout>
      </section>

      <section className="content-section content-section--shaded" id="revision-traps">
        <div className="subheading">
          <span>04 · The reversal list</span>
          <h2>If a statement swaps these pairs, it is false</h2>
        </div>
        <p>
          The papers recycle a small set of reversals. Read the exact subject and verb: <em>assess</em> is not
          <em> approve</em>; <em>efficiency</em> is not <em>effectiveness</em>; <em>hindsight</em> is not
          <em> insight</em>.
        </p>
        <div className="trap-list">
          {traps.map(([statement, verdict, fix], index) => (
            <div className="trap-item" key={statement}>
              <span className="trap-item__n">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <p className="trap-item__statement">{statement}</p>
                <span className="trap-item__verdict">{verdict}</span>
                <p className="trap-item__fix">{fix}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section" id="revision-command">
        <div className="subheading">
          <span>05 · Answer technique</span>
          <h2>What the command word is asking for</h2>
        </div>
        <CompareTable
          caption="Command words → expected response"
          headers={['Command', 'What to produce', 'Common mistake']}
          rows={commandWords}
        />

        <div className="answer-template-grid">
          <div className="answer-template">
            <span className="micro-label">Comparison answer</span>
            <h4>Six-row grid</h4>
            <p>Reports · database · analytics · management level · data sources · decision type. Add a one-sentence conclusion about fit.</p>
          </div>
          <div className="answer-template">
            <span className="micro-label">Architecture answer</span>
            <h4>Boundary + five parts</h4>
            <p>Data wing, model wing, knowledge management, interactive interface, decision maker outside the boundary. Label two-way arrows.</p>
          </div>
          <div className="answer-template">
            <span className="micro-label">GAMS answer</span>
            <h4>Six labelled blocks</h4>
            <p>Sets, data, variables, equations, model/solve, display. Put every number in the data block and comment the sections.</p>
          </div>
          <div className="answer-template">
            <span className="micro-label">AHP answer</span>
            <h4>Five steps</h4>
            <p>Hierarchy, pairwise matrices, normalise columns and average rows, weight alternatives, composite ranking.</p>
          </div>
        </div>
      </section>

      <section className="content-section content-section--shaded" id="revision-cards">
        <div className="subheading">
          <span>06 · Active recall</span>
          <h2>Flashcards: say it before you flip it</h2>
        </div>
        <FlashcardDeck />
        <ArabicNote title="طريقة المراجعة">
          <p>
            متقرأش البطاقة وتقول “أه ده أنا عارفه”. اسأل نفسك بصوت عالي: إيه الإجابة؟ واكتبها في ورقة. لو نسيت
            جزء، ارجع للقسم المختصر. التكرار النشط أفضل بكتير من إعادة القراءة.
          </p>
        </ArabicNote>
      </section>

      <section className="content-section" id="revision-plan">
        <div className="subheading">
          <span>07 · The final day</span>
          <h2>A realistic last-24-hours plan</h2>
        </div>
        <div className="day-plan">
          {dayPlan.map(([time, title, body], index) => (
            <div className="day-plan__item" key={time}>
              <span className="day-plan__time">{time}</span>
              <span className="day-plan__n">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h4>{title}</h4>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="revision-final-cta">
          <div>
            <span className="section-kicker"><Icon name="ClipboardCheck" size={15} /> Put it into practice</span>
            <h2>Now answer a real paper under time</h2>
            <p>Reading a cheat sheet is preparation. Writing an answer without notes is the performance you need.</p>
          </div>
          <div className="revision-final-cta__actions">
            <button type="button" className="btn btn--primary" onClick={() => onNavigate('exam')}>
              Open exam studio <Icon name="ArrowRight" size={16} />
            </button>
            <button type="button" className="btn btn--ghost" onClick={() => onNavigate('audit')}>
              Source audit <Icon name="FileSearch" size={16} />
            </button>
          </div>
        </div>
      </section>

      <div className="revision-tag-row">
        <Tag tone="cyan">No official key</Tag>
        <Tag tone="amber">Two unresolved items flagged</Tag>
        <Tag tone="neutral">19 external-case items</Tag>
        <Tag tone="green">200 source-retained</Tag>
      </div>
    </article>
  )
}
