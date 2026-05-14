import { useState } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'

const SESSION_LABELS = {
  theorique: '📐 Théoriques',
  pratique: '💻 Pratiques',
  eco: '📊 Économie',
}

function NavSection({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="mb-1">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-slate-200 rounded transition-colors"
      >
        <span>{title}</span>
        <span className={`transition-transform ${open ? 'rotate-90' : ''}`}>›</span>
      </button>
      {open && <div className="mt-0.5 space-y-0.5">{children}</div>}
    </div>
  )
}

function NavLink({ to, params, children, indent }) {
  const { location } = useRouterState()
  const href = params ? to.replace(/\$\w+/, params.slug) : to
  const active = location.pathname === href

  return (
    <Link
      to={to}
      params={params}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors ${
        indent ? 'ml-3' : ''
      } ${active
        ? 'bg-indigo-600 text-white font-medium'
        : 'text-slate-300 hover:bg-slate-700 hover:text-white'
      }`}
    >
      {children}
    </Link>
  )
}

export default function Sidebar() {
  const { data: bacs = [] } = useQuery({
    queryKey: ['bacs'],
    queryFn: () => fetch('/api/bacs').then(r => r.json()),
  })
  const { data: sheets = [] } = useQuery({
    queryKey: ['cheatsheets'],
    queryFn: () => fetch('/api/cheatsheets').then(r => r.json()),
  })

  const grouped = bacs.reduce((acc, b) => {
    const key = b.session
    if (!acc[key]) acc[key] = []
    acc[key].push(b)
    return acc
  }, {})

  const sheetsByCategory = sheets.reduce((acc, s) => {
    if (!acc[s.category]) acc[s.category] = []
    acc[s.category].push(s)
    return acc
  }, {})

  return (
    <aside className="w-64 bg-slate-900 flex flex-col flex-shrink-0 overflow-y-auto">
      <div className="px-4 py-5 border-b border-slate-700">
        <div className="text-lg font-bold text-white">Révision BAC</div>
        <div className="text-xs text-indigo-400 font-medium mt-0.5">Espace Salma · 2026</div>
      </div>

      <nav className="flex-1 px-2 py-3 space-y-2">
        <NavLink to="/">🏠 Accueil</NavLink>

        {Object.entries(grouped).map(([session, items]) => (
          <NavSection key={session} title={SESSION_LABELS[session] || session}>
            {items.map(b => (
              <NavLink key={b.slug} to="/bac/$slug" params={{ slug: b.slug }} indent>
                {b.level !== 'pratique' && b.level !== 'eco'
                  ? `BAC ${b.level} — ${b.year}`
                  : b.title.replace('BAC ', '').slice(0, 28)}
              </NavLink>
            ))}
          </NavSection>
        ))}

        <NavSection title="📄 Fiches Mémo">
          {Object.entries(sheetsByCategory).map(([cat, items]) => (
            <div key={cat}>
              <div className="px-3 pt-2 pb-0.5 text-xs text-slate-500 font-medium">{cat}</div>
              {items.map(s => (
                <NavLink key={s.slug} to="/cheatsheet/$slug" params={{ slug: s.slug }} indent>
                  {s.title.length > 26 ? s.title.slice(0, 26) + '…' : s.title}
                </NavLink>
              ))}
            </div>
          ))}
        </NavSection>

        <NavLink to="/flashcards">🧠 Cartes Mémoire</NavLink>
        <NavLink to="/mindmaps">🗺️ Mind Maps & Roadmaps</NavLink>
      </nav>
    </aside>
  )
}
