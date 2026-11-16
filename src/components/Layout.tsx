import { useEffect, useState } from 'react'
import type { PageId } from '../types'
import { PAGE_META, SECTIONS } from '../data/course'
import { useLearning } from '../context/LearningContext'
import { Icon } from './Icon'
import { ProgressRing } from './ui'

export function Sidebar({
  page,
  onNavigate,
  open,
  onClose,
}: {
  page: PageId
  onNavigate: (page: PageId) => void
  open: boolean
  onClose: () => void
}) {
  const { progress, lang, setLang } = useLearning()
  const completed = new Set(progress.completed)
  const percentage = (progress.completed.length / SECTIONS.length) * 100

  function go(id: PageId) {
    onNavigate(id)
    onClose()
  }

  return (
    <>
      {open && <button className="sidebar-scrim" aria-label="Close navigation" onClick={onClose} />}
      <aside className={`sidebar ${open ? 'is-open' : ''}`} aria-label="Course navigation">
        <div className="sidebar__brand">
          <button className="brand" onClick={() => go('dashboard')} aria-label="Go to dashboard">
            <span className="brand__mark">DSS</span>
            <span className="brand__text">
              <strong>DS312</strong>
              <small>Decision Support Systems</small>
            </span>
          </button>
          <button className="sidebar__close" onClick={onClose} aria-label="Close navigation">
            <Icon name="X" size={18} />
          </button>
        </div>

        <div className="sidebar__scroll">
          <div className="nav-group">
            <div className="nav-group__label">Start here</div>
            <NavItem
              id="dashboard"
              label="Course dashboard"
              icon="LayoutDashboard"
              active={page === 'dashboard'}
              onClick={go}
            />
          </div>

          <div className="nav-group">
            <div className="nav-group__label">The course</div>
            {SECTIONS.map((section) => (
              <NavItem
                key={section.id}
                id={section.id}
                label={section.shortTitle}
                number={section.number}
                icon={section.icon}
                active={page === section.id}
                complete={completed.has(section.id)}
                onClick={go}
              />
            ))}
          </div>

          <div className="nav-group">
            <div className="nav-group__label">Exam preparation</div>
            <NavItem
              id="exam"
              label="Historical exam studio"
              icon="ClipboardCheck"
              active={page === 'exam'}
              onClick={go}
              badge="200"
            />
            <NavItem
              id="revision"
              label="Revision & cheat sheet"
              icon="ListChecks"
              active={page === 'revision'}
              onClick={go}
            />
          </div>

          <div className="nav-group">
            <div className="nav-group__label">Reference</div>
            <NavItem
              id="audit"
              label="Source audit & coverage"
              icon="FileSearch"
              active={page === 'audit'}
              onClick={go}
            />
          </div>
        </div>

        <div className="sidebar__footer">
          <div className="sidebar-progress">
            <div className="sidebar-progress__head">
              <span>Course progress</span>
              <strong>{progress.completed.length}/{SECTIONS.length}</strong>
            </div>
            <div className="progress-bar">
              <span style={{ width: `${percentage}%` }} />
            </div>
          </div>
          <div className="sidebar-lang" role="group" aria-label="Language mode">
            <button
              type="button"
              className={lang === 'ar' ? 'is-active' : ''}
              onClick={() => setLang('ar')}
            >
              🌐 شرح عربي + EN
            </button>
            <button
              type="button"
              className={lang === 'en' ? 'is-active' : ''}
              onClick={() => setLang('en')}
            >
              English only
            </button>
          </div>
          <p className="sidebar__source">189 lecture slides · 200 exam items</p>
        </div>
      </aside>
    </>
  )
}

function NavItem({
  id,
  label,
  icon,
  number,
  active,
  complete,
  badge,
  onClick,
}: {
  id: PageId
  label: string
  icon: string
  number?: string
  active: boolean
  complete?: boolean
  badge?: string
  onClick: (id: PageId) => void
}) {
  return (
    <button
      type="button"
      className={`nav-item ${active ? 'is-active' : ''}`}
      onClick={() => onClick(id)}
      aria-current={active ? 'page' : undefined}
    >
      <span className="nav-item__icon"><Icon name={icon} size={16} /></span>
      {number && <span className="nav-item__number">{number}</span>}
      <span className="nav-item__label">{label}</span>
      {complete && <span className="nav-item__complete"><Icon name="Check" size={11} /></span>}
      {badge && <span className="nav-item__badge">{badge}</span>}
    </button>
  )
}

export function Topbar({
  page,
  onOpenMenu,
  onNavigate,
}: {
  page: PageId
  onOpenMenu: () => void
  onNavigate: (page: PageId) => void
}) {
  const { progress, lang, setLang } = useLearning()
  const meta = PAGE_META[page] ?? PAGE_META.dashboard
  const [scrolled, setScrolled] = useState(false)
  const percentage = (progress.completed.length / SECTIONS.length) * 100

  useEffect(() => {
    const container = document.getElementById('main-scroll')
    if (!container) return
    const handler = () => {
      const max = container.scrollHeight - container.clientHeight
      setScrolled(max > 0 && container.scrollTop / max > 0.015)
    }
    handler()
    container.addEventListener('scroll', handler, { passive: true })
    return () => container.removeEventListener('scroll', handler)
  }, [page])

  return (
    <header className={`topbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="topbar__left">
        <button className="icon-button topbar__menu" onClick={onOpenMenu} aria-label="Open navigation">
          <Icon name="Menu" size={20} />
        </button>
        <div className="breadcrumb">
          <button type="button" onClick={() => onNavigate('dashboard')}>DS312</button>
          <Icon name="ChevronRight" size={13} />
          <span>{meta.short}</span>
        </div>
      </div>
      <div className="topbar__right">
        <div className="topbar-lang-toggle" role="group" aria-label="Language Mode">
          <button
            type="button"
            className={`topbar-lang-btn ${lang === 'ar' ? 'is-active' : ''}`}
            onClick={() => setLang('ar')}
            title="تفعيل الشرح المزدوج: إنجليزي أكاديمي + شرح مصري مبسط"
          >
            <Icon name="Globe2" size={14} />
            <span>شرح عربي + EN</span>
          </button>
          <button
            type="button"
            className={`topbar-lang-btn ${lang === 'en' ? 'is-active' : ''}`}
            onClick={() => setLang('en')}
            title="Display academic English only"
          >
            <span>English only</span>
          </button>
        </div>
        <button
          className="topbar__progress"
          type="button"
          onClick={() => onNavigate('dashboard')}
          aria-label={`${Math.round(percentage)} percent of course complete`}
        >
          <ProgressRing value={percentage} size={34} />
        </button>
      </div>
    </header>
  )
}
