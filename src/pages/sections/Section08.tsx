import type { PageId } from '../../types'
import {
  BilingualBlock,
  Callout,
  CodeBlock,
  CompareTable,
  ConceptCard,
  ConceptGrid,
  Equation,
  ExamFocus,
  KeyIdea,
  PageHeader,
  PictureIt,
  Pill,
  SectionIntro,
} from '../../components/ui'
import { SectionFooter } from '../../components/SectionFooter'
import { GamsWorkflowDiagram } from '../../components/diagrams/ArchitectureDiagrams'
import { SectionExamPractice } from '../../components/SectionExamPractice'

const transportModel = `$Title  Transportation model — data/model separated

* ---------------------------------------------------------------
* 1. SETS: indices and members
* ---------------------------------------------------------------
Sets
    i  canning plants / cairo, alexand /
    j  markets        / port-said, mansora, monofia / ;

* ---------------------------------------------------------------
* 2. DATA: parameters, table, scalar
* ---------------------------------------------------------------
Parameters
    a(i)  capacity of plant i in cases
          / cairo 350, alexand 600 /
    b(j)  demand at market j in cases
          / port-said 325, mansora 300, monofia 275 / ;

Table d(i,j)  distance in thousands of miles
               port-said  mansora  monofia
    cairo          2.5       1.7      1.8
    alexand        2.5       1.8      1.4 ;

Scalar f  freight in LE per case per thousand miles /90/ ;

Parameter c(i,j)  transport cost in thousands of LE per case ;
c(i,j) = f * d(i,j) / 1000 ;

* ---------------------------------------------------------------
* 3. VARIABLES: decisions and objective
* ---------------------------------------------------------------
Variables
    x(i,j)  shipment quantities in cases
    z       total transportation cost in thousands of LE ;

Positive Variable x ;

* ---------------------------------------------------------------
* 4. EQUATIONS: objective and constraints
* ---------------------------------------------------------------
Equations
    cost       define objective function
    supply(i)  observe supply limit at plant i
    demand(j)  satisfy demand at market j ;

cost..       z =e= sum((i,j), c(i,j) * x(i,j)) ;
supply(i)..  sum(j, x(i,j)) =l= a(i) ;
demand(j)..  sum(i, x(i,j)) =g= b(j) ;

* ---------------------------------------------------------------
* 5. MODEL AND SOLVE
* ---------------------------------------------------------------
Model transport / all / ;
Solve transport using lp minimizing z ;

* ---------------------------------------------------------------
* 6. RESULTS AND VERIFICATION
* ---------------------------------------------------------------
Display a, b, d, c, x.l, z.l ;`

const badCode = `* Anti-pattern: Hard-coded data mixed into algebra (DO NOT WRITE IN EXAMS)
Variables x, z ;
Positive Variable x ;
Equations cost, supply, demand ;

cost..   z =e= 0.225*x('cairo','port-said') + 0.153*x('cairo','mansora') + 0.162*x('cairo','monofia')
             + 0.225*x('alexand','port-said') + 0.162*x('alexand','mansora') + 0.126*x('alexand','monofia') ;

supply('cairo')..   x('cairo','port-said') + x('cairo','mansora') + x('cairo','monofia') =l= 350 ;
supply('alexand').. x('alexand','port-said') + x('alexand','mansora') + x('alexand','monofia') =l= 600 ;
* Fails modularity and data-model separation!`

export function Section08({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  return (
    <article className="learning-page">
      <PageHeader
        number="08"
        eyebrow="Declare the model, not the algorithm"
        title="Model-Building Languages & GAMS"
        intro="A modelling language changes the unit of thought: from loops and data structures to sets, parameters, equations and a solve statement. This section covers the language taxonomy, efficiency and effectiveness, and a complete transportation model in GAMS."
        ar="لغات بناء النماذج بتغير طريقة تفكيرك: بدل ما تكتب Loops وبرمجة معقدة عشان تحل مسألة، بتكتب 'المعادلات والمجموعات' بس، والكمبيوتر بيشغل Solver يحلها! هنا هندرس نظرية لغات النمذجة، معايير الكفاءة والفاعلية، وهيكل كود GAMS المعتمد في الامتحانات."
        meta={
          <>
            <Pill icon="BookOpen">Lectures 3, 4 & 6</Pill>
            <Pill icon="Code2" tone="teal">Complete GAMS Syntax & Code</Pill>
            <Pill icon="Clock3" tone="amber">50 min</Pill>
          </>
        }
      />

      <SectionIntro
        objectives={[
          'Classify model-building languages: Algebraic/Declarative (GAMS, AMPL) vs Simulation/Integrated (Arena, VDSS).',
          'Master the Efficiency vs Effectiveness criteria and recognise recurring T/F exam traps.',
          'Map GAMS reserved words (SETS, PARAMETERS, VARIABLES, EQUATIONS, MODEL, SOLVE) to optimization models.',
          'Implement the transportation model satisfying Model–Data separation, compactness, and modularity.',
          'Explain Model–Data independence and Model–Solver independence compared to procedural languages (C++).',
          'Practice all 38 authentic historical exam questions on GAMS and modeling languages with instant feedback.',
        ]}
        minutes={50}
        sources={['Lecture 3 · slides 1–35', 'Lecture 4 · slides 1–5', 'Lecture 6 · slide 5']}
        examWeight="Critical · 38 authentic exam questions, GAMS code rewrites, and reserved keyword diagrams"
      />

      {/* 8.1 The Language Landscape */}
      <section className="content-section">
        <div className="subheading">
          <span>8.1 · Language taxonomy</span>
          <h2>Declarative Algebra vs Integrated Modeling Environments</h2>
        </div>

        <BilingualBlock
          en={
            <p className="lead">
              The lecturer divides computer model-building languages into two broad families:
              (1) <strong>General Algebraic Modeling Languages</strong> (declarative, compact mathematical syntax with separate external solvers, e.g. GAMS, AMPL), and
              (2) <strong>Non-Algebraic / Integrated Environments</strong> (GUI-driven simulation and DSS generators, e.g. Arena, SIMSCRIPT, VDSS).
            </p>
          }
          ar={
            <p>
              المحاضرة بتقسم لغات بناء النماذج لعيلتين كبار:
              1) <strong>لغات جبرية تصريحية (Declarative / Algebraic):</strong> زي GAMS وAMPL، بتكتب فيها معادلات رياضية ومجموعات، والسولفر مفصول عنها تماماً.
              2) <strong>بيئات نمذجة متكاملة ومحاكاة:</strong> زي Arena وVDSS، بتعتمد على واجهات رسومية (GUI) وتدفق عمليات وسيناريوهات محاكاة.
            </p>
          }
        />

        <div className="language-split">
          <div className="language-branch language-branch--algebraic">
            <span className="micro-label">Declarative / Algebraic</span>
            <h3>Mathematical Programming Specification</h3>
            <p>Compact algebraic formulation of linear, non-linear, integer, and mixed-integer optimization models. Model-solver independence.</p>
            <div className="language-examples">
              <span>GAMS</span><span>AMPL</span><span>AIMMS</span><span>LINGO</span>
            </div>
          </div>
          <div className="language-branch language-branch--integrated">
            <span className="micro-label">Non-Algebraic / Integrated</span>
            <h3>Simulation & DSS Generators</h3>
            <p>Visual process flowcharts, discrete-event simulation, animation, interactive what-if dashboards, and direct executive decision interfaces.</p>
            <div className="language-examples">
              <span>Arena</span><span>SIMSCRIPT</span><span>SLAM</span><span>VDSS</span><span>Analytica</span>
            </div>
          </div>
        </div>

        <PictureIt
          title="💡 PICTURE IT · تخيلها كده: طلب وجبة في مطعم فاخر"
          ar="الـ Declarative Language (زي GAMS): زي ما تدخل مطعم وتقول للجرسون 'عايز ستيك مشوي ومكرونة بالبشاميل' (أنت بتحدد WHAT you want). الجرسون بياخد الطلب ويديه للشيف في المطبخ (الـ Solver) وهو اللي يطبخ وينفذ.
أما الـ Procedural Language (زي C++): زي ما تدخل المطبخ بنفسك وتقطع اللحمة وتولع البوتاجاز وتقلب المعلقة خطوة بخطوة (HOW to compute)!"
        >
          <p>
            <strong>Declarative (GAMS):</strong> You tell the system <em>WHAT</em> equations and bounds must be satisfied, and an external solver decides <em>HOW</em> to optimize it.
            <br />
            <strong>Procedural (C++):</strong> You must write every step, nested loops, data memory allocations, and the simplex pivoting algorithm yourself.
          </p>
        </PictureIt>
      </section>

      {/* 8.2 Evaluation Criteria: Efficiency vs Effectiveness */}
      <section className="content-section">
        <div className="subheading">
          <span>8.2 · Evaluation criteria</span>
          <h2>Efficiency vs Effectiveness of Modeling Languages</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              In Final 2018 (Question E.1), students were instructed to: <em>“List the elements corresponding to the efficiency and effectiveness criteria of a model building language.”</em>
              The distinction is heavily tested in True/False items across almost every past exam.
            </p>
          }
          ar={
            <p>
              سؤال فاينال 2018 (سؤال E.1): اذكر عناصر معايير الكفاءة (Efficiency) ومعايير الفاعلية (Effectiveness) في لغة بناء النماذج!
              المقارنة دي بيجي عليها أسئلة صح وغلط بتلخبط كل سنة:
            </p>
          }
        />

        <div className="criteria-compare">
          <div className="criteria-card criteria-card--efficiency">
            <span className="micro-label">EFFICIENCY CRITERIA (الكفاءة)</span>
            <h3>Modeler Productivity & Technical Coverage</h3>
            <ul className="marker-list">
              <li><strong>Broad problem coverage:</strong> Handles LP, MIP, NLP, CNS, MCP, QCP classes.</li>
              <li><strong>Compact formulation:</strong> One algebraic equation expands over thousands of set indices.</li>
              <li><strong>Reduced development time:</strong> Speeds up model construction and debugging cycles.</li>
              <li><strong>Comprehensive set of solvers:</strong> Seamless integration with CPLEX, CONOPT, MINOS, etc.</li>
              <li><strong>Model-data independence:</strong> Code remains reusable when input datasets change.</li>
              <li><strong>Error detection:</strong> Automated formulation diagnostics and syntax checking.</li>
            </ul>
            <p className="criteria-card__note">The model builder's internal view: can we formulate and solve large models fast?</p>
          </div>
          <div className="criteria-card criteria-card--effectiveness">
            <span className="micro-label">EFFECTIVENESS CRITERIA (الفاعلية)</span>
            <h3>Decision-Maker Communication & Experimentation</h3>
            <ul className="marker-list">
              <li><strong>Friendly interface:</strong> Visual communication accessible to non-technical managers.</li>
              <li><strong>Experimentation support:</strong> Rapid what-if, goal-seeking, and scenario simulation.</li>
              <li><strong>Explanation capability:</strong> Clarifies model structure, variables, and reasoning.</li>
              <li><strong>Interpretation of results:</strong> Generates executive summaries, shadow prices, and reports.</li>
              <li><strong>Graphical visualization:</strong> Charts, maps, and animation of solution dynamics.</li>
            </ul>
            <p className="criteria-card__note">The decision maker's external view: does the model inform judgment and action?</p>
          </div>
        </div>

        <ExamFocus
          titleEn="Efficiency vs Effectiveness T/F Swap Trap"
          title="💡 المهم فالامتحان · فخ التبديل بين الكفاءة والفاعلية!"
          ar="في امتحانات 2016, 2018, 2019, 2020, 2023, 2025:
الدكتور بيحب يبدل الكلمتين:
1) 'The comprehensive set of solvers linked to GAMS enhance its effectiveness' — الجملة دي FALSE فوراً! لأن وجود الـ Solvers ده معيار كفاءة (Efficiency) يخص الموديلر، مش فاعلية!
2) 'The explanation capability describes variables and enhances effectiveness' — الجملة دي TRUE! لأن التفسير والتواصل مع متخذ القرار ده جوهر الفاعلية (Effectiveness)!
3) 'Declarative modeling languages concentrate only on the solution strategy' — الجملة دي FALSE كبرى! لأن لغات النمذجة بتركز على الصياغة الرياضية (Mathematical specification)، مش خوارزمية الحل (Solution strategy)!"
        >
          <p>
            <strong>Top 3 Exam Reversals:</strong>
            <br />
            1. <strong>FALSE:</strong> “A comprehensive set of solvers enhances language effectiveness.” → It enhances <strong>EFFICIENCY</strong>.
            <br />
            2. <strong>TRUE:</strong> “Explanation and communication capabilities assess <strong>EFFECTIVENESS</strong>.”
            <br />
            3. <strong>FALSE:</strong> “Declarative languages focus solely on the solution strategy.” → They focus on the <strong>MATHEMATICAL SPECIFICATION</strong>; solvers handle the solution strategy.
          </p>
        </ExamFocus>
      </section>

      {/* 8.3 GAMS Architecture & Reserved Keywords */}
      <section className="content-section">
        <div className="subheading">
          <span>8.3 · Structure and keywords</span>
          <h2>GAMS Reserved Keywords & Model Component Mapping</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              In Final 2023 (Question 4) and Final 2025 (Question 4), students were asked to: <em>“Draw a block diagram to illustrate the connections between GAMS reserved keywords and the corresponding components of an optimization model.”</em>
            </p>
          }
          ar={
            <p>
              في فاينال 2023 وفاينال 2025 جه سؤال صريح: ارسم block diagram يوضح الربط بين الكلمات المحجوزة في GAMS ومكونات نموذج التحسين المقابلة لها!
            </p>
          }
        />

        <GamsWorkflowDiagram />

        <CompareTable
          caption="GAMS Reserved Words to Optimization Model Components"
          headers={['Mathematical Model Component', 'GAMS Reserved Keyword', 'Syntax Example in Transportation Model', 'Role in Formulation']}
          rows={[
            ['Index Sets (Indices)', 'SETS', 'Sets i plants /cairo, alex/ ;', 'Defines the dimension coordinates (plants i, markets j).'],
            ['Known Input Parameters', 'PARAMETERS, TABLE, SCALAR', 'Parameters a(i) /cairo 350/ ;', 'Stores known supply capacities, demands, and unit costs.'],
            ['Decision Variables', 'VARIABLES, POSITIVE VARIABLE', 'Positive Variable x(i,j) ;', 'Unknown values determined by solver (quantities shipped).'],
            ['Objective & Constraints Declaration', 'EQUATIONS', 'Equations cost, supply(i), demand(j) ;', 'Declares the symbolic equation names before definition.'],
            ['Algebraic Equation Definitions', '.. with =e=, =l=, =g=', 'supply(i).. sum(j, x(i,j)) =l= a(i) ;', 'States the exact mathematical equalities and inequalities.'],
            ['Model Assembly', 'MODEL', 'Model transport / all / ;', 'Binds all or selected equations into an executable model unit.'],
            ['Solver Invocation', 'SOLVE ... USING ...', 'Solve transport using lp minimizing z ;', 'Calls external solver (e.g. CPLEX for linear programming).'],
            ['Result Reporting', 'DISPLAY', 'Display x.l, z.l ;', 'Outputs the optimal decision levels (.l) to the listing file.'],
          ]}
        />
      </section>

      {/* 8.4 The Transportation Model in GAMS: Full Code & Rules */}
      <section className="content-section content-section--shaded">
        <div className="subheading">
          <span>8.4 · Modular implementation</span>
          <h2>The Complete Transportation Model in GAMS</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              In Midterm 2015, Final 2016 (B.1), and Final 2018 (C.2), the exam presented a messy, hard-coded formulation and instructed:
              <em>“Re-write the linear transport GAMS model to ensure data/model separation on the one hand and model/solver separation on the other hand. Use modularity and compact representation.”</em>
            </p>
          }
          ar={
            <p>
              في امتحانات 2015 و2016 و2018 جه سؤال كود GAMS الشهير: أعد كتابة كود موديل النقل بحيث تحقق فصل البيانات عن النموذج (Model-Data separation) وفصل النموذج عن السولفر، واستخدم الصياغة المدمجة والموديلية (Modularity):
            </p>
          }
        />

        <CodeBlock code={transportModel} language="gams" title="transport_clean.gms" numbered />

        <div className="code-criteria">
          <div>
            <span className="micro-label">1. Model–Data Separation</span>
            <p>All numerical values reside exclusively in Sets, Parameters, Tables, and Scalars. Equations contain ZERO hard-coded numbers.</p>
          </div>
          <div>
            <span className="micro-label">2. Compact Representation</span>
            <p>Indexed equations use <code>sum(j, x(i,j)) =l= a(i)</code>. A single line defines supply limits across all factories automatically.</p>
          </div>
          <div>
            <span className="micro-label">3. Model–Solver Independence</span>
            <p>The algebra is purely mathematical. Changing the algorithm requires only editing <code>using lp</code> to another solver engine.</p>
          </div>
        </div>

        <div className="subheading subheading--minor">
          <span>Avoid Hard-Coding in Exams</span>
          <h3>The Anti-Pattern: Hard-Coded Numbers in Algebra</h3>
        </div>
        <CodeBlock code={badCode} language="gams" title="bad_hardcoded.gms (ZERO MARKS)" />

        <ExamFocus
          titleEn="Checklist for Full Marks on GAMS Coding Questions"
          title="💡 المهم فالامتحان · خطوات كتابة كود GAMS المقالي"
          ar="عشان تاخد الدرجة النهائية في سؤال كتابة كود GAMS:
1. ابدأ بـ Sets للـ indices (i للـ plants و j للـ markets).
2. حط البيانات في Parameters أو Table أو Scalar؛ أوعى تكتب رقم جوه المعادلات!
3. عرف Variables وحدد إن x هي Positive Variable عشان تمنع القيم السالبة.
4. أعلن عن أسماء الـ Equations بكلمة Equations، وبعدين عرف كل واحدة بنقطتين (..).
5. استخدم =e= للمساواة، و =l= لأصغر من أو يساوي، و =g= لأكبر من أو يساوي!
6. انهي الكود بـ Model ثم Solve ثم Display!"
        >
          <p>
            <strong>Scoring Rubric for GAMS Questions:</strong>
            <br />
            ✓ Declare <code>Sets</code> first with meaningful index identifiers.
            <br />
            ✓ Place all coefficients in <code>Parameters</code>, <code>Table</code>, or <code>Scalar</code>.
            <br />
            ✓ Declare decision variables as <code>Positive Variable</code> to enforce non-negativity.
            <br />
            ✓ Use GAMS relational operators: <code>=e=</code> (equality), <code>=l=</code> (less-or-equal), <code>=g=</code> (greater-or-equal).
            <br />
            ✓ End with <code>Model name / all / ;</code> and <code>Solve name using lp minimizing z ;</code>.
          </p>
        </ExamFocus>
      </section>

      {/* 8.5 GAMS vs Procedural Languages */}
      <section className="content-section">
        <div className="subheading">
          <span>8.5 · Paradigm contrast</span>
          <h2>GAMS vs General-Purpose Procedural Languages (C++ / Java)</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              In Midterm 2015 (Question B.2), students were asked: <em>“Explain briefly the basic differences between a model building language (such as GAMS) and a standard programming language (such as C++).”</em>
            </p>
          }
          ar={
            <p>
              سؤال ميدتيرم 2015: ما الفرق الجوهري بين لغات بناء النماذج (زي GAMS) ولغات البرمجة الإجرائية التقليدية (زي C++)؟
            </p>
          }
        />

        <CompareTable
          caption="GAMS vs C++ / Procedural Languages"
          headers={['Evaluation Dimension', 'GAMS (Declarative Modeling Language)', 'C++ / Java (Procedural / Imperative Language)']}
          rows={[
            ['Programming Paradigm', 'Declarative: specifies WHAT mathematical relations must hold', 'Imperative/procedural: specifies HOW the computer must execute step-by-step algorithms'],
            ['Mathematical Representation', 'Native algebraic equations with automatic set index expansion', 'Manual nested loops, matrices, arrays, and explicit index counter variables'],
            ['Algorithm & Solver Link', 'Model–solver independent: external solvers (CPLEX, MINOS) called by name', 'Programmer must manually implement simplex routines or import complex solver SDK libraries'],
            ['Model–Data Separation', 'Built-in independence: altering datasets does not touch the algebra', 'Data reading and matrix manipulation are entangled with core control logic'],
            ['Code Compactness', 'Highly compact: 10 lines of code express problems with 100,000 constraints', 'Extensive boilerplate code: grows rapidly as model size and dimensions increase'],
            ['Primary Objective', 'Fast model construction, sensitivity analysis, and decision experimentation', 'General-purpose software engineering and system programming'],
          ]}
        />
      </section>

      {/* Summary Takeaways */}
      <section className="content-section content-section--summary">
        <div className="subheading">
          <span>Summary Takeaways</span>
          <h2>Key Takeaways for Review</h2>
        </div>
        <div className="takeaway-grid">
          <div>
            <span>01</span>
            <p><strong>Declarative Philosophy:</strong> Focus on WHAT the model is (equations and sets); external solvers handle HOW to solve it.</p>
          </div>
          <div>
            <span>02</span>
            <p><strong>Efficiency vs Effectiveness:</strong> Efficiency = solver coverage, compactness, modeler speed; Effectiveness = what-if, explanation, decision-maker communication.</p>
          </div>
          <div>
            <span>03</span>
            <p><strong>GAMS Operators:</strong> <code>=e=</code> is equality; <code>=l=</code> is ≤; <code>=g=</code> is ≥. Always enforce non-negativity with <code>Positive Variable</code>.</p>
          </div>
          <div>
            <span>04</span>
            <p><strong>Compact Representation:</strong> Achieved through indexed sets (i, j) expanding automatically over summation loops.</p>
          </div>
          <div>
            <span>05</span>
            <p><strong>Model Independence:</strong> GAMS separates the model from the data (reusable across instances) and from the solver algorithm.</p>
          </div>
        </div>
      </section>

      {/* Dedicated Past Exam Practice (38 Authentic Questions) */}
      <SectionExamPractice
        sectionId="gams"
        title="Official Exam Studio · GAMS & Modeling Languages Practice"
        titleAr="أسئلة وتدريبات الامتحانات السابقة على لغة GAMS ونظرية النمذجة"
      />

      <SectionFooter id="gams" onNavigate={onNavigate} />
    </article>
  )
}
