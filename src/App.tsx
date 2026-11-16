import { useCallback, useEffect, useState } from 'react'
import type { PageId } from './types'
import { PAGE_META, SECTIONS } from './data/course'
import { useLearning } from './context/LearningContext'
import { Sidebar, Topbar } from './components/Layout'
import { PageToc } from './components/PageToc'
import { Dashboard } from './pages/Dashboard'
import { ExamStudio } from './pages/ExamStudio'
import { Revision } from './pages/Revision'
import { SourceAudit } from './pages/SourceAudit'
import { Section01 } from './pages/sections/Section01'
import { Section02 } from './pages/sections/Section02'
import { Section03 } from './pages/sections/Section03'
import { Section04 } from './pages/sections/Section04'
import { Section05 } from './pages/sections/Section05'
import { Section06 } from './pages/sections/Section06'
import { Section07 } from './pages/sections/Section07'
import { Section08 } from './pages/sections/Section08'
import { Section09 } from './pages/sections/Section09'
import { Section10 } from './pages/sections/Section10'
import { Section11 } from './pages/sections/Section11'

const SECTION_COMPONENTS = {
  foundations: Section01,
  process: Section02,
  'support-systems': Section03,
  'dss-core': Section04,
  'data-centered': Section05,
  'model-centered': Section06,
  'modeling-hierarchy': Section07,
  gams: Section08,
  'production-shipping': Section09,
  simulation: Section10,
  ahp: Section11,
} as const

const VALID_PAGES = new Set<string>(Object.keys(PAGE_META))

function readPage(): PageId {
  const raw = window.location.hash.replace(/^#\/?/, '').trim()
  return (VALID_PAGES.has(raw) ? raw : 'dashboard') as PageId
}

function pageTitle(page: PageId): string {
  const meta = PAGE_META[page]
  if (page === 'dashboard') return 'DS312 · Decision Support Systems'
  return `${meta.title} · DS312`
}

export default function App() {
  const [page, setPage] = useState<PageId>(readPage)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { markVisited } = useLearning()

  useEffect(() => {
    const onHashChange = () => setPage(readPage())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    markVisited(page)
    document.title = pageTitle(page)
    const container = document.getElementById('main-scroll')
    if (container) container.scrollTop = 0
  }, [page, markVisited])

  const navigate = useCallback((next: PageId) => {
    setSidebarOpen(false)
    const target = `#/${next}`
    if (window.location.hash !== target) {
      window.location.hash = target
    } else {
      setPage(next)
    }
  }, [])

  const section = SECTIONS.find((item) => item.id === page)
  const SectionComponent = SECTION_COMPONENTS[page as keyof typeof SECTION_COMPONENTS]

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Sidebar
        page={page}
        onNavigate={navigate}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="app-main">
        <Topbar page={page} onOpenMenu={() => setSidebarOpen(true)} onNavigate={navigate} />
        <main id="main-scroll" className="main-scroll">
          <div id="main-content" className={`page-container ${SectionComponent ? 'page-container--section' : ''}`}>
            {page === 'dashboard' && <Dashboard onNavigate={navigate} />}
            {page === 'exam' && <ExamStudio />}
            {page === 'revision' && <Revision onNavigate={navigate} />}
            {page === 'audit' && <SourceAudit />}
            {SectionComponent && (
              <div className="section-layout">
                <div className="section-layout__main">
                  <SectionComponent onNavigate={navigate} />
                </div>
                <PageToc page={page} onNavigate={navigate} />
              </div>
            )}
            {section && (
              <div className="page-source-strip">
                <span>Section {section.number}</span>
                <span>{section.lectureSources.join(' · ')}</span>
                <span>{section.minutes} min study time</span>
              </div>
            )}
          </div>
          <footer className="app-footer">
            <div>
              <strong>DS312 · Decision Support Systems</strong>
              <p>
                Built from the supplied lecture transcriptions and historical papers. Exam answers are independently
                reasoned model answers; no official key was provided.
              </p>
            </div>
            <div className="app-footer__links">
              <button type="button" onClick={() => navigate('audit')}>Source audit</button>
              <button type="button" onClick={() => navigate('revision')}>Revision sheet</button>
              <button type="button" onClick={() => navigate('exam')}>Exam studio</button>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
