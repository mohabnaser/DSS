import type { PageId } from '../types'
import { BANK_STATS, EXAM_INFO, EXAM_ORDER, QUESTIONS } from '../data/exams'
import { COURSE_STATS, SECTIONS } from '../data/course'
import { Icon } from '../components/Icon'
import { Callout, CompareTable, KeyIdea, PageHeader, Pill, Tag } from '../components/ui'

const lectureFiles = [
  {
    file: 'lec123.md',
    lectures: 'Lectures 1–3',
    slides: 73,
    breakdown: '17 + 21 + 35',
    contents: 'Course contents; decision support foundations; model-building languages and GAMS theory.',
  },
  {
    file: 'lec456.md',
    lectures: 'Lectures 4–6',
    slides: 58,
    breakdown: '20 + 17 + 21',
    contents: 'Simulation and Arena; data-centered DSS and OLAP; MIS/DSS/EIS support systems.',
  },
  {
    file: 'lec789.md',
    lectures: 'Lectures 7–9',
    slides: 58,
    breakdown: '14 + 22 + 22',
    contents: 'DSS definitions and architecture; structured modelling and production-shipping; AHP.',
  },
]

const externalCases = [
  {
    case: 'Cairo University senior-management DSS',
    where: '2017 final, 2018 midterm, 2019 and 2025 finals (item-dependent)',
    status: 'Named in the papers; not described in the supplied lecture transcripts.',
  },
  {
    case: 'Development Planning Support System (DPSS)',
    where: '2016 and 2017 finals; 2019 final',
    status: 'Classification follows the lecture definitions, but the case itself is external.',
  },
  {
    case: 'Information and Decision Support Center (IDSC)',
    where: '2017 final A.4',
    status: 'Unresolved: no supplied lecture material confirms the institutional claim.',
  },
  {
    case: 'Kuwait fisheries-sector DSS',
    where: '2017 final A.2',
    status: 'Unresolved: no supplied lecture material describes the case or its model type.',
  },
  {
    case: 'Visual DSS (VDSS)',
    where: '2016 midterm; 2017 final',
    status: 'Named in the lecture taxonomy, but its detailed features are not transcribed.',
  },
]

export function SourceAudit() {
  const contextItems = QUESTIONS.filter((question) => question.status === 'context-only')
  const unresolvedItems = QUESTIONS.filter(
    (question) => typeof question.answer === 'string' && question.answer.startsWith('Unresolved'),
  )
  const contextByExam = EXAM_ORDER.map((exam) => ({
    exam,
    count: contextItems.filter((question) => question.exam === exam).length,
  })).filter((entry) => entry.count > 0)
  const totalItems = EXAM_ORDER.reduce((sum, exam) => sum + BANK_STATS.byExam[exam], 0)
  const groundedItems = totalItems - contextItems.length

  return (
    <article className="audit-page">
      <PageHeader
        eyebrow="Evidence, labels and limitations"
        title="Source audit & coverage"
        intro="This page records exactly what the platform was built from, what was preserved, what is uncertain, and what is missing. It is deliberately conservative: when the supplied materials do not support a claim, the item is flagged rather than filled with an invented answer."
        ar="الصفحة دي بتوضح المصادر بالضبط: المحاضرات والأوراق القديمة. فيه حاجات مش موجودة في الماتريال، زي بعض الحالات الخارجية والإجابة الرسمية. عشان كده بنعلّمها بدل ما نخترع إجابة."
        meta={
          <>
            <Pill icon="FileSearch">3 lecture transcripts</Pill>
            <Pill icon="ClipboardCheck" tone="teal">10 papers</Pill>
            <Pill icon="AlertTriangle" tone="amber">Limitations documented</Pill>
          </>
        }
      />

      <section className="audit-ledger">
        <div><strong>{COURSE_STATS.slides}</strong><span>lecture slides audited</span><small>from 9 lectures</small></div>
        <div><strong>{totalItems}</strong><span>exam items retained</span><small>across 10 papers</small></div>
        <div><strong>{groundedItems}</strong><span>source-grounded items</span><small>answers reasoned from lectures</small></div>
        <div><strong>{contextItems.length}</strong><span>external-case items</span><small>flagged for source review</small></div>
        <div><strong>{unresolvedItems.length}</strong><span>awaiting verification</span><small>not auto-graded</small></div>
        <div><strong>0</strong><span>official answer keys</span><small>none supplied</small></div>
      </section>

      <section className="content-section">
        <div className="subheading">
          <span>01 · Lecture evidence</span>
          <h2>All 189 slides are represented</h2>
        </div>
        <p className="lead">
          The course content was built from three supplied transcription files. Every lecture has a mapped section,
          and the section footers name the slide ranges used. The platform also adds teaching explanations, examples
          and diagrams where the slides are terse; those additions are pedagogy, not new exam evidence.
        </p>

        <CompareTable
          caption="Lecture transcript inventory"
          headers={['File', 'Lectures', 'Slides', 'Breakdown', 'Main content']}
          rows={lectureFiles.map((item) => [
            <code key={item.file}>{item.file}</code>,
            item.lectures,
            item.slides,
            item.breakdown,
            item.contents,
          ])}
        />
        <div className="audit-total-row">
          <span>Total</span>
          <strong>{COURSE_STATS.slides} slides</strong>
          <span>73 + 58 + 58</span>
          <Tag tone="green">complete</Tag>
        </div>

        <CompareTable
          caption="Course section → source coverage"
          compact
          headers={['Section', 'Title', 'Lecture sources', 'Exam weight']}
          rows={SECTIONS.map((section) => [
            section.number,
            section.shortTitle,
            section.lectureSources.join(' · '),
            section.examWeight,
          ])}
        />
      </section>

      <section className="content-section content-section--shaded">
        <div className="subheading">
          <span>02 · Exam evidence</span>
          <h2>Ten papers, one bank, no invented questions</h2>
        </div>
        <p>
          Each item preserves the paper, date, part, number, wording, choices and available marks. The answer field is a
          model answer written for learning; it is never presented as an official marking key. Where an item depends on
          a case that is not in the lecture files, the item remains in the bank but is labelled externally sourced.
        </p>

        <CompareTable
          caption="Historical paper inventory"
          headers={['Paper', 'Date', 'Code', 'Duration', 'Marks', 'Items', 'Source note']}
          rows={EXAM_ORDER.map((exam) => {
            const info = EXAM_INFO[exam]
            return [
              <strong key={exam}>{exam}</strong>,
              info.date,
              info.code,
              info.duration,
              info.marks,
              BANK_STATS.byExam[exam],
              info.note,
            ]
          })}
        />

        <div className="audit-total-row">
          <span>Total retained</span>
          <strong>{totalItems} items</strong>
          <span>{BANK_STATS.autoGraded} auto-gradable · {totalItems - BANK_STATS.autoGraded} written / diagram / modelling</span>
          <Tag tone="cyan">wording preserved</Tag>
        </div>

        <Callout tone="warning" title="What “no official key” means">
          The reasoning behind each answer is visible: explanation, model-answer structure and the relevant lecture
          concept. But the lecturer’s own marking scheme was not supplied. If your instructor’s notes contradict a
          model answer, follow the instructor and treat the platform answer as a study aid.
        </Callout>
      </section>

      <section className="content-section">
        <div className="subheading">
          <span>03 · The course-code discrepancy</span>
          <h2>DS312 in the lectures, DS331 on the papers</h2>
        </div>
        <div className="code-comparison">
          <div className="code-card">
            <span>Lecture transcripts</span>
            <strong>DS312</strong>
            <p>Computer-based Decision Support Systems and Future Studies</p>
          </div>
          <div className="code-card code-card--divider">
            <Icon name="ArrowRight" size={22} />
            <span>same content?</span>
          </div>
          <div className="code-card code-card--warm">
            <span>Exam papers</span>
            <strong>DS331</strong>
            <p>Decision Support Systems — the code printed on every supplied paper</p>
          </div>
        </div>
        <p>
          Every lecture transcription is headed <strong>DS312</strong>. Every exam paper is headed{' '}
          <strong>DS331</strong>. Lecture 2 itself includes the parenthetical “(DS331,DS312)”, which is the only explicit
          link in the supplied material. The topic coverage overlaps heavily: the same DSS definitions, data/model
          architectures, GAMS, MBMS, OLAP and AHP appear on both sides.
        </p>

        <Callout tone="note" title="How this platform resolves it">
          The platform treats the lectures and papers as one course because they were supplied together for this task
          and their content aligns. That is a documented editorial assumption, not an institutional confirmation. If
          your registration or exam is strictly DS331, verify the code with your department; do not treat the DS312
          label as proof that the papers are from a different syllabus.
        </Callout>

        <div className="audit-inline-note">
          <Icon name="Info" size={17} />
          <p>
            The course content is labelled <strong>DS312</strong> because that is the lecture code. The exam studio
            preserves the paper header <strong>DS331</strong> exactly. No attempt is made to hide the mismatch.
          </p>
        </div>
      </section>

      <section className="content-section content-section--shaded">
        <div className="subheading">
          <span>04 · Known anomalies</span>
          <h2>Five issues that affect study, not the underlying concepts</h2>
        </div>
        <ol className="anomaly-list">
          <li>
            <span className="anomaly-list__n">01</span>
            <div>
              <h3>The 2018 midterm is headed “Final Exam”</h3>
              <p>
                The supplied document is indexed as <strong>Midterm 2018</strong> but its first page says “Final Exam”.
                The platform preserves the supplied label and notes the heading. It does not silently relabel the paper.
              </p>
            </div>
          </li>
          <li>
            <span className="anomaly-list__n">02</span>
            <div>
              <h3>The 2019 paper is incomplete</h3>
              <p>
                Only Part A — 18 True/False items — is present in the supplied document. The paper’s normal Part B/C
                material is missing. The audit marks it incomplete; the 18 items are still retained.
              </p>
            </div>
          </li>
          <li>
            <span className="anomaly-list__n">03</span>
            <div>
              <h3>The 2025 paper does not state its full total or duration</h3>
              <p>
                The paper states 20 points for the True/False section, but the full total and duration are absent. The
                inventory records “not stated” rather than guessing the missing numbers.
              </p>
            </div>
          </li>
          <li>
            <span className="anomaly-list__n">04</span>
            <div>
              <h3>The production-shipping formulation is internally inconsistent</h3>
              <p>
                The lecture writes the flow balance as <code>Σ(k) T(i,j,k) = Q(i,j)</code> in one place and{' '}
                <code>Σ(k) T(i,j,k) ≤ Q(i,j)</code> in Scenario I. Demand is written <code>≤ D(j,k)</code> even though
                the verbal instruction says “satisfy demand.” The platform flags the ambiguity in Sections 7 and 9. In
                an exam, state your interpretation explicitly.
              </p>
            </div>
          </li>
          <li>
            <span className="anomaly-list__n">05</span>
            <div>
              <h3>Some exam cases are not in the lecture transcripts</h3>
              <p>
                The papers mention the Cairo University senior-management DSS, DPSS, IDSC, Kuwait fisheries and VDSS
                details that are not described in the supplied lecture files. These are retained and labelled; they are
                never converted into invented lecture facts.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="content-section">
        <div className="subheading">
          <span>05 · Evidence labels</span>
          <h2>How to read an item’s status</h2>
        </div>
        <div className="label-grid">
          <div className="label-card label-card--green">
            <Tag tone="green">source-grounded</Tag>
            <h3>Lecture-supported</h3>
            <p>
              The concept is present in the supplied slides, and the model answer is reasoned from that material. This
              is the default status ({groundedItems} items).
            </p>
          </div>
          <div className="label-card label-card--amber">
            <Tag tone="amber">external case</Tag>
            <h3>Context-only</h3>
            <p>
              The wording is authentic, but the specific case is not in the supplied lecture transcripts. The answer
              follows the course framework, or is explicitly limited when the case facts are missing (
              {contextItems.length} items).
            </p>
          </div>
          <div className="label-card label-card--red">
            <Tag tone="red">awaiting verification</Tag>
            <h3>Unresolved</h3>
            <p>
              The supplied material cannot establish the factual claim. The item is not auto-graded and no True/False
              value is invented ({unresolvedItems.length} items).
            </p>
          </div>
        </div>

        <div className="subheading subheading--minor">
          <span>External-case distribution</span>
          <h3>Where the {contextItems.length} flags occur</h3>
        </div>
        <CompareTable
          caption="Context-only items by paper"
          compact
          headers={['Paper', 'Context-only items', 'Why it matters']}
          rows={contextByExam.map((entry) => [
            entry.exam,
            entry.count,
            EXAM_INFO[entry.exam].note,
          ])}
        />

        <div className="context-item-list">
          {contextItems.map((question) => (
            <details key={question.id}>
              <summary>
                <Tag tone="amber">{question.exam}</Tag>
                <span>{question.number}</span>
                <span>{question.wording}</span>
              </summary>
              <div>
                <p><strong>Recorded answer:</strong> {String(question.answer)}</p>
                <p>{question.explanation}</p>
                {question.note && <small>{question.note}</small>}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="content-section content-section--shaded">
        <div className="subheading">
          <span>06 · Unresolved items</span>
          <h2>The two claims that need the lecturer’s case material</h2>
        </div>
        {unresolvedItems.map((question) => (
          <article className="unresolved-card" key={question.id}>
            <div className="unresolved-card__head">
              <Tag tone="red">awaiting verification</Tag>
              <span>{question.exam} · {question.number}</span>
            </div>
            <p className="unresolved-card__wording">{question.wording}</p>
            <p>{question.explanation}</p>
            {question.note && <p className="unresolved-card__note"><Icon name="Info" size={14} /> {question.note}</p>}
          </article>
        ))}
        <Callout tone="warning" title="Do not guess these in the exam">
          If these appear, answer from your lecturer’s case notes. The platform cannot responsibly assign True or False
          without the underlying institutional facts. The conceptual classification logic is still explained.
        </Callout>
      </section>

      <section className="content-section">
        <div className="subheading">
          <span>07 · External cases</span>
          <h2>What is named but not documented</h2>
        </div>
        <CompareTable
          caption="External case register"
          headers={['Case', 'Where it appears', 'Audit status']}
          rows={externalCases.map((item) => [item.case, item.where, item.status])}
        />

        <div className="subheading subheading--minor">
          <span>Coverage gaps</span>
          <h3>What the supplied material does not contain</h3>
        </div>
        <ul className="gap-list">
          <li><Icon name="XCircle" size={15} /> No official answer key or marking scheme for any paper.</li>
          <li><Icon name="XCircle" size={15} /> No complete 2019 paper beyond Part A.</li>
          <li><Icon name="XCircle" size={15} /> No 2025 full total or duration.</li>
          <li><Icon name="XCircle" size={15} /> No lecture case notes for Cairo University, DPSS, IDSC or Kuwait fisheries.</li>
          <li><Icon name="XCircle" size={15} /> No VDSS user manual, screens or detailed language reference.</li>
          <li><Icon name="XCircle" size={15} /> No dedicated Arena/simulation question in the supplied papers; the lecture material is still taught.</li>
          <li><Icon name="XCircle" size={15} /> No proof that DS312 and DS331 are administratively the same course.</li>
        </ul>

        <div className="coverage-callout">
          <Icon name="BookOpen" size={22} />
          <div>
            <h3>What was added pedagogically</h3>
            <p>
              Explanations, custom SVG diagrams, comparison tables, the AHP worked example, the GAMS commentary, the
              flashcards and the drills are teaching material created for this platform. They are based on the supplied
              content but are not quotations from the slides or papers. The source wording remains distinct in every
              exam item.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section content-section--summary">
        <div className="subheading">
          <span>Audit conclusion</span>
          <h2>What you can trust, and what you should verify</h2>
        </div>
        <div className="audit-conclusion">
          <div>
            <h3><Icon name="CheckCircle2" size={18} /> Trust as course coverage</h3>
            <ul className="marker-list">
              <li>The 189 transcribed lecture slides and their conceptual structure.</li>
              <li>The authenticity of the 200 exam wordings, as supplied.</li>
              <li>Worked explanations that are explicitly tied to lecture concepts.</li>
              <li>The documented flags: {contextItems.length} external-case items, of which {unresolvedItems.length} are unresolved claims.</li>
            </ul>
          </div>
          <div>
            <h3><Icon name="AlertTriangle" size={18} /> Verify before relying on it</h3>
            <ul className="marker-list">
              <li>Any model answer that your instructor marks differently.</li>
              <li>The DS312 / DS331 course-code relationship.</li>
              <li>The missing 2019 Part B and 2025 total/duration.</li>
              <li>The production-shipping equality / inequality interpretation.</li>
              <li>The two unresolved 2017 external-case claims.</li>
            </ul>
          </div>
        </div>
        <KeyIdea title="The audit rule">
          Preserve the source. Label uncertainty. Never manufacture an exam question, an official answer, a solver output
          or a completion statistic. If the material is missing, say so.
        </KeyIdea>
      </section>

      <div className="audit-signoff">
        <span>DS312 learning platform · source audit v1</span>
        <span>3 lecture files · 10 papers · 200 items</span>
        <span>No external verification claimed</span>
      </div>
    </article>
  )
}
