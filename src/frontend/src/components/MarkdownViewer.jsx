import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import MermaidDiagram from './MermaidDiagram'

export default function MarkdownViewer({ content }) {
  if (!content) return null

  return (
    <div className="md-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          code({ className, children, ...props }) {
            const lang = /language-(\w+)/.exec(className || '')?.[1]
            if (lang === 'mermaid') {
              return <MermaidDiagram code={String(children).trim()} />
            }
            return <code className={className} {...props}>{children}</code>
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
