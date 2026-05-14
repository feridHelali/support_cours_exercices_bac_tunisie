import { useState } from 'react'
import MarkdownViewer from './MarkdownViewer'

const DIFFICULTY_COLORS = {
  easy:   'bg-emerald-100 text-emerald-700',
  medium: 'bg-amber-100  text-amber-700',
  hard:   'bg-red-100    text-red-700',
}

export default function FlashCard({ card }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="card-scene cursor-pointer h-56 select-none"
      onClick={() => setFlipped(f => !f)}
      title="Cliquer pour retourner"
    >
      <div className={`card-inner h-full ${flipped ? 'flipped' : ''}`}>
        {/* Front */}
        <div className="card-face bg-white rounded-2xl shadow-md border border-gray-100 p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-semibold text-indigo-600 truncate">{card.topic}</span>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${DIFFICULTY_COLORS[card.difficulty] || DIFFICULTY_COLORS.medium}`}>
              {card.difficulty}
            </span>
          </div>
          <p className="text-gray-800 font-medium text-center text-sm leading-snug flex-1 flex items-center justify-center px-2">
            {card.question}
          </p>
          <div className="text-xs text-gray-400 text-center">↻ cliquer pour la réponse</div>
        </div>

        {/* Back */}
        <div className="card-face card-back bg-indigo-600 rounded-2xl shadow-md p-5 overflow-y-auto">
          <div className="text-xs font-semibold text-indigo-200 mb-2">{card.category}</div>
          <div className="text-white text-xs [&_.md-content_*]:text-white [&_.md-content_h1]:text-white [&_.md-content_h2]:text-white [&_.md-content_h3]:text-white [&_.md-content_pre]:bg-indigo-900 [&_.md-content_code]:bg-indigo-500 [&_.md-content_code]:text-white [&_.md-content_th]:bg-indigo-700 [&_.md-content_th]:text-white [&_.md-content_td]:text-indigo-100 [&_.md-content_tr:nth-child(even)]:bg-indigo-700/40">
            <MarkdownViewer content={card.answer} />
          </div>
        </div>
      </div>
    </div>
  )
}
