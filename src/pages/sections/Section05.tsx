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
import { DataPipelineDiagram, OlapCubeDemo, OltpOlapDiagram } from '../../components/diagrams/DataDiagrams'
import { SectionExamPractice } from '../../components/SectionExamPractice'

export function Section05({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  return (
    <article className="learning-page">
      <PageHeader
        number="05"
        eyebrow="From operational records to analytical understanding"
        title="Data-Centered DSS"
        intro="Data-centered DSS turns day-to-day transactions into integrated, historical, subject-oriented analytical data — then lets decision makers view it from many dimensions. This section follows the pipeline from OLTP to ETL to warehouse to OLAP and data mining."
        ar="الـ Data-Centered DSS بيحوّل سيل المعاملات اليومية الروتينية لبيانات تاريخية نظيفة ومنظمة في مخازن بيانات (Data Warehouse) عشان المديرين يقلبوها ويشوفوها من أبعاد مختلفة بمكعبات الـ OLAP. هنا بنمشي الرحلة خطوة بخطوة: OLTP → ETL → Data Warehouse → Data Marts → OLAP & Data Mining."
        meta={
          <>
            <Pill icon="BookOpen">Lectures 2, 5 & 6</Pill>
            <Pill icon="Database" tone="teal">Interactive OLAP Cube</Pill>
            <Pill icon="Clock3" tone="amber">42 min</Pill>
          </>
        }
      />

      <SectionIntro
        objectives={[
          'Differentiate On-Line Transaction Processing (OLTP) from On-Line Analytical Processing (OLAP).',
          'Draw and explain the Data Pipeline schematic: Operational DBs → ETL → Data Warehouse → Data Marts → OLAP.',
          'Memorise the four Inmon characteristics of a Data Warehouse: Subject-oriented, Integrated, Time-variant, Non-volatile.',
          'Classify OLAP cube operations into Viewing (Slice, Dice) and Manipulation (Roll-up, Drill-down, Pivot).',
          'Distinguish OLAP (Hindsight) from Data Mining (Insight) to avoid recurring exam reversal traps.',
          'Design dimensions, measures, and data marts for a university decision support system.',
          'Practice all 36 authentic historical exam questions on data-centered DSS with instant feedback.',
        ]}
        minutes={42}
        sources={['Lecture 6 · slides 3–4', 'Lecture 2 · slides 14–16, 18–19', 'Lecture 5 · slides 6–7, 9']}
        examWeight="Very high · 36 exam questions, recurring data pipeline diagram, and cube operations"
      />

      {/* 5.1 Two Worlds: OLTP vs OLAP */}
      <section className="content-section">
        <div className="subheading">
          <span>5.1 · Two worlds</span>
          <h2>Operational Processing (OLTP) vs Analytical Processing (OLAP)</h2>
        </div>

        <BilingualBlock
          en={
            <p className="lead">
              A transactional database (OLTP) is optimized for high-speed, concurrent, day-to-day operations. An analytical database (OLAP) is optimized for multidimensional, historical queries across years of data. Attempting to run deep managerial queries directly on an operational database slows down customer checkout, causes locking, and produces fragmented answers.
            </p>
          }
          ar={
            <p>
              نظام المعاملات اليومية (OLTP) معمول عشان يسجل فواتير ويخصم من المخزن بسرعة في ثواني. مينفعش تطلب منه تقارير تاريخية ومقارنات سنوية معقدة وهو شغال؛
              ده هيعطل الكاشير ويعمل بطء في السيستم! عشان كده بنفصلهم: بننقل الداتا لبيئة تحليلية خاصة اسمها <strong>OLAP</strong> ومخازن بيانات (Data Warehouse).
            </p>
          }
        />

        <OltpOlapDiagram />

        <ConceptGrid cols={2}>
          <ConceptCard
            badge="OPERATIONAL"
            badgeTone="cyan"
            title="OLTP (On-Line Transaction Processing)"
            titleAr="معالجة المعاملات الفورية (التشغيلية)"
            description="Manages day-to-day business operations. High-volume inserts and updates, current detailed data, normalised relational tables, structured routine tasks."
            ar="السيستم اللي شغال في الفروع: فواتير، مشتريات، تحويلات بنكية. بيانات حالية دقيقة، معاملات سريعة جداً، وجداول علائقية (Relational Tables)."
            tags={['daily operations', 'inserts/updates', 'normalised', 'current data']}
          />
          <ConceptCard
            badge="ANALYTICAL"
            badgeTone="amber"
            title="OLAP (On-Line Analytical Processing)"
            titleAr="المعالجة التحليلية الفورية"
            description="Supports managerial decision making. Read-intensive historical queries, aggregated multidimensional cubes, star/snowflake schemas, semi-structured problems."
            ar="سيستم المديرين والمحللين: بيجمع بيانات سنين فاتت في مكعبات بيانات (Cubes)، قراءة وتجميع وتحليل بدون تعديل روتيني لحظي."
            tags={['decision support', 'historical data', 'multidimensional cube', 'ad-hoc']}
          />
        </ConceptGrid>

        <ExamFocus
          titleEn="OLTP Cannot Properly Handle Analytical Data"
          title="💡 المهم فالامتحان · جملة بتتكرر كل سنة في الـ T/F!"
          ar="في الامتحانات (2018 Midterm, 2023, 2025): بيجي نصاً: 'Analytical data can be properly handled using an on-line transaction processing system (OLTP)' — الإجابة: FALSE قاطعة! لأن الـ OLTP مش مجهز للأبعاد التاريخية والتجميعات الضخمة؛ التعامل الصح مع البيانات التحليلية بيكون عن طريق Data Warehouse وOLAP!"
        >
          <p>
            <strong>Classic Exam Falsehood:</strong>
            <br />
            <em>“Analytical data can be properly handled using an on-line transaction processing system (OLTP).”</em> → <strong>FALSE</strong>.
            <br />
            <strong>Fact:</strong> Analytical data strictly requires a <strong>Data Warehouse</strong> and <strong>OLAP</strong> environment.
          </p>
        </ExamFocus>

        <CompareTable
          caption="Comprehensive Comparison: OLTP vs OLAP (Required in Written Exams)"
          headers={['Dimension', 'OLTP (Operational)', 'OLAP (Analytical)']}
          rows={[
            ['Full Name', 'On-Line Transaction Processing', 'On-Line Analytical Processing'],
            ['Primary User', 'Operational clerks, customer service, lower management', 'Business analysts, data scientists, middle/senior executives'],
            ['System Purpose', 'Run the core day-to-day business activities', 'Analyse business performance to support decisions'],
            ['Data Characteristic', 'Current, real-time, highly granular, normalised', 'Historical, summarised, aggregated, consolidated'],
            ['Database Structure', 'Relational tables (3NF) to prevent write anomalies', 'Multidimensional cubes, Star Schema, Snowflake Schema'],
            ['Workload Type', 'Short, fast, concurrent inserts, updates, and deletes', 'Complex read-only queries scanning millions of historical rows'],
            ['Report Style', 'Scheduled, pre-formatted, standard operational receipts', 'Interactive ad-hoc slice/dice queries and executive dashboards'],
          ]}
        />
      </section>

      {/* 5.2 The Data Pipeline Architecture */}
      <section className="content-section">
        <div className="subheading">
          <span>5.2 · Core exam schematic</span>
          <h2>The End-to-End Data Pipeline Architecture</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              In Final 2016 (D.1), Final 2017 (D.1), Final 2018 (D.1), Final 2020 (D.2), Final 2023 (Q5), and Final 2025 (Q5),
              the examiner consistently asked students to: <em>“Draw a schematic diagram to represent the inter-relationship or dependence between: Operational data, ETL, Data warehouse, Data mart, Data mining, OLAP and Decision maker.”</em>
            </p>
          }
          ar={
            <p>
              السؤال ده هو بطل امتحانات الفاينال بلا منازع: 'ارسم شكل تخطيطي يوضح الاعتمادية والعلاقة بين البيانات التشغيلية، الـ ETL، مخزن البيانات (DW)، وسوق البيانات (Data Mart)، والـ OLAP، والـ Data Mining، ومتخذ القرار'!
            </p>
          }
        />

        <DataPipelineDiagram />

        <ConceptGrid cols={4}>
          <ConceptCard
            badge="STAGE 1"
            badgeTone="cyan"
            title="Operational Data"
            titleAr="البيانات التشغيلية"
            description="Heterogeneous internal OLTP databases, ERP systems, CRM logs, and legacy files capturing daily transactions."
            ar="الأنظمة المختلفة اللي في الفروع: مبيعات، مخازن، مرتبات."
            tags={['ERP', 'CRM', 'OLTP sources']}
          />
          <ConceptCard
            badge="STAGE 2"
            badgeTone="teal"
            title="ETL Pipeline"
            titleAr="المعالجة والتحويل (ETL)"
            description="Extracts data from multiple sources, Transforms (cleans, conforms, deduplicates, aggregates), and Loads into the warehouse."
            ar="استخراج وتحويل وتنظيف وتوحيد المعايير والتحميل لمخزن البيانات."
            tags={['Extract', 'Transform', 'Load', 'Not a DBMS']}
          />
          <ConceptCard
            badge="STAGE 3"
            badgeTone="amber"
            title="Data Warehouse (DW)"
            titleAr="مخزن البيانات المركزي"
            description="The enterprise-wide analytical repository: Subject-oriented, Integrated, Time-variant, and Non-volatile."
            ar="المستودع الرئيسي الشامل للشركة كلها، منظم حسب الموضوع وتاريخي."
            tags={['Enterprise store', 'Inmon 4 properties']}
          />
          <ConceptCard
            badge="STAGE 4"
            badgeTone="purple"
            title="Data Marts"
            titleAr="أسواق البيانات الفرعية"
            description="Department-specific subsets of the warehouse (e.g. Marketing Mart, Finance Mart) built for high-speed local queries."
            ar="أجزاء مخصصة لكل قسم لتسريع التقارير (ماركتنج، مالية، HR)."
            tags={['Departmental', 'faster queries', 'focused']}
          />
        </ConceptGrid>

        <div className="subheading subheading--minor">
          <span>The Four Golden Properties</span>
          <h3>Inmon’s Four Defining Characteristics of a Data Warehouse</h3>
        </div>

        <ConceptGrid cols={2}>
          <ConceptCard
            badge="PROPERTY 1"
            badgeTone="cyan"
            title="Subject-Oriented"
            titleAr="موجه حسب الموضوع (Subject-Oriented)"
            description="Organised around high-level business subjects (Customers, Products, Sales, Students) rather than around individual transaction applications."
            ar="منظم حول الكيانات الكبيرة للبيزنس (العملاء، المبيعات، الفروع) مش حول إجراءات السيستم."
            tags={['business entities', 'customers', 'sales']}
          />
          <ConceptCard
            badge="PROPERTY 2"
            badgeTone="teal"
            title="Integrated"
            titleAr="متكامل وموحد (Integrated)"
            description="Harmonises naming conventions, measurement units, and encoding across disparate operational sources before storage."
            ar="بيوحد الأكواد والوحدات (مثلاً لو فرع كاتب العملة LE وفرع كاتب EGP، الـ ETL يخليهم كود واحد موحد)."
            tags={['conformed', 'unified codes', 'cleaned']}
          />
          <ConceptCard
            badge="PROPERTY 3"
            badgeTone="amber"
            title="Time-Variant"
            titleAr="تاريخي ومتغير بالزمن (Time-Variant)"
            description="Maintains historical snapshots and explicit time dimensions spanning 5 to 10+ years to enable trend analysis and forecasting."
            ar="بيحفظ تاريخ الشركة لخمس أو عشر سنين؛ الداتا القديمة مش بتتمسح لأننا بنحتاجها للمقارنة والتنبؤ."
            tags={['historical snapshots', 'trends', 'time stamps']}
          />
          <ConceptCard
            badge="PROPERTY 4"
            badgeTone="purple"
            title="Non-Volatile"
            titleAr="مستقر وغير متطاير (Non-Volatile)"
            description="Once loaded into the warehouse, data is never modified or deleted through day-to-day transactions. It is read-only for decision analysis."
            ar="البيانات بمجرد دخولها المخزن مبتتعدلش ولا بتتمسح؛ هي للقراءة والتحليل بس، مش للتغيير العشوائي."
            tags={['read-only', 'stable', 'never overwritten']}
          />
        </ConceptGrid>

        <ExamFocus
          titleEn="OLTP vs DW Characteristics Trap"
          title="💡 المهم فالامتحان · فخ خصائص الـ Warehouse!"
          ar="في امتحانات 2023 و2025: بيجي سؤال True/False يقول: 'A transaction-processing database (OLTP) is classified as subject-oriented and time-variant' — الإجابة: FALSE! لأن الـ Subject-oriented والـ Time-variant دول خصائص الـ Data Warehouse؛ الـ OLTP بيكون Application-oriented وبيخزن داتا حالية (Current)!"
        >
          <p>
            <strong>False Statement:</strong> “A transaction-processing database (OLTP) is subject-oriented and time-variant.” → <strong>FALSE</strong>.
            <br />
            <strong>Fact:</strong> <strong>Subject-oriented, integrated, time-variant, and non-volatile</strong> are the hallmarks of a <strong>Data Warehouse</strong>, not OLTP.
          </p>
        </ExamFocus>
      </section>

      {/* 5.3 The Multidimensional OLAP Cube */}
      <section className="content-section content-section--shaded">
        <div className="subheading">
          <span>5.3 · Multidimensional model</span>
          <h2>The OLAP Cube: Dimensions, Measures & Consolidation Paths</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              An OLAP Cube is a conceptual data structure that allows managers to view analytical measures from multiple business angles.
              A numerical measurement (Measure / Fact) sits at the intersection of various descriptive business perspectives (Dimensions).
            </p>
          }
          ar={
            <p>
              مكعب البيانات (OLAP Cube) هو طريقة تفكير وعرض: في قلب المكعب بيكون فيه أرقام قابلة للحساب اسمها <strong>المقاييس (Measures / Facts)</strong> زي إجمالي المبيعات،
              وعلى أوجه المكعب بتكون <strong>الأبعاد (Dimensions)</strong> زي بُعد الزمن، وبُعد المنتج، وبُعد المنطقة الجغرافية.
            </p>
          }
        />

        <div className="cube-vocab">
          <div><span>DIMENSION</span><strong>Time</strong><small>Year → Quarter → Month → Day</small></div>
          <div><span>DIMENSION</span><strong>Product</strong><small>Sector → Category → Product Line → SKU</small></div>
          <div><span>DIMENSION</span><strong>Location</strong><small>Country → Region → City → Branch Store</small></div>
          <div><span>MEASURE</span><strong>Net Revenue</strong><small>Numerical additive fact (EGP / USD)</small></div>
          <div><span>HIERARCHY</span><strong>Consolidation Path</strong><small>Levels used for roll-up & drill-down</small></div>
        </div>

        <OlapCubeDemo />
      </section>

      {/* 5.4 OLAP Operations: Viewing vs Manipulation */}
      <section className="content-section">
        <div className="subheading">
          <span>5.4 · Operations taxonomy</span>
          <h2>OLAP Analytical Operations: Viewing vs Manipulation</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              In Final 2020 (Question D.1), the examiner explicitly asked: <em>“Identify the analytical functions of the on-line analytical process (OLAP) system. Classify the functions into viewing and manipulation operations.”</em>
            </p>
          }
          ar={
            <p>
              في فاينال 2020 جه سؤال مقالي مهم جداً: صنف عمليات الـ OLAP إلى عمليات عرض (Viewing) وعمليات معالجة وتغيير في المستوى (Manipulation)!
            </p>
          }
        />

        <ConceptGrid cols={2}>
          <ConceptCard
            badge="VIEWING OPERATIONS"
            badgeTone="cyan"
            title="Viewing Operations (Filtering Sub-Cubes)"
            titleAr="عمليات العرض وتصفية المكعب"
            description="1. Slice: Cuts the cube along a single dimension by setting it to a specific value (e.g. Sales for Year = 2025 only). Produces a 2D slice.
2. Dice: Selects a sub-cube by specifying a range/subset on two or more dimensions (e.g. 2 Products across 3 Cities in Q1 & Q2)."
            ar="الـ Slice: بنثبت بعد واحد على قيمة واحدة (زي مبيعات سنة 2025 بس).
الـ Dice: بنقص مكعب صغير بتحديد مدى على بعدين أو أكتر (زي مبيعات لابتوبات وموبايلات في القاهرة والإسكندرية خلال أول شهرين)."
            tags={['Slice', 'Dice', 'Sub-cube', 'Viewing']}
          />
          <ConceptCard
            badge="MANIPULATION OPERATIONS"
            badgeTone="amber"
            title="Manipulation Operations (Navigating Detail Levels)"
            titleAr="عمليات المعالجة والتنقل بين مستويات التفاصيل"
            description="1. Roll-up (Consolidation): Aggregates upward along a hierarchy (Month → Quarter → Year).
2. Drill-down (Rolling Down): Navigates down to finer granular detail (Year → Quarter → Month; Region → Store).
3. Pivot (Rotate): Rotates the cube axes to view rows as columns and columns as rows."
            ar="الـ Roll-up: تجميع لأعلى في التسلسل (من شهور لأرباع سنوية لسنة كاملة).
الـ Drill-down: النزول للتفاصيل الدقيقة (من سنة لشهور، أو من دولة لفروع).
الـ Pivot: تدوير أوجه المكعب (خلي المنتجات صفوف والشهور أعمدة)."
            tags={['Roll-up', 'Drill-down', 'Pivot / Rotate', 'Manipulation']}
          />
        </ConceptGrid>

        <div className="subheading subheading--minor">
          <span>OLAP vs Data Mining</span>
          <h3>OLAP (Hindsight) vs Data Mining (Insight)</h3>
        </div>

        <BilingualBlock
          en={
            <p>
              The exam papers across five consecutive years test whether students understand the boundary between OLAP and Data Mining.
            </p>
          }
          ar={
            <p>
              الفرق بين الـ OLAP والـ Data Mining هو فخ متكرر في الامتحانات: الـ OLAP بيوريك أرقام الماضي المعروفة (Hindsight)، أما الـ Data Mining فبيكتشف علاقات وأسرار مستخبية مكنتش تعرفها (Insight)!
            </p>
          }
        />

        <CompareTable
          caption="OLAP vs Data Mining Comparison"
          headers={['Criterion', 'On-Line Analytical Processing (OLAP)', 'Data Mining']}
          rows={[
            ['Core Analytical Goal', 'Summarise and aggregate known historical multidimensional data', 'Discover hidden patterns, associations, clusters, and predictive models'],
            ['User Interaction', 'User-driven: decision maker frames the query and navigates the cube', 'Data/algorithm-driven: machine learning algorithms search for anomalies and rules'],
            ['Managerial Question', '“What were the sales of laptops in Cairo during Q3?”', '“Which customer characteristics predict churn or loan default?”'],
            ['Analytical Lens', 'Hindsight (descriptive reporting)', 'Insight (diagnostic and pattern discovery)'],
            ['Primary Output', 'Multidimensional tables, pivot grids, charts, executive dashboards', 'Association rules, decision trees, cluster segments, neural models'],
          ]}
        />
      </section>

      {/* 5.5 Case Study: University DSS Logical Design */}
      <section className="content-section">
        <div className="subheading">
          <span>5.5 · Design exercise</span>
          <h2>Senior-Management University DSS Data Architecture</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              In Final 2016 (Question D.3), the exam requested: <em>“Identify dimensions, measures, consolidation paths, and data marts for a data-centered DSS for Cairo University senior management.”</em>
            </p>
          }
          ar={
            <p>
              في فاينال 2016 جه سؤال تصميم واقعي: حدد الأبعاد والمقاييس ومسارات التجميع وأسواق البيانات لنظام دعم القرار لجامعة القاهرة:
            </p>
          }
        />

        <div className="university-design">
          <div className="design-column">
            <span className="micro-label">Dimensions (الأبعاد)</span>
            <ul className="marker-list">
              <li><strong>Time Dimension:</strong> Academic Year → Semester → Month</li>
              <li><strong>Organisation Dimension:</strong> University → Faculty → Department → Academic Programme</li>
              <li><strong>Student Dimension:</strong> Degree Level (BSc/MSc/PhD) → Cohort → Major</li>
              <li><strong>Staff Dimension:</strong> Rank (Professor/Lecturer/TA) → Department → Tenure</li>
            </ul>
          </div>
          <div className="design-column">
            <span className="micro-label">Measures / Facts (المقاييس)</span>
            <ul className="marker-list">
              <li>Student Enrollment & Intake counts</li>
              <li>Graduation & Retention rates</li>
              <li>Student-to-Faculty ratio</li>
              <li>Tuition revenues and cost per enrolled student</li>
              <li>Research publication volume and external grants won</li>
            </ul>
          </div>
          <div className="design-column">
            <span className="micro-label">Consolidation Paths (مسارات التجميع)</span>
            <ul className="marker-list">
              <li>Month → Semester → Academic Year</li>
              <li>Department → Faculty → University-wide</li>
              <li>Programme → Departmental Major → College Level</li>
            </ul>
          </div>
          <div className="design-column">
            <span className="micro-label">Data Marts (أسواق البيانات)</span>
            <ul className="marker-list">
              <li><strong>Admissions & Enrollment Mart:</strong> Tracks student applications and intake.</li>
              <li><strong>Financial & Budgeting Mart:</strong> Monitors grants, expenditures, tuition fees.</li>
              <li><strong>Academic Quality Mart:</strong> Accreditation scores and graduation success.</li>
              <li><strong>Faculty & HR Mart:</strong> Teaching loads, salaries, and research output.</li>
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
            <p><strong>OLTP ≠ OLAP:</strong> OLTP manages day-to-day transactions; OLAP performs multidimensional historical decision analysis.</p>
          </div>
          <div>
            <span>02</span>
            <p><strong>The Data Pipeline:</strong> Operational Data → ETL → Data Warehouse → Data Marts → OLAP / Data Mining → Decision Maker.</p>
          </div>
          <div>
            <span>03</span>
            <p><strong>Inmon 4 Properties:</strong> Data Warehouse is Subject-oriented, Integrated, Time-variant, and Non-volatile.</p>
          </div>
          <div>
            <span>04</span>
            <p><strong>Viewing vs Manipulation:</strong> Slice and Dice are Viewing operations; Roll-up, Drill-down, and Pivot are Manipulation operations.</p>
          </div>
          <div>
            <span>05</span>
            <p><strong>OLAP vs Data Mining:</strong> OLAP provides Hindsight on known data; Data Mining provides Insight by discovering hidden patterns.</p>
          </div>
        </div>
      </section>

      {/* Dedicated Past Exam Practice (36 Authentic Questions) */}
      <SectionExamPractice
        sectionId="data-centered"
        title="Official Exam Studio · Data-Centered DSS Practice"
        titleAr="أسئلة وتدريبات الامتحانات السابقة على الـ Data Warehouse وOLAP"
      />

      <SectionFooter id="data-centered" onNavigate={onNavigate} />
    </article>
  )
}
