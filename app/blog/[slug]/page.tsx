import { getPostBySlug, getAllPostSlugs } from '@/lib/api'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { LikeButton } from '@/components/blog/like-button'
import { RichTextRenderer } from '@/components/blog/rich-text'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  try {
    const slugs = await getAllPostSlugs()
    return slugs.map((slug) => ({ slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Articol negăsit | Vraja Mării by the Sea',
    }
  }

  return {
    title: post.seo?.title || `${post.title} | Vraja Mării by the Sea`,
    description: post.seo?.description || post.excerpt,
    openGraph: {
      title: post.seo?.title || post.title,
      description: post.seo?.description || post.excerpt,
      images: post.seo?.ogImage?.url || post.featuredImage?.url,
      type: 'article',
      publishedTime: post.publishedDate,
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.publishedDate).toLocaleDateString('ro-RO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <main className="min-h-screen bg-white py-16">
      {/* Back Link */}
      <div className="container mx-auto px-4 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Înapoi la Blog
        </Link>
      </div>

      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading-black mb-4 leading-tight">
            {post.title}
          </h1>

          {post.subtitle && (
            <p className="text-lg md:text-xl text-primary/70 mb-6 font-medium">
              {post.subtitle}
            </p>
          )}

          {/* Meta Info */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            {post.author && (
              <div className="flex items-center gap-2">
                {post.author.avatar && (
                  <Image
                    src={post.author.avatar.url}
                    alt={post.author.firstName}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                )}
                <span className="font-medium">{post.author.firstName}</span>
              </div>
            )}
            <span className="hidden sm:block">•</span>
            <time dateTime={post.publishedDate}>{formattedDate}</time>
            <span className="hidden sm:block">•</span>
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {post.readTime} min de citit
            </span>
          </div>
        </header>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="relative aspect-video rounded-xl overflow-hidden mb-10 shadow-lg">
            <Image
              src={post.featuredImage.url}
              alt={post.featuredImage.alt || post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg prose-slate max-w-none mb-12">
          <RichTextRenderer content={post.content} />
        </div>

        {/* Footer */}
        <footer className="border-t border-border pt-8">
          <div className="flex items-center justify-between">
            <LikeButton slug={post.slug} initialLikes={post.likes} />

            {/* Share buttons placeholder */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-sm">Distribuie:</span>
              <button
                className="p-2 hover:bg-muted rounded-full transition-colors"
                aria-label="Share on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button
                className="p-2 hover:bg-muted rounded-full transition-colors"
                aria-label="Share on X"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </article>
    </main>
  )
}
