export default function PostLoading() {
  return (
    <main className="min-h-screen bg-[#f2f2f2] text-stone-900 py-20 px-4 font-serif">
      {/* Back Link Skeleton */}
      <div className="mx-auto py-10 md:px-10 mb-6">
        <div className="h-4 w-32 bg-stone-300 animate-pulse rounded" />
      </div>

      <article className="max-w-2xl mx-auto">
        {/* Header Section Skeleton */}
        <header className="mb-8">
          <div className="h-12 md:h-14 w-full bg-stone-300 animate-pulse rounded-lg mb-4" />
          <div className="h-12 md:h-14 w-3/4 bg-stone-300 animate-pulse rounded-lg mb-6" />

          <div className="h-6 w-2/3 bg-stone-200 animate-pulse rounded mb-6" />

          {/* Author Meta Skeleton */}
          <div className="flex items-center justify-between border-b border-stone-300 pb-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-stone-300 animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 w-24 bg-stone-300 animate-pulse rounded" />
                <div className="h-3 w-32 bg-stone-200 animate-pulse rounded" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-4 w-16 bg-stone-200 animate-pulse rounded" />
              <div className="h-4 w-12 bg-stone-200 animate-pulse rounded" />
            </div>
          </div>
        </header>

        {/* Hero Image Skeleton */}
        <figure className="mb-10">
          <div className="w-full aspect-[4/5] md:aspect-[3/4] bg-stone-300 animate-pulse rounded-sm" />
        </figure>

        {/* Content Skeleton */}
        <div className="space-y-4">
          <div className="h-4 w-full bg-stone-200 animate-pulse rounded" />
          <div className="h-4 w-full bg-stone-200 animate-pulse rounded" />
          <div className="h-4 w-5/6 bg-stone-200 animate-pulse rounded" />
          <div className="h-4 w-full bg-stone-200 animate-pulse rounded" />
          <div className="h-4 w-4/5 bg-stone-200 animate-pulse rounded" />
          <div className="h-6" />
          <div className="h-4 w-full bg-stone-200 animate-pulse rounded" />
          <div className="h-4 w-full bg-stone-200 animate-pulse rounded" />
          <div className="h-4 w-3/4 bg-stone-200 animate-pulse rounded" />
        </div>
      </article>
    </main>
  )
}
