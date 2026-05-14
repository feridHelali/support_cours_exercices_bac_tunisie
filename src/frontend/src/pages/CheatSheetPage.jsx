import { useParams } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import MarkdownViewer from '../components/MarkdownViewer'

export default function CheatSheetPage() {
  const { slug } = useParams({ strict: false })

  const { data: sheet, isLoading, error } = useQuery({
    queryKey: ['cheatsheet', slug],
    queryFn: () => fetch(`/api/cheatsheets/${slug}`).then(r => {
      if (!r.ok) throw new Error('Not found')
      return r.json()
    }),
    enabled: !!slug,
  })

  if (isLoading) return (
    <div className="animate-pulse space-y-3">
      <div className="bg-white rounded-2xl border h-20" />
      <div className="bg-white rounded-2xl border p-8 space-y-2">
        {[1,2,3,4].map(i => <div key={i} className="bg-gray-100 rounded h-4" style={{ width: `${60 + i * 8}%` }} />)}
      </div>
    </div>
  )

  if (error || !sheet) return <div className="text-red-500 p-4">Fiche introuvable.</div>

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="mb-1">
          <span className="text-xs font-semibold bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full">
            {sheet.category}
          </span>
        </div>
        <h1 className="text-xl font-bold text-gray-900 mt-2">{sheet.title}</h1>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
        <MarkdownViewer content={sheet.content} />
      </div>
    </div>
  )
}
