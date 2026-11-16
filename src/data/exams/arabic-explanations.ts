export interface ArabicExamEntry {
  explanationAr: string
  solutionAr?: string
}

/**
 * Rich Egyptian-Arabic explanations and exam guidance for every question
 * in Section 01 (Foundations) and Section 02 (Decision & DSS Cycle).
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
- **Hindsight (ماذا حدث؟):**
  - **النظام:** Data-Centered DSS.
  - **الأدوات:** Data Warehouse, OLAP, Ad-hoc & Planned Reporting.
- **Insight (لماذا حدث وما العلاقة؟):**
  - **النظام:** Data-Centered DSS (Analytical wing).
  - **الأدوات:** Data Mining, Statistical Analysis (Regression, Clustering, Classification).
- **Foresight (ماذا سيحدث وما القرار الأفضل؟):**
  - **النظام:** Model-Centered DSS & Knowledge-Centered DSS.
  - **الأدوات:** Optimization (GAMS/LP), Simulation, Forecasting, Scenario Analysis, Expert Systems.`,
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
}
