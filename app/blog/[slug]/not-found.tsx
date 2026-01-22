import Link from 'next/link'

export default function PostNotFound() {
  return (
    <main className="min-h-screen bg-[#f2f2f2] flex items-center justify-center py-20 px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="text-6xl mb-6">🔍</div>
        <h1 className="text-2xl font-bold text-stone-900 mb-4">
          Articol negăsit
        </h1>
        <p className="text-stone-600 mb-8">
          Acest articol nu există sau a fost șters. Verifică dacă adresa URL este corectă.
        </p>
        <Link
          href="/blog"
          className="inline-block px-6 py-3 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors"
        >
          Înapoi la Blog
        </Link>
      </div>
    </main>
  )
}
