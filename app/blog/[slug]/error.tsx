'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function PostError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Blog post error:', error)
  }, [error])

  return (
    <main className="min-h-screen bg-[#f2f2f2] flex items-center justify-center py-20 px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="text-6xl mb-6">📄</div>
        <h1 className="text-2xl font-bold text-stone-900 mb-4">
          Nu am putut încărca articolul
        </h1>
        <p className="text-stone-600 mb-8">
          A apărut o eroare la încărcarea acestui articol. Te rugăm să încerci din nou.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors"
          >
            Încearcă din nou
          </button>
          <Link
            href="/blog"
            className="px-6 py-3 border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors text-stone-900"
          >
            Înapoi la Blog
          </Link>
        </div>
      </div>
    </main>
  )
}
