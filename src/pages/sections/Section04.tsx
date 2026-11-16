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
import { DssClassificationTree, IntegratedDssArchitecture } from '../../components/diagrams/ArchitectureDiagrams'
import { HindsightInsightForesight } from '../../components/diagrams/FoundationDiagrams'
import { SectionExamPractice } from '../../components/SectionExamPractice'

export function Section04({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  return (
    <article className="learning-page">
      <PageHeader
        number="04"
        eyebrow="One name, several useful lenses"
        title="DSS: Definitions, Classification & Architecture"
        intro="“DSS” is not one architecture. It is a family defined by its support role, classified by scope and orientation, and drawn as an integrated system of data, models, knowledge, interface and user."
        ar="كلمة DSS مش مجرد سوفت وير واحد، ده عالم كامل: فيه تعريف من وجهة نظر المستخدم وتعريف تقني عملي، وفيه تصنيف حسب الحجم (عام أو خاص) والاتجاه (بيانات أو نماذج أو معرفة). والرسمة المعمارية المتكاملة للـ DSS هي الرسمة الأكثر تكراراً في امتحانات الفاينال!"
        meta={
          <>
            <Pill icon="BookOpen">Lectures 5, 6 & 7</Pill>
            <Pill icon="Blocks" tone="teal">Definitions + Core Architecture</Pill>
            <Pill icon="Clock3" tone="amber">38 min</Pill>
          </>
        }
      />

      <SectionIntro
        objectives={[
          'Articulate both the user-oriented and working/technical definitions of DSS and unpack their keywords.',
          'Classify DSS across the four foundational axes: Users, Orientation, Decision Phase, and Scope.',
          'Differentiate Special Purpose vs General Purpose DSS and explain the institutionalisation criterion.',
          'Draw the Integrated Conceptual Architecture of DSS and identify its exact software components.',
          'Master the historical case studies (Cairo University Senior Management DSS, DPSS, Kuwait Fisheries, IDSC).',
          'Practice all 44 authentic historical exam questions on DSS architecture and classification with instant feedback.',
        ]}
        minutes={38}
        sources={['Lecture 7 · slides 1–14', 'Lecture 5 · slides 8–12', 'Lecture 6 · slides 5–6, 17']}
        examWeight="Very high · 44 historical exam questions, core architecture diagram, and recurring T/F cases"
      />

      {/* 4.1 The Two Definitions */}
      <section className="content-section">
        <div className="subheading">
          <span>4.1 · Formal definitions</span>
          <h2>Two Definitions, Two Perspectives</h2>
        </div>

        <BilingualBlock
          en={
            <p className="lead">
              The lecturer provides two complementary definitions of a Decision Support System. The <strong>User-Oriented Definition</strong> explains what the system accomplishes for management; the <strong>Working / Technical Definition</strong> specifies its internal characteristics, data, models, and interface.
            </p>
          }
          ar={
            <p>
              المحاضرة بتقدم تعريفين للـ DSS بيكملوا بعض: تعريف من وجهة نظر <strong>المستخدم (User-Oriented)</strong> بيوضح النظام معمول عشان إيه في البيزنس، وتعريف <strong>تقني وعملي (Working/Technical)</strong> بيشرح مكوناته وخصائصه البرمجية.
            </p>
          }
        />

        <ConceptGrid cols={2}>
          <ConceptCard
            badge="USER-ORIENTED"
            badgeTone="cyan"
            title="User-Oriented Definition"
            titleAr="التعريف من وجهة نظر المستخدم"
            description="A computer-aided information technology used to support complex decision making, problem solving, policy testing, scenario simulation, and strategic planning."
            ar="تكنولوجيا معلومات بتساعد المديرين في حل المشاكل المعقدة، تجربة السياسات وسيناريوهات المستقبل، والتخطيط الاستراتيجي."
            tags={['problem-solving', 'scenarios', 'strategic planning']}
          />
          <ConceptCard
            badge="TECHNICAL / WORKING"
            badgeTone="amber"
            title="Working & Technical Definition"
            titleAr="التعريف التقني والعملي للـ DSS"
            description="An interactive, flexible, and adaptable computer-based information system specifically developed for supporting semi-structured and non-structured problems to improve decision quality. Uses data and models, provides an intuitive interface, and incorporates the decision maker's own insights."
            ar="نظام تفاعلي ومرن مبني على الكمبيوتر، مصمم لدعم المشاكل شبه المنظمة وغير المنظمة لتحسين جودة القرار، بيستخدم بيانات ونماذج، واجهته سهلة، وبيسمح للـ decision maker يضيف رؤيته الشخصية (Insights)."
            tags={['interactive', 'semi-structured', 'data + models', 'own insights']}
          />
        </ConceptGrid>

        <div className="definition-anatomy">
          <span className="micro-label">The 6 Pillars of the Technical Definition (Exam Keywords)</span>
          <div className="anatomy-row">
            {[
              ['Interactive', 'Two-way conversational dialogue; user explores and asks what-if questions.'],
              ['Flexible & Adaptable', 'Easily modified as market conditions, constraints, or goals change.'],
              ['Semi- & Non-Structured', 'Targeted at messy managerial problems where no single algorithm gives the complete answer.'],
              ['Data + Models', 'Combines historical/transactional facts with mathematical optimization and simulation.'],
              ['Easy Interface', 'Natural, visual, and intuitive; removes technical hurdles for non-technical executives.'],
              ['Decision Maker Insights', 'Preserves human judgment, intuition, and subjective preferences in the loop.'],
            ].map(([term, meaning]) => (
              <div className="anatomy-chip" key={term}>
                <strong>{term}</strong>
                <span>{meaning}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.2 Classification Criteria */}
      <section className="content-section">
        <div className="subheading">
          <span>4.2 · The classification matrix</span>
          <h2>The Four Classification Axes</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              In Midterm 2016 (Question A.1), students were tasked to: <em>“List three choices for classifying Decision Support Systems (DSS). Identify in each case the main classification types.”</em>
              The lecturer defines four distinct axes to classify any DSS:
            </p>
          }
          ar={
            <p>
              في ميدتيرم 2016 جه سؤال صريح: اذكر 3 معايير لتصنيف أنظمة دعم القرار واذكر أنواع كل معيار. المحاضرة بتحدد 4 محاور أساسية لتصنيف أي DSS:
            </p>
          }
        />

        <CompareTable
          caption="The Four Axes of DSS Classification"
          headers={['Classification Criterion', 'Underlying Categories', 'Key Question It Answers']}
          rows={[
            ['1. By Users', 'Single-user DSS · Group DSS (GDSS) · Organisational DSS', 'Who interacts with the system and makes the choice?'],
            ['2. By Issue / Tool Orientation', 'Problem/Domain-oriented DSS vs Tool/Method-oriented DSS', 'Is it built around a specific domain or around an analytical method?'],
            ['3. By Decision Phase', 'Problem Identification · Alternative Generation · Evaluation & Selection', 'Which stage of the decision cycle is supported?'],
            ['4. By Scope (Generality)', 'Special Purpose DSS vs General Purpose DSS', 'Is it a one-off model for a single issue, or a reusable institutional environment?'],
          ]}
        />

        <DssClassificationTree />

        <div className="subheading subheading--minor">
          <span>Scope: The Fundamental Distinction</span>
          <h3>Special Purpose DSS vs General Purpose DSS</h3>
        </div>

        <BilingualBlock
          en={
            <p>
              The distinction between Special Purpose and General Purpose DSS is driven by scope, cost, and <strong>institutionalisation</strong>.
            </p>
          }
          ar={
            <p>
              الفرق بين الـ Special Purpose والـ General Purpose هو واحد من أكتر المفاهيم اللي بتتسأل في الفاينال:
              الخاص معمول لمشكلة واحدة وميزانية محدودة ومش محتاج هيكل مؤسسي؛ أما العام فبيخدم كذا مشكلة وقسم ومحتاج هيكل مؤسسي وصيانة مستمرة.
            </p>
          }
        />

        <ConceptGrid cols={2}>
          <ConceptCard
            badge="NARROW SCOPE"
            badgeTone="amber"
            title="Special Purpose DSS"
            titleAr="نظام دعم قرار خاص / محدود"
            description="Focused on a single problem domain (e.g. shipping logistics) or single analytical method (e.g. AHP evaluation tool). Faster and cheaper to construct, but less sustainable outside its context. Does NOT require institutionalisation."
            ar="بيخدم مشكلة واحدة محددة (زي حساب مسار شاحنات) أو أداة واحدة (زي برنامج AHP). أرخص وأسرع، بس ملوش لازمة بره المشكلة دي، ومش محتاج مأسسة (Institutionalisation)."
            tags={['single domain', 'cheaper', 'tool-driven', 'no institutional structure']}
          />
          <ConceptCard
            badge="ENTERPRISE SCOPE"
            badgeTone="teal"
            title="General Purpose DSS"
            titleAr="نظام دعم قرار عام / مؤسسي"
            description="A reusable analytical platform supporting multiple decisions, departments, and applications. Incorporates data warehouses, multiple models, and knowledge bases. Higher initial cost, highly sustainable, and REQUIRES an institutional structure."
            ar="منصة تحليلية بتخدم كذا قرار وكذا إدارة في نفس الوقت. بتجمع داتا ويرهاوس وموديلات كتير. أغلى في الأول بس بتعيش سنين ومحتاجة هيكل مؤسسي (Institutional structure)."
            tags={['multi-problem', 'reusable', 'requires institutionalisation', 'sustainable']}
          />
        </ConceptGrid>

        <ExamFocus
          titleEn="Institutionalisation in Special vs General Purpose DSS"
          title="💡 المهم فالامتحان · فخ المأسسة (Institutionalisation)!"
          ar="في امتحانات 2018 و2019 و2020: بيجي سؤال True/False يقولك: 'Institutionalization is an important phase in constructing Special Purpose DSS' — الإجابة: FALSE كبرى! الـ Institutionalization (المأسسة ووضع هيكل إداري ودعم فني مستمر) دي مرحلة أساسية في بناء الـ General Purpose DSS، مش الـ Special Purpose!"
        >
          <p>
            <strong>False Statement alert:</strong> “Institutionalization is an important phase in constructing Special Purpose DSS.” → <strong>FALSE</strong>.
            <br />
            <strong>Fact:</strong> <strong>Institutionalisation</strong> is mandatory for <strong>General Purpose DSS</strong> because it serves multiple departments and requires continuing governance. Special purpose DSS is bounded and often one-off.
          </p>
        </ExamFocus>
      </section>

      {/* 4.3 Historical External Case Studies in Exams */}
      <section className="content-section">
        <div className="subheading">
          <span>4.3 · Real-world exam cases</span>
          <h2>Exam Case Studies: Cairo University, Kuwait Fisheries & DPSS</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              The exam papers feature recurring questions on specific real-world DSS implementations mentioned in lecture discussions.
              Knowing how these cases map to the DSS classification taxonomy guarantees multiple exam points.
            </p>
          }
          ar={
            <p>
              في أسئلة الامتحانات فيه حالات وتطبيقات بتيجي بالاسم نصاً في الـ True/False. لازم تكون عارف تصنيف كل حالة عشان متتلخبطش:
            </p>
          }
        />

        <ConceptGrid cols={2}>
          <ConceptCard
            badge="CASE 1 · CAIRO UNIVERSITY"
            badgeTone="cyan"
            title="Cairo University Senior Management DSS"
            titleAr="نظام دعم القرار لإدارة جامعة القاهرة"
            description="A General Purpose DSS that covers BOTH data-centered (student admissions, faculty demographics, budgets) and model-centered support (programme forecasting, staff allocation). Used to compare performance against other universities."
            ar="نظام عام (General Purpose) بيغطي الجانبين: البيانات (Data-centered) والنماذج (Model-centered)! بيقارن أداء كليات الجامعة ببعضها وبالجامعات التانية."
            tags={['General Purpose', 'Data + Model centered', 'Performance benchmark']}
          />
          <ConceptCard
            badge="CASE 2 · DPSS"
            badgeTone="amber"
            title="Development Planning Support System (DPSS)"
            titleAr="نظام دعم التخطيط التنموي (DPSS)"
            description="Classified as a Special Purpose, domain-oriented DSS built for national economic planning and macroeconomic investment allocation."
            ar="نظام خاص (Special Purpose) وموجه لمجال محدد (Domain-oriented) للتخطيط الاقتصادي الوطني وتوزيع الاستثمارات."
            tags={['Special Purpose', 'Domain-oriented', 'Macroeconomic planning']}
          />
          <ConceptCard
            badge="CASE 3 · KUWAIT FISHERIES"
            badgeTone="teal"
            title="Fisheries Sector DSS in Kuwait"
            titleAr="نظام دعم قرار قطاع الثروة السمكية بالكويت"
            description="A Special Purpose, domain-driven DSS relying primarily on an integer mathematical programming model to optimize sustainable fishing quotas and vessel scheduling."
            ar="نظام خاص (Special Purpose) موجه لمجال محدد، بيعتمد على نموذج برمجة صحيحة (Integer Programming Model) لتحديد حصص الصيد وجدولة السفن."
            tags={['Special Purpose', 'Integer Programming', 'Domain-driven']}
          />
          <ConceptCard
            badge="CASE 4 · IDSC EGYPT"
            badgeTone="purple"
            title="Information & Decision Support Center (IDSC)"
            titleAr="مركز معلومات ودعم اتخاذ القرار (IDSC)"
            description="The premier Egyptian cabinet-level institution established to provide general-purpose, cross-sector decision support for socio-economic policymaking."
            ar="المركز التابع لمجلس الوزراء المصري؛ مؤسسة رائدة في تقديم دعم القرار العام والاستراتيجي لصانعي القرار الوطنيين."
            tags={['General Purpose', 'National Cabinet Level', 'Public policy']}
          />
        </ConceptGrid>

        <ExamFocus
          titleEn="Cairo University DSS Covers Both Data & Models"
          title="💡 المهم فالامتحان · نظام جامعة القاهرة"
          ar="بيجي سؤال True/False مشهور: 'Cairo University senior management DSS covers both the data-centered and model-centered DSS' — الإجابة: TRUE! وبيجي بصيغة فخ: 'Cairo University senior management DSS can be viewed mainly as data-centered' — الإجابة هنا FALSE لأن حصرها في الداتا بس غلط؛ هي بتغطي الداتا والموديلز معاً!"
        >
          <p>
            <strong>Cairo University DSS Exam Rule:</strong>
            <br />
            <strong>TRUE:</strong> Cairo University senior management DSS covers <strong>both</strong> the data-centered and model-centered DSS.
            <br />
            <strong>FALSE:</strong> Cairo University DSS is <em>only/mainly</em> data-centered.
          </p>
        </ExamFocus>
      </section>

      {/* 4.4 The Integrated General-Purpose Architecture */}
      <section className="content-section content-section--shaded">
        <div className="subheading">
          <span>4.4 · Master schematic</span>
          <h2>The Integrated General-Purpose DSS Architecture</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              This is the grand conceptual diagram of DSS. Asked in Final 2016 (C.1), Final 2017 (C.2), Final 2018 (B.1), Final 2023, and Final 2025!
              It features two distinct computational wings — Data-Centered on the left and Model-Centered on the right — interconnected through Knowledge Management and an Interactive User Interface.
            </p>
          }
          ar={
            <p>
              دي رسمة المنهج الأهم على الإطلاق! اتكررت في امتحانات 2016 و2017 و2018 و2023 و2025!
              النظام المعماري ليه جناحين: جناح البيانات على الشمال (Database + OLAP) وجناح النماذج على اليمين (Model Base + MMS).
              وتحتهم إدارة المعرفة، وتحتهم واجهة المستخدم، وبرّه الصندوق تماماً: متخذ القرار البشري!
            </p>
          }
        />

        <IntegratedDssArchitecture />

        <CompareTable
          caption="Detailed Component & Information Technology Mapping (Required for 20-Point Written Questions)"
          headers={['Architectural Component', 'Primary Information Technologies', 'Core Function / Contribution to Decision Maker']}
          rows={[
            [
              '1. Data-Centered Wing',
              'Analytical Database, Data Warehouse, Multidimensional Data Store, OLAP engine, Data Mining, ETL',
              'Extracts, transforms, and aggregates operational/historical data to provide HINDSIGHT (reports) and INSIGHT (patterns).',
            ],
            [
              '2. Model-Centered Wing',
              'Model Base, Model Base Management System (MBMS), Algebraic Modeling Languages (GAMS), Linear/Non-linear Solvers',
              'Creates, stores, and executes mathematical models to evaluate alternatives and scenarios, providing FORESIGHT.',
            ],
            [
              '3. Knowledge-Centered Layer',
              'Knowledge Base, Rule-Based Expert System, Inference Engine, Explanation Facility, Machine Learning',
              'Provides domain expertise, heuristic decision rules, intelligent reasoning, and transparent explanation of recommendations.',
            ],
            [
              '4. Interactive User Interface',
              'Graphical User Interface (GUI), Executive Dashboards, What-If controls, Visual Briefings, Dialogue Manager',
              'Mediates seamless communication between the user and underlying analytical engines; presents results clearly.',
            ],
            [
              '5. The Decision Maker (User)',
              'Senior Executives, Policy Analysts, Domain Experts, Corporate Management Teams',
              'Stands OUTSIDE the system boundary; supplies judgment, ethical context, problem framing, and final decision authorization.',
            ],
          ]}
        />

        <ExamFocus
          titleEn="Drawing the Diagram: Top Examiner Rules"
          title="💡 المهم فالامتحان · نصايح المصحح لرسم الـ Architecture"
          ar="لما يجيلك سؤال 'Draw a schematic representation of an integrated conceptual model of a computer-aided DSS':
1) ارسم إطار كبير بيمثل System Boundary.
2) حط جناحين متوازيين: على الشمال Analytical DB متصلة بـ OLAP بسهمين (Two-way arrow)، وعلى اليمين Model Base متصلة بـ MMS بـ Two-way arrow!
3) في النص والأسفل حط Knowledge Management بتربط بين الجناحين.
4) تحتهم ارسم شريط الـ Interactive User Interface.
5) متنساش ترسم الـ Decision Maker خارج حدود النظام (Outside System Boundary) عشان تثبت للمصحح إنك فاهم إن القرار في النهاية بشري!"
        >
          <p>
            <strong>Examiner Grading Checklist:</strong>
            <br />
            ✓ Clear System Boundary drawn around software components.
            <br />
            ✓ Two analytical wings: Data Wing (Database ↔ OLAP) and Model Wing (Model Base ↔ MBMS).
            <br />
            ✓ Two-way arrows connecting components (interactive dialogue and feedback).
            <br />
            ✓ Knowledge Management integrated with both wings.
            <br />
            ✓ Decision Maker explicitly placed <strong>OUTSIDE</strong> the system boundary.
          </p>
        </ExamFocus>
      </section>

      {/* 4.5 Linkage Matrix: Orientation -> Tools -> 3 Lenses */}
      <section className="content-section">
        <div className="subheading">
          <span>4.5 · Synthesis</span>
          <h2>Connecting DSS Orientation to Hindsight, Insight & Foresight</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              In Midterm 2018 (Question A.3) and Final 2018 (Question B.3), the exam demanded the exact linkages
              between DSS types (Data, Model, Knowledge) and the three analytical lenses (Hindsight, Insight, Foresight).
            </p>
          }
          ar={
            <p>
              سؤال الميدتيرم 2018 والفاينال 2018: الربط بين نوع الـ DSS وأدواته التحليلية والـ 3 عدسات (Hindsight, Insight, Foresight):
            </p>
          }
        />

        <HindsightInsightForesight />

        <CompareTable
          caption="The Master Linkage Matrix (Midterm 2018 A.3 & Final 2018 B.3)"
          headers={['DSS Type / Orientation', 'Primary Analytical Tools', 'Hindsight Support', 'Insight Support', 'Foresight Support']}
          rows={[
            [
              'Data-Centered DSS',
              'Data warehouse, analytical DB, OLAP multidimensional cubes, standard reporting, data mining',
              'PRIMARY: Summarises historical performance, standard KPIs, and operational reports.',
              'PRIMARY: Discovers hidden associations, customer clusters, and diagnostic correlations via Data Mining.',
              'Limited: Provides baseline historical data and trends for future models.',
            ],
            [
              'Model-Centered DSS',
              'Mathematical programming, GAMS, LP/MIP models, simulation engines, what-if, goal-seeking',
              'Inputs historical baseline data into parameters.',
              'Evaluates relationships among system variables and sensitivity coefficients.',
              'PRIMARY: Generates future scenarios, projects consequences, and identifies optimal choices.',
            ],
            [
              'Knowledge-Centered DSS',
              'Knowledge base, inference engine, rule-based Expert Systems, AI reasoning, explanation',
              'Archives historical case facts and past precedent.',
              'Explains the logic and reasoning behind observed phenomena through rules.',
              'PRIMARY: Recommends expert actions, provides prescriptive advice, and assesses complex risks.',
            ],
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
            <p><strong>Technical Definition:</strong> Interactive, flexible, adaptable, semi/unstructured problems, data + models, easy interface, decision maker insights.</p>
          </div>
          <div>
            <span>02</span>
            <p><strong>4 Classification Axes:</strong> Users (single, group, org); Orientation (domain vs tool); Decision Phase (identification, generation, selection); Scope (special vs general).</p>
          </div>
          <div>
            <span>03</span>
            <p><strong>Institutionalisation:</strong> Vital for General Purpose DSS (multi-department, reusable); NOT needed for Special Purpose DSS.</p>
          </div>
          <div>
            <span>04</span>
            <p><strong>Cairo University DSS:</strong> A General Purpose DSS integrating BOTH data-centered and model-centered capabilities.</p>
          </div>
          <div>
            <span>05</span>
            <p><strong>Architecture Golden Rule:</strong> The human decision maker is always placed OUTSIDE the system boundary, providing judgment and authority.</p>
          </div>
        </div>
      </section>

      {/* Dedicated Past Exam Practice (44 Authentic Questions) */}
      <SectionExamPractice
        sectionId="dss-core"
        title="Official Exam Studio · DSS Core Practice"
        titleAr="أسئلة وتدريبات الامتحانات السابقة على معمارية وتصنيفات الـ DSS"
      />

      <SectionFooter id="dss-core" onNavigate={onNavigate} />
    </article>
  )
}
