import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Language, PageId, ProgressState } from '../types'

interface LearningContextValue {
  lang: Language
  setLang: (lang: Language) => void
  progress: ProgressState
  markVisited: (id: PageId) => void
  toggleComplete: (id: PageId) => void
  recordQuiz: (topic: string, correct: number, total: number) => void
  resetProgress: () => void
  completedCount: number
}

const LearningContext = createContext<LearningContextValue | null>(null)

const PROGRESS_KEY = 'ds312-progress-v2'
const LANG_KEY = 'ds312-lang-v3'

const initialProgress: ProgressState = { completed: [], visited: [], quiz: {} }

function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY) || localStorage.getItem('ds312-progress-v1')
    if (!raw) return initialProgress
    const parsed = JSON.parse(raw) as ProgressState
    return {
      completed: Array.isArray(parsed.completed) ? parsed.completed : [],
      visited: Array.isArray(parsed.visited) ? parsed.visited : [],
      quiz: parsed.quiz && typeof parsed.quiz === 'object' ? parsed.quiz : {},
    }
  } catch {
    return initialProgress
  }
}

export function LearningProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem(LANG_KEY)
      if (stored === 'en' || stored === 'ar') return stored
      // Default to bilingual (English + Egyptian Arabic) mode!
      return 'ar'
    } catch {
      return 'ar'
    }
  })
  const [progress, setProgress] = useState<ProgressState>(loadProgress)

  useEffect(() => {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress))
    } catch {
      // Storage is optional; the learning flow must keep working without it.
    }
  }, [progress])

  useEffect(() => {
    try {
      localStorage.setItem(LANG_KEY, lang)
    } catch {
      // Ignore storage failures.
    }
    // Course content and official question wording stay in English; Arabic is
    // presented inside explicitly RTL explanation cards.
    document.documentElement.lang = 'en'
  }, [lang])

  const setLang = useCallback((next: Language) => {
    setLangState(next)
  }, [])

  const markVisited = useCallback((id: PageId) => {
    setProgress((prev) =>
      prev.visited.includes(id) ? prev : { ...prev, visited: [...prev.visited, id] },
    )
  }, [])

  const toggleComplete = useCallback((id: PageId) => {
    setProgress((prev) => ({
      ...prev,
      completed: prev.completed.includes(id)
        ? prev.completed.filter((item) => item !== id)
        : [...prev.completed, id],
    }))
  }, [])

  const recordQuiz = useCallback((topic: string, correct: number, total: number) => {
    setProgress((prev) => {
      const previous = prev.quiz[topic]
      return {
        ...prev,
        quiz: {
          ...prev.quiz,
          [topic]: {
            correct: (previous?.correct ?? 0) + correct,
            total: (previous?.total ?? 0) + total,
            updatedAt: new Date().toISOString(),
          },
        },
      }
    })
  }, [])

  const resetProgress = useCallback(() => setProgress(initialProgress), [])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      progress,
      markVisited,
      toggleComplete,
      recordQuiz,
      resetProgress,
      completedCount: progress.completed.length,
    }),
    [lang, setLang, progress, markVisited, toggleComplete, recordQuiz, resetProgress],
  )

  return <LearningContext.Provider value={value}>{children}</LearningContext.Provider>
}

export function useLearning() {
  const context = useContext(LearningContext)
  if (!context) throw new Error('useLearning must be used inside LearningProvider')
  return context
}
