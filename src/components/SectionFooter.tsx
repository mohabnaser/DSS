import type { ReactNode } from 'react'
import type { PageId } from '../types'
import { SECTIONS } from '../data/course'
import { BottomNav, SectionComplete } from './ui'

export function SectionFooter({
  id,
  onNavigate,
}: {
  id: PageId
  onNavigate: (page: PageId) => void
}) {
  const index = SECTIONS.findIndex((section) => section.id === id)
  const prev = index > 0 ? SECTIONS[index - 1] : undefined
  const next = index < SECTIONS.length - 1 ? SECTIONS[index + 1] : undefined

  return (
    <footer className="section-footer">
      <SectionComplete id={id} onNext={next ? () => onNavigate(next.id) : undefined} />
      <BottomNav
        prev={prev ? { id: prev.id, label: prev.title } : undefined}
        next={next ? { id: next.id, label: next.title } : undefined}
        onNavigate={onNavigate}
      />
      <p className="section-source-note">
        Course content synthesized from the supplied DS312 lecture transcriptions. Where a concept goes beyond the
        slides, it is marked as a teaching supplement. Historical exam answers are independently reasoned; no
        official answer key was supplied.
      </p>
    </footer>
  )
}

export function SubHeading({
  kicker,
  children,
  id,
}: {
  kicker?: string
  children: ReactNode
  id?: string
}) {
  return (
    <div className="subheading" id={id}>
      {kicker && <span>{kicker}</span>}
      <h2>{children}</h2>
    </div>
  )
}

export function ContentSection({
  children,
  tone = 'default',
  id,
}: {
  children: ReactNode
  tone?: 'default' | 'shaded'
  id?: string
}) {
  return <section className={`content-section content-section--${tone}`} id={id}>{children}</section>
}
