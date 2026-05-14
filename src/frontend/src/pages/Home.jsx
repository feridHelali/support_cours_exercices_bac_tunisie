import { useQuery } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'

function StatCard({ emoji, label, count, to }) {
  return (
    <Link to={to} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-3 hover:shadow-md hover:border-indigo-200 transition-all group">
      <div className="text-3xl">{emoji}</div>
      <div>
        <div className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{count ?? '…'}</div>
        <div className="text-sm text-gray-500">{label}</div>
      </div>
    </Link>
  )
}

export default function Home() {
  const { data: bacs = [] } = useQuery({ queryKey: ['bacs'], queryFn: () => fetch('/api/bacs').then(r => r.json()) })
  const { data: sheets = [] } = useQuery({ queryKey: ['cheatsheets'], queryFn: () => fetch('/api/cheatsheets').then(r => r.json()) })
  const { data: cards = [] } = useQuery({ queryKey: ['flashcards'], queryFn: () => fetch('/api/flashcards').then(r => r.json()) })
  const { data: maps = [] } = useQuery({ queryKey: ['mindmaps'], queryFn: () => fetch('/api/mindmaps').then(r => r.json()) })

  const theorique = bacs.filter(b => b.session === 'theorique')
  const pratique  = bacs.filter(b => b.session === 'pratique')

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-2xl p-8 text-white">
        <div className="text-3xl font-bold mb-1">Bonjour, Salma 👋</div>
        <div className="text-indigo-200 text-sm">Ton espace de révision BAC Informatique — Session 2026</div>
        <div className="mt-4 flex flex-wrap gap-3">
          <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">Algorithmique</span>
          <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">Python & PyQt5</span>
          <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">HTML5 / CSS3 / JS</span>
          <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">PHP & MySQL</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard emoji="📝" label="Examens BAC" count={bacs.length} to="/bac/bac-i-theorique-2025" />
        <StatCard emoji="📄" label="Fiches Mémo" count={sheets.length} to="/cheatsheet/cheat-sheet-general-bac" />
        <StatCard emoji="🧠" label="Cartes Mémoire" count={cards.length} to="/flashcards" />
        <StatCard emoji="🗺️" label="Mind Maps" count={maps.length} to="/mindmaps" />
      </div>

      {/* Recent exams */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-base font-semibold text-gray-700 mb-3">📐 Examens Théoriques</h2>
          <div className="space-y-2">
            {theorique.map(b => (
              <Link key={b.slug} to="/bac/$slug" params={{ slug: b.slug }}
                className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-gray-100 hover:border-indigo-300 hover:shadow-sm transition-all text-sm"
              >
                <span className="text-gray-800 font-medium">{b.title}</span>
                <span className="text-xs text-gray-400">{b.year}</span>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-base font-semibold text-gray-700 mb-3">💻 Examens Pratiques</h2>
          <div className="space-y-2">
            {pratique.map(b => (
              <Link key={b.slug} to="/bac/$slug" params={{ slug: b.slug }}
                className="flex items-center justify-between bg-white rounded-xl px-4 py-3 border border-gray-100 hover:border-indigo-300 hover:shadow-sm transition-all text-sm"
              >
                <span className="text-gray-800 font-medium">{b.title}</span>
                <span className="text-xs text-gray-400">{b.year}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
