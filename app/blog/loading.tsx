export default function BlogLoading() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section Skeleton */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="h-12 md:h-14 lg:h-16 w-64 mx-auto bg-muted animate-pulse rounded-lg mb-4" />
          <div className="h-6 w-96 max-w-full mx-auto bg-muted animate-pulse rounded-lg" />
        </div>
      </section>

      {/* Posts Grid Skeleton */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-card rounded-xl overflow-hidden shadow-sm"
            >
              {/* Image Skeleton */}
              <div className="aspect-[16/10] bg-muted animate-pulse" />

              {/* Content Skeleton */}
              <div className="p-6 space-y-3">
                <div className="h-6 w-3/4 bg-muted animate-pulse rounded" />
                <div className="h-4 w-1/2 bg-muted animate-pulse rounded" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-muted animate-pulse rounded" />
                  <div className="h-4 w-5/6 bg-muted animate-pulse rounded" />
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="h-4 w-20 bg-muted animate-pulse rounded" />
                  <div className="h-4 w-16 bg-muted animate-pulse rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
