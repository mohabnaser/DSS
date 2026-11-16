export type Language = 'en' | 'ar'

export type PageId =
  | 'dashboard'
  | 'audit'
  | 'foundations'
  | 'process'
  | 'support-systems'
  | 'dss-core'
  | 'data-centered'
  | 'model-centered'
  | 'modeling-hierarchy'
  | 'gams'
  | 'production-shipping'
  | 'simulation'
  | 'ahp'
  | 'exam'
  | 'revision'

export type QuestionType =
  | 'tf'
  | 'mcq'
  | 'written'
  | 'diagram'
  | 'gams'
  | 'modeling'
  | 'case'

export interface Question {
  id: string
  exam: string
  date: string
  number: string
  part: string
  wording: string
  choices?: string[]
  answer: boolean | number | string
  type: QuestionType
  topic: string
  sectionId: PageId
  explanation: string
  solution?: string
  visual?: string
  points?: string
  status?: 'verified' | 'context-only'
  note?: string
}

export interface SectionMeta {
  id: PageId
  number: string
  title: string
  shortTitle: string
  eyebrow: string
  description: string
  minutes: number
  icon: string
  lectureSources: string[]
  examWeight: string
  prerequisites?: string[]
}

export interface ProgressState {
  completed: PageId[]
  visited: PageId[]
  quiz: Record<string, { correct: number; total: number; updatedAt: string }>
}
