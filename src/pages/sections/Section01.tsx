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
} from '../../components/ui'
import { SectionFooter } from '../../components/SectionFooter'
import {
  DataKnowledgeFlow,
  DevelopmentPath,
  HindsightInsightForesight,
  VUCAFramework,
} from '../../components/diagrams/FoundationDiagrams'
import { SectionExamPractice } from '../../components/SectionExamPractice'

export function Section01({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  return (
    <article className="learning-page">
      <PageHeader
        number="01"
        eyebrow="Why computer-aided decision support exists"
        title="Foundations of Decision Support"
        intro="Before software, before models and before GAMS, there is a manager facing a messy, high-stakes choice. This section builds the vocabulary that the rest of the course depends on: decisions, data, information, knowledge, judgment and the three analytical lenses."
        ar="قبل أي software أو model، فيه manager واقف قدام قرار مش واضح وعالي الخطورة. هنا بنبني الأساس: يعني إيه data وinformation وknowledge، وإزاي بنفرق بين hindsight وinsight وforesight، وليه القرار بيحتاج judgment بشري مش بس أرقام."
        meta={
          <>
            <Pill icon="BookOpen">Lectures 1, 2 & 5</Pill>
            <Pill icon="GraduationCap" tone="amber">Exam vocabulary & T/F</Pill>
            <Pill icon="Clock3" tone="teal">28 min</Pill>
          </>
        }
      />

      <SectionIntro
        objectives={[
          'Explain why knowledge-era decision environments need scientific and computer-aided support.',
          'Distinguish data, information and knowledge, including explicit and tacit knowledge.',
          'Use the hindsight–insight–foresight lens to connect managerial questions to analytical tools.',
          'Map the development path of DSS from data-centered to knowledge-based and business analytics.',
          'Practice all authentic historical exam questions on DSS foundations with instant feedback.',
        ]}
        minutes={28}
        sources={['Lecture 1 · slides 1–8', 'Lecture 2 · slides 1–12', 'Lecture 5 · slides 2–7']}
        examWeight="High · Recurring definitions, T/F reversals, and linkages"
      />

      {/* 1.1 The Core Problem */}
      <section className="content-section">
        <div className="subheading">
          <span>1.1 · The problem</span>
          <h2>Why can’t a manager simply “use intuition”?</h2>
        </div>

        <BilingualBlock
          en={
            <p className="lead">
              Imagine the senior management team of a university choosing next year’s programme mix. They must consider
              labour-market demand, student demand, staff capacity, accreditation, budget, equity and long-term reputation.
              There is no single formula that says “open these programmes.” Yet the choice is too consequential to make
              from memory and gut feeling alone.
            </p>
          }
          ar={
            <p>
              تخيل إدارة جامعة بتحدد إيه البرامج الأكاديمية الجديدة اللي هتفتحها السنة الجاية. عندهم طلب سوق العمل، رغبات الطلاب،
              طاقة الدكاترة، الميزانية، والسمعة الأكاديمية. مفيش معادلة سحرية تدوس عليها تطلعلك “افتح كذا”. وفي نفس الوقت، القرار
              خطير جداً ومينفعش يتاخد بمجرد “الإحساس” أو التخمين!
            </p>
          }
        />

        <BilingualBlock
          en={
            <p>
              This is the space a <strong>Decision Support System (DSS)</strong> occupies. It does not replace the human manager.
              It helps the decision maker understand the situation, generate alternatives, evaluate consequences and
              defend a choice. The lecturer defines managerial decision making in a clean equation:
            </p>
          }
          ar={
            <p>
              هنا بالظبط بييجي دور الـ <strong>DSS</strong>: الكمبيوتر مش بياخد القرار بدالك ولا بيلغي المدير، وظيفته يديك
              أدوات تفهم بيها الموقف، يقترح بدائل، ويحسب عواقب كل اختيار عشان تقدر تدافع عن قرارك بالأدلة.
            </p>
          }
        />

        <div className="formula-strip formula-strip--wide">
          <span>INFORMATION</span><b>+</b><span>JUDGMENT</span><b>→</b><span className="formula-strip__accent">DECISION</span>
          <i>then, with experience & expertise:</i>
          <span>INFORMATION</span><b>+</b><span>KNOWLEDGE</span><b>+</b><span>JUDGMENT / EXPERTISE</span><b>→</b><span className="formula-strip__accent">DECISION</span>
        </div>

        <div className="subheading subheading--minor">
          <span>The forces behind the need</span>
          <h3>Five pressures that make unaided judgment insufficient</h3>
        </div>

        <ConceptGrid cols={3}>
          <ConceptCard
            badge="01 · SPEED"
            badgeTone="cyan"
            title="Rapid, Accelerated Change"
            titleAr="تغير متسارع ومستمر"
            description="Knowledge society, the fourth industrial revolution and digital transformation alter market conditions while decisions are being executed."
            ar="الثورة الصناعية الرابعة والتحول الرقمي بيغيروا قواعد اللعبة وقرارات المنافسين في لحظات."
            tags={['digital economy', 'fast volatility']}
          />
          <ConceptCard
            badge="02 · RISK"
            badgeTone="amber"
            title="Risk & Uncertainty"
            titleAr="مخاطر عالية وعدم يقين"
            description="Pandemics, geopolitical instability, inflation and climate shocks create discontinuities that simple extrapolation from the past cannot capture."
            ar="أزمات زي الأوبئة والحروب بتخلي التوقع البسيط من بيانات الماضي مش كفاية لوحده."
            tags={['shocks', 'unpredictability']}
          />
          <ConceptCard
            badge="03 · OPTIONS"
            badgeTone="teal"
            title="Multiplicity of Alternatives"
            titleAr="تعدد وبدائل لا نهائية"
            description="Should we invest in human talent, tangible production capacity, software automation, or partnerships? The feasible option space is massive."
            ar="المدير قدامه بدائل كتيرة جداً ومحتاج أدوات تحسبله تكلفة وعائد كل خيار."
            tags={['option space', 'trade-offs']}
          />
          <ConceptCard
            badge="04 · CONFLICT"
            badgeTone="purple"
            title="Conflicting Evaluation Criteria"
            titleAr="معايير متضاربة ومتعارضة"
            description="High quality vs low cost; maximum profit vs social equity and sustainability. There is rarely a single metric that pleases all stakeholders."
            ar="عايز أعلى جودة بس بأقل تكلفة، وعايز سرعة بس بأمان كامل. مفيش هدف واحد بيرضي الكل."
            tags={['multi-criteria', 'stakeholders']}
          />
          <ConceptCard
            badge="05 · IMPACT"
            badgeTone="cyan"
            title="Diversified Impacts & Spillovers"
            titleAr="آثار مباشرة وغير مباشرة"
            description="A policy change ripples through suppliers, consumers, regulations and employee morale through economic multipliers."
            ar="أي قرار مش بيأثر بس على قسم واحد، ده بيسمع في سلسلة الإمداد وسلوك العملاء والاقتصاد كله."
            tags={['multipliers', 'ripple effect']}
          />
          <ConceptCard
            badge="EXAM RULE"
            badgeTone="amber"
            title="Analysis = Level + Horizon"
            titleAr="نوع التحليل بيعتمد على مستوى القرار"
            description="The appropriate analytical tool depends on the decision level (Strategic, Tactical, Operational) and the time horizon."
            ar="الامتحان دايماً بيسأل: هل القرار استراتيجي ولا تكتيكي ولا تشغيلي؟ لأن البيانات والموديل بيختلفوا تماماً."
            tags={['strategic', 'operational']}
          />
        </ConceptGrid>

        <ExamFocus
          titleEn="Strategic vs Operational Decisions"
          title="💡 المهم فالامتحان · نوع القرار والبيانات المطلوبة"
          ar="السؤال ده اتكرر في 2018 و2019 و2020 و2023 و2025! في القرار الاستراتيجي (Strategic): البيانات الخارجية (External Data) من السوق والمنافسين ورأي الخبراء أهم بكتير من مجرد البيانات الداخلية (Internal Data)! وبيجي سؤال True/False يقولك: In Strategic decision making, external data are not strongly needed — وطبعاً الإجابة FALSE فوراً!"
        >
          <p>
            In <strong>Strategic decision-making</strong> (long-term, unstructured), <strong>External Data</strong> and expert opinion are
            far more critical than internal transactional records. In <strong>Operational decisions</strong> (short-term, structured),
            internal transactional data dominates.
          </p>
        </ExamFocus>

        <CompareTable
          caption="Decision level determines the horizon, structure, and required data"
          headers={['Decision level', 'Horizon', 'Structure', 'Dominant data', 'Typical DSS support']}
          rows={[
            ['Strategic', 'Long-term (years)', 'Unstructured / non-programmed', 'External + internal + expert opinion', 'EIS, scenario analysis, simulation, AHP'],
            ['Tactical / management control', 'Medium-term (months)', 'Semi-structured', 'Internal + external', 'DSS, optimisation, forecasting models, budgeting'],
            ['Operational', 'Short-term (days/weeks)', 'Structured / programmable', 'Internal transactional records', 'MIS, TPS reports, operational dashboards'],
          ]}
        />
      </section>

      {/* 1.2 VUCA World */}
      <section className="content-section">
        <div className="subheading">
          <span>1.2 · The environment</span>
          <h2>VUCA: the modern decision landscape</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              The lecturer characterises the 21st-century decision environment using the military-derived acronym <strong>VUCA</strong>.
              VUCA is not a mathematical formula; it is a conceptual lens explaining why simple static reporting is completely inadequate for modern leadership.
            </p>
          }
          ar={
            <p>
              المحاضرة بتوصف بيئة الأعمال بـ <strong>VUCA</strong>. ده مش موديل حسابي، ده تشخيص للواقع الصعب اللي المديرين عايشين فيه، وبيوضح ليه مجرد تقرير Excel قديم مينفعش يوجّه شركة!
            </p>
          }
        />

        <VUCAFramework />

        <PictureIt
          title="💡 PICTURE IT · تخيلها كده: قيادة سفينة في عاصفة"
          ar="تخيل إنك قبطان سفينة في المحيط: الـ Data هي قراءات العدادات دلوقتي، والـ VUCA هي العاصفة والأمواج العالية والضباب. لو اعتمدت بس على تقرير بيقول الجو كان إيه إمبارح (Hindsight)، السفينة هتغرق! أنت محتاج رادار يكشف اللي بيحصل ورا الضباب (Insight) وموديل تنبؤ يحسب أفضل مسار آمن في الساعات الجاية (Foresight)."
        >
          <p>
            Operating in a VUCA environment is like navigating through heavy fog in open waters. A rear-view mirror only tells you where you were.
            You need active radar (insights into hidden obstacles) and forward predictive simulation (foresight to chart the safest route).
          </p>
        </PictureIt>
      </section>

      {/* 1.3 Data, Information, Knowledge */}
      <section className="content-section">
        <div className="subheading">
          <span>1.3 · The hierarchy</span>
          <h2>Data, Information & Knowledge: Distinct Layers</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              Data, information and knowledge are frequently confused in everyday speech, but DSS treats them as a value-adding cognitive chain.
              Moving from data to knowledge transforms raw measurements into actionable power.
            </p>
          }
          ar={
            <p>
              في الكلام العادي الناس بتخلط بين الداتا والمعلومات والمعرفة، لكن في الـ DSS دول 3 درجات سلم ورا بعض؛ كل خطوة بتضيف قيمة ومعنى وتخليك قادر تاخد قرار صح:
            </p>
          }
        />

        <DataKnowledgeFlow />

        <ConceptGrid cols={3}>
          <ConceptCard
            badge="RAW FACTS"
            badgeTone="default"
            title="Data"
            titleAr="البيانات الخام"
            description="Raw, uncontextualised measurements, numbers or transaction logs. On their own, they have no interpretation and suggest no decision."
            ar="أرقام وقياسات مجردة من غير سياق؛ زي: 25, 400, 12-08. متقدرش تفهم منها قرار."
            tags={['unprocessed', 'facts', 'records']}
          />
          <ConceptCard
            badge="ORGANIZED"
            badgeTone="cyan"
            title="Information"
            titleAr="المعلومات المنظمة"
            description="Data placed in context, classified, structured or computed. It gives meaning: 'Sales dropped 12% in Cairo while Alexandria grew 4%'."
            ar="بيانات حطيناها في سياق ورتبناها: 'مبيعات فرع المعادي نزلت 12% وفرع الإسكندرية زاد 4%'."
            tags={['contextual', 'structured', 'meaning']}
          />
          <ConceptCard
            badge="ACTIONABLE"
            badgeTone="amber"
            title="Knowledge"
            titleAr="المعرفة والقدرة على الفعل"
            description="Actionable understanding combining information with experience, rules and context: 'Alexandria grew due to discount campaigns; apply that campaign in Cairo'."
            ar="فهم عميق يربط المعلومة بالسبب وطريقة التصرف: 'فرع الإسكندرية زاد عشان عملنا عروض ترويجية، كرر العرض في المعادي'."
            tags={['actionable', 'expertise', 'rules']}
          />
        </ConceptGrid>

        <div className="subheading subheading--minor">
          <span>Explicit vs Tacit</span>
          <h3>Explicit Knowledge vs Tacit (Implicit) Knowledge</h3>
        </div>

        <BilingualBlock
          en={
            <p>
              The lecturer draws a critical division within knowledge itself: what can be committed to a hard drive versus what resides only in human brains.
            </p>
          }
          ar={
            <p>
              المحاضرة بتقسم المعرفة لنوعين، والامتحان بيعشق المقارنة دي: المعرفة الصريحة (Explicit) اللي نقدر نكتبها ونخزنها، والمعرفة الضمنية (Tacit) اللي جوه عقول الخبراء وتجاربهم!
            </p>
          }
        />

        <ConceptGrid cols={2}>
          <ConceptCard
            badge="CAN BE STORED"
            badgeTone="teal"
            title="Explicit Knowledge"
            titleAr="المعرفة الصريحة (المكتوبة والمخزنة)"
            description="Objective, rational and codifiable knowledge. Can be classified, written down in manuals, stored in databases, and programmed into rule bases."
            ar="معرفة منظمة نقدر نكتبها ونحطها في كتب وتقارير وقواعد بيانات وExpert Systems."
            tags={['documents', 'rules', 'databases']}
          />
          <ConceptCard
            badge="HUMAN EXPERIENCE"
            badgeTone="purple"
            title="Tacit (Implicit) Knowledge"
            titleAr="المعرفة الضمنية (الخبرة البشرية)"
            description="Subjective, cognitive and experiential insight. Highly personal, difficult to articulate, cannot be easily classified or stored in digital files."
            ar="حكمة وخبرة متراكمة عند الخبير (زي فراسة الطبيب أو إحساس المدير بالسوق). مستحيل تلخصها بسهولة في ملف Excel أو قاعدة بيانات."
            tags={['experience', 'intuition', 'mentoring']}
          />
        </ConceptGrid>

        <ExamFocus
          titleEn="Tacit Knowledge Storage Trap"
          title="💡 المهم فالامتحان · سؤال متكرر بالحرف!"
          ar="سؤال امتحان نصي بيتكرر: 'Tacit Knowledge can be easily classified, documented and stored' — الإجابة: FALSE كبرى! الـ Tacit صعب جداً تصنيفها أو تخزينها إلكترونياً لأنها خبرة شخصية؛ اللي بيتصنف ويتخزن بسهولة هو الـ Explicit Knowledge!"
        >
          <p>
            <strong>False Statement alert:</strong> “Tacit knowledge can be easily classified, documented and stored.”
            <strong> Correct reality:</strong> Explicit knowledge is easily documented. Tacit knowledge is subjective, intuitive, and deeply tied to human experience.
          </p>
        </ExamFocus>

        <CompareTable
          caption="Detailed comparison: Explicit vs Tacit knowledge"
          headers={['Dimension', 'Explicit Knowledge', 'Tacit (Implicit) Knowledge']}
          rows={[
            ['Nature', 'Objective, rational, technical', 'Subjective, cognitive, experiential'],
            ['Articulability', 'Easily articulated in words, numbers, and diagrams', 'Difficult to formalise and articulate; often subconscious'],
            ['Storage', 'Can be classified, documented, coded and stored in knowledge bases', 'Resides in human minds; hard to capture in electronic files'],
            ['Dissemination', 'Distributed via reports, documents, databases, rules', 'Transferred through apprenticeship, mentoring, shared experience'],
            ['System Support', 'Databases, rule-based Expert Systems, document repositories', 'Group Decision Support Systems (GDSS), expert consultations'],
          ]}
        />
      </section>

      {/* 1.4 Hindsight, Insight, Foresight */}
      <section className="content-section">
        <div className="subheading">
          <span>1.4 · The analytical spectrum</span>
          <h2>The Three Lenses: Hindsight, Insight & Foresight</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              Different business situations ask different questions. The lecturer links three fundamental managerial questions to three analytical lenses and their corresponding DSS tools.
            </p>
          }
          ar={
            <p>
              المدير بيسأل 3 أنواع من الأسئلة في أي شركة، وكل نوع محتاج أداة تحليلية ونوع DSS معين. الرابط ده بيجي في الامتحان كل سنة:
            </p>
          }
        />

        <HindsightInsightForesight />

        <ConceptGrid cols={3}>
          <ConceptCard
            badge="THE PAST · DESCRIPTIVE"
            badgeTone="cyan"
            title="Hindsight"
            titleAr="رؤية الماضي (إيه اللي حصل؟)"
            description="Answers 'What happened? What is happening?'. Relies on historical data. Provided by analytical database queries, reports, and OLAP."
            ar="السؤال: إيه اللي حصل؟ الأداة: قواعد البيانات التحليلية، التقارير، والـ OLAP. نوع الـ DSS: نظام يعتمد على البيانات (Data-centered)."
            tags={['OLAP', 'reporting', 'data-centered']}
          />
          <ConceptCard
            badge="THE PATTERN · DIAGNOSTIC"
            badgeTone="amber"
            title="Insight"
            titleAr="كشف الأنماط (ليه حصل؟)"
            description="Answers 'Why did it happen? What hidden relationships exist?'. Relies on association, clustering, classification, and Data Mining."
            ar="السؤال: ليه حصل؟ وإيه العلاقات والأنماط المستخبية؟ الأداة: التحليل الإحصائي والـ Data Mining."
            tags={['data mining', 'patterns', 'clustering']}
          />
          <ConceptCard
            badge="THE FUTURE · PRESCRIPTIVE"
            badgeTone="teal"
            title="Foresight"
            titleAr="استشراف المستقبل (إيه اللي هيحصل؟ ونعمل إيه؟)"
            description="Answers 'What will happen? What if? What is the best choice?'. Provided by decision models, simulation, optimisation, and GAMS."
            ar="السؤال: إيه اللي هيحصل بكره؟ وإيه أفضل قرار؟ الأداة: النماذج الرياضية، المحاكاة (Simulation)، والتحسين (Optimization)."
            tags={['optimization', 'simulation', 'models']}
          />
        </ConceptGrid>

        <ExamFocus
          titleEn="OLAP vs Data Mining Reversal Trap"
          title="💡 المهم فالامتحان · الفخ الأشهر في تاريخ المادة!"
          ar="الدكتور في الامتحانات (2016, 2017, 2018, 2019, 2020) بيكتب جملة ثابتة عشان يشوفك صاحي ولا لأ: 'In a Data Centered DSS, OLAP tool provides insights whereas Data mining tool provides hindsight' — الجملة دي طبعاً FALSE لأن العكس هو الصحيح تماماً! الـ OLAP بيدي Hindsight، والـ Data Mining بيدي Insight!"
        >
          <p>
            <strong>The Classic Exam Reversal Trap:</strong>
            <br />
            False: <em>“OLAP tool provides insights whereas Data mining tool provides hindsight.”</em>
            <br />
            <strong>Fact:</strong> <strong>OLAP = Hindsight</strong> (summarising and viewing historical data). <strong>Data Mining = Insight</strong> (discovering hidden patterns and relationships).
          </p>
        </ExamFocus>

        <CompareTable
          caption="The core linkage matrix: Question → Lens → Tool → DSS Family"
          headers={['Managerial Question', 'Analytical Lens', 'Required Information', 'Primary Tool', 'DSS Orientation']}
          rows={[
            ['What happened? What are current sales?', 'Hindsight', 'Previous, operational and historical data', 'OLAP, reporting cubes, analytical SQL', 'Data-centered DSS'],
            ['Why did it happen? What pattern explains churn?', 'Insight', 'Relationships, clusters, hidden associations', 'Data mining, statistics, machine learning', 'Data-centered / Analytics'],
            ['What will happen? What is the best allocation?', 'Foresight', 'Projections, scenarios, expected constraints', 'Mathematical models, optimisation, simulation', 'Model-centered / Knowledge-centered'],
          ]}
        />
      </section>

      {/* 1.5 Evolution & Development Path */}
      <section className="content-section">
        <div className="subheading">
          <span>1.5 · The evolution</span>
          <h2>The Development Path of DSS Technology</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              Decision support did not emerge overnight. The academic path evolved from data-centered reporting to model-centered foresight and knowledge-based intelligence. In the business world, this is mirrored as the migration from Descriptive to Predictive to Prescriptive Analytics.
            </p>
          }
          ar={
            <p>
              أنظمة دعم القرار متولدتش في يوم وليلة. المسار الأكاديمي اتنقل من نظم بتعتمد على البيانات (Data-centered) ثم للنماذج (Model-centered) ثم للمعرفة والذكاء الاصطناعي (Knowledge-centered). وفي عالم البيزنس اتسمت: Descriptive ثم Predictive ثم Prescriptive Analytics.
            </p>
          }
        />

        <DevelopmentPath />

        <ConceptGrid cols={3}>
          <ConceptCard
            badge="STAGE 1"
            badgeTone="cyan"
            title="Data-Centered DSS"
            titleAr="أنظمة معتمدة على البيانات"
            description="Focuses on transaction collection, warehousing, ETL, OLAP cubes, and automated multidimensional reporting for hindsight."
            ar="بتركز على تجميع الداتا وتنظيفها في مخازن بيانات (Data Warehouse) وعمل تقارير مكعبة (OLAP) لمعرفة الماضي."
            tags={['DW', 'ETL', 'OLAP', 'Descriptive']}
          />
          <ConceptCard
            badge="STAGE 2"
            badgeTone="amber"
            title="Model-Centered DSS"
            titleAr="أنظمة معتمدة على النماذج"
            description="Integrates mathematical programming, linear transport formulations, simulation runs, and sensitivity experiments for foresight."
            ar="بتركز على المعادلات الرياضية والـ Optimization والـ Simulation عشان تجرب سيناريوهات وتشوف أفضل قرار."
            tags={['Optimization', 'GAMS', 'Simulation', 'Foresight']}
          />
          <ConceptCard
            badge="STAGE 3"
            badgeTone="teal"
            title="Knowledge & Analytics"
            titleAr="الأنظمة الذكية وتحليلات الأعمال"
            description="Combines Expert Systems, Machine Learning, Group Support Systems (GDSS), and Enterprise Intelligence for complex environments."
            ar="بتدمج الذكاء الاصطناعي، نظم دعم القرارات الجماعية (GDSS)، والـ Business Analytics للقرارات المعقدة."
            tags={['ES', 'GDSS', 'BI & BA', 'Prescriptive']}
          />
        </ConceptGrid>

        <KeyIdea title="The Lecturer’s Golden Rule">
          A DSS is never a single monolithic software application. It is a specialised family of analytical tools matched to the manager’s decision context, time horizon, and analytical lens.
        </KeyIdea>
      </section>

      {/* 1.6 Summary Takeaways */}
      <section className="content-section content-section--summary">
        <div className="subheading">
          <span>Summary Takeaways</span>
          <h2>Key Takeaways for Review</h2>
        </div>
        <div className="takeaway-grid">
          <div>
            <span>01</span>
            <p><strong>Decisions require judgment:</strong> Information technology provides data, models, and structured evaluation; human leaders supply values, accountability, and the final decision.</p>
          </div>
          <div>
            <span>02</span>
            <p><strong>Value-adding hierarchy:</strong> Data (raw facts) → Information (contextual meaning) → Knowledge (actionable understanding).</p>
          </div>
          <div>
            <span>03</span>
            <p><strong>Tacit cannot be easily stored:</strong> Explicit knowledge is documented and coded; tacit knowledge lives in personal expert experience.</p>
          </div>
          <div>
            <span>04</span>
            <p><strong>The Core Lenses:</strong> OLAP provides Hindsight; Data Mining provides Insight; Mathematical Models provide Foresight.</p>
          </div>
          <div>
            <span>05</span>
            <p><strong>Strategic decisions need External Data:</strong> Long-term strategic decisions depend heavily on external environmental data and expert insight.</p>
          </div>
        </div>
      </section>

      {/* 1.7 Dedicated Past Exam Practice (All Authentic Questions for this Section) */}
      <SectionExamPractice
        sectionId="foundations"
        title="Official Exam Studio · Foundations Practice"
        titleAr="أسئلة وتدريبات الامتحانات السابقة على هذا الجزء"
      />

      <SectionFooter id="foundations" onNavigate={onNavigate} />
    </article>
  )
}
