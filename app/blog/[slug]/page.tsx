import { getPostBySlug, getAllPostSlugs } from '@/lib/api'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { LikeButton } from '@/components/blog/like-button'
import { RichTextRenderer } from '@/components/blog/rich-text'
import { Share } from 'lucide-react'

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

  const formattedDate = post.publishedDate
    ? new Date(post.publishedDate).toLocaleDateString('ro-RO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : new Date(post.createdAt).toLocaleDateString('ro-RO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })

  return (
    <main className="min-h-screen bg-[#f2f2f2] text-stone-900 py-20 px-4 font-serif">
        {/* Back Link */}
        <div className="mx-auto py-10 md:px-10 mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-800 transition-colors font-sans text-sm"
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
      <article className="max-w-2xl mx-auto bg-transparent">


        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-stone-900">
            {post.title}
          </h1>

          {post.subtitle && (
            <p className="text-lg md:text-xl text-stone-600 mb-6 font-medium italic">
              {post.subtitle}
            </p>
          )}

          {/* Author Meta */}
          <div className="flex items-center justify-between border-b border-stone-300 pb-6 mb-6">
            <div className="flex items-center gap-3">
              {post.author?.avatar?.url ? (
                <div className="w-10 h-10 rounded-full bg-stone-300 overflow-hidden relative">
                  <Image
                    src={post.author.avatar.url}
                    alt={post.author.firstName || 'Author'}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-stone-300 flex items-center justify-center">
                  <span className="text-sm font-bold text-stone-600">
                    {post.author?.firstName?.charAt(0) || 'A'}
                  </span>
                </div>
              )}
              <div className="flex flex-col text-sm font-sans">
                <span className="font-semibold text-stone-900">
                  {post.author?.firstName || 'Vraja Mării'}
                </span>
                <time dateTime={post.publishedDate || post.createdAt} className="text-stone-500">
                  {formattedDate}
                </time>
              </div>
            </div>

            <div className="flex gap-4 text-stone-500 font-sans text-sm items-center">
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
                {post.readTime} min
              </span>
              <LikeButton slug={post.slug} initialLikes={post.likes ?? 0} />
              <button className="flex items-center gap-1 hover:text-stone-800 transition">
                <Share size={18} />
              </button>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        {post.featuredImage && (
          <figure className="mb-10">
            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden shadow-sm">
              <Image
                src={post.featuredImage.url}
                alt={post.featuredImage.alt || post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
            {post.featuredImage.alt && (
              <figcaption className="text-center text-xs text-stone-500 mt-2 font-sans">
                {post.featuredImage.alt}
              </figcaption>
            )}
          </figure>
        )}

        {/* Main Content Prose */}
        <div className="prose prose-stone prose-lg max-w-none leading-relaxed prose-headings:font-serif prose-p:font-serif mb-12">
          <RichTextRenderer content={post.content} />
        </div>

        {/* Author Card */}
        {post.author && (
          <div className="mt-16 pt-8 border-t border-stone-300">
            <div className="flex items-center gap-4">
              {post.author.avatar?.url ? (
                <Image
                  src={post.author.avatar.url}
                  alt={post.author.firstName || 'Author'}
                  width={64}
                  height={64}
                  className="rounded-full shrink-0 object-cover"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-stone-300 flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-stone-600">
                    {post.author.firstName?.charAt(0) || 'A'}
                  </span>
                </div>
              )}
              <div>
                <p className="text-sm text-stone-500 font-sans">Scris de</p>
                <h3 className="text-xl font-bold text-stone-900">
                  {post.author.firstName || 'Autor'}
                </h3>
              </div>
            </div>
          </div>
        )}

        {/* Footer - Likes & Share */}
        <div className="flex items-center gap-6 mt-12 pt-6 border-t border-stone-300 text-stone-500 text-sm font-sans">
          <LikeButton slug={post.slug} initialLikes={post.likes ?? 0} />

          <div className="ml-auto flex items-center gap-4">
            <span className="flex items-center gap-1 cursor-pointer hover:text-stone-800 transition">
              <Share size={14} /> Distribuie
            </span>
          </div>
        </div>

      </article>
    </main>
  )
}
