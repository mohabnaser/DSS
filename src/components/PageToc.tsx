import { useEffect, useMemo, useState } from 'react'
import type { PageId } from '../types'
import { QUESTIONS } from '../data/exams'
import { SECTIONS } from '../data/course'
import { useLearning } from '../context/LearningContext'
import { Icon } from './Icon'

interface TocItem {
  id: string
  label: string
}

function slug(text: string, index: number): string {
  const base = text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 48)
  return `sec-${index}-${base || 'part'}`
}

/**
 * Right-rail "On this page" navigator, modelled on the reference study guides:
 * scroll-spy outline of every H2 in the lesson, a "section at a glance" card
 * and quick jumps to the in-section exam practice.
 */
export function PageToc({ page, onNavigate }: { page: PageId; onNavigate: (page: PageId) => void }) {
  const { progress, lang } = useLearning()
  const [items, setItems] = useState<TocItem[]>([])
  const [active, setActive] = useState<string>('')

  const section = SECTIONS.find((s) => s.id === page)
  const stats = useMemo(() => {
    const qs = QUESTIONS.filter((q) => q.sectionId === page)
    const quiz = qs.filter((q) => typeof q.answer === 'boolean' || typeof q.answer === 'number').length
    return { total: qs.length, quiz, written: qs.length - quiz }
  }, [page])
  const quizRecord = progress.quiz[page]

  // Collect headings after the lesson renders.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      const root = document.querySelector('#main-content .learning-page')
      if (!root) {
        setItems([])
        return
      }
      const headings = Array.from(root.querySelectorAll<HTMLElement>('h2'))
      const next: TocItem[] = headings.map((h, index) => {
        const target = (h.closest('section') as HTMLElement | null) ?? h
        if (!target.id) target.id = slug(h.textContent ?? '', index)
        const label = (h.textContent ?? '').replace(/\s+/g, ' ').trim()
        return { id: target.id, label }
      })
      setItems(next)
      setActive(next[0]?.id ?? '')
    }, 60)
    return () => window.clearTimeout(timer)
  }, [page, lang])

  // Scroll-spy on the main scroll container.
  useEffect(() => {
    const container = document.getElementById('main-scroll')
    if (!container || items.length === 0) return
    const onScroll = () => {
      const top = container.getBoundingClientRect().top + 140
      let current = items[0]?.id ?? ''
      for (const item of items) {
        const el = document.getElementById(item.id)
        if (el && el.getBoundingClientRect().top <= top) current = item.id
      }
      setActive(current)
    }
    onScroll()
    container.addEventListener('scroll', onScroll, { passive: true })
    return () => container.removeEventListener('scroll', onScroll)
  }, [items])

  function jump(id: string) {
    const el = document.getElementById(id)
    const container = document.getElementById('main-scroll')
    if (!el || !container) return
    const offset = el.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop - 24
    container.scrollTo({ top: offset, behavior: 'smooth' })
  }

  if (!section) return null

  return (
    <aside className="page-toc" aria-label="On this page">
      <div className="page-toc__card">
        <div className="page-toc__title">
          <Icon name="ListTree" size={14} />
          <span>On this page</span>
          {lang === 'ar' && <span className="page-toc__title-ar">في الصفحة دي</span>}
        </div>
        <nav className="page-toc__list">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`page-toc__link ${active === item.id ? 'is-active' : ''} ${
                item.id === 'exam-practice' ? 'page-toc__link--exam' : ''
              }`}
              onClick={() => jump(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="page-toc__card">
        <div className="page-toc__title">
          <span>Section at a glance</span>
        </div>
        <dl className="page-toc__glance">
          <div>
            <dt>Reading target</dt>
            <dd>{section.minutes} min</dd>
          </div>
          <div>
            <dt>Historical questions</dt>
            <dd className="is-amber">{stats.total}</dd>
          </div>
          <div>
            <dt>Auto-graded quiz</dt>
            <dd className="is-cyan">{stats.quiz}</dd>
          </div>
          <div>
            <dt>Written · model answers</dt>
            <dd>{stats.written}</dd>
          </div>
          {quizRecord && (
            <div>
              <dt>Your quiz score</dt>
              <dd className="is-green">
                {quizRecord.correct}/{quizRecord.total}
              </dd>
            </div>
          )}
        </dl>
        {stats.total > 0 && (
          <button type="button" className="page-toc__cta" onClick={() => jump('exam-practice')}>
            <Icon name="GraduationCap" size={15} />
            <span>{lang === 'ar' ? 'اختبر نفسك · Exam practice' : 'Jump to exam practice'}</span>
          </button>
        )}
      </div>

      <div className="page-toc__card page-toc__card--links">
        <div className="page-toc__title">
          <span>Continue revising</span>
        </div>
        <button type="button" onClick={() => onNavigate('revision')}>
          <Icon name="BookOpen" size={14} /> Revision &amp; cheat sheet
        </button>
        <button type="button" onClick={() => onNavigate('exam')}>
          <Icon name="ClipboardCheck" size={14} /> Full exam studio
        </button>
      </div>
    </aside>
  )
}
