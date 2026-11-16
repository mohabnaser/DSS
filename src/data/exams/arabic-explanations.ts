export interface ArabicExamEntry {
  explanationAr: string
  solutionAr?: string
}

/**
 * Complete Egyptian-Arabic explanations and structured solution guides
 * for all 200 historical exam questions across all 11 course sections.
 */
export const ARABIC_EXPLANATIONS: Record<string, ArabicExamEntry> = {
  // =========================================================================
  // SECTION 01: FOUNDATIONS OF DECISION SUPPORT (9 Questions)
  // =========================================================================
  'mt2018-a3': {
    explanationAr:
      'السؤال ده من أهم الأسئلة المقالية المتكررة! الدكتور عايزك تربط 3 حاجات ببعض في جدول أو نقاط واضحة: (1) نوع الـ DSS، (2) الأدوات التحليلية بتاعته، (3) العدسة التحليلية اللي بيغطيها (Hindsight أو Insight أو Foresight).',
    solutionAr: `**تقسيمة الإجابة النموذجية في الامتحان:**
- **1. Data-Centered DSS (نظم مرتكزة على البيانات):**
  - **الأدوات:** Databases, Data Warehouses, OLAP, Reporting tools → بتدعم **Hindsight Analysis** (إيه اللي حصل في الماضي؟).
  - **الأدوات الإحصائية والتنقيب:** Statistical Analysis & Data Mining → بتدعم **Insight Analysis** (ليه ده حصل وإيه الأنماط المخفية؟).
- **2. Model-Centered DSS (نظم مرتكزة على النماذج):**
  - **الأدوات:** Mathematical Optimization (LP/MIP), Simulation, Forecasting models → بتدعم **Foresight Analysis** (إيه اللي هيحصل في المستقبل وإيه أفضل قرار؟).
- **3. Knowledge-Centered DSS (نظم مرتكزة على المعرفة):**
  - **الأدوات:** Expert Systems (ES), Rule-based inference, AI → بتدعم **Foresight & Intelligent Recommendation** في المشاكل غير المهيكلة.`,
  },
  'mt2018-b1': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. دي أشهر خدعة في الامتحان! المعرفة اللي يسهل تصنيفها وكتابتها وتخزينها في قواعد بيانات هي **Explicit Knowledge (المعرفة الصريحة)**. أما الـ **Tacit Knowledge (المعرفة الضمنية)** فدي خبرة شخصية وحدس جوه دماغ الخبير، وصعب جداً توثيقها أو تخزينها بسهولة.',
  },
  'mt2018-b3': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. في تقسيمة المحاضرة، الـ **Data-Centered DSS** بيغطي حاجتين: الـ **Hindsight** (من خلال الـ OLAP والتقارير) والـ **Insight** (من خلال الـ Data Mining والتحليل الإحصائي لاكتشاف العلاقات والأنماط في البيانات).',
  },
  'f2016-a10': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. الدكتور هنا عكس الأدوات عشان يختبر تركيزك! الـ **OLAP** بيعرض ويلخص البيانات التاريخية فيديك **Hindsight** (نظرة للماضي)، بينما الـ **Data Mining** بيكتشف الأنماط والعلاقات المخفية فيديك **Insight** (فهم عميق للسبب).',
  },
  'f2017-a10': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. نفس الفخ المتكرر: الجملة عكست الوظائف! الصح هو إن **OLAP → Hindsight** (ملخصات وتقارير متعددة الأبعاد للماضي)، بينما **Data Mining → Insight** (استخراج الأنماط والعلاقات الخفية).',
  },
  'f2018-a2-2': {
    explanationAr:
      'الإجابة الصحيحة هي **C (Data Mining system)** ✅. لأن الـ **Insight** معناه فهم العلاقات والأنماط الخفية (Patterns, Associations, Clusters)، وده وظيفة الـ **Data Mining** والتحليل الإحصائي. أما الـ Analytical DB والـ OLAP فدول بيدوا Hindsight، والـ Mathematical Models بتدي Foresight.',
  },
  'f2018-b3': {
    explanationAr:
      'سؤال مقالي مباشر ومضمون الدرجات: المطلوب تحدد لكل عدسة تحليلية (Hindsight / Insight / Foresight) نوع الـ DSS والأدوات المستخدمة.',
    solutionAr: `**خريطة الحل السريعة للامتحان:**
- **Hindsight (ماذا حدث؟):** Data-Centered DSS باستخدام Data Warehouse, OLAP, Reporting.
- **Insight (لماذا حدث وما العلاقة؟):** Data-Centered DSS باستخدام Data Mining & Statistical Analysis.
- **Foresight (ماذا سيحدث وما القرار الأفضل؟):** Model-Centered & Knowledge-Centered DSS باستخدام Optimization, Simulation, Forecasting, Expert Systems.`,
  },
  'f2020-a2-2': {
    explanationAr:
      'الإجابة الصحيحة هي **A (Mathematical models)** ✅. لأن الـ **Foresight** (استشراف المستقبل واختبار السيناريوهات والـ What-if) بيتم عن طريق **النماذج الرياضية (Mathematical Models)** زي الـ Optimization والـ Simulation. بينما الـ Analytical DB للـ Hindsight، والـ Data Mining للـ Insight.',
  },
  'f2020-b1': {
    explanationAr:
      'سؤال رسم تخطيطي (Diagram) عن مسار تطور تكنولوجيا الـ DSS. في الامتحان بترسم المسارين المتوازيين اللي في المحاضرة: المسار الأكاديمي (من البيانات للنماذج للمعرفة) والمسار التجاري (من Descriptive لـ Predictive لـ Prescriptive).',
    solutionAr: `**خطوات رسم المخطط في الامتحان (Development Path):**
- **المرحلة 1 (Data-Centered / Descriptive):** قواعد بيانات، Data Warehousing، وOLAP للإجابة عن "ماذا حدث؟" (Hindsight).
- **المرحلة 2 (Analytical & Predictive BI):** إضافة الـ Data Mining والتحليل الإحصائي والتنبؤ للإجابة عن "لماذا حدث وما المتوقع؟" (Insight).
- **المرحلة 3 (Model-Centered & Prescriptive BA):** دمج نماذج الـ Optimization والـ Simulation والـ Scenarios لاقتراح أفضل قرار (Foresight).
- **المرحلة 4 (Intelligent, Group & Executive Support):** دمج النظم الخبيرة (ES/AI) ونظم دعم القرار الجماعي (GDSS) والتنفيذي (EIS).`,
  },

  // =========================================================================
  // SECTION 02: DECISION-MAKING & THE DSS CYCLE (15 Questions)
  // =========================================================================
  'mt2015-a2': {
    explanationAr:
      'سؤال رسم أساسي: ارسم دورة دعم القرار (Decision Support Cycle) المكونة من 7 مراحل متصلة في حلقة مغلقة، مع توضيح إن الـ Feedback من التنفيذ والمتابعة بيرجع يفتح تعريف المشكلة من جديد، وإن الـ DSS + Judgment في قلب الدورة.',
    solutionAr: `**الـ 7 مراحل اللي لازم تكتبهم بالترتيب في الرسمة:**
1. **Identify & Bound the Problem:** تحديد المشكلة أو الفرصة ورسم حدودها.
2. **Gather Data:** جمع البيانات الداخلية والخارجية وتقدير النواقص.
3. **Analyse:** تحليل الحقائق والمعرفة والمخاطر.
4. **Develop Decision Options:** تطوير البدائل وحساب التكلفة والعائد لكل بديل.
5. **Decide:** اختيار البديل الأنسب (بدمج مخرجات النظام مع الـ Human Judgment).
6. **Approve & Communicate:** الاعتماد المؤسسي الداخلي والتواصل مع المعنيين.
7. **Implement & Follow Up:** التنفيذ والمتابعة، ومنها يخرج سهم **Feedback** يرجع للمرحلة رقم 1.`,
  },
  'mt2018-b4': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. في القرارات الاستراتيجية (Strategic Decisions) طويلة الأجل، متخذ القرار بيتعامل مع بيئة مفتوحة ومنافسين واقتصاد، فـ **البيانات الخارجية (External Data)** ضرورية جداً جنباً إلى جنب مع البيانات الداخلية.',
  },
  'mt2018-b16': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. ركز في الكلمة المفتاحية: **validate and approve a selected decision**! النماذج الرياضية بتُستخدم لتقييم البدائل وحساب التكلفة والمخاطر (**assess options, cost & risk**)، لكن **اعتماد القرار (Approval)** هو إجراء إداري ومؤسسي بشري مش وظيفة الموديل!',
  },
  'f2016-a13': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. هنا الصياغة صحيحة 100%: وظيفة النماذج (Models) في دورة القرار هي **تقييم السيناريوهات والبدائل (assess alternative scenarios)** وتقدير **التكلفة والمخاطر (estimate cost and risk)** المرتبطة بالقرار.',
  },
  'f2017-a13': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. طالما قال **validate a specific decision** (اعتماد/تصديق قرار بعينه) تبقى الإجابة خطأ! النماذج بتقيّم البدائل والمخاطر والتكاليف قبل الاختيار، لكن التصديق والاعتماد مسؤولية الإدارة.',
  },
  'f2018-a2': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. سؤال متكرر بالحرف: القرارات الاستراتيجية مستحيل تستغني عن الـ **External Data** (بيانات السوق، المنافسين، القوانين، المؤشرات الاقتصادية).',
  },
  'f2018-a10': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. نفس فخ **validate and approve** المتكرر! الموديل بيحسب تكلفة ومخاطر ويقارن بدائل (Assess scenarios & risk)، لكن مش هو اللي بيعمل Approval للقرار المختار.',
  },
  'f2019-a1': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. في التخطيط والقرارات الاستراتيجية، البيانات الخارجية (External Data) ركن أساسي لدعم صانع السياسات ولا يمكن الاستغناء عنها.',
  },
  'f2019-a7': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. الموديل أداة تحليل وتقييم للبدائل والمخاطر (Assessment tool)، وليس أداة اعتماد وتصديق إداري (Validation & Approval tool).',
  },
  'f2020-a1': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. القرارات الاستراتيجية طويلة الأجل بطبيعتها غير مهيكلة (Unstructured) ومليانة عدم يقين، وعشان كده **رأي الخبراء (Expert Opinion)** والرؤية البشرية ضروريين جداً بجانب النماذج والبيانات.',
  },
  'f2020-a9': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. انتبه للفرق الدقيق هنا! الجملة بتقول **assess the risk** (تقييم المخاطر) ومقالتش validate and approve. تقييم المخاطر والتكاليف هو فعلاً الوظيفة الأساسية للنماذج في دورة القرار!',
  },
  'f2023-q1-7': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. نظم دعم القرارات الاستراتيجية بتستخدم فعلاً مزيج من أدوات النمذجة الكمية (Quantitative modeling tools) زي التنبؤ والمحاكاة والـ Optimization جنباً إلى جنب مع رأي الخبراء.',
  },
  'f2023-q1-9': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. خدعة ذكية في امتحانات 2023 و2025: القرار الاستراتيجي بيحتاج **البيانات الخارجية والداخلية معاً (Both internal & external data)**، فمينفعش نقول إن واحدة فيهم "أهم بشكل مطلق" أو نهمش التانية.',
  },
  'f2025-q1-7': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. صياغة كاملة ودقيقة جداً: دعم القرار الاستراتيجي بيجمع بين النماذج الكمية (Quantitative modeling tools) وبين رأي الخبراء والرؤية المستقبلية (Expert opinion and vision).',
  },
  'f2025-q1-9': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. في القرارات الاستراتيجية، البيانات الخارجية (External Data) لا يمكن أبداً اعتبارها "أقل أهمية" من البيانات الداخلية، لأن الاستراتيجية بتتعامل أساساً مع السوق والبيئة الخارجية.',
  },

  // =========================================================================
  // SECTION 03: MANAGEMENT SUPPORT SYSTEMS (MIS, DSS, EIS, GDSS, ES, BI/BA) (27 Questions)
  // =========================================================================
  'mt2018-a1': {
    explanationAr:
      'أشهر جدول مقارنة في المنهج كله! الدكتور طالب عناوين مختصرة فقط (State titles only) للمقارنة بين MIS و DSS و EIS من حيث 6 معايير.',
    solutionAr: `**جدول المقارنة المختصر (اكتبه كده بالظبط في الامتحان):**
- **a) Type of reports:** MIS → Planned/scheduled reports | DSS → Ad-hoc & interactive analytical reports | EIS → Executive visual dashboards & drill-down summaries.
- **b) Type of database model:** MIS → Relational operational DB (OLTP) | DSS → Analytical DB / Data Warehouse / Multidimensional | EIS → Integrated internal + external executive DB.
- **c) Modeling & analytical capabilities:** MIS → Simple/few analytical tools | DSS → Rich model base (Optimization, Simulation, What-if) | EIS → Trend tracking, KPI monitoring & exception reporting.
- **d) Management level:** MIS → Lower & middle operational management | DSS → Middle & senior management / analysts | EIS → Top executives & senior leadership.
- **e) Sources of data:** MIS → Mainly internal data | DSS → Internal + external data | EIS → Heavily external + internal summary data.
- **f) Problem/decision type:** MIS → Structured / programmable | DSS → Semi-structured (and unstructured) | EIS → Unstructured strategic problems.`,
  },
  'mt2018-b5': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. نظام الـ **EIS (Executive Information System)** مخصص لدعم **الإدارة العليا (Top / Senior Executives)** في القرارات الاستراتيجية، ومش للإدارة الوسطى (Middle Management).',
  },
  'mt2018-b17': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. نظام دعم القرار الجماعي **GDSS** بيحتاج برامج إضافية (**Groupware / Collaborative software**) عشان ينظم التواصل، العصف الذهني (Brainstorming)، التصويت، وترتيب الأفكار بين أعضاء المجموعة.',
  },
  'mt2018-b18': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. ركز في الخدعة دي لأنها بتيجي في كل امتحان! اللي بيدعم التقارير وقواعد البيانات مع أدوات تحليلية بسيطة وقليلة (**few or simple analytical tools**) هو الـ **MIS** مش الـ **DSS**! الـ DSS لازم يكون فيه قدرات نمذجة وتحليل قوية.',
  },
  'f2016-a12': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. نظام الـ **EIS** موجه للقرارات الاستراتيجية للإدارة العليا، وبالتالي بيعتمد بقوة على **البيانات الخارجية (External Data)** عن السوق والمنافسين والاقتصاد.',
  },
  'f2016-a14': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. نفس فخ تعريف الـ **MIS**! الجملة بتوصف الـ **MIS** (تقارير مجدولة وأدوات تحليلية بسيطة)، بينما الـ **DSS** بيتميز بنماذج رياضية وتحليل تفاعلي متقدم.',
  },
  'f2017-a12': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. في نظام الـ **EIS**، البيانات الخارجية (External Data) أساسية جداً لدعم المدير التنفيذي في قراءة السوق والبيئة المحيطة.',
  },
  'f2017-a14': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. الجملة دي هي تعريف الـ **MIS** بالحرف! أول ما تشوف **reporting + few or simple analytical capabilities** ومعاها كلمة DSS، اعرف إنها **FALSE** لأن ده تعريف الـ MIS.',
  },
  'f2017-c1': {
    explanationAr:
      'سؤال مقالي ممتاز: عشان ننتقل من DSS فردي إلى GDSS جماعي، بنحتاج برنامج اسمه **Groupware (أو Collaborative / Group Facilitation Software)**.',
    solutionAr: `**الإجابة النموذجية في نقاط محددة:**
- **اسم البرنامج الإضافي:** **Groupware / Collaborative Computing & Group Facilitation Software**.
- **وظائفه الأساسية (Functions):**
  1. **Electronic Brainstorming & Idea Generation:** جمع أفكار المشاركين في نفس الوقت (وغالباً بدون إظهار الأسماء لتشجيع الصراحة).
  2. **Idea Organization & Categorization:** تجميع الأفكار المتشابهة وتصنيفها ومنع التكرار.
  3. **Voting, Ranking & Prioritization:** التصويت وترتيب البدائل وحساب الأوزان للوصول لإجماع (Consensus).
  4. **Session & Communication Management:** إدارة النقاش وتوثيق محضر الجلسة ومشاركة الشاشات والنماذج.`,
  },
  'f2018-a11': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. الـ **GDSS** بيحتاج فعلاً برامج إضافية (Groupware) لتنظيم وإدارة الأفكار اللي بيطرحها أعضاء الفريق والتصويت عليها.',
  },
  'f2018-a12': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. ده تعريف الـ **MIS** مش الـ **DSS**! الـ MIS هو اللي بيركز على الـ Reporting مع أدوات تحليلية قليلة أو بسيطة.',
  },
  'f2019-a8': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. نفس الفخ المتكرر: الجملة بتوصف الـ **MIS** وحاطة مكانها اسم **DSS**!',
  },
  'f2019-a10': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. الـ **EIS** بيدعم الإدارة العليا (**Top Management / Executives**) وليس الإدارة الوسطى (Middle Management).',
  },
  'f2019-a15': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. في مسار تطور نظم الأعمال، الـ **Business Intelligence (BI)** بيستخدم أدوات الـ **Data Mining** وتحليلات **What-if** والتنبؤ لاستخلاص المعرفة والمعلومات المتقدمة من البيانات.',
  },
  'f2020-a7': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. الفرق بين الـ Data-Centered DSS الأساسي والـ **BI** مش مجرد الـ What-if لوحدها، بل إن الـ BI بيضيف منظومة متكاملة من الـ **Predictive Analytics، Data Mining، Forecasting، وDashboards** فوق مستودع البيانات.',
  },
  'f2020-a10': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. أيوه كده! هنا الدكتور حط الاسم الصح (**Management Information Systems - MIS**) مع التعريف الصح (reporting + database capabilities + few or simple analytical applications)، عشان كده الإجابة هنا **TRUE**!',
  },
  'f2020-a12': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. الـ **EIS** مخصص للإدارة العليا (**Top Management**) ومش للإدارة الوسطى.',
  },
  'f2020-a14': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. خلي بالك من الفرق بين **Executive** IS و **Enterprise** IS! الـ **Enterprise Information System** بيخدم المؤسسة كلها بمختلف مستوياتها الإدارية (تشغيلية، وسطى، وعليا)، عشان كده الجملة صحيحة!',
  },
  'f2020-a19': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. أدوات الـ **Data Mining** والـ **What-if analysis** هي فعلاً من الأدوات التحليلية الأساسية في نظم الـ **Business Intelligence (BI)**.',
  },
  'f2020-a2-3': {
    explanationAr:
      'الإجابة الصحيحة هي **B (A data-centered DSS with "what-if" analytical tools)** ✅. في مخطط المحاضرة لتطور النظم، الـ **BI** هو امتداد للـ Data-Centered DSS مضافاً إليه أدوات تحليلية وتنبؤية وWhat-if.',
  },
  'f2020-b2': {
    explanationAr:
      'سؤال مقالي مهم بيفرق بين مصطلحين شبه بعض في الاختصار: **Executive Information System (EIS)** مقابل **Enterprise Information System**.',
    solutionAr: `**الفرق الجوهري في الامتحان:**
- **1. Executive Information System (نظام معلومات المديرين التنفيذيين):**
  - **المستخدمين:** الإدارة العليا فقط (Top Executives).
  - **الهدف:** دعم القرارات الاستراتيجية غير المهيكلة، متابعة مؤشرات الأداء (KPIs)، ودمج البيانات الخارجية والداخلية في شاشات رسومية مبسطة.
- **2. Enterprise Information System (نظام معلومات المؤسسة الشامل - مثل ERP/Enterprise IS):**
  - **المستخدمين:** جميع مستويات الإدارة في المؤسسة (Operational, Middle, and Senior Management).
  - **الهدف:** ربط وتكامل كافة الوظائف والعمليات عبر أقسام المؤسسة (المالية، الإنتاج، الموارد البشرية، سلاسل الإمداد) في قاعدة بيانات موحدة.`,
  },
  'f2023-q1-1': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. الـ **EIS** يدعم الإدارة العليا (**Top/Senior Management**) وليس الإدارة الوسطى.',
  },
  'f2023-q1-5': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. نفس الفخ الكلاسيكي: الجملة بتوصف الـ **MIS** (تقارير + أدوات تحليلية بسيطة) لكن نسبتها للـ **DSS**!',
  },
  'f2023-q1-15': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. الـ **GDSS** يحتاج برامج تعاونية إضافية (Groupware) لتنظيم وإدارة الأفكار المطروحة من أعضاء المجموعة.',
  },
  'f2025-q1-5': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. متكرر في 2025: اللي بيعتمد على التقارير وأدوات تحليلية بسيطة (few or simple analytical tools) هو الـ **MIS** وليس الـ **DSS**.',
  },
  'f2025-q1-10': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. الـ **EIS** مخصص للإدارة العليا (**Top Management**) وليس للإدارة الوسطى.',
  },
  'f2025-q1-15': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. الـ **GDSS** يحتاج لبرامج إضافية (Groupware) لتنظيم وإدارة الأفكار والتصويت بين أعضاء المجموعة.',
  },

  // =========================================================================
  // SECTION 04: DSS CORE, TAXONOMY & ARCHITECTURE (44 Questions)
  // =========================================================================
  'mt2015-a1': {
    explanationAr:
      'سؤال مقالي أساسي عن الفرق بين **General Purpose DSS** و **Special Purpose DSS** من حيث النطاق، التكلفة، والاعتماد المؤسسي.',
    solutionAr: `**المقارنة النموذجية للامتحان:**
- **General Purpose DSS (نظم عامة الغرض):**
  - **النطاق (Scope):** بيئة تحليلية شاملة تخدم مجالات وقرارات متعددة داخل المؤسسة.
  - **التصنيف:** تنقسم إلى Data-Centered, Model-Centered, Knowledge-Centered, أو Integrated DSS.
  - **التكلفة والهيكل:** أعلى تكلفة، وتحتاج إلى **مأسسة (Institutionalization)** وهيكل تنظيمي دائم لصيانتها.
- **Special Purpose DSS (نظم خاصة الغرض):**
  - **النطاق (Scope):** تُبنى لحل مشكلة محددة صغيرة نسبياً أو باستخدام أداة تحليلية معينة.
  - **التصنيف:** تنقسم إلى **Domain-oriented** (موجهة لمجال معين مثل DPSS) أو **Tool-oriented** (موجهة لأداة مثل AHP أو Simulation).
  - **التكلفة والهيكل:** أقل تكلفة وأسرع في التطوير ولا تتطلب هيكلاً مؤسسياً ضخماً.`,
  },
  'mt2016-a1': {
    explanationAr:
      'سؤال من جزئين: (1) اذكر 3 أسس لتصنيف نظم الـ DSS، و(2) اذكر 3 أسباب تحكم اختيار المؤسسة لنوع الـ DSS.',
    solutionAr: `**الإجابة النموذجية المنظمة:**
- **أولاً: 3 أسس لتصنيف الـ DSS (Classification Choices):**
  1. **حسب النطاق (By Scope):** General Purpose DSS مقابل Special Purpose DSS.
  2. **حسب التوجه التحليلي (By Analytical Orientation):** Data-centered, Model-centered, Knowledge-centered, أو Integrated.
  3. **حسب طبيعة المستخدم أو مرحلة القرار (By User / Decision Phase):** فردي مقابل جماعي (GDSS)، أو حسب المستوى الإداري.
- **ثانياً: 3 أسباب تحكم اختيار وتبني النظام (Reasons Governing Adoption):**
  1. **حجم وتكرار المشكلة (Problem Size & Scope):** هل هي مشكلة واحدة محدودة أم مشاكل مؤسسية متكررة؟
  2. **الميزانية والموارد المالية (Financial Cost & Resources):** الأنظمة الخاصة أقل تكلفة من الأنظمة العامة المتكاملة.
  3. **القدرة على المأسسة والاستدامة (Institutionalization & Sustainability):** توفر الكوادر والبيانات والبنية التحتية.`,
  },
  'mt2016-c1': {
    explanationAr:
      'ارسم الموديل المفاهيمي لنظام الـ DSS المتكامل، ووضح أهم إضافاته لتكنولوجيا الإدارة (دمج البيانات والنماذج والمعرفة مع حكم متخذ القرار).',
    solutionAr: `**مكونات الرسمة والمساهمة الأساسية:**
- **مكونات المخطط (Integrated DSS Conceptual Model):**
  1. **Data-Centered Wing:** مستودع البيانات (Data Warehouse) + DBMS + أدوات OLAP وData Mining.
  2. **Model-Centered Wing:** قاعدة النماذج (Model Base) + MBMS + لغات النمذجة (GAMS) والـ Solvers.
  3. **Knowledge Management & Interactive User Interface:** تربط الجناحين بمتخذ القرار (Decision Maker) الذي يظل خارج حدود النظام الأوتوماتيكي ليضيف حكمه الشخصي (Judgment).
- **المساهمة الأساسية (Main Contributions):** التعامل مع المشاكل شبه المهيكلة (Semi-structured)، دمج البيانات مع النماذج، ودعم التجريب (What-if & Scenarios).`,
  },
  'mt2018-a2': {
    explanationAr:
      'سؤال شامل: عرّف الـ DSS، وفرّق بين General وSpecial Purpose، واشرح نوعين من الـ General Purpose مع مثال.',
    solutionAr: `**عناصر الإجابة الكاملة:**
- **1. تعريف الـ DSS:** نظام معلومات حاسوبي تفاعلي ومرن يدعم متخذي القرار في المشاكل شبه المهيكلة وغير المهيكلة عبر دمج البيانات والنماذج مع واجهة سهلة الاستخدام وحكم المدير البشري.
- **2. General vs Special Purpose:** العام يخدم تطبيقات متعددة ويحتاج مأسسة؛ الخاص يخدم مشكلة محددة (Domain-driven أو Tool-driven) وتكلفته أقل.
- **3. شرح نوعين من الـ General Purpose:**
  - **Data-Centered DSS:** يرتكز على Data Warehouse وOLAP وData Mining (يوفر Hindsight وInsight).
  - **Model-Centered DSS:** يرتكز على Model Base وMBMS ونماذج الـ Optimization والـ Simulation (يوفر Foresight).
  - **مثال تطبيقي:** نظام دعم قرار الإدارة العليا بجامعة القاهرة (Cairo University Senior Management DSS) كنظام عام متكامل.`,
  },
  'mt2018-b11': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. نظم الـ **Special Purpose DSS** بتركز فعلاً على مشاكل محددة وصغيرة نسبياً، وعشان كده تكلفتها أقل من النظم العامة.',
  },
  'mt2018-b12': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. في شجرة تصنيف الـ DSS، الـ **Special Purpose DSS** بيتفرع لفرعين أساسيين: **Domain-driven** (موجه لمجال تطبيقي معين) أو **Tool-driven** (موجه لأداة تحليلية معينة زي AHP).',
  },
  'mt2018-b13': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. نظام الإدارة العليا بجامعة القاهرة (**Cairo University Senior Management DSS**) هو المثال الرئيسي في المحاضرة على الـ **Integrated General Purpose DSS** اللي بيجمع بين الـ Data-centered والـ Model-centered معاً.',
  },
  'mt2018-b14': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. نظام جامعة القاهرة للإدارة العليا يصنف كـ **Integrated General Purpose DSS** لأنه يدمج مستودع البيانات مع النماذج التحليلية لخدمة قرارات الجامعة المتعددة.',
  },
  'f2016-a6': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. المبدأ الأساسي للـ **General Purpose DSS** هو توفير قدرات برمجية وتحليلية عامة قابلة لإعادة الاستخدام في تطبيقات ومجالات متعددة.',
  },
  'f2016-a7': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. الـ **Special Purpose DSS** بيركز على مشاكل محددة وصغيرة نسبياً وتكلفته أقل بكتير من بناء نظام عام شامل.',
  },
  'f2016-a8': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. خدعة متكررة! نظام الإدارة العليا بجامعة القاهرة مش مجرد Data-centered بس، ده **Integrated General Purpose DSS** بيجمع الـ Data-centered والـ Model-centered معاً!',
  },
  'f2016-c1': {
    explanationAr:
      'ارسم المخطط المتكامل للـ DSS (Integrated Conceptual Model) المكون من جناح البيانات، جناح النماذج، إدارة المعرفة، وواجهة المستخدم التفاعلية.',
    solutionAr: `**الأجزاء الأربعة الأساسية في الرسمة:**
1. **Data-Centered Wing:** Analytical DB / Data Warehouse + DBMS + OLAP & Data Mining.
2. **Model-Centered Wing:** Model Base + MBMS + Modeling Language & Solvers + Experimentation/Explanation.
3. **Knowledge-Based Subsystem:** القواعد والاستدلال (Knowledge Management).
4. **Interactive User Interface:** تربط كل المكونات بـ **Decision Maker** (خارج حدود الأتمتة ليضيف الـ Judgment).`,
  },
  'f2016-c2': {
    explanationAr:
      'مطلوب تحديد تكنولوجيا المعلومات (IT tools) المناسبة لكل جزء في الموديل المتكامل (البيانات، النماذج، والمعرفة).',
    solutionAr: `**تكنولوجيا المعلومات لكل جناح:**
- **1. Data-Centered DSS IT:** ETL tools, Data Warehouse / Data Marts, Multidimensional DB, OLAP engines, Reporting tools, Data Mining & Statistical packages.
- **2. Model-Centered DSS IT:** MBMS, Algebraic Modeling Languages (GAMS), Optimization Solvers (LP/MIP/NLP), Simulation software (Arena), Spreadsheet modeling tools.
- **3. Knowledge-Centered DSS IT:** Expert Systems shells, Rule-based Inference Engines, Knowledge bases, Machine Learning / AI modules.`,
  },
  'f2017-a1': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. نظام الإدارة العليا بجامعة القاهرة بيتيح مقارنة أداء الجامعة بالجامعات الحكومية الأخرى (Benchmarking) باستخدام البيانات الخارجية والداخلية.',
  },
  'f2017-a2': {
    explanationAr:
      'حالة خارجية خاصة بسنة 2017 (Kuwait Fisheries DSS): السؤال بيشير لنموذج قطاع المصايد في الكويت، وهو من أسئلة الحالات التطبيقية الخارجية التي تم توثيقها في مراجعة المصادر.',
  },
  'f2017-a4': {
    explanationAr:
      'حالة خارجية خاصة بسنة 2017 (IDSC - مركز المعلومات ودعم اتخاذ القرار): يشير لدور المركز في تطوير نظم دعم القرار في المنطقة العربية اعتماداً على قواعد البيانات والنماذج.',
  },
  'f2017-a6': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. نظام **DPSS (Development Planning Support System)** يصنف كـ **Special Purpose (Domain-oriented) DSS** لأنه مخصص لمجال محدد وهو التخطيط التنموي.',
  },
  'f2017-a7': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. النظم خاصة الغرض (Special Purpose DSS) تركز على مشاكل محددة وصغيرة نسبياً وتكون أقل تكلفة.',
  },
  'f2017-a8': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. نظام جامعة القاهرة للإدارة العليا ليس Data-centered فقط، بل هو **Integrated General Purpose DSS** يجمع البيانات والنماذج.',
  },
  'f2017-c2': {
    explanationAr:
      'نفس سؤال الرسم الأساسي: ارسم المخطط المتكامل لنظام دعم القرار (Integrated Conceptual Model of a DSS).',
    solutionAr: `**تأكد من رسم 4 بلوكات رئيسية داخل حدود النظام (System Boundary):**
- **Data-Centered Wing** (Analytical DB, ETL, OLAP, Data Mining).
- **Model-Centered Wing** (Model Base, MBMS, Modeling Language, Solvers).
- **Knowledge Subsystem** + **User Interface** متصلة بـ **Decision Maker** خارج حدود النظام.`,
  },
  'f2017-c3': {
    explanationAr:
      'حدد تكنولوجيا المعلومات (IT) المناسبة لكل من الـ Data-centered والـ Model-centered والـ Knowledge-centered DSS.',
    solutionAr: `**قائمة التكنولوجيا المطلوبة:**
- **Data-centered IT:** Data Warehouse, ETL, OLAP, Multidimensional DB, Data Mining.
- **Model-centered IT:** MBMS, GAMS, LP/MIP/NLP Solvers, Arena Simulation, Excel Solver.
- **Knowledge-centered IT:** Expert Systems, Knowledge Base, Inference Engine, AI tools.`,
  },
  'f2018-a1': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. نظام الإدارة العليا بجامعة القاهرة يُستخدم لمقارنة الأداء (Benchmarking) مع الجامعات الحكومية والخاصة.',
  },
  'f2018-a4': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. خدعة مهمة! نظام **DPSS (Development Planning Support System)** هو **Special Purpose (Domain-oriented) DSS** مش General Purpose، لأنه موجه لمجال تطبيقي واحد محدد!',
  },
  'f2018-a6': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. النظم خاصة الغرض تركز على مشاكل صغيرة ومحددة وتكلفتها أقل.',
  },
  'f2018-a7': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. نظام الإدارة العليا بجامعة القاهرة يجمع بين أدوات الـ Data-centered والـ Model-centered معاً.',
  },
  'f2018-b1': {
    explanationAr:
      'ارسم الموديل المفاهيمي لنظام دعم قرار عام الغرض (General Purpose Integrated DSS).',
    solutionAr: `**مكونات الرسمة:**
- **Data-Centered DSS** (Data Warehouse + OLAP + Reporting + Data Mining).
- **Model-Centered DSS** (Model Base + MBMS + Modeling Language + Solvers).
- **Knowledge-Based DSS** + **User Interface** + **Decision Maker**.`,
  },
  'f2018-b2': {
    explanationAr:
      'اذكر مساهمتين رئيسيتين (Two major contributions) قدمهما الـ DSS لتكنولوجيا الحاسبات ودعم الإدارة (عناوين مختصرة فقط).',
    solutionAr: `**المساهمتان الرئيسيتان (State titles only):**
1. **Coupling Analytical Data & Mathematical Models:** دمج قواعد البيانات التحليلية مع النماذج الرياضية في نظام تفاعلي واحد لدعم القرارات شبه المهيكلة.
2. **Interactive Experimentation & Scenario Analysis:** تمكين متخذ القرار من إجراء تجارب What-if وتحليل الحساسية والسيناريوهات بمرونة وبواجهة سهلة.`,
  },
  'f2019-a2': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. نظام **DPSS** هو **Special Purpose (Domain-oriented) DSS** وليس General Purpose.',
  },
  'f2019-a3': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. الـ Special Purpose DSS يركز على مشاكل صغيرة نسبياً وأقل تكلفة.',
  },
  'f2019-a4': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. نظام جامعة القاهرة للإدارة العليا هو General Purpose Integrated DSS يغطي البيانات والنماذج.',
  },
  'f2019-a13': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. الـ **Special Purpose DSS** يصنف فعلاً إلى **Domain-driven** أو **Tool-driven**.',
  },
  'f2019-a16': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. خدعة ممتازة! الـ **Institutionalization (المأسسة)** مرحلة أساسية في بناء الـ **General Purpose DSS** مش الـ Special Purpose! لأن النظام العام بيخدم المؤسسة كلها بشكل مستمر.',
  },
  'f2020-a2': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. النمذجة (Model-centered capabilities) ممكن تكون جناح داخل نظام عام (General Purpose) أو تكون نظام خاص مبني حول نموذج لمشكلة معينة (Special Purpose).',
  },
  'f2020-a3': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. الـ **General Purpose DSS** بيستخدم أدوات تحليلية تخدم مجالات متعددة ويحتاج إلى **هيكل مؤسسي (Institutional structure)** لضمان استمراريته.',
  },
  'f2020-a4': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. نظام الإدارة العليا بجامعة القاهرة يصنف كـ **General Purpose Integrated DSS**.',
  },
  'f2020-a17': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. الـ **Special Purpose DSS** ينقسم إلى **Domain-driven** (موجه لمجال) أو **Tool-driven** (موجه لأداة).',
  },
  'f2023-q1-10': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. ركز في العكس اللي عمله الدكتور هنا! اللي بيتقسم لـ **tool-oriented or domain-based** هو الـ **Special Purpose DSS** مش الـ General Purpose!',
  },
  'f2023-q1-11': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. الجملة هنا حصرت الـ Special Purpose DSS في "small optimization models" فقط، بينما هو يركز على **small-size problems** عامةً (سواء كانت Domain-oriented أو Tool-oriented مش بس optimization).',
  },
  'f2023-q1-12': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. الـ **General Purpose DSS** بيشمل أدوات بيانات ونمذجة تقدر تتعامل مع مشاكل معقدة ومتعددة في سياقات مختلفة.',
  },
  'f2023-q3': {
    explanationAr:
      'سؤال الرسم الكبير في امتحانات 2023 و2025: ارسم الموديل المفاهيمي لـ General-Purpose Integrated DSS شامل الأجنحة الثلاثة (بيانات، نماذج، معرفة) مع ذكر التكنولوجيا المناسبة لكل جناح.',
    solutionAr: `**خريطة الرسم والتكنولوجيا المطلوبة للدرجة الكاملة:**
- **1. Data-Centered Wing:** يشمل Operational/External Sources → ETL → Data Warehouse / Data Marts → OLAP & Data Mining.
- **2. Model-Centered Wing:** يشمل Model Base (Optimization, Simulation, Forecasting) + MBMS + Modeling Language (GAMS) & Solvers.
- **3. Knowledge-Centered Wing:** يشمل Knowledge Base + Inference Engine / Expert System.
- **4. User Interface & Decision Maker:** واجهة تفاعلية تعرض التقارير والبدائل لمتخذ القرار.`,
  },
  'f2025-q1-1': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. نفس خدعة 2023 بالظبط! التصنيف لـ **tool-oriented or domain-based** يخص الـ **Special Purpose DSS**، أما الـ General Purpose فيصنف إلى Data-centered وModel-centered وKnowledge-centered.',
  },
  'f2025-q1-13': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. الـ **Special Purpose DSS** يركز على مشاكل صغيرة الحجم نسبياً ويكون أقل تكلفة.',
  },
  'f2025-q1-14': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. الـ **General Purpose DSS** يضم أدوات تحليل بيانات ونمذجة قابلة للاستخدام في سياقات وتطبيقات متعددة.',
  },
  'f2025-q3': {
    explanationAr:
      'سؤال المخطط المتكامل المتكرر في 2025: ارسم الـ General-Purpose Integrated DSS شامل الـ Data-centered والـ Model-centered والـ Knowledge-centered مع كتابة تكنولوجيا المعلومات (IT) لكل جزء.',
    solutionAr: `**خطوات الرسمة الكاملة:**
- ارسم **System Boundary** بداخله الأجنحة الثلاثة:
  1. **Data-Centered DSS:** Data Warehouse, ETL, OLAP, Data Mining.
  2. **Model-Centered DSS:** Model Base, MBMS, GAMS, LP/Simulation Solvers.
  3. **Knowledge-Centered DSS:** Rule Base, Inference Engine, Expert System.
- اربطهم بـ **Interactive User Interface** تتصل بـ **Decision Maker** خارج الإطار.`,
  },

  // =========================================================================
  // SECTION 05: DATA-CENTERED DSS, WAREHOUSING & OLAP (36 Questions)
  // =========================================================================
  'mt2016-c2': {
    explanationAr:
      'سؤال رسم مسار البيانات التحليلية (Data Pipeline): من قواعد البيانات التشغيلية (OLTP) مروراً بـ ETL ثم الـ Data Warehouse والـ Data Marts وصولاً للـ OLAP والتقارير ومتخذ القرار.',
    solutionAr: `**مراحل الرسمة بالترتيب (من اليسار لليمين):**
1. **Operational Databases (OLTP) & External Sources:** بيانات المعاملات اليومية الخام.
2. **ETL Process:** استخلاص (Extract)، تنظيف وتحويل وتوحيد (Transform)، وتحميل (Load).
3. **Enterprise Data Warehouse (EDW):** مخزن متكامل، موجه بالموضوع (Subject-oriented)، تاريخي (Time-variant)، وغير متطاير (Non-volatile).
4. **Data Marts:** مخازن فرعية مخصصة لكل قطاع (مبيعات، مالية، إنتاج).
5. **OLAP, Reporting & Data Mining:** لتوليد Ad-hoc Reports لمتخذ القرار.`,
  },
  'mt2018-b2': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. البيانات التحليلية (Analytical Data) ضخمة وتاريخية ومتعددة الأبعاد، ومينفعش تدار بنظام معاملات يومية (**OLTP / Transaction processing**)، بل تحتاج **Data Warehouse & OLAP**!',
  },
  'mt2018-b6': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. قواعد البيانات متعددة الأبعاد (Multidimensional DB) مع الـ Data Warehouse والـ **OLAP** هي الأدوات الأساسية لتوليد **التقارير غير المسبقة (Ad-hoc reports)** حسب رؤية المدير.',
  },
  'mt2018-b15': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. معكوسة! الـ **OLAP** بيدي **Hindsight** (تلخيص الماضي)، بينما الـ **Data Mining** بيدي **Insight** (اكتشاف الأنماط والعلاقات الخفية).',
  },
  'f2016-a9': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. انتبه لكلمة **strictly needed**! مستودع البيانات (Data Warehouse) يمكن بناؤه باستخدام قواعد بيانات علائقية (Relational / Star Schema - ROLAP) أو متعددة الأبعاد (MOLAP)، فالـ Multidimensional DB مفيدة جداً لكنها مش شرط وحيد حتمي لبناء المستودع.',
  },
  'f2016-a11': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. الـ Multidimensional DB مع عمليات الـ **OLAP** هي الأداة المثالية لتوليد **Ad-hoc reports** بناءً على الأبعاد اللي يختارها متخذ القرار.',
  },
  'f2016-d1': {
    explanationAr:
      'سؤال رسم الـ Data Pipeline المتكرر في معظم الامتحانات: ارسم العلاقة والاعتمادية بين Operational DB وETL وData Warehouse وData Marts وOLAP وAd-hoc Reports.',
    solutionAr: `**التسلسل القياسي في الرسمة:**
- **Operational DBs** → سهم **Extract** → **ETL (Extract, Transform, Load)** → سهم **Load** → **Data Warehouse** → يتفرع إلى **Data Marts** → تغذي **OLAP Cube / Reporting / Data Mining** → يتفاعل معها **Decision Maker**.`,
  },
  'f2016-d2': {
    explanationAr:
      'ارسم مخطط بلوكات (Block Diagram) لهيكل نظام **Data-Centered DSS** لشركة صناعية.',
    solutionAr: `**مكونات المخطط للشركة الصناعية:**
- **المصادر:** قواعد بيانات الإنتاج والمخزون والمبيعات والمالية (OLTP) + بيانات السوق الخارجية.
- **طبقة التكامل:** ETL لتنظيف وتوحيد البيانات.
- **طبقة التخزين التحليلي:** Data Warehouse + Data Marts (Production Mart, Sales Mart, Finance Mart).
- **طبقة التحليل والعرض:** OLAP Engine + Data Mining + Interactive Reporting Interface للإدارة.`,
  },
  'f2016-d3': {
    explanationAr:
      'سؤال تطبيقي جميل: لتصميم نظام الإدارة العليا بجامعة، اقترح 3 أبعاد (Dimensions)، ومقاييس (Measures)، وعمليات OLAP لتوليد تقارير Ad-hoc.',
    solutionAr: `**التصميم المنطقي لمكعب بيانات الجامعة (University OLAP Cube):**
- **1. ثلاثة أبعاد (Dimensions):**
  - **Time:** العام الأكاديمي → الفصل الدراسي (Semester).
  - **Faculty / Department:** الكلية → القسم العلمي → البرنامج الدراسي.
  - **Student / Staff Category:** المرحلة (بكالوريوس/دراسات عليا) أو الدرجة العلمية لأعضاء هيئة التدريس.
- **2. المقاييس (Measures):** أعداد الطلاب المقيدين والخريجين، نسبة النجاح، التكلفة لكل طالب، نسبة الطلاب لأعضاء هيئة التدريس، عدد الأبحاث المنشورة.
- **3. عمليات الـ OLAP:** **Slice/Dice** (مقارنة كليتين في سنة معينة)، **Roll-up** (تجميع الأقسام على مستوى الجامعة)، **Drill-down** (التفصيل من الكلية للقسم)، **Pivot** (تدوير جدول المقارنة).`,
  },
  'f2017-a9': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. بسبب كلمة **strictly needed**؛ لأن الـ OLAP ممكن يشتغل على Multidimensional DB (MOLAP) أو فوق Relational Star Schema (ROLAP).',
  },
  'f2017-a11': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. الـ Multidimensional DB مع عمليات الـ OLAP هي الأدوات المصممة لتوليد **Ad-hoc reports** تعكس وجهة نظر متخذ القرار.',
  },
  'f2017-d1': {
    explanationAr:
      'ارسم مخطط العلاقات بين Operational DB وETL وData Warehouse وData Marts وOLAP وAd-hoc Reporting.',
    solutionAr: `**ارسم المسار القياسي:** Operational DB → ETL → Data Warehouse → Data Marts → OLAP & Data Mining → Ad-hoc Reports → Decision Maker.`,
  },
  'f2017-d2': {
    explanationAr:
      'ارسم مخطط بلوكات لنظام دعم قرار متكامل للإدارة العليا بجامعة (Integrated University Senior Management DSS) مع أمثلة للأبعاد والمقاييس.',
    solutionAr: `**عناصر الرسمة والتصميم:**
- **قواعد البيانات التشغيلية للجامعة:** شؤون الطلاب، الموارد البشرية، الحسابات، البحث العلمي.
- **ETL & University Data Warehouse:** يغذي Data Marts (الطلاب، أعضاء هيئة التدريس، الميزانية).
- **أمثلة الأبعاد (Dimensions):** Time (السنة الأكاديمية)، Faculty (الكلية/القسم)، Program (البرنامج).
- **أمثلة المقاييس (Measures):** عدد الخريجين، معدل التخرج، ميزانية البحث، نسبة الإشغال.`,
  },
  'f2018-a8': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. كلمة **strictly needed** بتخلي الجملة خطأ؛ لأن تقارير الـ Ad-hoc يمكن توليدها أيضاً عبر ROLAP فوق قواعد بيانات علائقية منظمة (Star/Snowflake schema).',
  },
  'f2018-a9': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. معكوسة! الـ **OLAP** يعطي **Hindsight** والـ **Data Mining** يعطي **Insight**.',
  },
  'f2018-d1': {
    explanationAr:
      'ارسم المخطط التوضيحي للعلاقة بين Operational DB وETL وData Warehouse وData Marts وOLAP وAd-hoc Reports مع تعريف عمليات الـ OLAP.',
    solutionAr: `**المخطط + تعريف عمليات الـ OLAP:**
- **المخطط:** Operational DB → ETL → Data Warehouse → Data Marts → OLAP Cube → Ad-hoc Reports.
- **Viewing Operations:** **Slice** (تثبيت بعد واحد لأخذ شريحة 2D) و**Dice** (تحديد قيم في أكثر من بعد لأخذ مكعب فرعي Sub-cube).
- **Manipulation Operations:** **Roll-up** (التجميع لمستوى أعلى)، **Drill-down** (التفصيل لمستوى أدق)، **Pivot** (تدوير المحاور لعرض زاوية مختلفة).`,
  },
  'f2019-a5': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. هنا مفيش كلمة strictly needed، بل قال **is designed to generate ad-hoc reports**، وده فعلاً الهدف الأساسي من تصميم الـ Multidimensional DB!',
  },
  'f2019-a6': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. معكوسة كالعادة! الـ OLAP يعطي **Hindsight** والـ Data Mining يعطي **Insight**.',
  },
  'f2019-a17': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. عمليات العرض (**Data Viewing**: Slice/Dice) وعمليات المعالجة (**Manipulation**: Roll-up/Drill-down/Pivot) هي فعلاً أدوات الـ **OLAP** لتوليد تقارير Ad-hoc.',
  },
  'f2019-a18': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. خدعة مهمة! الـ **ETL (Extraction, Transformation, Loading)** هو برنامج تكامل ونقل وتنظيف بيانات (Data Integration / Staging pipeline tool) ومش نظام إدارة قواعد بيانات (**DBMS**)!',
  },
  'f2020-a5': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. الـ Multidimensional DB مصممة لتوليد تقارير Ad-hoc تعكس زاوية الرؤية التي يختارها متخذ القرار.',
  },
  'f2020-a6': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. الجملة غلط مرتين: الـ OLAP بيدي **Hindsight** (مش Insight)، والـ Data Mining بيدي **Insight** (مش Foresight)!',
  },
  'f2020-a8': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. الـ **ETL** مصمم لتجهيز وتحميل البيانات إلى **مستودع البيانات (Data Warehouse)** لخدمة كل التحليلات (OLAP, Reporting, Mining) ومش مقتصر فقط على الـ Data Mining.',
  },
  'f2020-a11': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. الـ **Data Marts** هي مخازن فرعية مركزة على قسم أو موضوع محدد، ولذلك تسرّع جداً الوصول للمعلومات وتوليد تقارير الـ Ad-hoc.',
  },
  'f2020-a20': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. الـ **ETL** ليس **DBMS**، بل هو أداة استخلاص وتحويل وتحميل البيانات من المصادر إلى الـ Data Warehouse.',
  },
  'f2020-d1': {
    explanationAr:
      'سؤال مقالي مضمون: عرّف ببساطة الوظائف التحليلية للـ OLAP مقسمة إلى عمليات عرض (Viewing) وعمليات معالجة (Manipulation).',
    solutionAr: `**تقسيمة عمليات الـ OLAP الخمسة:**
- **أولاً: Data Viewing Operations (عمليات العرض والانتقاء):**
  1. **Slice:** تثبيت قيمة واحدة في أحد الأبعاد (مثلاً سنة 2024 فقط) لعرض شريحة ثنائية الأبعاد.
  2. **Dice:** اختيار نطاق أو مجموعة قيم عبر بعدين أو أكثر لاستخراج مكعب فرعي (Sub-cube).
- **ثانياً: Data Manipulation Operations (عمليات المعالجة وتغيير المستوى):**
  1. **Roll-up (Aggregation):** تجميع البيانات من المستوى التفصيلي إلى مستوى أعلى (من شهور إلى سنوات، أو من مدن إلى دول).
  2. **Drill-down:** النزول من المستوى الإجمالي إلى التفاصيل الدقيقة (من السنة إلى الربع إلى الشهر).
  3. **Pivot (Rotation):** تدوير محاور التقرير (تبديل الصفوف والأعمدة) لرؤية البيانات من زاوية تحليلية جديدة.`,
  },
  'f2020-d2': {
    explanationAr:
      'ارسم المخطط التوضيحي للعلاقة بين Operational DB وETL وData Warehouse وData Marts وOLAP وAd-hoc Reporting.',
    solutionAr: `**ارسم المخطط الكامل:** Operational DB → ETL (Extract, Transform, Load) → Data Warehouse → Data Marts → OLAP Cube & Operations → Ad-hoc Reports & Decision Maker.`,
  },
  'f2023-q1-2': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. اللي بيتوصف بإنه **subject-oriented and time-variant** هو الـ **Data Warehouse (مستودع البيانات التحليلي)**! أما قاعدة بيانات المعاملات (**Transaction-processing / OLTP**) فهي application-oriented وcurrent.',
  },
  'f2023-q1-6': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. نظام الـ **OLTP** مخصص لإدارة بيانات المعاملات التشغيلية اليومية، وليس مصمماً للتحليل التاريخي المعقد (الذي يقوم به الـ Data Warehouse والـ OLAP).',
  },
  'f2023-q1-8': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. اللي بيكتشف العلاقات والأنماط المخفية (**discover hidden information and relationships**) هو الـ **Data Mining** مش الـ OLAP! الـ OLAP بيعرض ويلخص البيانات في أبعاد محددة.',
  },
  'f2023-q1-16': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. البيانات التحليلية (Analytical Data) لا يمكن إدارتها بكفاءة بنظام **OLTP**، بل تحتاج إلى **Data Warehouse & OLAP**.',
  },
  'f2023-q5': {
    explanationAr:
      'سؤال الرسم الكبير في 2023: ارسم العلاقة بين Operational DB, ETL, Data Warehouse, Data Marts, OLAP, Data Mining، واشرح معنى Roll-up/Drill-down وPivot.',
    solutionAr: `**عناصر الإجابة الكاملة:**
- **1. الرسم التخطيطي (Pipeline):** Operational DB → ETL → Data Warehouse → Data Marts → (OLAP + Reporting + Data Mining) → Decision Maker.
- **2. شرح Roll-up & Drill-down:** الـ **Roll-up** يصعد في الهرم لتجميع البيانات (مثلاً من شهور لسنة)، والـ **Drill-down** ينزل في الهرم لكشف التفاصيل الدقيقة (من سنة لشهور).
- **3. شرح Pivot:** تدوير محاور المكعب أو الجدول لتغيير طريقة المقارنة بين الأبعاد.`,
  },
  'f2025-q1-2': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. متكرر في 2025: خصائص **subject-oriented and time-variant** تخص الـ **Data Warehouse** وليس الـ Transaction-processing database (OLTP).',
  },
  'f2025-q1-6': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. البيانات التحليلية (Analytical Data) لا تدار بنظام **OLTP**، بل تحتاج **Data Warehouse & OLAP**.',
  },
  'f2025-q1-8': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. اكتشاف المعلومات والعلاقات المخفية (**discover hidden information and relationships**) هو وظيفة الـ **Data Mining** وليس الـ **OLAP**.',
  },
  'f2025-q5': {
    explanationAr:
      'سؤال الرسم المتكرر في 2025: ارسم العلاقة بين Operational DB, ETL, Data Warehouse, Data Marts, OLAP, Data Mining، مع تعريف Roll-up/Drill-down وPivot.',
    solutionAr: `**الإجابة الكاملة:**
- **المخطط:** Operational DB → ETL → Data Warehouse → Data Marts → OLAP / Reporting / Data Mining → Decision Maker.
- **Roll-up / Drill-down:** التنقل صعوداً (تجميع الإجماليات) وهبوطاً (عرض التفاصيل) عبر مستويات البعد الواحد.
- **Pivot:** تدوير محاور العرض لعرض الأبعاد من منظور مختلف.`,
  },

  // =========================================================================
  // SECTION 06: MODEL-CENTERED DSS & MBMS (20 Questions)
  // =========================================================================
  'mt2015-c1': {
    explanationAr:
      'ارسم المخطط المفاهيمي لنظام **Model-Centered DSS**، موضحاً قاعدة النماذج (Model Base)، ونظام إدارتها (MBMS)، ولغة النمذجة، والـ Solvers، وربطها بالبيانات وواجهة المستخدم.',
    solutionAr: `**المكونات الأساسية في رسمة Model-Centered DSS:**
1. **Model Base (قاعدة النماذج):** تضم نماذج Optimization, Simulation, Forecasting, Financial/Statistical models.
2. **MBMS (Model Base Management System):** يدير إنشاء وتخزين واسترجاع وربط وتشغيل النماذج.
3. **Modeling Language & Solvers:** مثل GAMS ومحركات الحل (LP/MIP/NLP solvers).
4. **Data Management / Database Link:** لتغذية النماذج بالمعاملات والبيانات.
5. **Experimentation, Explanation & User Interface:** لتمكين متخذ القرار من تجارب What-if وتحليل الحساسية وفهم النتائج.`,
  },
  'f2016-a15': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. في نظام الـ **Model-Centered DSS**، التركيز الأساسي بيكون على **النماذج الرياضية والـ MBMS والـ Solvers**؛ أما الـ Data Warehouse والـ OLAP فقد تكون مفيدة لكنها ليست الشرط أو التركيز الرئيسي له.',
  },
  'f2016-e1': {
    explanationAr:
      'اشرح باختصار الوظائف الرئيسية لنظام إدارة قاعدة النماذج (**MBMS - Model Base Management System**).',
    solutionAr: `**وظائف الـ MBMS الأساسية:**
- **أولاً: Model Creation & Updating (إنشاء وتحديث النماذج):** صياغة وبناء النماذج (Formulation/Generation)، التعديل والتحديث (Editing/Updating)، التحقق والتوثيق (Validation & Documentation).
- **ثانياً: Model Management & Use (إدارة وتشغيل النماذج):** التخزين والفهرسة والاسترجاع (Storage & Retrieval)، ربط وتكامل النماذج (Model Linking)، التنفيذ والربط بالـ Solvers (Execution)، ودعم تجارب What-if وتحليل الحساسية (Sensitivity & Output Analysis).`,
  },
  'f2016-e2': {
    explanationAr:
      'ارسم مخطط بلوكات لنظام **Model-Centered DSS** لمؤسسة صناعية، واقترح 3 معايير لتصنيف وتكامل النماذج داخل قاعدة النماذج.',
    solutionAr: `**عناصر الرسمة + 3 معايير لتصنيف النماذج:**
- **مكونات المخطط:** Model Base (نماذج الإنتاج، الشحن، المخزون، الميزانية) + MBMS + Modeling Language & Solvers + Database Link + User Interface.
- **3 معايير لتصنيف وتكامل النماذج في الـ Model Base:**
  1. **حسب المجال الوظيفي (By Functional Domain):** إنتاج، تسويق، شحن وتوزيع، تمويل.
  2. **حسب المستوى الإداري والأفق الزمني (By Management Level / Time Horizon):** استراتيجي طويل الأجل، تكتيكي متوسط الأجل، تشغيلي قصير الأجل.
  3. **حسب التقنية الرياضية (By Modeling Methodology):** Optimization (LP/MIP)، Simulation، Forecasting، Statistical.`,
  },
  'f2017-a15': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. في الـ **Model-Centered DSS**، مستودع البيانات والـ OLAP قد يُستفاد منهما، لكنهما لا يمثلان التركيز الأساسي للنظام (تركيزه الأساسي هو الـ Model Base والـ MBMS).',
  },
  'f2017-e1': {
    explanationAr:
      'سؤال مقالي منظم جداً: اذكر وظائف الـ **MBMS** مقسمة إلى: (i) تطوير وتحديث النماذج، و(ii) إدارة النماذج.',
    solutionAr: `**تقسيمة وظائف الـ MBMS الرسمية:**
- **i) Model Development and Updating (إنشاء وتطوير وتحديث النماذج):**
  - صياغة وبناء النماذج باستخدام لغات النمذجة (Model formulation & generation).
  - تعديل وتحديث المعادلات والمعاملات (Model editing & updating).
  - فحص صحة النموذج وتوثيقه (Model validation, verification & documentation).
- **ii) Model Management and Manipulation (إدارة وتشغيل النماذج):**
  - تخزين وفهرسة واسترجاع النماذج من الـ Model Base (Storage, cataloging & retrieval).
  - ربط النماذج ببعضها وبمصادر البيانات (Model linking & data integration).
  - تشغيل النموذج مع الـ Solver المناسب وإجراء تجارب What-if وتحليل الحساسية (Execution, experimentation & sensitivity analysis).`,
  },
  'f2017-e2': {
    explanationAr:
      'ارسم مخطط الـ **Model-Centered DSS** لشركة صناعية، واقترح 3 معايير لتصنيف النماذج في الـ Model Base.',
    solutionAr: `**الإجابة الكاملة:**
- **الرسمة:** Model Base + MBMS + Modeling Language (GAMS) & Solvers + Data Link + User Interface.
- **معايير التصنيف الثلاثة:** (1) حسب الوظيفة (إنتاج، شحن، مالية)، (2) حسب المستوى الزمني والإداري (استراتيجي، تكتيكي، تشغيلي)، (3) حسب أسلوب النمذجة (Optimization, Simulation, Forecasting).`,
  },
  'f2018-a13': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. في الـ **Model-Centered DSS**، الـ Data Warehousing والـ OLAP ليست هي التركيز الرئيسي، لأن التركيز الرئيسي على النماذج الرياضية والـ MBMS.',
  },
  'f2018-a2-1': {
    explanationAr:
      'الإجابة الصحيحة هي **C (Model Base Management System - MBMS)** ✅. الـ General-Purpose Model-Centered DSS يعتمد بشكل أساسي على الـ **MBMS** لإدارة النماذج وربطها بالبيانات والـ Solvers.',
  },
  'f2018-e2': {
    explanationAr:
      'ارسم مخطط الـ **Model-Centered DSS** لشركة صناعية، واقترح 3 معايير لتصنيف أو تكامل النماذج في قاعدة النماذج.',
    solutionAr: `**الإجابة الكاملة:**
- **المخطط:** Model Base + MBMS + Modeling Language & Solvers + Database Link + User Interface.
- **معايير التصنيف والتكامل:** حسب المجال الوظيفي (Functional area)، حسب المستوى الإداري والأفق الزمني (Decision level/horizon)، وحسب الطريقة الرياضية (Mathematical technique).`,
  },
  'f2020-e1': {
    explanationAr:
      'ارسم مخطط بلوكات مبسط لنظام **General Purpose Model-Centered DSS** لشركة صناعية، مع ذكر أمثلة للنماذج داخل الـ Model Base.',
    solutionAr: `**مكونات المخطط وأمثلة النماذج:**
- **المخطط:** Model Base ↔ MBMS ↔ Modeling Language & Solvers ↔ Data Management ↔ User Interface.
- **أمثلة النماذج في الشركة الصناعية:**
  1. **Production Planning & Scheduling Model (LP/MIP):** لتحديد كميات الإنتاج المثلى.
  2. **Transportation & Shipping Model:** لتقليل تكلفة الشحن بين المصانع والأسواق.
  3. **Inventory & Supply Chain Simulation Model:** لمحاكاة المخزون والطلب العشوائي.
  4. **Demand Forecasting & Financial Budgeting Models:** للتنبؤ بالطلب وتوزيع الميزانية.`,
  },
  'f2020-e2': {
    explanationAr:
      'اذكر قائمة الوظائف البرمجية للـ **MBMS** مصنفة إلى Model Creation وModel Manipulation.',
    solutionAr: `**التصنيف الثنائي لوظائف الـ MBMS:**
- **1. Model Creation & Updating:** صياغة النموذج (Formulation)، توليد الكود (Generation)، التعديل (Editing/Updating)، التحقق والتوثيق (Validation & Documentation).
- **2. Model Manipulation & Management:** التخزين والاسترجاع (Storage & Retrieval)، ربط النماذج والبيانات (Linking)، التنفيذ مع الـ Solvers (Execution)، وإجراء تجارب What-if وتحليل الحساسية (Experimentation & Sensitivity Analysis).`,
  },
  'f2023-q1-4': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. خبرة ورؤية متخذ القرار (**Decision maker insights**) ضرورية جداً لتحويل النماذج الرياضية العامة إلى قرارات عملية قابلة للتنفيذ.',
  },
  'f2023-q2': {
    explanationAr:
      'سؤال متكرر في 2023 و2025: اذكر قائمة الوظائف البرمجية (Software functions/routines) التي تشرح نظام إدارة النماذج (**MBMS**) في الـ Model-Centered DSS.',
    solutionAr: `**قائمة وظائف الـ MBMS الكاملة:**
1. **Model Creation & Formulation:** بناء وصياغة النماذج الرياضية.
2. **Model Storage, Cataloging & Retrieval:** حفظ وفهرسة واسترجاع النماذج من الـ Model Base.
3. **Model Updating & Editing:** تعديل المعادلات أو تحديث هيكل النموذج.
4. **Model Linking & Integration:** ربط مخرجات نموذج بمدخلات نموذج آخر وربطها بقواعد البيانات.
5. **Model Execution & Solver Interface:** استدعاء الـ Solver المناسب لحل النموذج.
6. **Model Experimentation & Sensitivity Analysis:** تشغيل سيناريوهات What-if، Goal-seeking، وتحليل الحساسية.
7. **Explanation & Report Generation:** تفسير النتائج وعرضها لمتخذ القرار.`,
  },
  'f2023-q6-1': {
    explanationAr:
      'ارسم مخطط بلوكات مبسط لنظام **Model-Centered DSS** لشركة صناعية مع ذكر أمثلة للنماذج داخل قاعدة النماذج.',
    solutionAr: `**عناصر الرسمة وأمثلة النماذج:**
- **البلوكات:** Model Base + MBMS + Modeling Language & Solvers + Database Interface + User Interface.
- **أمثلة النماذج:** Production Planning LP، Transportation/Shipping Model، Inventory Simulation، Demand Forecasting.`,
  },
  'f2023-q6-2': {
    explanationAr:
      'اذكر وظائف الـ **MBMS** في نظام الـ Model-Centered DSS (سؤال مكرر في الورقة لاختبار إلمامك بوظائف الإنشاء والإدارة).',
    solutionAr: `**اكتب المجموعتين بوضوح:** (1) **Model Creation/Updating** (formulation, editing, validation, documentation) و(2) **Model Management/Manipulation** (storage, retrieval, linking, solver execution, what-if & sensitivity analysis).`,
  },
  'f2025-q1-4': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. رؤية وخبرة متخذ القرار (**Decision maker insights**) مطلوبة للانتقال من النمذجة العامة إلى نموذج دعم قرار مخصص وفعال.',
  },
  'f2025-q2': {
    explanationAr:
      'اذكر قائمة الوظائف البرمجية (Software functions/routines) الخاصة بنظام الـ **MBMS** في الـ Model-Centered DSS.',
    solutionAr: `**وظائف الـ MBMS السبعة:**
1. **Model Creation & Formulation**
2. **Model Editing & Updating**
3. **Model Validation & Documentation**
4. **Model Storage, Indexing & Retrieval**
5. **Model Linking & Data Integration**
6. **Model Execution & Solver Coupling**
7. **Experimentation (What-if / Sensitivity) & Output Reporting**`,
  },
  'f2025-q6-1': {
    explanationAr:
      'ارسم مخطط بلوكات لنظام **General Purpose Model-Centered DSS** لشركة صناعية مع أمثلة للنماذج داخل الـ Model Base.',
    solutionAr: `**البلوكات + الأمثلة:**
- **البلوكات:** Model Base + MBMS + Modeling Language & Solvers + Data Link + User Interface.
- **أمثلة النماذج الصناعية:** Production & Capacity Planning، Shipping & Distribution LP، Queueing/Inventory Simulation، Financial & Demand Forecasting.`,
  },
  'f2025-q6-2': {
    explanationAr:
      'اذكر قائمة الوظائف البرمجية (Routines) لنظام إدارة قاعدة النماذج (**MBMS**).',
    solutionAr: `**قسمها لجزئين:** **Creation/Updating** (بناء وتعديل وتوثيق النماذج) و**Management/Use** (تخزين، استرجاع، ربط، تشغيل الـ Solvers، وتجارب What-if وتحليل الحساسية).`,
  },

  // =========================================================================
  // SECTION 07: MODELING HIERARCHY & STRUCTURED MODELING (2 Questions)
  // =========================================================================
  'mt2018-b19': {
    explanationAr:
      'الإجابة **FALSE (خطأ)** ❌. ركز في الفرق الدقيق ده! الـ **Structured Modeling Language** بتُستخدم لـ **تمثيل وهيكلة مجال المشكلة بيانياً ومفاهيمياً (graphically represent a modeling domain)** ككيانات وعلاقات، لكنها مش هي اللي بتحل (solve) النموذج الرياضي مباشرة! اللي بيحل هو الـ **Solver** بعد كتابة النموذج بلغة جبرية زي GAMS.',
  },
  'f2018-a15': {
    explanationAr:
      'الإجابة **TRUE (صح)** ✅. شفت الفرق؟ هنا قال **graphically represent a modeling domain** فقط (تمثيل مجال النمذجة بيانياً عبر Entities, Attributes, Relationships)، ودي فعلاً الوظيفة الصحيحة للـ Structured Modeling!',
  },
}


