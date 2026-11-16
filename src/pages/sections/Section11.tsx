import type { PageId } from '../../types'
import {
  BilingualBlock,
  Callout,
  CompareTable,
  ConceptCard,
  ConceptGrid,
  Equation,
  ExamFocus,
  InlineMath,
  KeyIdea,
  PageHeader,
  PictureIt,
  Pill,
  SectionIntro,
} from '../../components/ui'
import { SectionFooter } from '../../components/SectionFooter'
import { AhpWalkthrough } from '../../components/AhpWalkthrough'
import { AhpHierarchy, SaatyScale } from '../../components/diagrams/SpecialDiagrams'
import { SectionExamPractice } from '../../components/SectionExamPractice'

export function Section11({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  return (
    <article className="learning-page">
      <PageHeader
        number="11"
        eyebrow="Structuring judgment under inconsistency"
        title="Analytical Hierarchy Process (AHP)"
        intro="AHP turns a messy multi-criteria choice into a hierarchy, elicits pairwise judgments on Saaty’s scale, normalises the matrices and produces a composite ranking. It is a tool-driven special purpose DSS — the method is the system."
        ar="الـ AHP هو الأداة الأشهر لاتخاذ القرارات متعددة المعايير: بنقسم المشكلة لهرم (Goal → Criteria → Alternatives)، ونعمل مقارنات زوجية بمقياس Saaty، ونوحد المصفوفات (Normalize)، ونحسب الوزن النسبي لكل بديل. الـ AHP هو نظام دعم قرار خاص موجه بالأداة (Tool-Oriented Special Purpose DSS)."
        meta={
          <>
            <Pill icon="BookOpen">Lecture 9 · slides 1–22</Pill>
            <Pill icon="Layers" tone="teal">Worked 5-Step Example</Pill>
            <Pill icon="Clock3" tone="amber">40 min</Pill>
          </>
        }
      />

      <SectionIntro
        objectives={[
          'Define AHP as a multi-criteria, analytical, hierarchical decision process that tolerates inconsistency.',
          'Classify AHP correctly as a Tool/Method-Oriented Special Purpose DSS (avoiding classic exam traps).',
          'Construct a 3-level hierarchy: Goal (Level 1), Criteria (Level 2), Alternatives (Level 3).',
          'Apply Saaty’s 1–9 fundamental scale and enforce the reciprocal rule (a_ji = 1 / a_ij).',
          'Normalize pairwise matrices and calculate priority vectors (weights).',
          'Compute composite priority scores and determine the winning candidate in the lecture walkthrough.',
          'Practice all authentic historical exam items on AHP with instant feedback.',
        ]}
        minutes={40}
        sources={['Lecture 9 · slides 1–22']}
        examWeight="High · Classification MCQ, Saaty scale rules, and complete 5-step worked calculations"
      />

      {/* 11.1 What is AHP? */}
      <section className="content-section">
        <div className="subheading">
          <span>11.1 · Conceptual pillars</span>
          <h2>AHP: Analytical, Hierarchical & Process-Driven</h2>
        </div>

        <BilingualBlock
          en={
            <p className="lead">
              The <strong>Analytic Hierarchy Process (AHP)</strong>, developed by Thomas Saaty, is a structured technique for organizing and analyzing complex multi-criteria decisions.
              It is designed to handle subjective human preferences, tolerating cognitive inconsistency and incomplete data.
            </p>
          }
          ar={
            <p>
              طريقة الـ <strong>AHP</strong> اللي طورها العالم توماس ساعاتي (Thomas Saaty) هي أسلوب علمي منظم لحسم القرارات المعقدة اللي فيها كذا معيار متضارب.
              الميزة الكبرى للـ AHP إنها مش بتطلب بيانات مثالية؛ هي مصممة خصيصاً عشان تتعامل مع التقديرات البشرية والنسبية وبتسمح بوجود عدم اتساق معقول (Inconsistency) في أحكام المديرين.
            </p>
          }
        />

        <ConceptGrid cols={3}>
          <ConceptCard
            badge="PILLAR 1"
            badgeTone="cyan"
            title="Analytical (تحليلي)"
            titleAr="رياضي ومنطقي"
            description="Converts qualitative human judgments into explicit numerical ratios using pairwise comparison matrices that can be mathematically combined."
            ar="بيحول الأحكام والمشاعر الشخصية لأرقام ونسب رياضية دقيقة نقدر نحسب أوزانها ونجمعها."
            tags={['quantitative ratios', 'pairwise matrices', 'mathematical synthesis']}
          />
          <ConceptCard
            badge="PILLAR 2"
            badgeTone="amber"
            title="Hierarchical (هرمي)"
            titleAr="هيكلة متعددة المستويات"
            description="Structures the complex problem into cognitive levels: Overall Goal at the top, Criteria in the middle, and Decision Alternatives at the bottom."
            ar="بيفكك المشكلة المعقدة لمستويات هرمية واضحة: الهدف في القمة، المعايير في النص، والبدائل في القاعدة."
            tags={['Goal', 'Criteria', 'Alternatives', 'Levels']}
          />
          <ConceptCard
            badge="PILLAR 3"
            badgeTone="teal"
            title="Process (عملية متكاملة)"
            titleAr="خطوات منهجية متتابعة"
            description="Not a black-box formula: a transparent 5-step progression of structuring, judging, normalizing, synthesizing, and validating the final ranking."
            ar="مش معادلة سرية بتطلع رقم، دي عملية من 5 خطوات واضحة وقابلة للمراجعة والتعديل."
            tags={['5 steps', 'transparency', 'structured process']}
          />
        </ConceptGrid>

        <ExamFocus
          titleEn="AHP is Tool-Oriented, NOT Domain-Oriented"
          title="💡 المهم فالامتحان · فخ تصنيف الـ AHP المتكرر!"
          ar="في امتحانات 2020 Final (MCQ) و2023 و2025:
بيجي سؤال نصاً: 'The Analytical Hierarchy Process (AHP) can be considered a tool for domain-oriented decision support' — الإجابة: FALSE كبرى!
الـ AHP هو أداة عامة تطبق على أي بيزنس (شراء بيت، توظيف، اختيار موردين)، عشان كده بيتصنف كـ Tool/Method-Oriented Special Purpose DSS، وليس Domain-Oriented!"
        >
          <p>
            <strong>Top Exam Trap:</strong>
            <br />
            <em>“The Analytical Hierarchy Process (AHP) can be considered a tool for domain-oriented decision support.”</em> → <strong>FALSE</strong>.
            <br />
            <strong>Fact:</strong> AHP is a <strong>Tool/Method-Oriented</strong> Special Purpose DSS. It organizes an analytical methodology rather than being tied to one physical domain.
          </p>
        </ExamFocus>

        <PictureIt
          title="💡 PICTURE IT · تخيلها كده: شراء سيارة جديدة"
          ar="تخيل إنك بتشتري عربية ومحتار بين 3 عربيات: عندك معايير متضاربة (السعر، الأمان، استهلاك البنزين، والرفاهية). عقلك البشري ميعرفش يقارن الـ 4 معايير مع الـ 3 عربيات في نفس اللحظة! الـ AHP بيقسمها: يقارن المعايير ببعضها الأول (السعر أهم من الرفاهية بـ 3 أضعاف)، وبعدين يقارن العربيات تحت كل معيار على حدة، وفي الآخر يضرب الأوزان ويطلعلك العربية الفائزة بأعلى نسبة!"
        >
          <p>
            When purchasing a car, evaluating price, fuel efficiency, safety, and luxury simultaneously across three models overwhelms intuitive judgment.
            AHP decomposes the choice: first compare criteria importance pairwise, then rank the three cars under each criterion separately, and synthesize the composite score.
          </p>
        </PictureIt>
      </section>

      {/* 11.2 Step 1: Building the Decision Hierarchy */}
      <section className="content-section">
        <div className="subheading">
          <span>11.2 · Step 1</span>
          <h2>Step 1: Constructing the Decision Hierarchy</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              The first step of AHP decomposes the messy decision problem into an inverted tree hierarchy of at least three levels:
            </p>
          }
          ar={
            <p>
              الخطوة الأولى في الـ AHP هي بناء الهيكل الهرمي للمشكلة (Decomposition) من 3 مستويات رئيسية:
            </p>
          }
        />

        <AhpHierarchy />

        <CompareTable
          caption="Two Real Hierarchy Examples from Lectures"
          headers={['Decision Context', 'Level 1: Overall Goal', 'Level 2: Evaluation Criteria', 'Level 3: Decision Alternatives']}
          rows={[
            [
              'Hiring a Marketing Specialist (Lecture Walkthrough)',
              'Select the Best Marketing Candidate',
              'Experience (C1) · Salary Needs (C2) · Education (C3) · Personality (C4)',
              'Candidate Aly (A1) · Candidate Mohamed (A2) · Candidate Hassan (A3)',
            ],
            [
              'Purchasing a Family Home',
              'Maximize Satisfaction with House Purchase',
              'House Size · Public Transit Proximity · Neighborhood Safety · Modern Amenities',
              'House A (Suburban) · House B (Downtown) · House C (Rural)',
            ],
          ]}
        />
      </section>

      {/* 11.3 Step 2: Pairwise Comparisons & Saaty's Scale */}
      <section className="content-section content-section--shaded">
        <div className="subheading">
          <span>11.3 · Step 2</span>
          <h2>Step 2: Pairwise Comparison Matrices on Saaty’s 1–9 Scale</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              AHP avoids asking for absolute weights out of thin air. Instead, it asks the decision maker: <em>“Comparing Criterion A to Criterion B, which is more important and by how much?”</em>
              Judgments are mapped onto Saaty’s fundamental 1–9 verbal-numerical scale.
            </p>
          }
          ar={
            <p>
              الـ AHP ذكي جداً: بدل ما يسألك 'إيه وزن الخبرة في التوظيف؟' وأنت تجيب رقم من الهوا، بيسألك: 'لو قارنت الخبرة بالمرتب، مين فيهم أهم وبكام مرة؟'.
              المقارنة الزوجية (Pairwise) دي بتتحول لأرقام باستخدام مقياس ساعاتي من 1 لـ 9:
            </p>
          }
        />

        <SaatyScale />

        <div className="saaty-rule">
          <div>
            <span className="micro-label">1. The Reciprocal Rule (القاعدة العكسية)</span>
            <Equation label="Reciprocal Property">{String.raw`a_{ji} = \frac{1}{a_{ij}}`}</Equation>
            <p>If Experience (i) is 4 times more important than Salary (j), then Salary (j) is automatically 1/4 (0.25) relative to Experience (i).</p>
          </div>
          <div>
            <span className="micro-label">2. The Diagonal Identity (القطر الرئيسي)</span>
            <Equation label="Diagonal Self-Comparison">{String.raw`a_{ii} = 1`}</Equation>
            <p>Comparing any element to itself always equals exactly 1 (Equal importance).</p>
          </div>
          <div>
            <span className="micro-label">3. Consistency & Transitivity</span>
            <p>Perfect mathematical consistency demands <code>a_ij × a_jk = a_ik</code>. Human feelings rarely satisfy this perfectly, which is why AHP calculates and tolerates realistic inconsistency.</p>
          </div>
        </div>

        <ExamFocus
          titleEn="Reciprocal Calculation Trap"
          title="💡 المهم فالامتحان · فخ القيمة العكسية في المصفوفة!"
          ar="في المسائل الحسابية: لو قالك المعيار A أهم بـ 3 مرات من المعيار B، الخلية المقابلة (B بالنسبة لـ A) لازم تكون 1/3 (0.333)! أوعى تكتب 3 في المكانين؛ القطر الرئيسي دايماً 1، وتحت القطر هو مقلوب (Reciprocal) القيم اللي فوق القطر!"
        >
          <p>
            <strong>Critical Calculation Rule:</strong> Always populate the reverse cell with the reciprocal <code>1 / a_ij</code>. Writing the same integer in both cells destroys the matrix and invalidates your entire normalisation step.
          </p>
        </ExamFocus>
      </section>

      {/* 11.4 Steps 3, 4, 5: Normalization, Composite Priority, Selection */}
      <section className="content-section">
        <div className="subheading">
          <span>11.4 · Steps 3, 4, 5</span>
          <h2>Steps 3 to 5: Normalise, Synthesise & Select</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              Once comparison matrices are filled, the mathematical algorithm synthesizes the results in three sequential calculations:
            </p>
          }
          ar={
            <p>
              بعد ما نملى مصفوفات المقارنة، خوارزمية الـ AHP بتشتغل في 3 خطوات حسابية متتالية:
            </p>
          }
        />

        <div className="ahp-method-steps">
          <div className="ahp-method-step">
            <span>03</span>
            <h4>Step 3: Normalize & Compute Priority Vector</h4>
            <p>Sum each column of the matrix. Divide every cell by its column sum. Then compute the average of each row to get the criterion priority weight (w_c).</p>
          </div>
          <div className="ahp-method-step">
            <span>04</span>
            <h4>Step 4: Compute Composite Priorities</h4>
            <p>Multiply each alternative’s local score under criterion c by the criterion’s weight (w_c), then sum across all criteria: S_k = Σ w_c · p_kc.</p>
          </div>
          <div className="ahp-method-step">
            <span>05</span>
            <h4>Step 5: Rank & Select Winning Alternative</h4>
            <p>Rank all alternatives by their composite score. The alternative with the highest priority score is selected as the optimal recommendation.</p>
          </div>
        </div>

        <Equation label="Composite Priority Formula for Alternative k">
          {String.raw`S_k = \sum_{c=1}^{m} w_c \, p_{kc}`}
        </Equation>

        <p>
          Where <InlineMath>{String.raw`w_c`}</InlineMath> is the global priority weight of criterion c (with <InlineMath>{String.raw`\sum w_c = 1`}</InlineMath>),
          and <InlineMath>{String.raw`p_{kc}`}</InlineMath> is the local performance rating of alternative k under criterion c.
        </p>
      </section>

      {/* Interactive 5-Step AHP Calculation Walkthrough */}
      <AhpWalkthrough />

      {/* 11.5 AHP Exam Traps */}
      <section className="content-section">
        <div className="subheading">
          <span>11.5 · Exam traps</span>
          <h2>What the Examiner Tests in AHP</h2>
        </div>

        <CompareTable
          caption="AHP Exam True/False Trap Ledger"
          headers={['Exam Statement', 'Verdict', 'Detailed Academic Reasoning']}
          rows={[
            ['“AHP is a domain-oriented decision support tool.”', 'FALSE', 'AHP is a tool/method-oriented special purpose DSS. It applies across hiring, housing, energy, logistics, etc.'],
            ['“AHP tolerates inconsistency in human judgments.”', 'TRUE', 'AHP is explicitly designed to accommodate cognitive inconsistency without breaking the mathematical synthesis.'],
            ['“The reciprocal of comparison a_ij is a_ij.”', 'FALSE', 'The reciprocal is 1 / a_ij.'],
            ['“Normalisation in AHP means dividing each row by its row sum.”', 'FALSE', 'Normalisation divides each element by its COLUMN total, then computes the row averages.'],
            ['“The candidate with the highest composite score is the mathematically proven truth.”', 'FALSE', 'AHP reflects the subjective preferences of the decision maker; if inputs are biased, the ranking reflects that bias.'],
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
            <p><strong>AHP Classification:</strong> A tool/method-oriented special purpose DSS for multi-criteria decision making under uncertainty.</p>
          </div>
          <div>
            <span>02</span>
            <p><strong>3 Hierarchy Levels:</strong> Goal (top level 1), Criteria/Sub-criteria (middle level 2), Alternatives (bottom level 3).</p>
          </div>
          <div>
            <span>03</span>
            <p><strong>Saaty 1–9 Scale:</strong> 1 = Equal, 3 = Moderate, 5 = Strong, 7 = Very strong, 9 = Extreme. Reciprocal rule: a_ji = 1 / a_ij.</p>
          </div>
          <div>
            <span>04</span>
            <p><strong>Normalization Algorithm:</strong> Divide each entry by column total; compute row average for weights; multiply by alternative local scores.</p>
          </div>
          <div>
            <span>05</span>
            <p><strong>Lecture Result:</strong> Candidate Mohamed wins with the highest composite score of 0.385 over Hassan (0.334) and Aly (0.281).</p>
          </div>
        </div>
      </section>

      {/* Dedicated Past Exam Practice (Authentic Questions on AHP) */}
      <SectionExamPractice
        sectionId="ahp"
        title="Official Exam Studio · AHP Practice"
        titleAr="أسئلة وتدريبات الامتحانات السابقة على طريقة الـ AHP والتحليل متعدد المعايير"
      />

      <SectionFooter id="ahp" onNavigate={onNavigate} />
    </article>
  )
}
