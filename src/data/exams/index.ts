import type { Question } from '../../types'
import { FINALS_A } from './finals-a'
import { FINALS_B } from './finals-b'
import { MIDTERMS } from './midterms'

export const QUESTIONS: Question[] = [...MIDTERMS, ...FINALS_A, ...FINALS_B]

export const EXAM_ORDER = [
  'Midterm 2015',
  'Midterm 2016',
  'Midterm 2018',
  'Final 2016',
  'Final 2017',
  'Final 2018',
  'Final 2019',
  'Final 2020',
  'Final 2023',
  'Final 2025',
]

export const EXAM_INFO: Record<
  string,
  { date: string; code: string; duration: string; marks: string; note: string }
> = {
  'Midterm 2015': {
    date: '21 December 2015',
    code: 'DS331',
    duration: 'One hour',
    marks: '100',
    note: 'Five numbered prompts: concepts, model-building languages and a model-centered DSS diagram.',
  },
  'Midterm 2016': {
    date: '23 November 2016',
    code: 'DS331',
    duration: 'One hour',
    marks: '100',
    note: 'Five numbered prompts, including VDSS and a data-warehouse schematic.',
  },
  'Midterm 2018': {
    date: '10 November 2018',
    code: 'DS331',
    duration: 'One hour',
    marks: '60',
    note: 'The paper is headed “Final Exam” but is indexed as Midterm 2018 in the supplied document. Four concept prompts plus 20 True/False items.',
  },
  'Final 2016': {
    date: '16 January 2016',
    code: 'DS331',
    duration: 'Two hours',
    marks: '60',
    note: 'Fifteen True/False items, a full GAMS rewrite, conceptual/data/model questions.',
  },
  'Final 2017': {
    date: '9 January 2017',
    code: 'DS331',
    duration: 'Two hours',
    marks: '60',
    note: 'Fifteen True/False items, VDSS, conceptual model, data-centered and model-centered sections. Two external case claims are retained for source review.',
  },
  'Final 2018': {
    date: '1 January 2018',
    code: 'DS331',
    duration: 'Two hours',
    marks: '60',
    note: 'Fifteen True/False items, two MCQs, the washing-machine transportation LP/GAMS problem, and architecture questions.',
  },
  'Final 2019': {
    date: '14 January 2019',
    code: 'DS331',
    duration: 'Two hours',
    marks: '60',
    note: 'Only Part A (18 True/False items) is present in the supplied document. The paper appears incomplete.',
  },
  'Final 2020': {
    date: '13 January 2020',
    code: 'DS331',
    duration: 'Two hours',
    marks: '60',
    note: 'Twenty True/False items, three MCQs, conceptual model, modelling language, data-centered and model-centered questions.',
  },
  'Final 2023': {
    date: 'Final 2023',
    code: 'DS331',
    duration: 'Not stated',
    marks: '60',
    note: 'Six structured questions, including repeated MBMS and architecture questions.',
  },
  'Final 2025': {
    date: 'Final 2025',
    code: 'DS331',
    duration: 'Not stated',
    marks: '20 points for True/False; full total not stated',
    note: 'Fifteen True/False items and the same structured architecture/modeling questions as 2023.',
  },
}

export const EXAM_TOPICS = Array.from(new Set(QUESTIONS.map((q) => q.topic))).sort()

export const QUESTION_TYPE_LABEL: Record<string, string> = {
  tf: 'True / False',
  mcq: 'Multiple choice',
  written: 'Written',
  diagram: 'Diagram',
  gams: 'GAMS',
  modeling: 'Modelling',
  case: 'Case',
}

export const BANK_STATS = {
  total: QUESTIONS.length,
  autoGraded: QUESTIONS.filter((q) => typeof q.answer === 'boolean' || typeof q.answer === 'number').length,
  contextOnly: QUESTIONS.filter((q) => q.status === 'context-only').length,
  unresolved: QUESTIONS.filter((q) => typeof q.answer === 'string' && q.answer.startsWith('Unresolved')).length,
  byExam: Object.fromEntries(
    EXAM_ORDER.map((exam) => [exam, QUESTIONS.filter((q) => q.exam === exam).length]),
  ) as Record<string, number>,
  byType: Object.fromEntries(
    Object.keys(QUESTION_TYPE_LABEL).map((type) => [
      type,
      QUESTIONS.filter((q) => q.type === type).length,
    ]),
  ) as Record<string, number>,
}

if (QUESTIONS.length !== 200) {
  console.warn(`Exam bank expected 200 items, found ${QUESTIONS.length}`)
}
