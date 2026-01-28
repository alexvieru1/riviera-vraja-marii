'use client'

import { Fragment } from 'react'
import Image from 'next/image'
import type { LexicalContent, LexicalNode } from '@/lib/api'

interface RichTextRendererProps {
  content: LexicalContent | unknown
}

// Helper to check if a paragraph is empty
function isEmptyParagraph(node: LexicalNode): boolean {
  if (!node.children || node.children.length === 0) return true
  // Check if all children are empty text nodes
  return node.children.every(
    (child) => child.type === 'text' && (!child.text || child.text.trim() === '')
  )
}

// Helper to apply text formatting
function formatText(text: string, format: number = 0): React.ReactNode {
  let result: React.ReactNode = text

  if (format & 1) {
    result = <strong>{result}</strong>
  }
  if (format & 2) {
    result = <em>{result}</em>
  }
  if (format & 8) {
    result = <u>{result}</u>
  }
  if (format & 4) {
    result = <s>{result}</s>
  }
  if (format & 16) {
    result = <code className="bg-muted px-1 py-0.5 rounded-none text-sm">{result}</code>
  }

  return result
}

// Recursive node renderer
function renderNode(node: LexicalNode, index: number): React.ReactNode {
  if (node.type === 'text' && node.text !== undefined) {
    return <Fragment key={index}>{formatText(node.text, node.format)}</Fragment>
  }

  const children = node.children?.map((child, i) => renderNode(child, i))

  switch (node.type) {
    case 'paragraph':
      // Handle empty paragraphs as spacing
      if (isEmptyParagraph(node)) {
        return <div key={index} className="h-6" aria-hidden="true" />
      }
      return <p key={index} className="mb-4 leading-relaxed">{children}</p>

    case 'heading':
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const HeadingTag = (node.tag || 'h2') as any
      const headingClasses = {
        h1: 'text-3xl font-bold mt-8 mb-4',
        h2: 'text-2xl font-bold mt-6 mb-3',
        h3: 'text-xl font-bold mt-5 mb-2',
        h4: 'text-lg font-bold mt-4 mb-2',
        h5: 'text-base font-bold mt-3 mb-2',
        h6: 'text-sm font-bold mt-3 mb-2',
      }
      return (
        <HeadingTag
          key={index}
          className={headingClasses[node.tag as keyof typeof headingClasses] || headingClasses.h2}
        >
          {children}
        </HeadingTag>
      )

    case 'list':
      if (node.listType === 'number') {
        return <ol key={index} className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
      }
      return <ul key={index} className="list-disc list-inside mb-4 space-y-2">{children}</ul>

    case 'listitem':
      return <li key={index}>{children}</li>

    case 'link':
      return (
        <a
          key={index}
          href={node.url}
          target={node.target || '_self'}
          rel={node.rel || (node.target === '_blank' ? 'noopener noreferrer' : undefined)}
          className="text-primary underline hover:no-underline"
        >
          {children}
        </a>
      )

    case 'quote':
      return (
        <blockquote key={index} className="border-l-4 border-primary/30 pl-4 italic my-4">
          {children}
        </blockquote>
      )

    case 'code':
      return (
        <pre key={index} className="bg-muted p-4 rounded-none overflow-x-auto my-4">
          <code>{children}</code>
        </pre>
      )

    case 'upload':
      if (node.value?.url) {
        return (
          <figure key={index} className="my-6">
            <Image
              src={node.value.url}
              alt={node.value.alt || ''}
              width={800}
              height={600}
              className="rounded-none max-w-full h-auto"
              sizes="(max-width: 768px) 100vw, 672px"
            />
            {node.value.alt && (
              <figcaption className="text-center text-sm text-stone-500 mt-2">
                {node.value.alt}
              </figcaption>
            )}
          </figure>
        )
      }
      return null

    case 'horizontalrule':
      return <hr key={index} className="my-8 border-t border-border" />

    case 'linebreak':
      return <br key={index} />

    default:
      return children ? <Fragment key={index}>{children}</Fragment> : null
  }
}

export function RichTextRenderer({ content }: RichTextRendererProps) {
  if (!content) return null

  // Handle Lexical format
  const lexicalContent = content as LexicalContent
  if (lexicalContent?.root?.children) {
    return (
      <div className="rich-text space-y-0">
        {lexicalContent.root.children.map((node, index) => renderNode(node, index))}
      </div>
    )
  }

  // Fallback for HTML string content
  if (typeof content === 'string') {
    return <div className="rich-text" dangerouslySetInnerHTML={{ __html: content }} />
  }

  return null
}
