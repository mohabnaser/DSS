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
  ArenaModuleMap,
  GasStationProcess,
  SimulationTimeline,
} from '../../components/diagrams/SpecialDiagrams'
import { SectionExamPractice } from '../../components/SectionExamPractice'

export function Section10({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  return (
    <article className="learning-page">
      <PageHeader
        number="10"
        eyebrow="When a system is easier to run than to solve"
        title="Simulation & Arena"
        intro="Simulation builds a dynamic model of a system and runs it through time to observe behaviour, queues, bottlenecks and variability. Arena is the course’s process-based discrete-event simulation environment."
        ar="المحاكاة (Simulation) بتبني نموذج ديناميكي تفاعلي للنظام وبتشغله عبر الزمن في الكمبيوتر عشان ترصد السلوك الحقيقي: أطوال الطوابير، أوقات الانتظار، ونقاط الاختناق في ظل العشوائية وتقلبات الواقع. وبرنامج Arena هو بيئة المحاكاة المعتمدة في الكورس."
        meta={
          <>
            <Pill icon="BookOpen">Lecture 4 · slides 1–21</Pill>
            <Pill icon="PlayCircle" tone="teal">Discrete-Event + Arena</Pill>
            <Pill icon="Clock3" tone="amber">24 min</Pill>
          </>
        }
      />

      <SectionIntro
        objectives={[
          'Explain why simulation is preferred when systems have queues, random variables, and complex interactions.',
          'Differentiate Optimization (prescriptive best choice) from Simulation (evaluating dynamic behavior).',
          'Trace entities, resources, queues, and events on a discrete-event simulation timeline.',
          'Deconstruct the lecture gas-station queue model: conditional queue delay vs unconditional service delay.',
          'Categorize Arena modules into Flowchart Modules (behavior) and Data Spreadsheet Modules (parameters).',
          'Explain simulation run configuration: Warm-up period, replication length, and multiple independent replications.',
          'Practice authentic historical exam items touching simulation models in DSS.',
        ]}
        minutes={24}
        sources={['Lecture 4 · slides 1–21', 'Lecture 3 · slides 1–8', 'Lecture 8 · slide 20']}
        examWeight="Supporting · Conceptual foundations of simulation in model-centered DSS"
      />

      {/* 10.1 Why Simulate? Optimization vs Simulation */}
      <section className="content-section">
        <div className="subheading">
          <span>10.1 · Foundations</span>
          <h2>Why Simulate? Running the System Through Time</h2>
        </div>

        <BilingualBlock
          en={
            <p className="lead">
              Mathematical Optimization asks: <em>“What is the absolute best decision?”</em> assuming a clean mathematical structure.
              Computer Simulation asks: <em>“What happens if the system operates under this configuration?”</em>
              When a system contains random arrivals, queueing delays, machine breakdowns, and complex routing rules, closed-form calculus equations break down. Simulation acts as a dynamic virtual laboratory.
            </p>
          }
          ar={
            <p>
              الـ Optimization بيسأل: 'إيه هو أفضل حل مثالي؟' بمعادلات رياضية مقفولة. لكن المحاكاة (Simulation) بتسأل: 'إيه اللي هيحصل في الواقع لو شغلنا النظام بالشكل ده؟'.
              لما السيستم يكون فيه طوابير انتظار، وصول عشوائي للعملاء، أعطال مفاجئة، وتفاعل معقد بين العمال والآلات؛ المعادلات الرياضية بتعجز عن تمثيله بدقة، فبنعمل محاكاة عشان نجرب ونشوف النتائج بأمان على شاشة الكمبيوتر!
            </p>
          }
        />

        <ConceptGrid cols={2}>
          <ConceptCard
            badge="MATH PROGRAMMING"
            badgeTone="cyan"
            title="Optimization (التحسين الرياضي)"
            titleAr="البحث عن الحل الأمثل"
            description="• Question: What is the optimal mathematical choice?
• Output: Global or local optimum solution vector.
• Mechanism: Closed-form equations, objective function, and linear/non-linear inequalities solved by algorithms (Simplex, Interior Point).
• Guarantee: Mathematical optimality under strict model assumptions."
            ar="• السؤال: ما هو أفضل قرار؟
• المخرجات: الحل الأمثل (Optimal Solution).
• الطريقة: معادلات جبرية بيحلها Solver ويضمن إن مفيش حل أحسن منه تحت نفس الفرضيات."
            tags={['optimal solution', 'LP/MIP', 'prescriptive']}
          />
          <ConceptCard
            badge="PROCESS EXPERIMENT"
            badgeTone="amber"
            title="Simulation (المحاكاة الرقمية)"
            titleAr="معمل تجريب واختبار السلوك"
            description="• Question: What happens if the system runs under this policy?
• Output: Statistical performance metrics (average queue length, waiting times, server utilization percentage).
• Mechanism: Simulates dynamic events, entity flow, and random probability distributions over time.
• Guarantee: No optimality guarantee; evaluates specific scenarios."
            ar="• السؤال: ماذا يحدث لو طبقنا هذه السياسة؟
• المخرجات: مؤشرات أداء إحصائية (متوسط وقت الانتظار، نسبة إشغال الموظفين).
• الطريقة: تشغيل النظام افتراضياً مع رصد العشوائية والطوابير، من غير ضمان رياضي إنه أفضل حل ممكن."
            tags={['what-if', 'stochastic queues', 'scenario evaluation']}
          />
        </ConceptGrid>

        <PictureIt
          title="💡 PICTURE IT · تخيلها كده: نفق الرياح في صناعة الطائرات"
          ar="قبل ما تصنع طائرة حقيقية:
الـ Optimization هو الحسابات الهندسية لمعادلات الرفع والجاذبية على الورق (تحديد زاوية الجناح المثالية).
الـ Simulation هو إنك تبني مجسم للطائرة وتحطه في نفق رياح (Wind Tunnel) وتعرضه لعواصف وهواء مضطرب عشان تشوف سلوكه في الطيران الحقيقي قبل ما تصنع الطائرة وتخاطر بأرواح الركاب!"
        >
          <p>
            Think of aerospace engineering: Optimization calculates the theoretical wing dimensions on paper. Simulation places a prototype in a wind tunnel, exposing it to turbulent gusts, measuring drag, and identifying stress fractures before committing millions to production.
          </p>
        </PictureIt>

        <CompareTable
          caption="Detailed Comparison: Optimization vs Simulation"
          headers={['Dimension', 'Mathematical Optimization', 'Computer Simulation']}
          rows={[
            ['Core Question', '“What is the best possible choice?”', '“What happens to performance under this operating policy?”'],
            ['Model Structure', 'Symbolic objective function + set of constraint inequalities', 'Dynamic process flow with entities, resources, queues, and random events'],
            ['Handling of Uncertainty', 'Challenging; requires expected values or scenario trees (Stochastic LP)', 'Natural; samples directly from probability distributions (Normal, Poisson, Expo)'],
            ['System Outputs', 'Optimal decision variables (e.g. production levels Q and shipping quantities T)', 'Statistical distributions of waiting time, server utilization, throughput rates'],
            ['Optimality Guarantee', 'Guarantees optimality within stated assumptions', 'No optimality guarantee; serves as an experimental laboratory'],
          ]}
        />
      </section>

      {/* 10.2 The Discrete-Event Simulation Timeline */}
      <section className="content-section">
        <div className="subheading">
          <span>10.2 · Timeline mechanics</span>
          <h2>Discrete-Event Simulation (DES): The Event Clock</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              In <strong>Discrete-Event Simulation (DES)</strong>, the simulation clock does not tick continuously second-by-second.
              Instead, it jumps directly from one discrete event to the next scheduled event on an internal <strong>Event Calendar</strong>.
              Nothing in the system changes state between events.
            </p>
          }
          ar={
            <p>
              في المحاكاة بالأحداث المتقطعة (DES): ساعة الكمبيوتر مش بتمشي ثانية بثانية، دي بتقفز مباشرة من حدث للحدث اللي بعده على جدول الأحداث (Event Calendar)!
              بين وصول عميل وبدء خدمته مفيش أي تغير في حالة النظام يستدعي حسابات، وده اللي بيخلي الـ DES سريع جداً وفعال في محاكاة فترات تشغيل طويلة (شهور وسنين).
            </p>
          }
        />

        <SimulationTimeline />

        <ConceptGrid cols={3}>
          <ConceptCard
            badge="ACTIVE AGENT"
            badgeTone="cyan"
            title="Entity (الكائن المتحرك)"
            titleAr="الكائنات المتدفقة"
            description="The dynamic object flowing through the system: customers at a bank, cars at a gas station, parts on an assembly line, patients in a hospital."
            ar="الشيء اللي بيدخل النظام ويتحرك بين المحطات ويطلب خدمة ويخرج."
            tags={['customers', 'cars', 'patients', 'parts']}
          />
          <ConceptCard
            badge="SERVER"
            badgeTone="teal"
            title="Resource (المورد / الخادم)"
            titleAr="الموارد ومقدمي الخدمة"
            description="The stationary service provider that entities seize, delay with, and release: gas pumps, cashiers, doctors, inspection machines."
            ar="المقدم للخدمة اللي الكائن بيحجزه (Seize) ويفضل معاه وقت الخدمة ويسيبه (Release)."
            tags={['pumps', 'machines', 'doctors', 'cashiers']}
          />
          <ConceptCard
            badge="BUFFER"
            badgeTone="amber"
            title="Queue (طابور الانتظار)"
            titleAr="طوابير الانتظار"
            description="The storage location where entities wait when requested resources are busy. Governed by queue disciplines (FIFO, LIFO, Priority)."
            ar="المكان اللي الكائنات بتستنى فيه لما تكون كل الموارد مشغولة (زي طابور الشباك)."
            tags={['FIFO', 'buffers', 'waiting line', 'capacity']}
          />
        </ConceptGrid>
      </section>

      {/* 10.3 The Gas Station Process Model */}
      <section className="content-section content-section--shaded">
        <div className="subheading">
          <span>10.3 · Lecture case study</span>
          <h2>The Gas Station Simulation Model: Conditional vs Unconditional Delays</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              In Lecture 4, the lecturer presents the classic gas station process model.
              Cars arrive dynamically; the station has a fixed set of pumps and attendants.
              The critical modeling insight lies in the difference between a <strong>Conditional Delay</strong> and an <strong>Unconditional Delay</strong>:
            </p>
          }
          ar={
            <p>
              دراسة حالة محطة البنزين في المحاضرة الرابعة: سيارات بتوصل بمعدل عشوائي، وعندنا عدد محدد من طلمبات البنزين والعمال.
              الدرس النمذجي الأهم هنا هو الفرق بين نوعين من التأخير: التأخير الشرطي (Conditional Delay) والتأخير غير الشرطي (Unconditional Delay):
            </p>
          }
        />

        <GasStationProcess />

        <div className="process-reading">
          <div>
            <span className="micro-label">1. Conditional Delay (Waiting in Queue)</span>
            <p>If all pumps are occupied when a car arrives, the car cannot proceed. It is filed into a queue and delayed conditionally until another car finishes and frees a pump. The length of this delay depends on the system's state.</p>
          </div>
          <div>
            <span className="micro-label">2. Unconditional Delay (Service Dispensing)</span>
            <p>Once a pump is seized, the car enters the fueling process. The duration depends only on the fueling service time distribution. Once service starts, this delay is guaranteed and unconditional.</p>
          </div>
          <div>
            <span className="micro-label">3. The Decision Diamond</span>
            <p>The diamond in flowcharting is a routing decision (Is a pump free?), NOT a delay itself. Mixing decisions with delays is a classic novice process-modeling blunder.</p>
          </div>
        </div>
      </section>

      {/* 10.4 Arena: Flowchart Modules vs Data Modules */}
      <section className="content-section">
        <div className="subheading">
          <span>10.4 · Software architecture</span>
          <h2>Arena Simulation Environment: Flowchart vs Data Modules</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              Arena cleanly separates the visual process workflow from the underlying numerical parameters:
              (1) <strong>Flowchart Modules</strong> depict the sequential logic and entity pathways, while
              (2) <strong>Data Spreadsheet Modules</strong> define capacities, statistical probability distributions, and schedules.
            </p>
          }
        />

        <ArenaModuleMap />

        <CompareTable
          caption="Core Arena Module Reference"
          headers={['Module Name', 'Module Type', 'Core Function / Responsibility', 'Concrete Example in Lecture']}
          rows={[
            ['Create', 'Flowchart', 'Entry point; generates entities according to an arrival distribution', 'Cars arrive: Exponential distribution with mean 2 minutes.'],
            ['Process', 'Flowchart', 'Seizes resources, delays by service time, and releases resources', 'Fueling: Seize Pump Attendant, Delay Triangular(3, 5, 8) min, Release.'],
            ['Decide', 'Flowchart', 'Conditional branching diamond based on system state or probability', 'Is pump available? If True branch to Process; If False branch to Queue.'],
            ['Assign', 'Flowchart', 'Attaches attribute tags to entities or modifies global variables', 'Assign car priority = VIP or car fuel type = 95 Octane.'],
            ['Record', 'Flowchart', 'Collects performance statistics during simulation runs', 'Tally car wait times and counter of total served vehicles.'],
            ['Dispose', 'Flowchart', 'Exit terminal; removes entities and records departure statistics', 'Car leaves gas station; updates average total throughput time.'],
            ['Resource', 'Data Spreadsheet', 'Defines resource capacity, cost rates, and failure schedules', 'Pumps = 4 units; Attendant hourly wage = 50 EGP/hr.'],
            ['Queue', 'Data Spreadsheet', 'Configures queue ranking rules and capacity bounds', 'Pump Queue: FIFO (First-In, First-Out), capacity = Infinite.'],
          ]}
        />

        <div className="subheading subheading--minor">
          <span>Simulation Experiment Setup</span>
          <h3>Warm-up Period, Replication Length & Multiple Runs</h3>
        </div>

        <ConceptGrid cols={3}>
          <ConceptCard
            badge="TRANSIENT FILTER"
            badgeTone="amber"
            title="Warm-up Period (فترة الإحماء)"
            titleAr="استبعاد الفترة الانتقالية"
            description="When a simulation starts, the system is unnaturally empty and idle. A warm-up period runs the system to reach normal operating congestion, discarding initial transient data before statistics are collected."
            ar="في بداية التشغيل النظام بيبقى فاضي ومفيش طوابير وده مش حقيقي؛ فترة الإحماء بتشغل السيستم شوية عشان يتملي ويوصل للوضع الطبيعي (Steady-state)، ويتم مسح بيانات البداية عشان متبوظش المتوسطات الإحصائية."
            tags={['steady-state', 'discard transient', 'accurate stats']}
          />
          <ConceptCard
            badge="OBSERVATION"
            badgeTone="cyan"
            title="Replication Length (مدة التشغيل)"
            titleAr="طول فترة المراقبة"
            description="The duration of simulated time during which performance statistics are actively recorded (e.g. 1000 minutes or 8 hours of factory operation)."
            ar="الفترة الزمنية الافتراضية اللي بنجمع فيها الإحصائيات (مثلاً محاكاة 8 ساعات عمل يومية)."
            tags={['duration', 'time horizon', 'sample path']}
          />
          <ConceptCard
            badge="RELIABILITY"
            badgeTone="teal"
            title="Replications (عدد التكرارات)"
            titleAr="التكرارات المستقلة"
            description="A single run is just one random sample path. Multiple independent replications (using different random number seeds) are required to build statistical confidence intervals."
            ar="تشغيل المحاكاة مرة واحدة مش كفاية لأنها بتعتمد على أرقام عشوائية؛ لازم نشغل 5 أو 10 تكرارات مستقلة عشان نحسب متوسط وفترات ثقة موثوقة (Confidence Intervals)."
            tags={['random seeds', 'confidence intervals', 'statistical validity']}
          />
        </ConceptGrid>

        <ExamFocus
          titleEn="Verification vs Validation in Simulation"
          title="💡 المهم فالامتحان · الفرق بين Verification و Validation!"
          ar="• Verification (التحقق البرمجي): هل بنينا الموديل صح برمجياً؟ يعني خلو الكود من الأخطاء المنطقية والـ bugs (Building the model right).
• Validation (التحقق من الواقعية): هل بنينا الموديل الصح اللي بيمثل الواقع؟ يعني هل نتائج المحاكاة تطابق سلوك النظام الحقيقي في البيزنس؟ (Building the right model)."
        >
          <p>
            <strong>Verification:</strong> “Did we build the model right?” (Checking code syntax, logic flow, and absence of software bugs).
            <br />
            <strong>Validation:</strong> “Did we build the right model?” (Confirming that the simulation accurately represents the real physical system).
          </p>
        </ExamFocus>
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
            <p><strong>Simulation vs Optimization:</strong> Optimization finds mathematical extremes; simulation evaluates stochastic behavior and queueing performance.</p>
          </div>
          <div>
            <span>02</span>
            <p><strong>DES Timeline:</strong> Simulation clock jumps from event to event on an event calendar; state remains constant between discrete events.</p>
          </div>
          <div>
            <span>03</span>
            <p><strong>Delay Types:</strong> Conditional delay (waiting in queue for busy resources) vs Unconditional delay (service dispensing duration).</p>
          </div>
          <div>
            <span>04</span>
            <p><strong>Arena Modularity:</strong> Flowchart modules (Create, Process, Decide, Dispose) represent logic; Data modules (Resource, Queue) supply parameters.</p>
          </div>
          <div>
            <span>05</span>
            <p><strong>Statistical Rigor:</strong> Warm-up period eliminates start-up transient distortion; multiple replications build reliable statistical confidence.</p>
          </div>
        </div>
      </section>

      {/* Dedicated Past Exam Practice (Authentic Questions Touching Simulation) */}
      <SectionExamPractice
        sectionId="simulation"
        title="Official Exam Studio · Simulation & Optimization Practice"
        titleAr="أسئلة وتدريبات الامتحانات السابقة على دور المحاكاة والنماذج في الـ DSS"
      />

      <SectionFooter id="simulation" onNavigate={onNavigate} />
    </article>
  )
}
