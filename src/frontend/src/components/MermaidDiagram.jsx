import { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'

mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
  securityLevel: 'loose',
  fontFamily: 'Inter, sans-serif',
})

let idSeq = 0

export default function MermaidDiagram({ code }) {
  const [svg, setSvg] = useState('')
  const [error, setError] = useState('')
  const id = useRef(`mmd-${++idSeq}`)

  useEffect(() => {
    setError('')
    mermaid.render(id.current, code)
      .then(({ svg }) => setSvg(svg))
      .catch(e => setError(e.message))
  }, [code])

  if (error) return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4 text-xs text-red-600 font-mono overflow-x-auto">
      Mermaid error: {error}
    </div>
  )

  return (
    <div
      className="my-4 overflow-x-auto rounded-xl bg-white border border-gray-100 p-4 flex justify-center"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
