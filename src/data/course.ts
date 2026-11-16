import type { PageId, SectionMeta } from '../types'

export const SECTIONS: SectionMeta[] = [
  {
    id: 'foundations',
    number: '01',
    title: 'Foundations of Decision Support',
    shortTitle: 'Foundations',
    eyebrow: 'Why computers support judgment',
    description:
      'Start with the decision environment: why managers need analytical support, what data, information and knowledge actually mean, and the hindsight–insight–foresight lens.',
    minutes: 28,
    icon: 'Compass',
    lectureSources: ['Lecture 1 · slides 1–8', 'Lecture 2 · slides 1–12', 'Lecture 5 · slides 2–7'],
    examWeight: 'High · vocabulary, T/F, linkages',
  },
  {
    id: 'process',
    number: '02',
    title: 'Decisions, Support & the DSS Cycle',
    shortTitle: 'Decision & DSS cycle',
    eyebrow: 'From a messy situation to an implemented choice',
    description:
      'Learn how decision makers move through intelligence, design, choice and implementation — and where data, models, knowledge and judgment enter the cycle.',
    minutes: 26,
    icon: 'Workflow',
    lectureSources: ['Lecture 5 · slides 13–15', 'Lecture 6 · slide 19', 'Lecture 2 · slides 3–4'],
    examWeight: 'High · schematic diagram',
  },
  {
    id: 'support-systems',
    number: '03',
    title: 'Computer-Aided Management Support Systems',
    shortTitle: 'Support systems',
    eyebrow: 'MIS, DSS, EIS, ES, GSS, BI and BA',
    description:
      'Build a precise map of the support-system family. Compare their users, data, analytical power, decision type and management level — without blurring them together.',
    minutes: 34,
    icon: 'Network',
    lectureSources: ['Lecture 6 · slides 2–15, 20', 'Lecture 2 · slides 14–20', 'Lecture 5 · slides 8–10'],
    examWeight: 'Very high · comparisons and T/F',
  },
  {
    id: 'dss-core',
    number: '04',
    title: 'DSS: Definitions, Classification & Architecture',
    shortTitle: 'DSS core',
    eyebrow: 'One name, several useful lenses',
    description:
      'Define a DSS in user and technical language, classify it by user, issue, decision phase and scope, and read the integrated conceptual architecture component by component.',
    minutes: 38,
    icon: 'Blocks',
    lectureSources: ['Lecture 7 · slides 1–14', 'Lecture 5 · slides 8–12', 'Lecture 6 · slides 5–6, 17'],
    examWeight: 'Very high · definitions, diagrams',
  },
  {
    id: 'data-centered',
    number: '05',
    title: 'Data-Centered DSS',
    shortTitle: 'Data-centered DSS',
    eyebrow: 'From operational records to analytical understanding',
    description:
      'Follow data from OLTP sources through ETL, the warehouse and data marts into OLAP, reporting and data mining. Master the cube and its analytical operations.',
    minutes: 42,
    icon: 'Database',
    lectureSources: ['Lecture 6 · slides 3–4', 'Lecture 2 · slides 14–16, 18–19', 'Lecture 5 · slides 6–7, 9'],
    examWeight: 'Very high · architecture and OLAP',
  },
  {
    id: 'model-centered',
    number: '06',
    title: 'Model-Centered DSS',
    shortTitle: 'Model-centered DSS',
    eyebrow: 'A laboratory for alternatives',
    description:
      'Understand what a model-centered DSS is, how a model base and MBMS work, and how optimization, simulation, scenario and sensitivity experiments turn models into decision support.',
    minutes: 32,
    icon: 'SlidersHorizontal',
    lectureSources: ['Lecture 5 · slides 9–12', 'Lecture 2 · slides 21–27', 'Lecture 7 · slides 10–12'],
    examWeight: 'Very high · MBMS and architecture',
  },
  {
    id: 'modeling-hierarchy',
    number: '07',
    title: 'Modeling Hierarchy & Structured Modeling',
    shortTitle: 'Modeling hierarchy',
    eyebrow: 'Domain → structure → instance',
    description:
      'See how a real production-shipping world becomes entities, attributes, relationships, database tables, equations and finally a numerical model instance.',
    minutes: 36,
    icon: 'GitBranch',
    lectureSources: ['Lecture 8 · slides 6–15', 'Lecture 3 · slides 11–15'],
    examWeight: 'High · hierarchy and ER modelling',
  },
  {
    id: 'gams',
    number: '08',
    title: 'Model-Building Languages & GAMS',
    shortTitle: 'GAMS',
    eyebrow: 'Declare the model, not the algorithm',
    description:
      'Learn the modeling-language idea, efficiency and effectiveness, then build, read and explain a complete transportation model in GAMS.',
    minutes: 50,
    icon: 'Code2',
    lectureSources: ['Lecture 3 · slides 1–35', 'Lecture 4 · slides 1–5', 'Lecture 6 · slide 5'],
    examWeight: 'Critical · GAMS code and theory',
  },
  {
    id: 'production-shipping',
    number: '09',
    title: 'Production & Shipping DSS Case Study',
    shortTitle: 'Production & shipping',
    eyebrow: 'The lecturer’s domain-oriented case',
    description:
      'Reconstruct the multi-item production-shipping system, its equations, database, risk preferences and the three exam-relevant scenarios.',
    minutes: 38,
    icon: 'Truck',
    lectureSources: ['Lecture 8 · slides 2–6, 16–21', 'Lecture 5 · slides 13–15'],
    examWeight: 'Critical · formulation and scenarios',
  },
  {
    id: 'simulation',
    number: '10',
    title: 'Simulation & Arena',
    shortTitle: 'Simulation & Arena',
    eyebrow: 'When a system is easier to run than to solve',
    description:
      'Understand process-based discrete-event simulation through a gas station queue, read a simulation timeline, and recognise the core Arena modelling blocks.',
    minutes: 24,
    icon: 'PlayCircle',
    lectureSources: ['Lecture 4 · slides 1–21', 'Lecture 3 · slides 1–8', 'Lecture 8 · slide 20'],
    examWeight: 'Supporting · concepts and system map',
  },
  {
    id: 'ahp',
    number: '11',
    title: 'Analytical Hierarchy Process (AHP)',
    shortTitle: 'AHP',
    eyebrow: 'Structuring judgment under inconsistency',
    description:
      'Build a goal–criteria–alternatives hierarchy, apply Saaty’s scale, normalise pairwise matrices and compute the best alternative step by step.',
    minutes: 40,
    icon: 'Layers',
    lectureSources: ['Lecture 9 · slides 1–22'],
    examWeight: 'High · MCQ, steps and calculation',
  },
]

export const PAGE_META: Record<
  string,
  { title: string; short: string; eyebrow: string; group: 'start' | 'learn' | 'practice' | 'reference' }
> = {
  dashboard: { title: 'Course dashboard', short: 'Dashboard', eyebrow: 'Your learning path', group: 'start' },
  audit: { title: 'Source audit & coverage', short: 'Source audit', eyebrow: 'Evidence and limitations', group: 'reference' },
  exam: { title: 'Historical exam studio', short: 'Exam studio', eyebrow: '200 authentic exam items', group: 'practice' },
  revision: { title: 'Revision & cheat sheet', short: 'Revision', eyebrow: 'Fast, connected recall', group: 'practice' },
  ...Object.fromEntries(
    SECTIONS.map((s) => [
      s.id,
      { title: s.title, short: s.shortTitle, eyebrow: s.eyebrow, group: 'learn' as const },
    ]),
  ),
}

export const SECTION_IDS = SECTIONS.map((s) => s.id)

export function isLearningSection(id: PageId): boolean {
  return SECTION_IDS.includes(id)
}

export const COURSE_STATS = {
  lectures: 9,
  slides: 189,
  examItems: 200,
  verifiedExamItems: 200,
  contextOnly: 19,
  unresolved: 2,
  sections: 11,
}
