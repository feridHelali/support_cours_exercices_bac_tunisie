import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import FlashCard from '../components/FlashCard'

const DIFFICULTIES = ['all', 'easy', 'medium', 'hard']

export default function FlashCardsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeDifficulty, setActiveDifficulty] = useState('all')

  const { data: categories = [] } = useQuery({
    queryKey: ['flashcard-categories'],
    queryFn: () => fetch('/api/flashcards/categories').then(r => r.json()),
  })

  const params = new URLSearchParams()
  if (activeCategory !== 'all') params.set('category', activeCategory)
  if (activeDifficulty !== 'all') params.set('difficulty', activeDifficulty)

  const { data: cards = [], isLoading } = useQuery({
    queryKey: ['flashcards', activeCategory, activeDifficulty],
    queryFn: () => fetch(`/api/flashcards?${params}`).then(r => r.json()),
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">🧠 Cartes Mémoire</h1>
        <p className="text-gray-500 text-sm mt-1">Cliquer sur une carte pour révéler la réponse</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <div>
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Catégorie</div>
          <div className="flex flex-wrap gap-2">
            {['all', ...categories].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300'
                }`}
              >
                {cat === 'all' ? 'Toutes' : cat}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Difficulté</div>
          <div className="flex gap-2">
            {DIFFICULTIES.map(d => (
              <button
                key={d}
                onClick={() => setActiveDifficulty(d)}
                className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors capitalize ${
                  activeDifficulty === d
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300'
                }`}
              >
                {d === 'all' ? 'Toutes' : d}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Count */}
      <div className="text-xs text-gray-400 font-medium">{cards.length} carte{cards.length !== 1 ? 's' : ''}</div>

      {/* Cards grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-56 bg-white rounded-2xl border animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map(card => <FlashCard key={card.id} card={card} />)}
        </div>
      )}
    </div>
  )
}
