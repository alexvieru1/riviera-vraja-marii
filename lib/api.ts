const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL

export interface Post {
  id: string
  title: string
  slug: string
  subtitle?: string
  excerpt?: string
  featuredImage?: {
    url: string
    alt?: string
    width?: number
    height?: number
  }
  content: unknown // Lexical rich text content
  author?: {
    id: string
    firstName?: string
    avatar?: {
      url: string
      alt?: string
    }
  }
  status: 'draft' | 'published'
  publishedDate: string
  readTime: number
  likes: number
  seo?: {
    title?: string
    description?: string
    ogImage?: {
      url: string
    }
  }
  createdAt: string
  updatedAt: string
}

export interface PostsResponse {
  docs: Post[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number | null
  nextPage: number | null
}

export async function getPosts(options?: {
  limit?: number
  page?: number
  sort?: string
}): Promise<PostsResponse> {
  const { limit = 10, page = 1, sort = '-publishedDate' } = options || {}

  const params = new URLSearchParams({
    limit: String(limit),
    page: String(page),
    sort,
    'where[status][equals]': 'published',
    depth: '2',
  })

  const response = await fetch(`${CMS_URL}/api/posts?${params}`, {
    next: { revalidate: 60 },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }

  return response.json()
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const params = new URLSearchParams({
    'where[slug][equals]': slug,
    'where[status][equals]': 'published',
    depth: '2',
    limit: '1',
  })

  const response = await fetch(`${CMS_URL}/api/posts?${params}`, {
    next: { revalidate: 60 },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch post')
  }

  const data: PostsResponse = await response.json()
  return data.docs[0] || null
}

export async function getAllPostSlugs(): Promise<string[]> {
  const params = new URLSearchParams({
    'where[status][equals]': 'published',
    limit: '1000',
    depth: '0',
  })

  const response = await fetch(`${CMS_URL}/api/posts?${params}`)
  const data: PostsResponse = await response.json()

  return data.docs.map((post) => post.slug)
}

export async function likePost(slug: string): Promise<{ likes: number }> {
  const response = await fetch(`${CMS_URL}/api/posts/${slug}/like`, {
    method: 'POST',
  })

  if (!response.ok) {
    throw new Error('Failed to like post')
  }

  return response.json()
}

export async function subscribe(email: string): Promise<{ success: boolean }> {
  const response = await fetch(`${CMS_URL}/api/subscribers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      status: 'active',
      source: 'website',
      subscribedAt: new Date().toISOString(),
    }),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Failed to subscribe')
  }

  return { success: true }
}
