import { useRouterState } from '@tanstack/react-router'

const ROUTE_LABELS = {
  '/': 'Accueil',
  '/flashcards': 'Cartes Mémoire',
  '/mindmaps': 'Mind Maps & Roadmaps',
}

export default function Navbar() {
  const { location } = useRouterState()
  const path = location.pathname

  let label = ROUTE_LABELS[path]
  if (!label) {
    if (path.startsWith('/bac/')) label = 'Examen BAC'
    else if (path.startsWith('/cheatsheet/')) label = 'Fiche Mémo'
    else label = ''
  }

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between flex-shrink-0">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span className="text-gray-400">Révision BAC</span>
        {label && (
          <>
            <span className="text-gray-300">›</span>
            <span className="text-gray-700 font-medium">{label}</span>
          </>
        )}
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs bg-indigo-100 text-indigo-700 font-semibold px-2 py-1 rounded-full">
          BAC 2026
        </span>
      </div>
    </header>
  )
}
