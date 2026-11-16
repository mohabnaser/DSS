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
import { AiEvolution, SupportSystemMap } from '../../components/diagrams/ProcessDiagrams'
import { SupportHierarchy } from '../../components/diagrams/FoundationDiagrams'
import { SectionExamPractice } from '../../components/SectionExamPractice'

function ExpertSystemDiagram() {
  return (
    <figure className="diagram-frame">
      <div className="diagram-frame__head">
        <h3>Expert System Architecture: Knowledge + Inference Engine</h3>
        <p className="diagram-frame__ar" dir="rtl">
          معمارية النظام الخبير: قاعدة المعرفة (Knowledge Base) + محرك الاستدلال (Inference Engine) + وسيلة التفسير (Explanation Facility)
        </p>
      </div>
      <div className="diagram-frame__canvas">
        <div className="expert-system">
          <div className="expert-system__side">
            <div className="es-actor">DOMAIN EXPERT</div>
            <div className="es-arrow">knowledge acquisition ↓</div>
          </div>
          <div className="expert-system__core">
            <div className="es-row">
              <div className="es-node es-node--user">USER</div>
              <div className="es-arrow">query / facts →</div>
              <div className="es-node es-node--accent">USER INTERFACE</div>
            </div>
            <div className="es-stack">
              <div className="es-node es-node--accent">INFERENCE ENGINE</div>
              <div className="es-link">↕ applies facts to rules</div>
              <div className="es-node es-node--warm">KNOWLEDGE BASE (Rules & Facts)</div>
            </div>
            <div className="es-row es-row--end">
              <div className="es-node es-node--accent">EXPLANATION FACILITY</div>
              <div className="es-arrow">← reasoning / advice</div>
              <div className="es-node es-node--user">DECISION MAKER</div>
            </div>
          </div>
        </div>
      </div>
      <figcaption>
        The Knowledge Base stores facts and heuristics; the Inference Engine reasons with them; the Explanation Facility shows HOW and WHY the system reached a conclusion.
      </figcaption>
    </figure>
  )
}

function BiAnalyticsLadder() {
  const rungs = [
    { label: 'Descriptive Analytics', labelAr: 'التحليل الوصفي', question: 'What happened?', tools: 'Standard reporting · dashboards · OLAP cubes', tone: 'cyan' },
    { label: 'Diagnostic Analytics', labelAr: 'التحليل التشخيصي', question: 'Why did it happen?', tools: 'Drill-down · statistical correlation · data mining', tone: 'teal' },
    { label: 'Predictive Analytics', labelAr: 'التحليل التنبؤي', question: 'What will happen?', tools: 'Forecasting · regression · what-if analysis', tone: 'amber' },
    { label: 'Prescriptive Analytics', labelAr: 'التحليل التوجيهي', question: 'What should we do?', tools: 'Optimisation models · simulation · GAMS solver', tone: 'purple' },
  ]
  return (
    <div className="bi-ladder">
      {rungs.map((rung, index) => (
        <div className={`bi-rung bi-rung--${rung.tone}`} key={rung.label}>
          <span className="bi-rung__n">0{index + 1}</span>
          <div>
            <strong>{rung.label} <small dir="rtl" style={{ color: '#38bdf8', fontFamily: 'var(--font-arabic)' }}>({rung.labelAr})</small></strong>
            <p>{rung.question}</p>
            <small>{rung.tools}</small>
          </div>
        </div>
      ))}
    </div>
  )
}

export function Section03({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  return (
    <article className="learning-page">
      <PageHeader
        number="03"
        eyebrow="MIS, DSS, EIS, ES, GSS, BI and BA"
        title="Computer-Aided Management Support Systems"
        intro="The support-system family is easy to blur. This section separates the systems by user, data, analytical power, decision type and management level — and shows how they connect rather than compete."
        ar="فيه عائلة كاملة من أنظمة دعم الإدارة: MIS وDSS وEIS وES وGDSS وBI. كل نظام ليه جمهور ومستوى إداري ونوع تحليل مختلف. هنا هنفك الاشتباك بينهم بجدول المقارنة الذهبي اللي بيجي في الامتحان كل سنة، ونفهم إزاي بيكملوا بعض."
        meta={
          <>
            <Pill icon="BookOpen">Lecture 6 · slides 2–15, 20</Pill>
            <Pill icon="Network" tone="teal">Comparison & Table Heavy</Pill>
            <Pill icon="Clock3" tone="amber">34 min</Pill>
          </>
        }
      />

      <SectionIntro
        objectives={[
          'Master the 6-criterion comparison table between MIS, DSS, and EIS required in past exams.',
          'Differentiate Executive Information Systems (EIS) from Enterprise Information Systems and MIS.',
          'Understand Expert Systems (ES): Knowledge Base, Inference Engine, and Explanation Facility.',
          'Define Group Decision Support Systems (GDSS) and the role of specialized Groupware software.',
          'Trace Business Intelligence (BI) and Business Analytics (BA) from descriptive to prescriptive power.',
          'Practice all 27 authentic past exam questions on management support systems with instant feedback.',
        ]}
        minutes={34}
        sources={['Lecture 6 · slides 2–15, 20', 'Lecture 2 · slides 14–20', 'Lecture 5 · slides 8–10']}
        examWeight="Very high · The 6-criterion table and T/F traps appear on every single past paper"
      />

      {/* 3.1 The Support System Family */}
      <section className="content-section">
        <div className="subheading">
          <span>3.1 · System landscape</span>
          <h2>The Umbrella of Management Support Systems</h2>
        </div>

        <BilingualBlock
          en={
            <p className="lead">
              The lecturer groups all computer-aided decision support tools under analytically oriented management systems.
              Beneath this umbrella sit three distinct tiers: Operational Management (MIS), Tactical Decision Support (DSS),
              and Strategic Leadership (EIS/ESS), flanked by Knowledge-Based Systems (ES) and Group Collaboration (GDSS).
            </p>
          }
          ar={
            <p>
              المحاضرة بتحط كل أدوات دعم القرار تحت مظلة نظم الإدارة المعتمدة على التحليل. المظلة دي بتضم 3 مستويات رئيسية:
              تحت خالص للعمليات (MIS)، في النص للتحليل التكتيكي (DSS)، وفوق للرؤية الاستراتيجية (EIS). وجنبهم النظم الخبيرة (ES) لحفظ الخبرات، ونظم دعم الجماعة (GDSS) للاجتماعات وتصويت الفرق.
            </p>
          }
        />

        <SupportSystemMap />
        <SupportHierarchy />

        <PictureIt
          title="💡 PICTURE IT · تخيلها كده: قيادة مستشفى ضخم"
          ar="في مستشفى كبير: نظام الـ MIS هو سجلات الدخول والخروج وفواتير الأدوية اليومية (تقارير روتينية). الـ DSS هو برنامج تخطيط العمليات وجداول غرف العناية المركزة وحساب التكاليف ونماذج ماذا-لو (تحليل ونماذج وبدائل). الـ EIS هو لوحة تحكم رئيس مجلس الإدارة اللي بتوريه نسبة إشغال الأسرة، تدفق السيولة، ومقارنة المستشفى بالمنافسين (Dashboard استراتيجي سريع مع Drill-down). التلاتة بيكملوا بعض!"
        >
          <p>
            In a large hospital: MIS manages billing and daily patient admittance logs (structured routine reports).
            DSS helps operations managers balance intensive-care bed capacity, staffing shifts, and supply budgets (models and what-if scenarios).
            EIS provides the Hospital CEO with an executive dashboard tracking mortality rates, financial liquidity, and regulatory compliance benchmarks (strategic external + internal summary).
          </p>
        </PictureIt>
      </section>

      {/* 3.2 The Ultimate Exam Comparison: MIS vs DSS vs EIS */}
      <section className="content-section">
        <div className="subheading">
          <span>3.2 · Core exam table</span>
          <h2>MIS vs DSS vs EIS: The Six Crucial Criteria</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              In the Midterm 2018 exam (Question A.1), the examiner explicitly asked: <em>“Compare briefly the Management Information System (MIS), Decision Support System (DSS), and Executive Information System (EIS) under the six headings: type of reports, database model, modelling capability, management level, sources of data, and decision type. State titles only without explanation.”</em>
            </p>
          }
          ar={
            <p>
              السؤال ده جه في امتحان الميدتيرم 2018 (وكان عليه 20 درجة!) بنص صريح: قارن بين MIS وDSS وEIS من حيث 6 عناصر محددة. الجدول ده لازم تحفظه زي اسمك، لأن كمان بيتبني عليه أكتر من 15 سؤال صح وغلط في الفاينال!
            </p>
          }
        />

        <CompareTable
          caption="The Mandatory 6-Criterion Comparison Grid (MIS vs DSS vs EIS)"
          headers={['Heading / Criterion', 'Management Information System (MIS)', 'Decision Support System (DSS)', 'Executive Information System (EIS)']}
          rows={[
            [
              '1. Type of reports',
              'Planned / scheduled periodic standard reports',
              'Ad-hoc, interactive, flexible, model-based queries',
              'Executive dashboards, visual briefings, exception reports, drill-down',
            ],
            [
              '2. Database model',
              'Relational transactional database (OLTP)',
              'Analytical database, Data Warehouse, multidimensional cubes, model base',
              'Integrated internal/external data store, executive presentation layer, warehouse backend',
            ],
            [
              '3. Modelling & analytical capability',
              'Few or simple application programs (standard math/billing)',
              'Strong analytical and quantitative modelling (optimisation, simulation, what-if)',
              'Simple but powerful: forecasting indicators, scenario summary, front-end to DSS models',
            ],
            [
              '4. Management level',
              'Lower and middle management',
              'Middle and senior management',
              'Top / senior executives exclusively',
            ],
            [
              '5. Sources of data',
              'Mainly internal operational transactional data',
              'Internal records and external market/industry data',
              'Internal and external, with heavy emphasis on external strategic intelligence',
            ],
            [
              '6. Problem / decision type',
              'Structured, repetitive, programmable decisions',
              'Semi-structured and unstructured decision problems',
              'Unstructured, long-term strategic decisions',
            ],
          ]}
        />

        <ConceptGrid cols={3}>
          <ConceptCard
            badge="REPORTING"
            badgeTone="cyan"
            title="MIS"
            titleAr="نظم المعلومات الإدارية"
            description="Focuses on scheduled standard reports and relational databases. Lower/middle management; structured routine decisions."
            ar="تقارير دورية مجدولة، داتا داخلية، برامج حسابية بسيطة، لقرارات تشغيلية متكررة."
            tags={['scheduled reports', 'OLTP', 'structured']}
          />
          <ConceptCard
            badge="ANALYTICS"
            badgeTone="amber"
            title="DSS"
            titleAr="نظم دعم القرار"
            description="Features strong quantitative modelling (LP, simulation, what-if). Middle/senior management; semi-structured decisions."
            ar="نماذج رياضية قوية، سيناريوهات ماذا-لو، داتا ويرهاوس، لقرارات شبه مهيكلة."
            tags={['what-if', 'models', 'semi-structured']}
          />
          <ConceptCard
            badge="DASHBOARDS"
            badgeTone="teal"
            title="EIS"
            titleAr="نظم المعلومات التنفيذية"
            description="Provides top executives with instant visual dashboards, drill-down, and heavy external intelligence for unstructured choices."
            ar="شاشات تفاعلية للإدارة العليا، تركيز على البيئة الخارجية، ودريل داون للوصول للتفاصيل."
            tags={['top executives', 'drill-down', 'external data']}
          />
        </ConceptGrid>

        <ExamFocus
          titleEn="Classic T/F Reversals on MIS vs DSS vs EIS"
          title="💡 المهم فالامتحان · أشهر 3 فخاخ في هذا الجزء!"
          ar="1) فخ الـ MIS المرتدي قناع الـ DSS: يقولك 'DSS is used to support reporting and database-related capabilities along with few or simple analytical capabilities' — ده تعريف الـ MIS مش الـ DSS، فالإجابة FALSE فوراً! الـ DSS بيتميز بـ Strong analytical models!
2) فخ مستوى الـ EIS: يقولك 'EIS is generally used to support middle management' — طبعاً FALSE! الـ EIS معمولة حصرياً للـ Top/Senior Executives!
3) فخ البيانات الخارجية في الـ EIS: يقولك 'In EIS, external data are not strongly needed' — FALSE مكررة! الـ EIS بتعتمد بشكل مكثف على الـ External Data!"
        >
          <p>
            <strong>Trap 1:</strong> “DSS is used to support reporting with few or simple analytical tools.” → <strong>FALSE</strong> (This defines MIS).
            <br />
            <strong>Trap 2:</strong> “Executive Information Systems (EIS) are generally used to support middle management.” → <strong>FALSE</strong> (EIS is built for top executives).
            <br />
            <strong>Trap 3:</strong> “In an EIS, external data are not strongly needed.” → <strong>FALSE</strong> (External data is the lifeblood of executive strategy).
          </p>
        </ExamFocus>
      </section>

      {/* 3.3 EIS vs Enterprise Information System */}
      <section className="content-section">
        <div className="subheading">
          <span>3.3 · Scope differentiation</span>
          <h2>Executive Information System (EIS) vs Enterprise Information System</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              In Final 2020 (Question B.2), students were asked to identify the main differences between an Executive Information System (EIS)
              and an Enterprise Information System. The two sounds similar, but their scope and purpose are vastly different.
            </p>
          }
          ar={
            <p>
              في فاينال 2020 جه سؤال مقالي مباشر: ما الفرق بين Executive Information System (EIS) و Enterprise Information System؟
              التشابه في الاسم بيلخبط، لكن الـ EIS مخصصة لشخص أو مكتب المدير التنفيذي بنظرة استراتيجية مركزة، بينما نظام المؤسسة (Enterprise IS) ده سيستم عملاق على مستوى الشركة كلها (زي SAP أو ERP) بيخدم كل المستويات التشغيلية والإدارية.
            </p>
          }
        />

        <CompareTable
          caption="EIS vs Enterprise Information System (Direct Exam Answer)"
          headers={['Dimension', 'Executive Information System (EIS)', 'Enterprise Information System (Corporate-wide / ERP)']}
          rows={[
            ['Target Audience', 'Top / senior executives exclusively', 'All management levels across all corporate departments'],
            ['Scope of Coverage', 'Strategic indicators, exception reports, external environment', 'Holistic, integrated transactional and operational data across the whole enterprise'],
            ['Decision Horizon', 'Long-term strategic decisions', 'Operational, tactical, and strategic execution'],
            ['Architecture', 'High-level presentation layer; often acts as a front-end to DSS/DW', 'Extensive integrated suite of transaction systems, ERP modules, and shared databases'],
            ['Information Delivery', 'Visual dashboards, graphical briefings, drill-down capabilities', 'Structured transactional processing, cross-department workflows, corporate governance'],
          ]}
        />

        <div className="callout-pair">
          <Callout tone="note" title="ESS = EIS + Communication & Analytics">
            An <strong>Executive Support System (ESS)</strong> is a comprehensive extension of EIS that adds electronic communications, office automation, scenario simulation, and business intelligence.
          </Callout>
          <Callout tone="insight" title="EIS as a Front-End to DSS">
            Top executives rarely write GAMS code or tune optimization parameters. An EIS provides a clean dashboard front-end that triggers underlying DSS models invisibly.
          </Callout>
        </div>
      </section>

      {/* 3.4 Expert Systems: Knowledge & Inference */}
      <section className="content-section">
        <div className="subheading">
          <span>3.4 · Knowledge-centered branch</span>
          <h2>Expert Systems (ES): Reasoning with Rules & Expertise</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              An <strong>Expert System (ES)</strong> is an AI software system designed to mimic or simulate human expert decision making in a narrow domain.
              Unlike data-centered systems that count facts, an Expert System reasons with rules (heuristics).
            </p>
          }
          ar={
            <p>
              الـ <strong>Expert System</strong> هو برنامج ذكاء اصطناعي بيحاكي تفكير وخبرة خبير بشري في مجال محدد (زي تشخيص الأعطال أو تقييم القروض).
              مش مجرد جمع أرقام، ده بيطبق قواعد (IF-THEN Rules) عشان يستنتج حلول ويفسر سبب القرار.
            </p>
          }
        />

        <ExpertSystemDiagram />

        <ConceptGrid cols={3}>
          <ConceptCard
            badge="COMPONENT 1"
            badgeTone="amber"
            title="Knowledge Base"
            titleAr="قاعدة المعرفة"
            description="Contains both domain facts and expert heuristics represented primarily as IF-THEN production rules and taxonomies."
            ar="بتحتوي على الحقائق وقواعد الخبرة (IF condition THEN action) اللي تم استخلاصها من الخبراء."
            tags={['rules', 'facts', 'heuristics']}
          />
          <ConceptCard
            badge="COMPONENT 2"
            badgeTone="cyan"
            title="Inference Engine"
            titleAr="محرك الاستدلال"
            description="The reasoning brain: applies logical rules to current problem data using forward chaining (data-driven) or backward chaining (goal-driven)."
            ar="عقل النظام: بيمشي ورا القواعد ويطبقها على معطيات الحالة عشان يوصل لاستنتاج منطقي."
            tags={['reasoning', 'forward/backward chaining']}
          />
          <ConceptCard
            badge="COMPONENT 3"
            badgeTone="teal"
            title="Explanation Facility"
            titleAr="أداة التفسير والتعليل"
            description="Enables the user to ask 'HOW was this conclusion reached?' and 'WHY is this fact needed?', making AI transparent."
            ar="بتمكّن المستخدم يسأل النظام: 'إنت وصلت للحل ده إزاي؟' و'ليه بتطلب مني المعلومة دي؟' فتكسب ثقة الإدارة."
            tags={['transparency', 'how/why explanations']}
          />
        </ConceptGrid>

        <div className="subheading subheading--minor">
          <span>AI Evolution in Management Support</span>
          <h3>From Rule-Based Expert Systems to Generative AI</h3>
        </div>
        <AiEvolution />
      </section>

      {/* 3.5 Collaboration & Analytics: GDSS, BI, BA */}
      <section className="content-section">
        <div className="subheading">
          <span>3.5 · Teams and intelligence</span>
          <h2>GDSS, Business Intelligence (BI) & Business Analytics (BA)</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              When decisions exceed individual authority, organisations turn to <strong>Group Decision Support Systems (GDSS)</strong>.
              A GDSS combines standard DSS models with specialized collaborative software called <strong>Groupware</strong>.
            </p>
          }
          ar={
            <p>
              لما القرار يكون مصيري ومحتاج إجماع فريق أو مجلس إدارة، بنستخدم نظم دعم قرارات الجماعة (GDSS). النظام ده مينفعش يشتغل بالـ DSS العادي؛ لازم برمجيات جماعية متخصصة اسمها <strong>Groupware</strong> بتدير النقاش والتصويت وسرية الآراء.
            </p>
          }
        />

        <ConceptGrid cols={2}>
          <ConceptCard
            badge="GROUPWARE"
            badgeTone="purple"
            title="What Groupware Adds to DSS"
            titleAr="إضافات برمجيات العمل الجماعي"
            description="Electronic brainstorming, anonymous idea ranking, weighted voting, shared screen workspace, automated meeting minutes, and group institutional memory."
            ar="العصف الذهني الإلكتروني، التصويت السري بدون حرج أو ضغوط اجتماعية، شاشات مشتركة، وتسجيل القرارات في ذاكرة المؤسسة."
            tags={['brainstorming', 'voting', 'anonymity', 'groupware']}
          />
          <ConceptCard
            badge="ANALYTICS"
            badgeTone="teal"
            title="Business Intelligence (BI) Framing"
            titleAr="مفهوم ذكاء الأعمال في الامتحانات"
            description="In the lecturer's framing (Final 2020 MCQ), BI is defined as a data-centered DSS equipped with what-if analysis, data mining, and multidimensional OLAP."
            ar="في امتحان 2020 اتعرف الـ BI بأنه: Data-centered DSS مزود بأدوات What-if analysis والـ Data Mining والتنقيب عن المعرفة."
            tags={['data-centered', 'what-if', 'data mining']}
          />
        </ConceptGrid>

        <ExamFocus
          titleEn="GDSS Requires Additional Software System"
          title="💡 المهم فالامتحان · سؤال متكرر بالحرف!"
          ar="في امتحانات 2018 Midterm, 2018 Final, 2023, 2025: بيجي نصاً: 'Group decision support systems (GDSS) generally need additional software system' — الإجابة: TRUE مؤكدة! والبرنامج الإضافي ده اسمه Groupware وهو اللي بيميز الـ GDSS عن الـ DSS الفردي!"
        >
          <p>
            <strong>Recurring True Statement:</strong> “Group Decision Support Systems (GDSS) generally require an additional software system.” → <strong>TRUE</strong>.
            The required additional software is <strong>Groupware</strong> (facilitating electronic brainstorming, voting, and communication).
          </p>
        </ExamFocus>

        <div className="subheading subheading--minor">
          <span>The Analytics Ladder</span>
          <h3>Descriptive → Diagnostic → Predictive → Prescriptive</h3>
        </div>
        <BiAnalyticsLadder />
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
            <p><strong>The Core 6 Criteria:</strong> MIS (scheduled, relational, simple math); DSS (ad-hoc, warehouse/model base, strong models); EIS (dashboards, external data, top executives).</p>
          </div>
          <div>
            <span>02</span>
            <p><strong>EIS is not for middle managers:</strong> EIS is exclusively designed for top/senior executives dealing with unstructured strategic horizons.</p>
          </div>
          <div>
            <span>03</span>
            <p><strong>Expert System Anatomy:</strong> Knowledge Base (rules & facts) + Inference Engine (reasoning) + Explanation Facility (transparency).</p>
          </div>
          <div>
            <span>04</span>
            <p><strong>GDSS needs Groupware:</strong> Moving from individual DSS to GDSS strictly requires collaborative groupware for voting, brainstorming, and anonymity.</p>
          </div>
          <div>
            <span>05</span>
            <p><strong>BI Definition in Exams:</strong> Business Intelligence is viewed as an advanced data-centered DSS combining data warehousing with what-if analysis and data mining.</p>
          </div>
        </div>
      </section>

      {/* Dedicated Past Exam Practice (27 Authentic Questions) */}
      <SectionExamPractice
        sectionId="support-systems"
        title="Official Exam Studio · Support Systems Practice"
        titleAr="أسئلة وتدريبات الامتحانات السابقة على عائلة نظم دعم الإدارة"
      />

      <SectionFooter id="support-systems" onNavigate={onNavigate} />
    </article>
  )
}
