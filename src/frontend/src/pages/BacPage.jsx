import { useParams } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import MarkdownViewer from '../components/MarkdownViewer'

const SESSION_BADGE = {
  theorique: { label: 'Théorique', cls: 'bg-blue-100 text-blue-700' },
  pratique:  { label: 'Pratique',  cls: 'bg-violet-100 text-violet-700' },
  eco:       { label: 'Éco',       cls: 'bg-emerald-100 text-emerald-700' },
}

export default function BacPage() {
  const { slug } = useParams({ strict: false })

  const { data: bac, isLoading, error } = useQuery({
    queryKey: ['bac', slug],
    queryFn: () => fetch(`/api/bacs/${slug}`).then(r => {
      if (!r.ok) throw new Error('Not found')
      return r.json()
    }),
    enabled: !!slug,
  })

  if (isLoading) return <Skeleton />
  if (error) return <div className="text-red-500 p-4">Impossible de charger l'examen.</div>
  if (!bac) return null

  const badge = SESSION_BADGE[bac.session] || { label: bac.session, cls: 'bg-gray-100 text-gray-600' }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex flex-wrap items-start gap-3 mb-2">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badge.cls}`}>{badge.label}</span>
          {bac.level && bac.level !== 'pratique' && bac.level !== 'eco' && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-700">
              Niveau {bac.level}
            </span>
          )}
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
            {bac.year}
          </span>
        </div>
        <h1 className="text-xl font-bold text-gray-900">{bac.title}</h1>
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
        <MarkdownViewer content={bac.content} />
      </div>
    </div>
  )
}

function Skeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="bg-white rounded-2xl border p-6 h-24" />
      <div className="bg-white rounded-2xl border p-8 space-y-3">
        {[1,2,3,4,5].map(i => <div key={i} className="bg-gray-100 rounded h-4 w-full" style={{ width: `${70 + i * 5}%` }} />)}
      </div>
    </div>
  )
}
