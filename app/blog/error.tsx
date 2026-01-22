'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Blog page error:', error)
  }, [error])

  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto">
          <div className="text-6xl mb-6">📝</div>
          <h1 className="text-2xl font-heading-bold mb-4">
            Nu am putut încărca articolele
          </h1>
          <p className="text-muted-foreground mb-8">
            A apărut o eroare la încărcarea blogului. Te rugăm să încerci din nou.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Încearcă din nou
            </button>
            <Link
              href="/"
              className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              Înapoi la pagina principală
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
