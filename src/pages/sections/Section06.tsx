import type { PageId } from '../../types'
import {
  BilingualBlock,
  Callout,
  CompareTable,
  ConceptCard,
  ConceptGrid,
  ExamFocus,
  KeyIdea,
  PageHeader,
  PictureIt,
  Pill,
  SectionIntro,
} from '../../components/ui'
import { SectionFooter } from '../../components/SectionFooter'
import {
  MbmsFunctionsDiagram,
  ModelCenteredArchitecture,
} from '../../components/diagrams/ArchitectureDiagrams'
import { SectionExamPractice } from '../../components/SectionExamPractice'

export function Section06({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  return (
    <article className="learning-page">
      <PageHeader
        number="06"
        eyebrow="A laboratory for alternatives"
        title="Model-Centered DSS"
        intro="A model-centered DSS is not one model. It is a managed model base, a model-base management system, a modelling language, solvers and an experimental interface that let a decision maker compare futures before committing to one."
        ar="الـ Model-Centered DSS مش مجرد موديل رياضي مكتوب في ملف. هو بيئة معملية كاملة: قاعدة نماذج (Model Base)، نظام إدارة النماذج (MBMS)، لغة نمذجة (زي GAMS)، ومحركات حلول (Solvers)، وواجهة تجريب بتسمح للمدير يقارن بين سيناريوهات وبدائل المستقبل قبل ما يتورط في قرار نهائي."
        meta={
          <>
            <Pill icon="BookOpen">Lectures 2, 5, 7 & 8</Pill>
            <Pill icon="SlidersHorizontal" tone="teal">Architecture + MBMS Functions</Pill>
            <Pill icon="Clock3" tone="amber">32 min</Pill>
          </>
        }
      />

      <SectionIntro
        objectives={[
          'Distinguish a single standalone model from a comprehensive Model-Based DSS.',
          'Draw the complete architectural block diagram of a Model-Centered DSS.',
          'Memorise the two-tier MBMS functions list (Model Creation vs Model Manipulation) required in exams.',
          'Classify models for an industrial enterprise across production, logistics, finance, and marketing.',
          'Master the 6 types of modeling experiments: Policy, External, Technological, Sensitivity, Goal Seeking, and Scenario.',
          'Explain how decision-maker risk attitude (neutral, averse, seeking) alters model equations and recommendations.',
          'Practice all 20 authentic historical exam questions on model-centered DSS with instant feedback.',
        ]}
        minutes={32}
        sources={['Lecture 5 · slides 9–12', 'Lecture 2 · slides 21–27', 'Lecture 7 · slides 10–12']}
        examWeight="Very high · MBMS software functions and block diagrams repeat across 2016–2025 papers"
      />

      {/* 6.1 Model vs Model-Based DSS */}
      <section className="content-section">
        <div className="subheading">
          <span>6.1 · Foundational distinction</span>
          <h2>A Standalone Model vs A Model-Based DSS</h2>
        </div>

        <BilingualBlock
          en={
            <p className="lead">
              A <strong>Specific Model</strong> solves a single mathematical instance (e.g. minimizing shipping cost between 3 factories and 4 markets for one month). A <strong>Model-Centered DSS</strong> is the enduring, reusable decision laboratory built around that model: it stores dozens of models, extracts current data, executes solvers, runs what-if comparisons, and explains trade-offs to executives.
            </p>
          }
          ar={
            <p>
              فيه فرق جوهري بين 'موديل رياضي' وبين 'نظام دعم قرار معتمد على النماذج': الموديل هو مجرد معادلات لحل مسألة واحدة محددة. أما الـ Model-Centered DSS فهو البيئة المتكاملة اللي بتدير عشرات الموديلات، وتربطها بقواعد البيانات، وتشغلها بسولفرز مختلفة، وتعمل تحليلات حساسية (Sensitivity) وتلخص النتائج للإدارة.
            </p>
          }
        />

        <ConceptGrid cols={2}>
          <ConceptCard
            badge="STANDALONE OBJECT"
            badgeTone="amber"
            title="Specific Model"
            titleAr="الموديل المحدد (كائن رياضي فردي)"
            description="A mathematical formulation addressing a single problem instance (e.g. a transportation LP with fixed plants, fixed demands, and fixed costs)."
            ar="معادلة رياضية واحدة مكتوبة لحل مسألة معينة بأرقام محددة في وقت معين."
            tags={['single instance', 'fixed parameters', 'mathematical object']}
          />
          <ConceptCard
            badge="REUSABLE PLATFORM"
            badgeTone="teal"
            title="Model-Based DSS"
            titleAr="نظام دعم القرار المعتمد على النماذج"
            description="The complete institutional environment: Model Base + MBMS + Modeling Language + Solvers + Data integration + Experimentation interface + Explanation."
            ar="البيئة المؤسسية القابلة لإعادة الاستخدام: قاعدة نماذج + نظام MBMS + لغة برمجة + سولفرز + ربط مع الداتا + واجهة تجريب."
            tags={['Model Base', 'MBMS', 'reusable', 'lifecycle management']}
          />
        </ConceptGrid>

        <ExamFocus
          titleEn="Model-Centered DSS Relies on Model Base & MBMS"
          title="💡 المهم فالامتحان · فخ تعريف الـ Model-Centered DSS!"
          ar="في امتحان 2018 Final (سؤال MCQ رقم A.2): بيسأل: 'The general purpose model centered DSS relies mainly on:'
الاختيارات: a) Simulation models, b) Model base and model-base management, c) Linear programming.
الإجابة الصحيحة هي: Model base and model-base management (MBMS)! لأن الـ DSS مش مجرد خوارزمية واحدة، ده نظام إدارة كامل للنماذج!"
        >
          <p>
            <strong>Core Exam Fact:</strong> A General-Purpose Model-Centered DSS relies mainly on the <strong>Model Base and Model-Base Management System (MBMS)</strong>,
            not merely on a single linear programme or simulation solver.
          </p>
        </ExamFocus>
      </section>

      {/* 6.2 The Model-Centered Architecture */}
      <section className="content-section">
        <div className="subheading">
          <span>6.2 · Architectural schematic</span>
          <h2>The Model-Centered DSS Architecture</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              In Final 2016 (E.2), Final 2017 (E.2), Final 2018 (E.2), Final 2020 (E.1), Final 2023 (Q6.1), and Final 2025 (Q6.1),
              students were asked to: <em>“Draw a simple block diagram identifying the main components of a model-centered DSS of a business enterprise.”</em>
            </p>
          }
          ar={
            <p>
              السؤال ده اتكرر في امتحانات 2016 و2017 و2018 و2020 و2023 و2025: 'ارسم رسم تخطيطي للمكونات الرئيسية لنظام دعم القرار المعتمد على النماذج (Model-Centered DSS) في مؤسسة أعمال'!
            </p>
          }
        />

        <ModelCenteredArchitecture />

        <div className="architecture-notes">
          <div>
            <span className="micro-label">1. Model Base (قاعدة النماذج)</span>
            <p>A structured library storing quantitative models: optimization (LP/MIP), simulation, statistical forecasting, inventory, financial spreadsheets, and decision trees.</p>
          </div>
          <div>
            <span className="micro-label">2. MBMS (نظام إدارة النماذج)</span>
            <p>The core software engine analogous to a DBMS: creates, retrieves, integrates, executes, updates, and catalogs models across the enterprise.</p>
          </div>
          <div>
            <span className="micro-label">3. Modeling Language (لغة النمذجة)</span>
            <p>A declarative algebraic language (e.g. GAMS, AMPL) that formulates mathematical equations compactly with indexed sets, independent of data and solvers.</p>
          </div>
          <div>
            <span className="micro-label">4. Solvers & Algorithms (محركات الحلول)</span>
            <p>Independent algorithmic engines (CPLEX, CONOPT, MINOS, Simplex, Monte Carlo engines) that compute optimal values or run simulation loops.</p>
          </div>
        </div>
      </section>

      {/* 6.3 The MBMS Functions: Creation vs Manipulation */}
      <section className="content-section content-section--shaded">
        <div className="subheading">
          <span>6.3 · Guaranteed exam question</span>
          <h2>MBMS Software Functions: Creation vs Manipulation</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              In Final 2016 (E.1), Final 2017 (E.1), Final 2020 (E.2), Final 2023 (Q2), and Final 2025 (Q2),
              the examiner asked: <em>“State the list of software functions (routines) classified as Model Creation / Updating and Model Management / Manipulation.”</em>
            </p>
          }
          ar={
            <p>
              سؤال الـ MBMS هو السؤال الأكثر تكراراً وثباتاً في امتحانات المادة! بيطلب منك تذكر وظائف برمجيات إدارة النماذج مقسمة تحت مجموعتين:
              1) وظائف إنشاء وتعديل النماذج (Model Creation & Updating)، و2) وظائف إدارة وتشغيل النماذج (Model Management & Manipulation).
            </p>
          }
        />

        <MbmsFunctionsDiagram />

        <ConceptGrid cols={2}>
          <ConceptCard
            badge="GROUP 1 · CREATION"
            badgeTone="cyan"
            title="1. Model Creation & Updating Functions"
            titleAr="وظائف إنشاء وتحديث النماذج"
            description="• Model formulation & mathematical specification
• Model generation & automated instantiation from database
• Model editing, code modification & parameter adjustment
• Model validation, verification & diagnostic checks
• Model documentation, assumptions recording & metadata tagging
• Model-base integration & schema linking"
            ar="• صياغة وتحديد المعادلات الرياضية
• توليد وتجهيز النموذج وربطه بقواعد البيانات
• تعديل وتحرير كود النموذج والباراميترات
• التحقق من صحة النموذج وخلوه من الأخطاء (Validation)
• توثيق النموذج وتسجيل الفرضيات والميتاداتا"
            tags={['Creation', 'Formulation', 'Instantiation', 'Validation', 'Documentation']}
          />
          <ConceptCard
            badge="GROUP 2 · MANIPULATION"
            badgeTone="amber"
            title="2. Model Management & Manipulation Functions"
            titleAr="وظائف إدارة ومعالجة وتشغيل النماذج"
            description="• Model storage, cataloguing, indexing & rapid retrieval
• Model selection, chaining & multi-model integration
• Solver selection & automatic algorithm invocation (LP, NLP, MIP)
• Execution control & tracking of solution runs
• Sensitivity analysis, scenario runs, what-if & goal-seeking
• Output analysis, solution interpretation & executive report generation"
            ar="• تخزين وفهرسة وتصنيف واسترجاع النماذج
• اختيار النموذج المناسب وربط كذا موديل ببعض
• اختيار السولفر وتشغيل خوارزميات الحل (Solvers)
• تشغيل تحليلات السيناريوهات وماذا-لو والـ Goal-Seeking
• تحليل النتائج وإعداد تقارير التفسير لمتخذ القرار"
            tags={['Storage', 'Retrieval', 'Solver Invocation', 'Scenarios', 'What-if']}
          />
        </ConceptGrid>

        <ExamFocus
          titleEn="Model-Base Management System Answer Template"
          title="💡 المهم فالامتحان · الإجابة النموذجية لسؤال الـ MBMS"
          ar="لما يجيلك سؤال 'List the main functions of an MBMS':
اكتب العنوانين دول بوضوح تام، وتحت كل عنوان حط 5 أو 6 نقاط بالرصاص:
1) Model Creation and Updating:
- Formulation and specification
- Generation and instantiation
- Editing and modification
- Verification and validation
- Documentation and metadata
2) Model Management and Manipulation:
- Storage, cataloging, and retrieval
- Solver linking and algorithm execution
- Model integration and chaining
- Scenario, What-If, and Goal-Seeking runs
- Output analysis and explanation"
        >
          <p>
            <strong>Examiner Advice:</strong> Always partition your MBMS response strictly into the two official categories:
            <strong> Model Creation/Updating</strong> and <strong>Model Management/Manipulation</strong>. This two-part structure is the exact grading rubric used by the department.
          </p>
        </ExamFocus>
      </section>

      {/* 6.4 Model Base of an Industrial Enterprise */}
      <section className="content-section">
        <div className="subheading">
          <span>6.4 · Enterprise catalog</span>
          <h2>The Model Base of an Industrial Corporation</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              In Lecture 8, the lecturer explains that a realistic enterprise decision support system organizes dozens of mathematical models across core functional disciplines.
            </p>
          }
          ar={
            <p>
              في شركة صناعية كبرى، قاعدة النماذج مش موديل واحد للنقل؛ دي بتتقسم حسب الإدارات الوظيفية بالشركة:
            </p>
          }
        />

        <div className="model-catalog">
          <div className="model-catalog__group">
            <h4>Production & Operations</h4>
            <ul>
              <li>Production-Mix Linear Programming</li>
              <li>Aggregate Capacity Planning</li>
              <li>Lot-Sizing & Economic Order Quantity (EOQ)</li>
              <li>Shop Floor Machine Scheduling</li>
            </ul>
          </div>
          <div className="model-catalog__group">
            <h4>Logistics & Distribution</h4>
            <ul>
              <li>Multi-Item Transportation Model</li>
              <li>Warehouse Location & Allocation</li>
              <li>Fleet Vehicle Routing Problems (VRP)</li>
              <li>Safety Stock Inventory Optimization</li>
            </ul>
          </div>
          <div className="model-catalog__group">
            <h4>Financial Management</h4>
            <ul>
              <li>Capital Budgeting & NPV Optimization</li>
              <li>Cash-Flow Forecasting Models</li>
              <li>Cost-Volume-Profit (CVP) Breakeven</li>
              <li>Portfolio Risk Optimization</li>
            </ul>
          </div>
          <div className="model-catalog__group">
            <h4>Marketing & Sales</h4>
            <ul>
              <li>Time-Series Demand Forecasting</li>
              <li>Optimal Pricing & Promotional Elasticity</li>
              <li>Advertising Budget Allocation</li>
              <li>Customer Churn Probability Scoring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6.5 Types of Modeling Experiments */}
      <section className="content-section">
        <div className="subheading">
          <span>6.5 · Experimentation lab</span>
          <h2>The Six Types of Modeling Experiments</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              In Final 2018 (Question C.3) and Final 2020 (Question C.2), the exam presented the transportation linear programming model and asked: <em>“Identify the type of modeling experiment corresponding to changes in the value of: supplies, shipping costs, and consumer demands.”</em>
            </p>
          }
          ar={
            <p>
              في امتحانات 2018 و2020 جه سؤال تطبيقي شهير على موديل النقل: حدد نوع التجربة (Modeling Experiment) لما نغير في قيم المعروض، أو تكاليف الشحن، أو طلب المستهلكين!
            </p>
          }
        />

        <CompareTable
          caption="The 6 Core Modeling Experiment Types"
          headers={['Experiment Type', 'Managerial Question', 'What Parameter Changes?', 'Example in Transportation DSS']}
          rows={[
            ['1. Policy Experiment', '“What internal rule should we enforce?”', 'A controllable managerial policy or quota constraint', 'Mandate that Plant 1 must supply at least 30% of total demand.'],
            ['2. External-Change Impact', '“How vulnerable are we to market shifts?”', 'An external environmental parameter beyond our control', 'Consumer demand increases by 25%; maritime freight rates double due to canal disruption.'],
            ['3. Technological-Change Impact', '“Is this new capital investment worthwhile?”', 'A technological production coefficient or efficiency rate', 'Upgrading automated assembly lines cuts unit production costs by 18%.'],
            ['4. Sensitivity Analysis', '“How robust is our recommended plan?”', 'Systematic incremental variation around baseline values', 'Testing optimal cost stability as shipping costs fluctuate by ±5%, ±10%, ±15%.'],
            ['5. Goal Seeking', '“What inputs are required to hit our target?”', 'The target objective is fixed; system solves for inputs', 'Find the exact shipping pattern and plant output needed to limit total logistics cost to 500,000 EGP.'],
            ['6. Scenario Simulation', '“What happens under a coherent future narrative?”', 'Simultaneous changes across multiple correlated parameters', 'Worst-Case Scenario: High oil prices + 30% surge in raw materials + port delays.'],
          ]}
        />

        <div className="subheading subheading--minor">
          <span>Decision Maker Risk Attitude</span>
          <h3>How Risk Preference Shapes the Mathematical Model</h3>
        </div>

        <BilingualBlock
          en={
            <p>
              Models are not value-free calculators. When consumer demand is stochastic and uncertain, the decision maker’s subjective risk appetite directly dictates the mathematical formulation:
            </p>
          }
          ar={
            <p>
              النماذج الرياضية مش أرقام مجردة؛ لما الطلب يكون فيه عدم يقين ومخاطرة، شخصية المدير بتحدد إحنا هنعوض بأنهي قيمة للطلب:
            </p>
          }
        />

        <CompareTable
          caption="Risk Attitude and Mathematical Demand Formulation (Scenario III)"
          headers={['Risk Attitude', 'Model Demand Specification', 'Managerial Philosophy & Trade-Off']}
          rows={[
            ['Risk Neutral (محايد للمخاطر)', 'Set demand equal to Expected Mean Value: D(j) = E[Demand]', 'Focuses on long-term average expected cost; balances upside and stockout downside.'],
            ['Risk Averse (متحفظ ويتجنب المخاطر)', 'Set demand equal to Lowest Minimum Value: D(j) = Min(Demand)', 'Protects against overproduction and unsold inventory; sacrifices potential market share.'],
            ['Risk Seeker (مغامر ويبحث عن الفرص)', 'Set demand equal to Highest Maximum Value: D(j) = Max(Demand)', 'Chases maximum market capture; accepts high risk of surplus holding costs.'],
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
            <p><strong>Model vs Model-Based DSS:</strong> A model answers one specific question; a model-based DSS manages a reusable library of models, solvers, and experiments.</p>
          </div>
          <div>
            <span>02</span>
            <p><strong>The Architecture:</strong> Model Base ↔ MBMS ↔ Modeling Language (GAMS) ↔ Solvers (CPLEX) ↔ Data Store ↔ User Interface ↔ Decision Maker.</p>
          </div>
          <div>
            <span>03</span>
            <p><strong>MBMS Two Groups:</strong> 1) Model Creation & Updating (formulation, instantiation, validation). 2) Model Management & Manipulation (storage, solvers, scenarios).</p>
          </div>
          <div>
            <span>04</span>
            <p><strong>Experiment Types:</strong> Policy (rules), External (market shifts), Technological (coefficients), Sensitivity (robustness), Goal-Seeking (inputs from target).</p>
          </div>
          <div>
            <span>05</span>
            <p><strong>Risk Attitude:</strong> Risk neutral uses expected mean; risk averse uses minimum demand; risk seeker uses maximum demand.</p>
          </div>
        </div>
      </section>

      {/* Dedicated Past Exam Practice (20 Authentic Questions) */}
      <SectionExamPractice
        sectionId="model-centered"
        title="Official Exam Studio · Model-Centered DSS Practice"
        titleAr="أسئلة وتدريبات الامتحانات السابقة على الـ MBMS ونظم النماذج"
      />

      <SectionFooter id="model-centered" onNavigate={onNavigate} />
    </article>
  )
}
