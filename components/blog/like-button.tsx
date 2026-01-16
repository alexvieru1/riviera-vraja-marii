'use client'

import { useState, useEffect } from 'react'
import { likePost } from '@/lib/api'
import { cn } from '@/lib/utils'

interface LikeButtonProps {
  slug: string
  initialLikes: number
}

export function LikeButton({ slug, initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes)
  const [hasLiked, setHasLiked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]')
    setHasLiked(likedPosts.includes(slug))
  }, [slug])

  const handleLike = async () => {
    if (hasLiked || isLoading) return

    setIsLoading(true)
    try {
      const result = await likePost(slug)
      setLikes(result.likes)
      setHasLiked(true)

      const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]')
      localStorage.setItem('likedPosts', JSON.stringify([...likedPosts, slug]))
    } catch (error) {
      console.error('Failed to like post:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={handleLike}
      disabled={hasLiked || isLoading}
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200',
        hasLiked
          ? 'bg-red-50 border-red-200 text-red-600 cursor-default'
          : 'border-border hover:bg-red-50 hover:border-red-200 hover:text-red-600',
        isLoading && 'opacity-50 cursor-wait'
      )}
    >
      <svg
        className={cn('w-5 h-5 transition-transform', hasLiked && 'scale-110')}
        fill={hasLiked ? 'currentColor' : 'none'}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={hasLiked ? 0 : 1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <span className="font-medium">{likes}</span>
    </button>
  )
}
