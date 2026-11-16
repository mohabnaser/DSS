import type { PageId } from '../../types'
import {
  BilingualBlock,
  CompareTable,
  ConceptCard,
  ConceptGrid,
  ExamFocus,
  KeyIdea,
  PageHeader,
  PictureIt,
  Pill,
  SectionIntro,
  StageFlow,
} from '../../components/ui'
import { SectionFooter } from '../../components/SectionFooter'
import { DecisionCycleDiagram, ExecutiveDecisionFlow } from '../../components/diagrams/ProcessDiagrams'
import { SectionExamPractice } from '../../components/SectionExamPractice'

export function Section02({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  return (
    <article className="learning-page">
      <PageHeader
        number="02"
        eyebrow="From a messy situation to an implemented choice"
        title="Decisions, Support & the DSS Cycle"
        intro="A decision is not a single moment of choosing. It is a cycle of framing, data gathering, analysis, option design, choice, approval and implementation. This section shows where analytical support enters — and where it must stop."
        ar="القرار مش مجرد لحظة نختار فيها، ده دورة حياة كاملة (Cycle): نفهم المشكلة، نجمع بيانات، نحلل، نطوّر بدائل، نختار، نوافق، وننفّذ. الـ DSS بيدخل بقوة في التحليل وتوليد البدائل وتقدير المخاطر، لكن الموافقة الرسمية والمسؤولية الأخلاقية بتفضل للإدارة البشرية."
        meta={
          <>
            <Pill icon="BookOpen">Lectures 2, 5 & 6</Pill>
            <Pill icon="Workflow" tone="teal">Core Exam Diagram</Pill>
            <Pill icon="Clock3" tone="amber">26 min</Pill>
          </>
        }
      />

      <SectionIntro
        objectives={[
          'Classify decisions by structure, management level, time horizon and required data.',
          'Master the seven-stage decision-support cycle and its crucial feedback loops.',
          'Pinpoint exactly which stages benefit from data, models, and knowledge support.',
          'Understand the classic exam trap: models assess alternatives and risk; they never approve choices.',
          'Practice all 15 authentic historical exam questions on the decision cycle with instant feedback.',
        ]}
        minutes={26}
        sources={['Lecture 5 · slides 13–15', 'Lecture 6 · slides 14–15, 19', 'Lecture 2 · slides 3–4']}
        examWeight="High · The Decision Cycle diagram is asked repeatedly; T/F traps appear in every paper"
      />

      {/* 2.1 Decision Levels & Context */}
      <section className="content-section">
        <div className="subheading">
          <span>2.1 · Decision taxonomy</span>
          <h2>Not every decision deserves the same kind of support</h2>
        </div>

        <BilingualBlock
          en={
            <p className="lead">
              A decision’s structure determines whether it can be programmed, supported analytically or only
              informed by human judgment. The lecturer classifies decisions across three management levels (Anthony’s hierarchy),
              and each level demands a completely different blend of internal data, external data, and modeling tools.
            </p>
          }
          ar={
            <p>
              مش كل القرارات شبه بعض! القرار بيتصنف حسب مستواه الإداري ومدى وضوح هيكلته (Structure). لو قرار تشغيلي متكرر بيتبرمج بسيستم بسيط؛
              لو قرار تكتيكي محتاج DSS ونماذج؛ ولو قرار استراتيجي في القمة فمحتاج رؤية السوق، بيانات خارجية، وخبرة بشرية.
            </p>
          }
        />

        <ConceptGrid cols={3}>
          <ConceptCard
            badge="TOP LEVEL"
            badgeTone="purple"
            title="Strategic Decisions"
            titleAr="القرارات الاستراتيجية (طويلة الأجل)"
            description="Long-term horizon (years), highly unstructured, extreme uncertainty. Requires external market data, competitor intelligence, and expert opinion."
            ar="أمثلة: فتح مصنع جديد، الاندماج مع شركة تانية. محتاجة External Data وأدوات سيناريوهات وEIS وحكم بشري."
            tags={['long-term', 'unstructured', 'external data']}
          />
          <ConceptCard
            badge="MIDDLE LEVEL"
            badgeTone="amber"
            title="Tactical / Management Control"
            titleAr="القرارات التكتيكية (متوسطة الأجل)"
            description="Medium-term horizon (months/quarters), semi-structured. Balances internal performance metrics with external trends. Optimisation and forecasting."
            ar="أمثلة: وضع الميزانية، سياسة التسعير، تخطيط المخزون. محتاجة DSS وموديلات Optimization وWhat-if."
            tags={['medium-term', 'semi-structured', 'DSS models']}
          />
          <ConceptCard
            badge="LOWER LEVEL"
            badgeTone="cyan"
            title="Operational Control"
            titleAr="القرارات التشغيلية (قصيرة الأجل)"
            description="Short-term (days/hours), structured and programmable. Relies almost entirely on current internal transaction records and established business rules."
            ar="أمثلة: فواتير المشتريات، متابعة الحضور والطلبيات. محتاجة نظم معالجة المعاملات (TPS) وتقارير MIS عادية."
            tags={['short-term', 'structured', 'internal data']}
          />
        </ConceptGrid>

        <ExamFocus
          titleEn="Strategic Decisions Depend on External Data"
          title="💡 المهم فالامتحان · سؤال بيتكرر كل سنة!"
          ar="في الامتحانات (2018 Midterm, 2018 Final, 2019, 2023, 2025): بيسأل عن طبيعة البيانات في القرارات الاستراتيجية. احفظ القاعدة دي: In Strategic Decision Making, External Data is MORE important than internal data! وأي جملة تقول 'External data are not strongly needed' هي FALSE فوراً وبلا تردد!"
        >
          <p>
            <strong>Core Rule:</strong> In <strong>Strategic Decision Making</strong>, <strong>External Data</strong> (competitors, regulatory shifts, economic indicators)
            is far more critical than internal data. Any statement claiming external data is not needed for strategic decisions is <strong>FALSE</strong>.
          </p>
        </ExamFocus>

        <CompareTable
          caption="Detailed decision classification matrix"
          headers={['Decision Level', 'Typical Horizon', 'Problem Structure', 'Dominant Data Source', 'Primary Support System']}
          rows={[
            ['Strategic', 'Long-term (1–5+ years)', 'Non-programmed / unstructured', 'External environmental data + expert opinion', 'EIS, scenario simulation, strategic models, AHP'],
            ['Tactical', 'Medium-term (months)', 'Semi-structured', 'Internal historical data + external benchmarks', 'DSS, optimisation models, forecasting, what-if'],
            ['Operational', 'Short-term (daily/weekly)', 'Programmable / structured', 'Internal current transactional records', 'MIS, TPS reports, automated rules engine'],
          ]}
        />
      </section>

      {/* 2.2 The Decision Cycle Schematic */}
      <section className="content-section">
        <div className="subheading">
          <span>2.2 · The core schematic</span>
          <h2>The Seven-Stage Decision Support Cycle</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              The <strong>Decision Support Cycle</strong> is the most frequently tested diagram in the past ten years of exams.
              It represents a continuous, closed feedback loop comprising seven stages.
            </p>
          }
          ar={
            <p>
              رسمة <strong>دورة دعم القرار (Decision Cycle)</strong> هي الرسمة رقم 1 في امتحانات المادة! بتوضح إن القرار مش خط مستقيم،
              دي دورة مغلقة من 7 مراحل، وتنفيذ القرار بيولد بيانات ومشاكل جديدة ترجع تفتح الدورة من أول وجديد.
            </p>
          }
        />

        <DecisionCycleDiagram />

        <StageFlow
          title="The 7 Sequential Stages of Decision Support"
          titleAr="المراحل السبعة لدورة دعم القرار"
          note="Notice the critical feedback loop: Implementation results and post-decision follow-up loop back into problem identification."
          noteAr="لاحظ أهم نقطة بيحاسب عليها المصحح: وجود سهم الـ Feedback راجع من مرحلة التنفيذ (Implementation) لمرحلة تحديد المشكلة (Identify Problem)!"
          stages={[
            {
              stage: 'STAGE 1',
              title: 'Identify Problem',
              titleAr: 'تحديد وتعريف المشكلة',
              desc: 'Frame the issue, distinguish symptoms from root causes, bound the system.',
              descAr: 'تحديد حدود المشكلة والتفريق بين الأعراض والسبب الحقيقي.',
              tone: 'cyan',
            },
            {
              stage: 'STAGE 2',
              title: 'Gather Data',
              titleAr: 'جمع واستغلال البيانات',
              desc: 'Collect internal records and external environment data; ensure data quality.',
              descAr: 'تجميع البيانات الداخلية والخارجية وتنظيفها للتحليل.',
              tone: 'teal',
            },
            {
              stage: 'STAGE 3',
              title: 'Analyse System',
              titleAr: 'تحليل البيانات والنظام',
              desc: 'Discover patterns, evaluate correlations, calculate impacts and risk factors.',
              descAr: 'تحليل العلاقات واكتشاف الأنماط وتقدير المخاطر المحتملة.',
              tone: 'amber',
            },
            {
              stage: 'STAGE 4',
              title: 'Develop Options',
              titleAr: 'توليد وتطوير البدائل',
              desc: 'Generate feasible alternative courses of action and evaluate their costs.',
              descAr: 'تصميم حلول وبدائل قابلة للتطبيق وتقدير تكلفة كل حل.',
              tone: 'purple',
            },
            {
              stage: 'STAGE 5',
              title: 'Make Decision',
              titleAr: 'اتخاذ واختيار القرار',
              desc: 'Select the optimal or satisfying alternative using models, criteria and judgment.',
              descAr: 'اختيار أفضل بديل بناءً على المعايير ومخرجات النماذج والحكم البشري.',
              tone: 'cyan',
            },
            {
              stage: 'STAGE 6',
              title: 'Internal Approval',
              titleAr: 'الموافقة والاعتماد الداخلي',
              desc: 'Validate politically, approve through leadership authority, communicate to team.',
              descAr: 'اعتماد القرار من أصحاب السلطة والمسؤولية داخل المؤسسة.',
              tone: 'amber',
            },
            {
              stage: 'STAGE 7',
              title: 'Implement & Follow',
              titleAr: 'التنفيذ والمتابعة والتقييم',
              desc: 'Execute the chosen action, monitor real performance, and feed lessons back.',
              descAr: 'تنفيذ القرار على الأرض وقياس نتائجه والتعلم منها للدورات القادمة.',
              tone: 'teal',
            },
          ]}
        />

        <ExamFocus
          titleEn="Assess vs Approve: The Most Dangerous T/F Trick"
          title="💡 المهم فالامتحان · فخ Assess vs Approve!"
          ar="ركز جداً في صياغة جملة الـ True/False: لو قالك 'Models are essentially needed to assess alternative options' — الجملة TRUE لأن النماذج وظيفتها تقييم البدائل وحساب التكلفة والمخاطر. لكن لو قالك 'Models are essentially needed to validate and approve a selected decision' — الجملة FALSE فوراً! لأن الـ Models مش هي اللي بتوافق على القرار؛ الموافقة (Approval) سلطة إدارية بشرية مش كود كمبيوتر!"
        >
          <p>
            <strong>Crucial Exam Distinction:</strong>
            <br />
            <strong>TRUE:</strong> Models are essentially needed to <em>assess</em> alternative solutions, scenarios, costs and risks.
            <br />
            <strong>FALSE:</strong> Models are essentially needed to <em>approve</em> or <em>authorise</em> a decision. Approval is a human managerial prerogative.
          </p>
        </ExamFocus>

        <PictureIt
          title="💡 PICTURE IT · تخيلها كده: الطبيب وغرفة العمليات"
          ar="فكر في عملية جراحية: التحاليل والأشعة والكمبيوتر (الـ DSS) بيساعدوا في تشخيص الحالة، وتحديد مكان الورم، وعرض احتمالات نجاح العملية ومخاطرها (Assess alternatives & risks). لكن مين اللي بيمضي على الموافقة بالعملية ويتحمل المسؤولية؟ المريض ورئيس قسم الجراحة (Human Authority)! الكمبيوتر عمره ما هيعمل Approval للعملية بدالهم!"
        >
          <p>
            Think of medical imaging: MRI and AI scanners analyze tissues and assess surgical risk with extreme precision.
            However, only the chief surgeon and patient provide the human judgment, ethical consent, and final approval to operate.
          </p>
        </PictureIt>
      </section>

      {/* 2.3 Executive View: Scanning & Problem vs Opportunity */}
      <section className="content-section">
        <div className="subheading">
          <span>2.3 · Strategic scanning</span>
          <h2>Scanning, Interpretation & The Problem vs Opportunity Split</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              At the senior executive level, decision support begins before any problem is formalised. Executives continually
              scan the external and internal environments. How they interpret raw environmental signals determines whether
              an event is treated as an alarming <strong>Problem</strong> or a lucrative <strong>Opportunity</strong>.
            </p>
          }
          ar={
            <p>
              على مستوى الإدارة العليا، دعم القرار بيبدأ بدري جداً من خلال المسح البيئي (Environmental Scanning). المدير بيفحص إشارات السوق:
              نفس الإشارة ممكن مدير يشوفها مشكلة وتهديد، ومدير تاني يفسرها كفرصة ذهبية للتوسع وتطوير منتج جديد!
            </p>
          }
        />

        <ExecutiveDecisionFlow />

        <ConceptGrid cols={2}>
          <ConceptCard
            badge="EXTERNAL SCAN"
            badgeTone="cyan"
            title="External Environmental Signals"
            titleAr="إشارات البيئة الخارجية"
            description="Market prices, inflation, consumer trends, competitor actions, new regulations, and technological breakthroughs."
            ar="متغيرات بره سيطرة الشركة (أسعار الفائدة، دخول منافس جديد، قوانين استيراد جديدة). لازم نرصدها عشان نحمي استراتيجيتنا."
            tags={['market', 'competitors', 'macro-economy']}
          />
          <ConceptCard
            badge="INTERNAL SCAN"
            badgeTone="teal"
            title="Internal Organisational Signals"
            titleAr="إشارات البيئة الداخلية"
            description="Financial liquidity, production bottlenecks, marketing conversion rates, operational costs, and workforce talent."
            ar="القدرات الحقيقية للشركة: هل عندنا سيولة كافية؟ هل خط الإنتاج يقدر يغطي الطلب؟ كفاءة الموظفين ونظم التشغيل."
            tags={['finance', 'production', 'capacity']}
          />
        </ConceptGrid>

        <KeyIdea title="Framing Determines the Model">
          A drop in market share can be framed as a failure in pricing (solved by an LP discount model) or as a shift in consumer taste (solved by an R&D new-product model). The human manager frames the direction; the DSS computes the possibilities.
        </KeyIdea>
      </section>

      {/* 2.4 Division of Labour: DSS vs Human Manager */}
      <section className="content-section">
        <div className="subheading">
          <span>2.4 · Division of labour</span>
          <h2>What the DSS Does vs What the Human Manager Does</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              The most profound conceptual takeaway from Lecture 5 & 6 is that DSS is a partnership of complementary strengths.
              Computers excel at memory, complex matrix computation, and speed; humans excel at judgment, moral context, and responsibility.
            </p>
          }
          ar={
            <p>
              الـ DSS مش بديل للإنسان، ده شريك بيكمل نقاط ضعفنا: الكمبيوتر يقدر يحسب مليون عملية رياضية في ثانية ويجرب 50 سيناريو،
              لكن ميعرفش يحدد يعني إيه 'عدالة' أو 'أخلاق' أو يتحمل نتيجة القرار قدام مجلس الإدارة.
            </p>
          }
        />

        <div className="roles-grid">
          <div className="role-card role-card--dss">
            <span>THE COMPUTER / DSS</span>
            <h3>Analytical Capability</h3>
            <ul>
              <li>Integrates diverse internal and external databases</li>
              <li>Runs complex mathematical models and simulations</li>
              <li>Evaluates hundreds of alternative scenarios rapidly</li>
              <li>Calculates sensitivity, trade-offs, and risk profiles</li>
              <li>Generates explanatory charts and interactive dashboards</li>
            </ul>
          </div>
          <div className="role-card role-card--human">
            <span>THE HUMAN MANAGER</span>
            <h3>Judgment & Authority</h3>
            <ul>
              <li>Frames the problem and defines overall objectives</li>
              <li>Supplies values, ethics, and organisational preferences</li>
              <li>Determines risk appetite and acceptable trade-offs</li>
              <li>Formally authorises, communicates, and defends the choice</li>
              <li>Assumes legal, moral, and financial accountability</li>
            </ul>
          </div>
        </div>
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
            <p><strong>Decision hierarchy matters:</strong> Strategic decisions require external data and scenario models; operational decisions rely on internal structured transactions.</p>
          </div>
          <div>
            <span>02</span>
            <p><strong>7-Stage Cycle with Feedback:</strong> Identify → Gather → Analyse → Options → Decide → Approve → Implement. Implementation feeds lessons back into framing.</p>
          </div>
          <div>
            <span>03</span>
            <p><strong>Assess vs Approve:</strong> Models assess alternatives, scenarios, and risks. Models NEVER approve decisions — approval is human authority.</p>
          </div>
          <div>
            <span>04</span>
            <p><strong>External Data is Paramount:</strong> In strategic decision-making, external data is far more critical than internal operational records.</p>
          </div>
          <div>
            <span>05</span>
            <p><strong>Complementary Partnership:</strong> DSS expands the manager’s computational capacity to analyse; it never replaces the manager’s responsibility to choose.</p>
          </div>
        </div>
      </section>

      {/* Dedicated Past Exam Practice (15 Authentic Questions) */}
      <SectionExamPractice
        sectionId="process"
        title="Official Exam Studio · Decision Cycle Practice"
        titleAr="أسئلة وتدريبات الامتحانات السابقة على دورة دعم القرار"
      />

      <SectionFooter id="process" onNavigate={onNavigate} />
    </article>
  )
}
