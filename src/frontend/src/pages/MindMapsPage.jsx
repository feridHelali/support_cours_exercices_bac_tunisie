import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import MermaidDiagram from '../components/MermaidDiagram'

export default function MindMapsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selected, setSelected] = useState(null)

  const { data: maps = [], isLoading } = useQuery({
    queryKey: ['mindmaps'],
    queryFn: () => fetch('/api/mindmaps').then(r => r.json()),
  })

  const { data: mapDetail } = useQuery({
    queryKey: ['mindmap', selected],
    queryFn: () => fetch(`/api/mindmaps/${selected}`).then(r => r.json()),
    enabled: !!selected,
  })

  const categories = ['all', ...new Set(maps.map(m => m.category).filter(Boolean))]
  const visible = activeCategory === 'all' ? maps : maps.filter(m => m.category === activeCategory)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">🗺️ Mind Maps & Roadmaps</h1>
        <p className="text-gray-500 text-sm mt-1">Diagrammes extraits des corrigés Selma</p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); setSelected(null) }}
            className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
              activeCategory === cat
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300'
            }`}
          >
            {cat === 'all' ? 'Tous' : cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* List */}
        <div className="md:col-span-1 space-y-2">
          {isLoading
            ? Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-14 bg-white rounded-xl border animate-pulse" />
              ))
            : visible.map(m => (
                <button
                  key={m.slug}
                  onClick={() => setSelected(m.slug)}
                  className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${
                    selected === m.slug
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                      : 'bg-white text-gray-700 border-gray-100 hover:border-indigo-200 hover:shadow-sm'
                  }`}
                >
                  <div className="text-sm font-medium truncate">{m.title}</div>
                  <div className={`text-xs mt-0.5 ${selected === m.slug ? 'text-indigo-200' : 'text-gray-400'}`}>
                    {m.category}
                  </div>
                </button>
              ))}
        </div>

        {/* Diagram viewer */}
        <div className="md:col-span-2">
          {!selected ? (
            <div className="h-64 bg-white rounded-2xl border border-dashed border-gray-200 flex items-center justify-center text-gray-400 text-sm">
              Sélectionner un diagramme →
            </div>
          ) : mapDetail ? (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-base font-semibold text-gray-800 mb-4">{mapDetail.title}</h2>
              <MermaidDiagram code={mapDetail.mermaid_code} />
            </div>
          ) : (
            <div className="h-64 bg-white rounded-2xl border animate-pulse" />
          )}
        </div>
      </div>
    </div>
  )
}
