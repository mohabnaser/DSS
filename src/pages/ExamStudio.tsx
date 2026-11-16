import { useEffect, useMemo, useState } from 'react'
import type { Question, QuestionType } from '../types'
import {
  BANK_STATS,
  EXAM_INFO,
  EXAM_ORDER,
  EXAM_TOPICS,
  QUESTIONS,
  QUESTION_TYPE_LABEL,
} from '../data/exams'
import { useLearning } from '../context/LearningContext'
import { Icon } from '../components/Icon'
import { Callout, MarkdownLite, PageHeader, Pill, Tag } from '../components/ui'

const PAGE_SIZE = 15

function isAutoGraded(question: Question): boolean {
  return typeof question.answer === 'boolean' || typeof question.answer === 'number'
}

function isUnresolved(question: Question): boolean {
  return typeof question.answer === 'string' && question.answer.startsWith('Unresolved')
}

function answerText(question: Question): string {
  if (typeof question.answer === 'boolean') return question.answer ? 'True' : 'False'
  if (typeof question.answer === 'number') {
    return `${String.fromCharCode(65 + question.answer)}. ${question.choices?.[question.answer] ?? ''}`
  }
  return question.answer
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function statusLabel(question: Question): string {
  if (isUnresolved(question)) return 'awaiting verification'
  if (question.status === 'context-only') return 'external case · source review'
  return 'source-grounded'
}

export function ExamStudio() {
  const { lang, recordQuiz } = useLearning()
  const [exam, setExam] = useState('all')
  const [type, setType] = useState<'all' | QuestionType>('all')
  const [status, setStatus] = useState<'all' | 'verified' | 'context-only' | 'unresolved'>('all')
  const [search, setSearch] = useState('')
  const [topic, setTopic] = useState('all')
  const [page, setPage] = useState(1)
  const [revealed, setRevealed] = useState<Set<string>>(new Set())

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase()
    return QUESTIONS.filter((question) => {
      if (exam !== 'all' && question.exam !== exam) return false
      if (type !== 'all' && question.type !== type) return false
      if (topic !== 'all' && question.topic !== topic) return false
      if (status === 'verified' && question.status !== 'verified') return false
      if (status === 'context-only' && question.status !== 'context-only') return false
      if (status === 'unresolved' && !isUnresolved(question)) return false
      if (!term) return true
      const haystack = [
        question.wording,
        question.topic,
        question.exam,
        question.number,
        question.explanation,
        question.choices?.join(' ') ?? '',
      ]
        .join(' ')
        .toLowerCase()
      return haystack.includes(term)
    })
  }, [exam, type, topic, status, search])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  useEffect(() => {
    setPage(1)
  }, [exam, type, topic, status, search])

  useEffect(() => {
    if (page > totalPages) setPage(totalPages)
  }, [page, totalPages])

  function toggleReveal(id: string) {
    setRevealed((previous) => {
      const next = new Set(previous)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  function resetFilters() {
    setExam('all')
    setType('all')
    setStatus('all')
    setTopic('all')
    setSearch('')
  }

  const activeExam = exam !== 'all' ? EXAM_INFO[exam] : null
  const typeEntries = (Object.keys(QUESTION_TYPE_LABEL) as QuestionType[]).filter(
    (item) => (BANK_STATS.byType[item] ?? 0) > 0,
  )
  const filterCount = [exam !== 'all', type !== 'all', status !== 'all', topic !== 'all', search.trim() !== ''].filter(Boolean).length

  return (
    <div className="exam-page">
      <PageHeader
        eyebrow="Practice with the real papers"
        title="Historical exam studio"
        intro="Two hundred prompts preserved from ten supplied papers, with filterable search, revealable model answers and a mixed auto-graded drill. The wording is historical; the answers are independently reasoned, not an official key."
        ar="كل الأسئلة هنا من الأوراق القديمة بنصها الأصلي. الإجابات اجتهاد مبني على المحاضرات، مش answer key رسمي. استخدم الفلاتر، وجرّب drill عشوائي، وبعدين ارجع للأوراق الكاملة."
        meta={
          <>
            <Pill icon="ClipboardCheck">200 items</Pill>
            <Pill icon="GraduationCap" tone="amber">10 papers</Pill>
            <Pill icon="FileSearch" tone="teal">Source-labelled</Pill>
          </>
        }
      />

      <section className="exam-stats">
        <div><strong>{BANK_STATS.total}</strong><span>total items</span></div>
        <div><strong>{EXAM_ORDER.length}</strong><span>historical papers</span></div>
        <div><strong>{BANK_STATS.autoGraded}</strong><span>auto-gradable</span></div>
        <div><strong>{BANK_STATS.contextOnly}</strong><span>external-case flags</span></div>
        <div><strong>{BANK_STATS.unresolved}</strong><span>awaiting verification</span></div>
      </section>

      <Drill questions={QUESTIONS} onRecord={recordQuiz} lang={lang} />

      <section className="exam-browser" aria-labelledby="exam-browser-title">
        <div className="exam-browser__head">
          <div>
            <span className="section-kicker"><Icon name="Search" size={15} /> Question browser</span>
            <h2 id="exam-browser-title">Filter the full bank</h2>
            <p>Search the wording, topic or paper. Reveal an answer only after you have attempted it.</p>
          </div>
          <div className="exam-browser__count">
            <strong>{filtered.length}</strong>
            <span>matching items</span>
          </div>
        </div>

        <div className="filter-bar">
          <label className="filter-search">
            <Icon name="Search" size={16} />
            <span className="sr-only">Search questions</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search wording, topic, paper or number…"
            />
          </label>
          <label className="filter-field">
            <span>Paper</span>
            <select value={exam} onChange={(event) => setExam(event.target.value)}>
              <option value="all">All papers ({BANK_STATS.total})</option>
              {EXAM_ORDER.map((item) => (
                <option key={item} value={item}>{item} ({BANK_STATS.byExam[item]})</option>
              ))}
            </select>
          </label>
          <label className="filter-field">
            <span>Type</span>
            <select value={type} onChange={(event) => setType(event.target.value as 'all' | QuestionType)}>
              <option value="all">All types</option>
              {typeEntries.map((item) => (
                <option key={item} value={item}>{QUESTION_TYPE_LABEL[item]} ({BANK_STATS.byType[item]})</option>
              ))}
            </select>
          </label>
          <label className="filter-field">
            <span>Topic</span>
            <select value={topic} onChange={(event) => setTopic(event.target.value)}>
              <option value="all">All topics</option>
              {EXAM_TOPICS.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>
          <label className="filter-field">
            <span>Source status</span>
            <select value={status} onChange={(event) => setStatus(event.target.value as typeof status)}>
              <option value="all">All items</option>
              <option value="verified">Source-grounded ({BANK_STATS.total - BANK_STATS.contextOnly})</option>
              <option value="context-only">External-case flags ({BANK_STATS.contextOnly})</option>
              <option value="unresolved">Awaiting verification ({BANK_STATS.unresolved})</option>
            </select>
          </label>
          {filterCount > 0 && (
            <button type="button" className="filter-reset" onClick={resetFilters}>
              <Icon name="RotateCcw" size={14} /> Clear {filterCount}
            </button>
          )}
        </div>

        {activeExam && (
          <div className="exam-meta-panel">
            <div>
              <Tag tone="cyan">{exam}</Tag>
              <h3>{activeExam.date} · {activeExam.code}</h3>
              <p>{activeExam.note}</p>
            </div>
            <dl>
              <div><dt>Duration</dt><dd>{activeExam.duration}</dd></div>
              <div><dt>Marks</dt><dd>{activeExam.marks}</dd></div>
              <div><dt>Items in bank</dt><dd>{BANK_STATS.byExam[exam]}</dd></div>
            </dl>
          </div>
        )}

        {pageItems.length === 0 ? (
          <div className="empty-state">
            <Icon name="Search" size={28} />
            <h3>No items match these filters</h3>
            <p>Clear one or more filters, or search for a broader concept such as “OLAP”, “GAMS” or “AHP”.</p>
            <button type="button" className="btn btn--ghost" onClick={resetFilters}>Clear all filters</button>
          </div>
        ) : (
          <div className="question-list">
            {pageItems.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                open={revealed.has(question.id)}
                onToggle={() => toggleReveal(question.id)}
              />
            ))}
          </div>
        )}

        {filtered.length > 0 && (
          <nav className="pagination" aria-label="Question pages">
            <button
              type="button"
              className="btn btn--ghost btn--sm"
              disabled={currentPage === 1}
              onClick={() => setPage((value) => Math.max(1, value - 1))}
            >
              <Icon name="ChevronLeft" size={15} /> Previous
            </button>
            <span>
              Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
              <small> · {filtered.length} filtered items</small>
            </span>
            <button
              type="button"
              className="btn btn--ghost btn--sm"
              disabled={currentPage === totalPages}
              onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
            >
              Next <Icon name="ChevronRight" size={15} />
            </button>
          </nav>
        )}
      </section>

      <Callout tone="note" title="How to use the model answers honestly">
        Attempt the question first, in writing. Then compare your answer with the model answer’s structure: did you
        name the mechanism, give the required list or diagram, and state the management implication? A model answer
        is a reasoning aid, not a marking scheme.
      </Callout>

      <div className="exam-source-note">
        <Icon name="FileSearch" size={18} />
        <p>
          The bank includes all questions transcribed from the supplied 2015–2025 papers. External cases that do not
          appear in the lecture transcripts are labelled <strong>external case</strong>. Two 2017 claims are marked{' '}
          <strong>awaiting verification</strong> because the supplied materials do not contain the underlying case
          facts. See the Source Audit for the full ledger.
        </p>
      </div>
    </div>
  )
}

function QuestionCard({
  question,
  open,
  onToggle,
}: {
  question: Question
  open: boolean
  onToggle: () => void
}) {
  const unresolved = isUnresolved(question)
  const contextOnly = question.status === 'context-only'
  const answer = answerText(question)

  return (
    <article className={`question-card ${open ? 'is-open' : ''} ${unresolved ? 'is-unresolved' : ''}`}>
      <div className="question-card__meta">
        <div>
          <Tag tone="cyan">{question.exam}</Tag>
          <Tag tone={contextOnly ? 'amber' : 'green'}>{statusLabel(question)}</Tag>
          <span className="question-card__number">{question.number}</span>
          {question.points && <span className="question-card__points">{question.points} pts</span>}
        </div>
        <div>
          <span className="question-card__type">{QUESTION_TYPE_LABEL[question.type] ?? question.type}</span>
          <span className="question-card__date">{question.date}</span>
        </div>
      </div>

      <p className="question-card__wording">{question.wording}</p>

      {question.choices && (
        <ol className="question-choices">
          {question.choices.map((choice, index) => (
            <li
              key={choice}
              className={open && typeof question.answer === 'number' && question.answer === index ? 'is-answer' : ''}
            >
              <span>{String.fromCharCode(65 + index)}</span>
              {choice}
              {open && typeof question.answer === 'number' && question.answer === index && (
                <Icon name="CheckCircle2" size={15} />
              )}
            </li>
          ))}
        </ol>
      )}

      <div className="question-card__foot">
        <span className="question-card__topic">{question.topic}</span>
        <button type="button" className={`btn btn--sm ${open ? 'btn--ghost' : 'btn--soft'}`} onClick={onToggle}>
          <Icon name={open ? 'EyeOff' : 'Eye'} size={15} />
          {open ? 'Hide suggested answer' : 'Reveal suggested answer'}
        </button>
      </div>

      {open && (
        <div className="question-answer">
          <div className="question-answer__head">
            <span>Suggested answer</span>
            <strong className={unresolved ? 'is-unresolved' : ''}>{answer}</strong>
          </div>
          <p className="question-answer__explanation">{question.explanation}</p>
          {question.solution && (
            <details className="question-answer__details">
              <summary>Model answer / expected structure</summary>
              <MarkdownLite text={question.solution} />
            </details>
          )}
          {question.note && (
            <p className="question-answer__note">
              <Icon name="Info" size={14} /> {question.note}
            </p>
          )}
          <div className="question-answer__source">
            <span>Source: {question.exam} · {question.number}</span>
            <span>{question.status === 'context-only' ? 'Context only — external case' : 'Reasoned from lecture material'}</span>
          </div>
        </div>
      )}
    </article>
  )
}

function Drill({
  questions,
  onRecord,
  lang,
}: {
  questions: Question[]
  onRecord: (topic: string, correct: number, total: number) => void
  lang: 'en' | 'ar'
}) {
  const [drill, setDrill] = useState<Question[] | null>(null)
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, boolean | number>>({})
  const [checked, setChecked] = useState(false)
  const [finished, setFinished] = useState(false)
  const [result, setResult] = useState<{ correct: number; total: number } | null>(null)

  const pool = useMemo(
    () => questions.filter((question) => question.status !== 'context-only' && isAutoGraded(question)),
    [questions],
  )

  function start() {
    const selected = shuffle(pool).slice(0, Math.min(10, pool.length))
    setDrill(selected)
    setIndex(0)
    setAnswers({})
    setChecked(false)
    setFinished(false)
    setResult(null)
  }

  function choose(value: boolean | number) {
    if (!drill || checked) return
    const current = drill[index]
    setAnswers((previous) => ({ ...previous, [current.id]: value }))
  }

  function advance() {
    if (!drill) return
    if (index === drill.length - 1) {
      const correct = drill.reduce(
        (sum, question) => sum + (answers[question.id] === question.answer ? 1 : 0),
        0,
      )
      onRecord('mixed-drill', correct, drill.length)
      setResult({ correct, total: drill.length })
      setFinished(true)
      return
    }
    setIndex((value) => value + 1)
    setChecked(false)
  }

  const current = drill?.[index]
  const selected = current ? answers[current.id] : undefined
  const currentCorrect = current && selected !== undefined ? selected === current.answer : false

  return (
    <section className="drill" aria-labelledby="drill-title">
      <div className="drill__head">
        <div>
          <span className="section-kicker"><Icon name="Sparkles" size={15} /> Auto-graded practice</span>
          <h2 id="drill-title">Ten-question mixed drill</h2>
          <p>
            Drawn live from the real bank: source-grounded True/False and multiple-choice items only. You get
            immediate feedback and one practice score. It is a learning check, not an official grade.
          </p>
        </div>
        <div className="drill__badges">
          <span>10 questions</span>
          <span>T/F + MCQ</span>
          <span>{pool.length} eligible</span>
        </div>
      </div>

      {!drill && (
        <div className="drill-start">
          <div className="drill-start__art">
            <Icon name="GraduationCap" size={34} />
          </div>
          <div>
            <h3>Ready for a mixed check?</h3>
            <p>
              The drill randomises items across papers and topics. Every question shows its original paper and
              number, and every explanation points back to the lecture concept.
            </p>
            <button type="button" className="btn btn--primary" onClick={start}>
              <Icon name="PlayCircle" size={17} /> Start the 10-question drill
            </button>
          </div>
        </div>
      )}

      {drill && !finished && current && (
        <div className="drill-run">
          <div className="drill-run__bar">
            <div className="drill-run__progress">
              <span style={{ width: `${((index + (checked ? 1 : 0)) / drill.length) * 100}%` }} />
            </div>
            <span>Question {index + 1} of {drill.length}</span>
          </div>

          <div className="drill-question">
            <div className="drill-question__meta">
              <Tag tone="cyan">{current.exam}</Tag>
              <span>{current.number}</span>
              <span>{QUESTION_TYPE_LABEL[current.type]}</span>
              <span>{current.topic}</span>
            </div>
            <p className="drill-question__wording">{current.wording}</p>

            <div className="drill-options">
              {current.type === 'tf' ? (
                <>
                  {[true, false].map((value) => {
                    const isSelected = selected === value
                    const isRight = current.answer === value
                    return (
                      <button
                        type="button"
                        key={String(value)}
                        className={`${isSelected ? 'is-selected' : ''} ${
                          checked && isRight ? 'is-correct' : ''
                        } ${checked && isSelected && !isRight ? 'is-wrong' : ''}`}
                        onClick={() => choose(value)}
                        disabled={checked}
                      >
                        <span>{value ? 'T' : 'F'}</span>
                        {value ? 'True' : 'False'}
                        {checked && isRight && <Icon name="CheckCircle2" size={16} />}
                        {checked && isSelected && !isRight && <Icon name="XCircle" size={16} />}
                      </button>
                    )
                  })}
                </>
              ) : (
                current.choices?.map((choice, choiceIndex) => {
                  const isSelected = selected === choiceIndex
                  const isRight = current.answer === choiceIndex
                  return (
                    <button
                      type="button"
                      key={choice}
                      className={`${isSelected ? 'is-selected' : ''} ${
                        checked && isRight ? 'is-correct' : ''
                      } ${checked && isSelected && !isRight ? 'is-wrong' : ''}`}
                      onClick={() => choose(choiceIndex)}
                      disabled={checked}
                    >
                      <span>{String.fromCharCode(65 + choiceIndex)}</span>
                      {choice}
                      {checked && isRight && <Icon name="CheckCircle2" size={16} />}
                      {checked && isSelected && !isRight && <Icon name="XCircle" size={16} />}
                    </button>
                  )
                })
              )}
            </div>

            {checked && (
              <div className={`drill-feedback ${currentCorrect ? 'is-correct' : 'is-wrong'}`}>
                <strong>{currentCorrect ? 'Correct' : 'Not quite'} · answer: {answerText(current)}</strong>
                <p>{current.explanation}</p>
                {lang === 'ar' && (
                  <p dir="rtl" className="drill-feedback__ar">
                    الإجابة الأصلية والمصطلحات تفضل بالإنجليزي. راجع الربط بين السؤال والمفهوم: {current.topic}.
                  </p>
                )}
                {current.note && <small>{current.note}</small>}
              </div>
            )}

            <div className="drill-actions">
              {!checked ? (
                <button
                  type="button"
                  className="btn btn--primary"
                  disabled={selected === undefined}
                  onClick={() => setChecked(true)}
                >
                  Check answer <Icon name="Check" size={16} />
                </button>
              ) : (
                <button type="button" className="btn btn--primary" onClick={advance}>
                  {index === drill.length - 1 ? 'Finish drill' : 'Next question'}
                  <Icon name="ArrowRight" size={16} />
                </button>
              )}
              <button type="button" className="text-button" onClick={start}>
                <Icon name="RotateCcw" size={13} /> restart
              </button>
            </div>
          </div>
        </div>
      )}

      {drill && finished && result && (
        <div className="drill-result">
          <div className="drill-result__score">
            <span className="drill-result__ring">{Math.round((result.correct / result.total) * 100)}%</span>
            <div>
              <span className="micro-label">Practice result</span>
              <h3>{result.correct} of {result.total} correct</h3>
              <p>
                This is a browser-stored practice score. It does not predict your exam mark and is not an official
                assessment.
              </p>
            </div>
          </div>
          <div className="drill-review">
            {drill.map((question, questionIndex) => {
              const correct = answers[question.id] === question.answer
              return (
                <details key={question.id} className={`drill-review__item ${correct ? 'is-correct' : 'is-wrong'}`}>
                  <summary>
                    <span>{String(questionIndex + 1).padStart(2, '0')}</span>
                    <Icon name={correct ? 'CheckCircle2' : 'XCircle'} size={16} />
                    <span>{question.wording}</span>
                  </summary>
                  <div>
                    <p><strong>Answer:</strong> {answerText(question)}</p>
                    <p>{question.explanation}</p>
                    <small>{question.exam} · {question.number} · {question.topic}</small>
                  </div>
                </details>
              )
            })}
          </div>
          <div className="drill-actions">
            <button type="button" className="btn btn--primary" onClick={start}>
              <Icon name="RotateCcw" size={16} /> New drill
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
