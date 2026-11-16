import { useEffect, useId, useState, type ReactNode } from 'react'
import katex from 'katex'
import { useLearning } from '../context/LearningContext'
import { Icon } from './Icon'

export function Pill({
  children,
  tone = 'default',
  icon,
}: {
  children: ReactNode
  tone?: 'default' | 'teal' | 'amber' | 'red' | 'blue'
  icon?: string
}) {
  return (
    <span className={`pill pill--${tone}`}>
      {icon && <Icon name={icon} size={12} />}
      {children}
    </span>
  )
}

export function PageHeader({
  eyebrow,
  title,
  intro,
  number,
  meta,
  ar,
}: {
  eyebrow: string
  title: string
  intro: string
  number?: string
  meta?: ReactNode
  ar?: string
}) {
  return (
    <header className="page-header">
      <div className="page-header__eyebrow">
        {number && <span className="page-header__number">{number}</span>}
        <span>{eyebrow}</span>
      </div>
      <h1>{title}</h1>
      <p className="page-header__intro">{intro}</p>
      {ar && <p className="page-header__ar" dir="rtl">{ar}</p>}
      {meta && <div className="page-header__meta">{meta}</div>}
    </header>
  )
}

export function SectionIntro({
  objectives,
  minutes,
  sources,
  examWeight,
}: {
  objectives: string[]
  minutes: number
  sources: string[]
  examWeight: string
}) {
  return (
    <div className="section-intro">
      <div className="section-intro__main">
        <div className="section-kicker">
          <Icon name="Target" size={15} />
          Learning objectives
        </div>
        <ul className="objective-list">
          {objectives.map((item) => (
            <li key={item}>
              <span className="objective-check"><Icon name="Check" size={12} /></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="section-intro__side">
        <div>
          <span className="micro-label">Study time</span>
          <strong><Icon name="Clock3" size={15} /> {minutes} min</strong>
        </div>
        <div>
          <span className="micro-label">Exam relevance</span>
          <strong>{examWeight}</strong>
        </div>
        <div>
          <span className="micro-label">Source slides</span>
          <span>{sources.join(' · ')}</span>
        </div>
      </div>
    </div>
  )
}

export function ArabicNote({ children, title = 'الفكرة ببساطة' }: { children: ReactNode; title?: string }) {
  const { lang } = useLearning()
  if (lang !== 'ar') return null
  return (
    <aside className="arabic-note" dir="rtl">
      <div className="arabic-note__label">
        <span className="arabic-note__mark">ع</span>
        {title}
      </div>
      <div className="arabic-note__body">{children}</div>
    </aside>
  )
}

export function EnglishOnlyNote() {
  const { lang } = useLearning()
  if (lang !== 'en') return null
  return (
    <p className="language-hint">
      <Icon name="Globe2" size={14} /> Switch to <strong>Arabic explanation</strong> for an Egyptian-Arabic walkthrough of this idea.
    </p>
  )
}

const calloutIcon: Record<string, string> = {
  insight: 'Lightbulb',
  warning: 'AlertTriangle',
  exam: 'GraduationCap',
  note: 'Info',
  success: 'CheckCircle2',
}

export function Callout({
  tone = 'note',
  title,
  children,
}: {
  tone?: 'insight' | 'warning' | 'exam' | 'note' | 'success'
  title?: string
  children: ReactNode
}) {
  return (
    <div className={`callout callout--${tone}`}>
      <div className="callout__icon"><Icon name={calloutIcon[tone]} size={18} /></div>
      <div>
        {title && <div className="callout__title">{title}</div>}
        <div className="callout__body">{children}</div>
      </div>
    </div>
  )
}

export function KeyIdea({ title = 'The key idea', children }: { title?: string; children: ReactNode }) {
  return (
    <div className="key-idea">
      <span className="key-idea__label">{title}</span>
      <p>{children}</p>
    </div>
  )
}

export function DividerLabel({ children }: { children: ReactNode }) {
  return <div className="divider-label"><span>{children}</span></div>
}

export function CompareTable({
  caption,
  headers,
  rows,
  firstColumnStrong = true,
  compact = false,
}: {
  caption?: string
  headers: string[]
  rows: ReactNode[][]
  firstColumnStrong?: boolean
  compact?: boolean
}) {
  return (
    <figure className={`table-figure ${compact ? 'table-figure--compact' : ''}`}>
      {caption && <figcaption>{caption}</figcaption>}
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              {headers.map((header) => <th key={header} scope="col">{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => {
                  const Tag = cellIndex === 0 && firstColumnStrong ? 'th' : 'td'
                  return (
                    <Tag key={cellIndex} scope={cellIndex === 0 && firstColumnStrong ? 'row' : undefined}>
                      {cell}
                    </Tag>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  )
}

export function DiagramFrame({
  title,
  caption,
  children,
  tone = 'default',
  actions,
}: {
  title: string
  caption?: string
  children: ReactNode
  tone?: 'default' | 'warm' | 'cool'
  actions?: ReactNode
}) {
  return (
    <figure className={`diagram-frame diagram-frame--${tone}`}>
      <div className="diagram-frame__head">
        <h3>{title}</h3>
        {actions}
      </div>
      <div className="diagram-frame__canvas">{children}</div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export function Accordion({
  title,
  children,
  defaultOpen = false,
  kicker,
}: {
  title: string
  children: ReactNode
  defaultOpen?: boolean
  kicker?: string
}) {
  const [open, setOpen] = useState(defaultOpen)
  const id = useId()
  return (
    <div className={`accordion ${open ? 'is-open' : ''}`}>
      <button
        type="button"
        className="accordion__trigger"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
      >
        <span>
          {kicker && <span className="accordion__kicker">{kicker}</span>}
          {title}
        </span>
        <Icon name="ChevronDown" size={18} />
      </button>
      {open && <div className="accordion__panel" id={id}>{children}</div>}
    </div>
  )
}

export function Equation({ children, label }: { children: string; label?: string }) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: true,
    strict: false,
  })
  return (
    <div className="equation-block">
      <div className="equation-block__body" dangerouslySetInnerHTML={{ __html: html }} />
      {label && <div className="equation-block__label">{label}</div>}
    </div>
  )
}

export function InlineMath({ children }: { children: string }) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: false,
    strict: false,
  })
  return <span className="inline-math" dangerouslySetInnerHTML={{ __html: html }} />
}

const GAMS_WORDS = new Set([
  'SET', 'SETS', 'PARAMETER', 'PARAMETERS', 'TABLE', 'SCALAR', 'SCALARS',
  'VARIABLE', 'VARIABLES', 'POSITIVE', 'NEGATIVE', 'BINARY', 'INTEGER', 'FREE',
  'EQUATION', 'EQUATIONS', 'MODEL', 'SOLVE', 'USING', 'MINIMIZING', 'MAXIMIZING',
  'DISPLAY', 'OPTION', 'OPTIONS', 'SUM', 'ALIAS', 'LOOP', 'IF', 'THEN', 'ELSE',
  'ABORT', 'PUT', 'FILE', 'EXECUTE', 'INCLUDE', 'OFFLISTING', 'ONTEXT', 'OFFTEXT',
])

function GamsLine({ line }: { line: string }) {
  if (line.trimStart().startsWith('*')) {
    return <span className="tok-comment">{line || ' '}</span>
  }
  const parts = line.split(/(\$[A-Za-z]+|[A-Za-z][A-Za-z0-9_]*)/g)
  return (
    <>
      {parts.map((part, index) => {
        if (GAMS_WORDS.has(part.toUpperCase()) && /^[A-Za-z]/.test(part)) {
          return <span key={index} className="tok-keyword">{part}</span>
        }
        if (part.startsWith('$')) return <span key={index} className="tok-directive">{part}</span>
        if (/^=([eElLgG])=$/.test(part)) return <span key={index} className="tok-operator">{part}</span>
        return <span key={index}>{part}</span>
      })}
    </>
  )
}

export function CodeBlock({
  code,
  language = 'gams',
  title,
  numbered = false,
}: {
  code: string
  language?: string
  title?: string
  numbered?: boolean
}) {
  const [copied, setCopied] = useState(false)
  const lines = code.replace(/\n$/, '').split('\n')

  useEffect(() => {
    if (!copied) return
    const timer = window.setTimeout(() => setCopied(false), 1600)
    return () => window.clearTimeout(timer)
  }, [copied])

  async function copy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="code-block">
      <div className="code-block__bar">
        <span className="code-block__lang">{title || language.toUpperCase()}</span>
        <button type="button" onClick={copy} className="code-block__copy">
          <Icon name={copied ? 'Check' : 'Braces'} size={13} />
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className={language === 'gams' ? 'code-gams' : ''}>
        <code>
          {lines.map((line, index) => (
            <span className="code-line" key={index}>
              {numbered && <span className="code-line__no">{String(index + 1).padStart(2, '0')}</span>}
              {language === 'gams' ? <GamsLine line={line} /> : line}
              {'\n'}
            </span>
          ))}
        </code>
      </pre>
    </div>
  )
}

function renderInline(text: string): ReactNode[] {
  const tokens = text.split(/(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)/g)
  return tokens.filter(Boolean).map((token, index) => {
    if (token.startsWith('**') && token.endsWith('**')) {
      return <strong key={index}>{token.slice(2, -2)}</strong>
    }
    if (token.startsWith('`') && token.endsWith('`')) {
      return <code key={index} className="inline-code">{token.slice(1, -1)}</code>
    }
    if (token.startsWith('*') && token.endsWith('*') && token.length > 2) {
      return <em key={index}>{token.slice(1, -1)}</em>
    }
    return <span key={index}>{token}</span>
  })
}

export function MarkdownLite({ text }: { text: string }) {
  const lines = text.replace(/\r/g, '').split('\n')
  const nodes: ReactNode[] = []
  let index = 0
  let key = 0

  while (index < lines.length) {
    const line = lines[index]

    if (!line.trim()) {
      index += 1
      continue
    }

    if (line.trim().startsWith('```')) {
      const lang = line.trim().slice(3).trim() || 'text'
      const code: string[] = []
      index += 1
      while (index < lines.length && !lines[index].trim().startsWith('```')) {
        code.push(lines[index])
        index += 1
      }
      index += 1
      nodes.push(<CodeBlock key={key++} code={code.join('\n')} language={lang} />)
      continue
    }

    if (line.trim().startsWith('|') && lines[index + 1]?.includes('---')) {
      const headers = line.split('|').slice(1, -1).map((cell) => cell.trim())
      index += 2
      const rows: string[][] = []
      while (index < lines.length && lines[index].trim().startsWith('|')) {
        rows.push(lines[index].split('|').slice(1, -1).map((cell) => cell.trim()))
        index += 1
      }
      nodes.push(
        <div className="md-table-wrap" key={key++}>
          <table className="md-table">
            <thead>
              <tr>{headers.map((header, i) => <th key={i}>{renderInline(header)}</th>)}</tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{renderInline(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      )
      continue
    }

    if (/^\s*[-•]\s+/.test(line)) {
      const items: string[] = []
      while (index < lines.length && /^\s*[-•]\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*[-•]\s+/, ''))
        index += 1
      }
      nodes.push(
        <ul className="md-list" key={key++}>
          {items.map((item, i) => <li key={i}>{renderInline(item)}</li>)}
        </ul>,
      )
      continue
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      const items: string[] = []
      while (index < lines.length && /^\s*\d+\.\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*\d+\.\s+/, ''))
        index += 1
      }
      nodes.push(
        <ol className="md-list" key={key++}>
          {items.map((item, i) => <li key={i}>{renderInline(item)}</li>)}
        </ol>,
      )
      continue
    }

    if (line.startsWith('> ')) {
      const quote: string[] = []
      while (index < lines.length && lines[index].startsWith('> ')) {
        quote.push(lines[index].slice(2))
        index += 1
      }
      nodes.push(<blockquote key={key++}>{renderInline(quote.join(' '))}</blockquote>)
      continue
    }

    const paragraph: string[] = [line]
    index += 1
    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^\s*([-•]\s|\d+\.\s|```|\||>\s)/.test(lines[index])
    ) {
      paragraph.push(lines[index])
      index += 1
    }
    nodes.push(<p key={key++}>{renderInline(paragraph.join(' '))}</p>)
  }

  return <div className="rich-text">{nodes}</div>
}

export function StepList({
  steps,
  numbered = true,
}: {
  steps: { title: string; body: ReactNode }[]
  numbered?: boolean
}) {
  return (
    <div className="step-list">
      {steps.map((step, index) => (
        <div className="step-list__item" key={step.title}>
          <div className="step-list__marker">{numbered ? index + 1 : <Icon name="ArrowRight" size={15} />}</div>
          <div>
            <h4>{step.title}</h4>
            <div className="step-list__body">{step.body}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function BottomNav({
  prev,
  next,
  onNavigate,
}: {
  prev?: { id: string; label: string }
  next?: { id: string; label: string }
  onNavigate: (id: any) => void
}) {
  return (
    <nav className="bottom-nav" aria-label="Section navigation">
      {prev ? (
        <button type="button" onClick={() => onNavigate(prev.id)} className="bottom-nav__link">
          <Icon name="ArrowLeft" size={18} />
          <span><small>Previous</small>{prev.label}</span>
        </button>
      ) : <span />}
      {next && (
        <button type="button" onClick={() => onNavigate(next.id)} className="bottom-nav__link bottom-nav__link--next">
          <span><small>Next</small>{next.label}</span>
          <Icon name="ArrowRight" size={18} />
        </button>
      )}
    </nav>
  )
}

export function SectionComplete({
  id,
  onNext,
}: {
  id: any
  onNext?: () => void
}) {
  const { progress, toggleComplete, lang } = useLearning()
  const complete = progress.completed.includes(id)
  return (
    <div className={`completion-card ${complete ? 'is-complete' : ''}`}>
      <div className="completion-card__icon">
        <Icon name={complete ? 'BadgeCheck' : 'Circle'} size={26} />
      </div>
      <div className="completion-card__body">
        <h3>{complete ? 'Section complete' : 'Finished this section?'}</h3>
        <p>
          {complete
            ? 'Nice. Your progress is saved in this browser and feeds the course dashboard.'
            : lang === 'ar'
              ? 'علّم القسم كمكتمل بعد ما تراجعه، عشان تتابع تقدمك في الداشبورد.'
              : 'Mark it complete to track your course progress. Revisit any time — the notes and quiz bank stay available.'}
        </p>
      </div>
      <div className="completion-card__actions">
        <button
          type="button"
          className={`btn ${complete ? 'btn--ghost' : 'btn--primary'}`}
          onClick={() => toggleComplete(id)}
        >
          <Icon name={complete ? 'Check' : 'CheckCircle2'} size={16} />
          {complete ? 'Completed' : 'Mark complete'}
        </button>
        {onNext && (
          <button type="button" className="btn btn--ghost" onClick={onNext}>
            Continue <Icon name="ArrowRight" size={16} />
          </button>
        )}
      </div>
    </div>
  )
}

export function ProgressRing({ value, size = 42 }: { value: number; size?: number }) {
  const radius = (size - 6) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (Math.min(100, Math.max(0, value)) / 100) * circumference
  return (
    <span className="progress-ring" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle className="progress-ring__track" cx={size / 2} cy={size / 2} r={radius} />
        <circle
          className="progress-ring__value"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span>{Math.round(value)}%</span>
    </span>
  )
}

export function Tag({ children, tone = 'neutral' }: { children: ReactNode; tone?: 'neutral' | 'cyan' | 'amber' | 'green' | 'red' }) {
  return <span className={`tag tag--${tone}`}>{children}</span>
}

/* ==========================================================================
   Visual & Bilingual Learning Components (Signature Pattern)
   ========================================================================== */

export function BilingualBlock({
  en,
  ar,
  className = '',
}: {
  en: ReactNode
  ar?: ReactNode
  className?: string
}) {
  const { lang } = useLearning()
  return (
    <div className={`bilingual-block ${className}`}>
      <div className="bilingual-block__en">{en}</div>
      {lang === 'ar' && ar && (
        <div className="bilingual-block__ar ar-callout" dir="rtl">
          {ar}
        </div>
      )}
    </div>
  )
}

export function ConceptCard({
  badge,
  badgeTone = 'default',
  title,
  titleAr,
  description,
  ar,
  tags,
  icon,
}: {
  badge?: string
  badgeTone?: 'cyan' | 'amber' | 'teal' | 'purple' | 'default'
  title: string
  titleAr?: string
  description: ReactNode
  ar?: ReactNode
  tags?: string[]
  icon?: string
}) {
  const { lang } = useLearning()
  return (
    <div className={`concept-card concept-card--${badgeTone}`}>
      <div className="concept-card__head">
        {badge && <span className={`concept-card__badge concept-card__badge--${badgeTone}`}>{badge}</span>}
        {icon && <Icon name={icon} size={16} className="concept-card__icon" />}
      </div>
      <div className="concept-card__title-row">
        <h4 className="concept-card__title">{title}</h4>
        {titleAr && lang === 'ar' && <span className="concept-card__title-ar" dir="rtl">{titleAr}</span>}
      </div>
      <div className="concept-card__desc">{description}</div>
      {lang === 'ar' && ar && (
        <div className="concept-card__ar ar-card-box" dir="rtl">
          {ar}
        </div>
      )}
      {tags && tags.length > 0 && (
        <div className="concept-card__tags">
          {tags.map((t) => (
            <span key={t} className="concept-tag">{t}</span>
          ))}
        </div>
      )}
    </div>
  )
}

export function ConceptGrid({
  children,
  cols = 2,
  className = '',
}: {
  children: ReactNode
  cols?: 2 | 3 | 4
  className?: string
}) {
  return (
    <div className={`concept-grid concept-grid--cols-${cols} ${className}`}>
      {children}
    </div>
  )
}

function cleanLeadEmoji(text: string): string {
  return text.replace(/^[💡✨\s]+/, '').trim()
}

export function ExamFocus({
  title = 'المهم فالامتحان · Exam Focus',
  titleEn,
  children,
  ar,
}: {
  title?: string
  titleEn?: string
  children: ReactNode
  ar?: ReactNode
}) {
  const { lang } = useLearning()
  return (
    <div className="exam-focus-box">
      <div className="exam-focus-box__head">
        <span className="exam-focus-box__icon">
          <Icon name="GraduationCap" size={16} />
        </span>
        <span className="exam-focus-box__title">{cleanLeadEmoji(title)}</span>
        {titleEn && <span className="exam-focus-box__title-en">{titleEn}</span>}
      </div>
      <div className="exam-focus-box__body">{children}</div>
      {lang === 'ar' && ar && (
        <div className="exam-focus-box__ar" dir="rtl">
          {ar}
        </div>
      )}
    </div>
  )
}

export function PictureIt({
  title = 'PICTURE IT · تخيلها كده',
  children,
  ar,
}: {
  title?: string
  children: ReactNode
  ar?: ReactNode
}) {
  const { lang } = useLearning()
  return (
    <div className="picture-it-box">
      <div className="picture-it-box__head">
        <span className="picture-it-box__icon">
          <Icon name="Sparkles" size={15} />
        </span>
        <span>{cleanLeadEmoji(title)}</span>
      </div>
      <div className="picture-it-box__body">{children}</div>
      {lang === 'ar' && ar && (
        <div className="picture-it-box__ar" dir="rtl">
          {ar}
        </div>
      )}
    </div>
  )
}

export function StageFlow({
  stages,
  title,
  titleAr,
  note,
  noteAr,
}: {
  stages: {
    stage: string
    title: string
    titleAr?: string
    desc: string
    descAr?: string
    tone?: 'cyan' | 'teal' | 'amber' | 'purple'
  }[]
  title?: string
  titleAr?: string
  note?: string
  noteAr?: string
}) {
  const { lang } = useLearning()
  return (
    <div className="stage-flow-container">
      {(title || titleAr) && (
        <div className="stage-flow__header">
          {title && <h4>{title}</h4>}
          {titleAr && lang === 'ar' && <p dir="rtl" className="stage-flow__sub-ar">{titleAr}</p>}
        </div>
      )}
      <div className="stage-flow__track">
        {stages.map((st, i) => (
          <div key={st.stage} className="stage-flow__step-wrapper">
            <div className={`stage-flow__card stage-flow__card--${st.tone ?? 'cyan'}`}>
              <div className="stage-flow__card-top">
                <span className="stage-flow__badge">{st.stage}</span>
              </div>
              <strong className="stage-flow__card-title">{st.title}</strong>
              {st.titleAr && lang === 'ar' && <span className="stage-flow__card-title-ar" dir="rtl">{st.titleAr}</span>}
              <p className="stage-flow__card-desc">{st.desc}</p>
              {st.descAr && lang === 'ar' && <div className="stage-flow__card-ar" dir="rtl">{st.descAr}</div>}
            </div>
            {i < stages.length - 1 && (
              <div className="stage-flow__arrow">
                <Icon name="ArrowRight" size={18} />
              </div>
            )}
          </div>
        ))}
      </div>
      {(note || noteAr) && (
        <div className="stage-flow__footer-note">
          {note && <p>{note}</p>}
          {noteAr && lang === 'ar' && <p dir="rtl" className="stage-flow__footer-ar">{noteAr}</p>}
        </div>
      )}
    </div>
  )
}

