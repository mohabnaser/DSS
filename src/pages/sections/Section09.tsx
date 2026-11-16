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
import { ProductionNetworkDiagram } from '../../components/diagrams/ArchitectureDiagrams'
import { SectionExamPractice } from '../../components/SectionExamPractice'

const scenarioModel = `$Title  Production and shipping — Scenario I (deterministic LP)

Sets
    i  plants     / cairo, alexand /
    j  items      / item1, item2 /
    k  warehouses / w1, w2, w3 / ;

Parameters
    C(i,j)   production capacity
    U(j)     unit production cost
    S(i,j,k) unit shipping cost
    D(j,k)   demand ;

Variables
    Q(i,j)    production quantity of item j at plant i
    T(i,j,k)  amount of item j shipped from plant i to warehouse k
    TPC       total production cost
    TSC       total shipping cost
    TC        total combined cost ;

Positive Variables Q, T ;

Equations
    defTPC    define total production cost
    defTSC    define total shipping cost
    defTC     define objective function
    cap(i,j)  production capacity limit
    flow(i,j) shipment flow balance
    dem(j,k)  satisfy demand requirement ;

defTPC..     TPC =e= sum((i,j), U(j) * Q(i,j)) ;
defTSC..     TSC =e= sum((i,j,k), S(i,j,k) * T(i,j,k)) ;
defTC..      TC  =e= TPC + TSC ;

cap(i,j)..   Q(i,j) =l= C(i,j) ;
flow(i,j)..  sum(k, T(i,j,k)) =l= Q(i,j) ;
dem(j,k)..   sum(i, T(i,j,k)) =g= D(j,k) ;

Model prodshipping / all / ;
Solve prodshipping using lp minimizing TC ;

Display Q.l, T.l, TPC.l, TSC.l, TC.l ;`

export function Section09({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  return (
    <article className="learning-page">
      <PageHeader
        number="09"
        eyebrow="The lecturer’s domain-oriented case"
        title="Production & Shipping DSS Case Study"
        intro="This is the course’s running domain example: multiple plants, multiple items, multiple warehouses and markets. It connects structured modeling, database design, linear programming, GAMS, scenarios and risk attitude into one integrated special purpose DSS."
        ar="دراسة الحالة المركزية في المنهج: مصانع متعددة بتنتج كذا منتج، وبتشحنهم لمخازن وأسواق متعددة. هنا بنربط كل اللي اتعلمناه في المنهج: الـ Structured Modeling، تصميم قواعد البيانات، صياغة البرمجة الخطية (LP)، كود GAMS، السيناريوهات التلاتة، وأثر المخاطر على القرار."
        meta={
          <>
            <Pill icon="BookOpen">Lecture 8 · slides 2–6, 16–21</Pill>
            <Pill icon="Truck" tone="teal">Formulation & Scenarios</Pill>
            <Pill icon="Clock3" tone="amber">38 min</Pill>
          </>
        }
      />

      <SectionIntro
        objectives={[
          'Formulate the complete multi-item production-shipping linear programming model with objective, capacity, flow balance, and demand constraints.',
          'Solve and code the authentic Final 2018 washing-machine transportation problem in GAMS.',
          'Map indices, parameters, and decision variables to normalized relational database tables.',
          'Differentiate the 3 core scenarios: Scenario I (Deterministic LP), Scenario II (Goal Seeking & Simulation), Scenario III (Stochastic Demand).',
          'Explain how decision-maker risk attitudes (Neutral, Averse, Seeking) alter model demand values.',
          'Identify modeling experiment types for parameter changes in supply, shipping costs, and demand.',
          'Practice all authentic historical exam questions on production-shipping with instant feedback.',
        ]}
        minutes={38}
        sources={['Lecture 8 · slides 2–6, 16–21', 'Lecture 5 · slides 13–15']}
        examWeight="Critical · Core written formulation, GAMS implementation, and modeling experiment questions"
      />

      {/* 9.1 The Domain Network */}
      <section className="content-section">
        <div className="subheading">
          <span>9.1 · Domain overview</span>
          <h2>The Multi-Item, Multi-Plant Logistics Network</h2>
        </div>

        <BilingualBlock
          en={
            <p className="lead">
              The production-shipping problem is deliberately richer than the standard textbook transportation model.
              Multiple factories (i) produce multiple products (j) that must be transported to multiple warehouse distribution centers (k).
              The DSS must optimize two simultaneous decisions: (1) <strong>How much to produce</strong> of each item at each plant, and
              (2) <strong>How much to ship</strong> of each item along each transport route to satisfy consumer demand at minimum combined cost.
            </p>
          }
          ar={
            <p>
              مشكلة الإنتاج والشحن هنا أعمق من مسألة النقل البسيطة: عندنا كذا مصنع (i)، وكل مصنع بينتج كذا منتج (j)، وكل منتج بيتشحن لكذا مخزن وسوق (k).
              النظام لازم يقرر قرارين في نفس اللحظة: 1) ننتج كام من كل منتج في كل مصنع Q(i,j)، و2) نشحن كام من كل منتج من كل مصنع لكل مخزن T(i,j,k)، بحيث نقلل التكلفة الإجمالية ونحقق الطلب من غير ما نتخطى طاقة المصانع.
            </p>
          }
        />

        <ProductionNetworkDiagram />

        <ConceptGrid cols={3}>
          <ConceptCard
            badge="INDEX SETS"
            badgeTone="cyan"
            title="Coordinate Sets"
            titleAr="المجموعات والإحداثيات"
            description="i = Plants (Cairo, Alexandria)
j = Items / Products (Washing machines, Dryers)
k = Warehouses / Markets (Port Said, Mansoura, Monofia)"
            ar="i: المصانع المنتجة.
j: المنتجات والأصناف.
k: المخازن والأسواق المستهلكة."
            tags={['plants (i)', 'items (j)', 'warehouses (k)']}
          />
          <ConceptCard
            badge="KNOWN PARAMETERS"
            badgeTone="teal"
            title="Database Parameters"
            titleAr="المدخلات المعروفة في الداتابيز"
            description="C(i,j) = Production Capacity
U(j) = Unit Production Cost
S(i,j,k) = Unit Shipping Cost
D(j,k) = Consumer Demand"
            ar="C: الطاقة القصوى للإنتاج.
U: تكلفة إنتاج الوحدة.
S: تكلفة شحن الوحدة بين المصنع والمخزن.
D: حجم الطلب المطلوب في السوق."
            tags={['Capacity C', 'Cost U', 'Shipping S', 'Demand D']}
          />
          <ConceptCard
            badge="DECISION VARIABLES"
            badgeTone="amber"
            title="Unknown Decisions"
            titleAr="متغيرات القرار المحسوبة"
            description="Q(i,j) = Quantity to produce of item j at plant i (cases/units)
T(i,j,k) = Quantity to ship of item j from plant i to warehouse k"
            ar="Q(i,j): كمية الإنتاج المخططة.
T(i,j,k): كمية الشحن المجدولة.
دول مجاهيل السولفر هو اللي بيحسب قيمهم المثالية."
            tags={['Production Q', 'Shipment T', 'Non-negative']}
          />
        </ConceptGrid>
      </section>

      {/* 9.2 Complete Mathematical Formulation */}
      <section className="content-section">
        <div className="subheading">
          <span>9.2 · Mathematical model</span>
          <h2>The Linear Programming Optimization Model</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              In Final 2018 (Question C.1), the exam asked to: <em>“Formulate the washing-machine transportation problem as a Linear Programming model: Minimize Total Cost subject to capacity limits, shipment flow balance, and demand satisfaction.”</em>
            </p>
          }
          ar={
            <p>
              سؤال فاينال 2018 (C.1): صغ مشكلة نقل الغسالات كنموذج برمجة خطية (LP): تقليل التكلفة الإجمالية في ظل قيود الطاقة الإنتاجية وتوازن التدفق وتلبية الطلب:
            </p>
          }
        />

        <div className="equation-stack">
          <Equation label="Objective Function">{String.raw`\min \; \text{Total Cost} = \text{TPC} + \text{TSC}`}</Equation>
          <Equation label="Total Production Cost (TPC)">{String.raw`\text{TPC} = \sum_{i}\sum_{j} U_j \, Q_{ij}`}</Equation>
          <Equation label="Total Shipping Cost (TSC)">{String.raw`\text{TSC} = \sum_{i}\sum_{j}\sum_{k} S_{ijk} \, T_{ijk}`}</Equation>
          <Equation label="Capacity Constraints">{String.raw`Q_{ij} \le C_{ij} \qquad \forall i \in I, \; j \in J`}</Equation>
          <Equation label="Flow Balance Constraints">{String.raw`\sum_{k} T_{ijk} \le Q_{ij} \qquad \forall i \in I, \; j \in J`}</Equation>
          <Equation label="Demand Satisfaction Constraints">{String.raw`\sum_{i} T_{ijk} \ge D_{jk} \qquad \forall j \in J, \; k \in K`}</Equation>
          <Equation label="Non-Negativity">{String.raw`Q_{ij} \ge 0, \quad T_{ijk} \ge 0 \qquad \forall i, j, k`}</Equation>
        </div>

        <ExamFocus
          titleEn="Flow Balance & Demand Inequality Directions"
          title="💡 المهم فالامتحان · انتبه لاتجاه علامات التباين (≤ و ≥)!"
          ar="1) قيد الطاقة (Capacity): كمية الإنتاج أصغر من أو تساوي الطاقة القصوى: Q(i,j) ≤ C(i,j).
2) قيد توازن الشحن (Flow Balance): إجمالي اللي هنشحنه من المصنع للمخازن مينفعش يزيد عن اللي انتجناه: Σ_k T(i,j,k) ≤ Q(i,j).
3) قيد تلبية الطلب (Demand Satisfaction): إجمالي اللي هيوصل للمخزن k من كل المصانع لازم يغطي أو يساوي الطلب: Σ_i T(i,j,k) ≥ D(j,k)!"
        >
          <p>
            <strong>Examiner Inconsistency Note:</strong> In verbal problem descriptions, demand must be satisfied (<code>Σ_i T ≥ D</code>). In lecture slides, it was occasionally written as <code>≤ D</code> (allowing unmet demand). In exams, state: <em>“Assuming all customer demand must be fully met, the constraint is Σ_i T(i,j,k) ≥ D(j,k).”</em>
          </p>
        </ExamFocus>
      </section>

      {/* 9.3 The Three Core Scenarios */}
      <section className="content-section content-section--shaded">
        <div className="subheading">
          <span>9.3 · Scenario analysis</span>
          <h2>The Three Decision Scenarios in the Case Study</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              The power of a Decision Support System lies in moving beyond a single run. The lecturer structures the case into three progressive scenarios reflecting increasing degrees of real-world complexity and managerial uncertainty:
            </p>
          }
          ar={
            <p>
              الميزة الكبرى للـ DSS مش إنه يحل مسألة واحدة وخلاص؛ هو معمل سيناريوهات. المحاضرة بتقسم دراسة الحالة لـ 3 سيناريوهات بتعكس تدرج تعقيد الواقع:
            </p>
          }
        />

        <div className="scenario-stack">
          <div className="scenario-card scenario-card--cyan">
            <span className="scenario-card__n">SCENARIO I</span>
            <h3>Deterministic Optimization (Base Model)</h3>
            <dl>
              <div><dt>Managerial Goal</dt><dd>Determine optimal production and shipping schedule to minimize total cost.</dd></div>
              <div><dt>Data Quality</dt><dd>All data in database (C, U, S, D) are known with complete certainty.</dd></div>
              <div><dt>Analytical Tool</dt><dd>Deterministic Linear Programming (LP) formulated and solved in GAMS.</dd></div>
              <div><dt>Key Takeaway</dt><dd>Provides an optimal baseline benchmark under ideal, predictable conditions.</dd></div>
            </dl>
          </div>

          <div className="scenario-card scenario-card--amber">
            <span className="scenario-card__n">SCENARIO II</span>
            <h3>Goal Seeking & Policy Simulation</h3>
            <dl>
              <div><dt>Managerial Goal</dt><dd>Evaluate policy changes (e.g. factory quotas) or solve for required inputs to hit a target demand.</dd></div>
              <div><dt>Data Quality</dt><dd>Certain parameters are varied to test managerial hypotheses and budget boundaries.</dd></div>
              <div><dt>Analytical Tool</dt><dd>Goal-seeking on the LP model + multi-parameter scenario simulation.</dd></div>
              <div><dt>Key Takeaway</dt><dd>Transforms the model from an automated solver into an interactive executive sandbox.</dd></div>
            </dl>
          </div>

          <div className="scenario-card scenario-card--violet">
            <span className="scenario-card__n">SCENARIO III</span>
            <h3>Stochastic Programming Under Demand Uncertainty</h3>
            <dl>
              <div><dt>Managerial Goal</dt><dd>Minimize expected cost and buffer against stockouts when consumer demand is stochastic.</dd></div>
              <div><dt>Data Quality</dt><dd>Demand D is not fixed; follows a probability distribution F(D) from market surveys.</dd></div>
              <div><dt>Analytical Tool</dt><dd>Stochastic Linear Programming (SLP) with scenario tree analysis.</dd></div>
              <div><dt>Key Takeaway</dt><dd>The decision maker's risk attitude directly decides which demand value is modeled.</dd></div>
            </dl>
          </div>
        </div>

        <div className="subheading subheading--minor">
          <span>Risk Attitude in Scenario III</span>
          <h3>How the Decision Maker’s Personality Changes the Model</h3>
        </div>

        <CompareTable
          caption="Decision-Maker Risk Profile vs Model Demand Specification (Scenario III)"
          headers={['Risk Appetite Profile', 'Demand Parameter Value Injected into Model', 'Managerial Justification & Strategic Trade-off']}
          rows={[
            ['Risk Neutral (محايد للمخاطر)', 'Set Demand to Expected Mean: D(j,k) = E[Demand]', 'Balances expected holding costs against stockout penalties; aims for long-term mathematical expected value.'],
            ['Risk Averse (متحفظ ويتجنب المخاطر)', 'Set Demand to Conservative Minimum: D(j,k) = Min(Demand)', 'Guarantees no unsold inventory or wasteful surplus production; accepts possible stockouts if demand spikes.'],
            ['Risk Seeker (مغامر ويبحث عن الفرص)', 'Set Demand to Aggressive Maximum: D(j,k) = Max(Demand)', 'Prepares capacity to capture every possible customer sale; willing to incur warehouse surplus costs.'],
          ]}
        />
      </section>

      {/* 9.4 Parameter Experiments: Final 2018 & Final 2020 Question */}
      <section className="content-section">
        <div className="subheading">
          <span>9.4 · Practical exam question</span>
          <h2>Identifying Modeling Experiments from Parameter Changes</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              In Final 2018 (Question C.3) and Final 2020 (Question C.2), the exam presented the transportation model and asked students to identify the type of modeling experiment corresponding to changes in:
              (a) Supplies (production capacity), (b) Shipping costs, and (c) Consumer demand.
            </p>
          }
          ar={
            <p>
              سؤال فاينال 2018 وفاينال 2020: ما نوع التجربة (Modeling Experiment) المقابلة للتغيير في: أ) المعروض وطاقة الإنتاج، ب) تكاليف الشحن، ج) طلب المستهلكين؟
            </p>
          }
        />

        <ConceptGrid cols={3}>
          <ConceptCard
            badge="CHANGE A · CAPACITY"
            badgeTone="cyan"
            title="Change in Supplies / Capacity C(i,j)"
            titleAr="تغيير المعروض وطاقة المصانع"
            description="• Experiment Type: Sensitivity / Parametric analysis on capacity RHS constraints; Internal Policy experiment.
• Managerial Question: 'Where are our production bottlenecks? What is the marginal profit of adding an extra assembly shift at Cairo?'"
            ar="• نوع التجربة: تحليل حساسية لقيود الطرف الأيمن (RHS) أو تجربة سياسة إنتاجية داخلية.
• سؤال الإدارة: أين تقع نقاط الاختناق في المصانع؟ وما هو العائد الهامشي (Shadow Price) لزيادة طاقة مصنع القاهرة؟"
            tags={['RHS sensitivity', 'bottlenecks', 'shadow price', 'internal policy']}
          />
          <ConceptCard
            badge="CHANGE B · SHIPPING COST"
            badgeTone="amber"
            title="Change in Shipping Costs S(i,j,k)"
            titleAr="تغيير تكاليف النقل والشحن"
            description="• Experiment Type: Sensitivity on objective function cost coefficients; Technological / Logistics change impact.
• Managerial Question: 'If maritime fuel rates rise by 20% or we contract an electric fleet, how does our optimal shipping routing adapt?'"
            ar="• نوع التجربة: تحليل حساسية لمعاملات دالة الهدف (Objective Coefficients) أو أثر التغير التكنولوجي واللوجستي.
• سؤال الإدارة: لو أسعار الشحن زادت 20%، هل مسار الشحن المثالي هيفضل زي ما هو ولا هيتغير؟"
            tags={['Objective sensitivity', 'logistics change', 'fuel rate impact']}
          />
          <ConceptCard
            badge="CHANGE C · DEMAND"
            badgeTone="teal"
            title="Change in Consumer Demand D(j,k)"
            titleAr="تغيير طلب المستهلكين في الأسواق"
            description="• Experiment Type: External Environmental Change impact; Scenario simulation; Risk analysis.
• Managerial Question: 'How resilient is our supply chain to market recessions or unexpected regional demand booms?'"
            ar="• نوع التجربة: أثر التغير في البيئة الخارجية (External Change) أو محاكاة سيناريوهات السوق.
• سؤال الإدارة: كيف تتأثر أرباحنا لو دخلنا في ركود وانخفض الطلب 15% أو زاد بنسبة 30%؟"
            tags={['External change', 'market scenarios', 'stochastic risk']}
          />
        </ConceptGrid>
      </section>

      {/* 9.5 Complete GAMS Code Implementation */}
      <section className="content-section content-section--shaded">
        <div className="subheading">
          <span>9.5 · GAMS code implementation</span>
          <h2>GAMS Code for Scenario I Production-Shipping DSS</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              The GAMS implementation below directly models Scenario I. Notice how the indices (i, j, k) seamlessly bind the two decision variables Q(i,j) and T(i,j,k) through the flow balance constraint.
            </p>
          }
          ar={
            <p>
              كود GAMS للسيناريو الأول: لاحظ إزاي المجموعات (i, j, k) بتربط بين متغيرين القرار Q وT في قيد توازن التدفق:
            </p>
          }
        />

        <CodeBlock code={scenarioModel} language="gams" title="production_shipping_case.gms" numbered />
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
            <p><strong>Two Simultaneous Decisions:</strong> Production Quantity Q(i,j) and Amount Shipped T(i,j,k) linked by flow balance Σ_k T ≤ Q.</p>
          </div>
          <div>
            <span>02</span>
            <p><strong>Objective Function:</strong> Minimize Total Cost = Total Production Cost (Σ U·Q) + Total Shipping Cost (Σ S·T).</p>
          </div>
          <div>
            <span>03</span>
            <p><strong>3 Scenarios:</strong> Scenario I (Deterministic LP), Scenario II (Goal Seeking & Policy), Scenario III (Stochastic Demand).</p>
          </div>
          <div>
            <span>04</span>
            <p><strong>Risk Attitude Impact:</strong> Risk neutral uses average demand; risk averse uses lowest minimum; risk seeker uses highest maximum.</p>
          </div>
          <div>
            <span>05</span>
            <p><strong>Parameter Experiments:</strong> Capacity changes = internal bottleneck sensitivity; Shipping cost changes = objective sensitivity; Demand changes = external scenario impact.</p>
          </div>
        </div>
      </section>

      {/* Dedicated Past Exam Practice (Authentic Questions for this Case) */}
      <SectionExamPractice
        sectionId="production-shipping"
        title="Official Exam Studio · Production & Shipping Case Practice"
        titleAr="أسئلة وتدريبات الامتحانات السابقة على دراسة حالة الإنتاج والشحن ومسألة الغسالات"
      />

      <SectionFooter id="production-shipping" onNavigate={onNavigate} />
    </article>
  )
}
