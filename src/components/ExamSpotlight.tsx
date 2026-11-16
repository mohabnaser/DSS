import { useState } from 'react'
import { QUESTIONS } from '../data/exams'
import { useLearning } from '../context/LearningContext'
import { Icon } from './Icon'
import { MarkdownLite, Tag } from './ui'

export function ExamSpotlight({
  ids,
  title = 'The examiner has asked this',
  onOpenExam,
}: {
  ids: string[]
  title?: string
  onOpenExam?: () => void
}) {
  const [openId, setOpenId] = useState<string | null>(null)
  const { lang } = useLearning()
  const questions = ids
    .map((id) => QUESTIONS.find((question) => question.id === id))
    .filter((question): question is NonNullable<typeof question> => Boolean(question))

  return (
    <section className="exam-spotlight">
      <div className="exam-spotlight__head">
        <div>
          <span className="section-kicker"><Icon name="GraduationCap" size={15} /> Historical exam lens</span>
          <h2>{title}</h2>
          <p>Authentic wording from the supplied papers. Answers are suggested model answers, not an official key.</p>
        </div>
        {onOpenExam && (
          <button type="button" className="btn btn--ghost" onClick={onOpenExam}>
            Open exam studio <Icon name="ArrowUpRight" size={15} />
          </button>
        )}
      </div>
      <div className="exam-spotlight__list">
        {questions.map((question, index) => {
          const open = openId === question.id
          const answerText =
            typeof question.answer === 'boolean'
              ? question.answer ? 'True' : 'False'
              : typeof question.answer === 'number'
                ? `${String.fromCharCode(65 + question.answer)}. ${question.choices?.[question.answer]}`
                : null
          return (
            <article className={`exam-spot ${open ? 'is-open' : ''}`} key={question.id}>
              <button
                type="button"
                className="exam-spot__trigger"
                onClick={() => setOpenId(open ? null : question.id)}
                aria-expanded={open}
              >
                <span className="exam-spot__n">{String(index + 1).padStart(2, '0')}</span>
                <span className="exam-spot__body">
                  <span className="exam-spot__meta">
                    <Tag tone="cyan">{question.exam}</Tag>
                    <span>{question.number}</span>
                    <span>{question.points ? `${question.points} pts` : question.type.toUpperCase()}</span>
                  </span>
                  <span className="exam-spot__question">{question.wording}</span>
                  {question.choices && (
                    <span className="exam-spot__choices">
                      {question.choices.map((choice, i) => (
                        <span key={choice}>{String.fromCharCode(65 + i)}. {choice}</span>
                      ))}
                    </span>
                  )}
                </span>
                <Icon name="ChevronDown" size={18} />
              </button>
              {open && (
                <div className="exam-spot__answer">
                  <div className="exam-spot__answer-head">
                    <span>Suggested answer</span>
                    {answerText && <strong>{answerText}</strong>}
                    {question.status === 'context-only' && <Tag tone="amber">source review</Tag>}
                  </div>
                  <p>{question.explanation}</p>
                  {question.solution && (
                    <details>
                      <summary>Model answer / expected structure</summary>
                      <MarkdownLite text={question.solution} />
                    </details>
                  )}
                  {question.note && <p className="exam-spot__note"><Icon name="Info" size={14} /> {question.note}</p>}
                  {lang === 'ar' && (
                    <p className="exam-spot__ar" dir="rtl">
                      نص السؤال الأصلي يفضل بالإنجليزي. راجع النقطة الأساسية: {question.topic}. الإجابة المقترحة فوق مبنية على مفاهيم المحاضرات، وليست answer key رسمية.
                    </p>
                  )}
                </div>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
