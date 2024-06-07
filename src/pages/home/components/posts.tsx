import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { api } from '../../../lib/axios'

const REPOSITORY_URL = 'msvalandro/github-blog'

interface Post {
  id: number
  title: string
  body: string
  created_at: string
}

export function Posts() {
  const [posts, setPosts] = useState<Post[]>([])

  async function fetchPosts() {
    try {
      const response = await api.get('/search/issues', {
        params: {
          q: `${''}repo:${REPOSITORY_URL}`,
        },
      })

      setPosts(response.data.items)
    } catch {}
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-lg font-bold text-base-subtitle">Publicações</h2>
        <span className="text-s text-base-span">
          {posts.length} publicações
        </span>
      </div>

      <input
        type="text"
        placeholder="Buscar publicações"
        className="mt-3 h-[50px] w-full rounded-md border border-base-border bg-base-input px-4 placeholder:text-base-label"
      />

      <ul className="mt-12 grid grid-cols-2 gap-8">
        {posts.map((post) => (
          <li
            key={post.id}
            className="h-[260px] overflow-hidden rounded-[10px] bg-base-post p-8"
          >
            <Link to="post/1">
              <header className="flex justify-between">
                <h1 className="title-ellipsis text-xl font-bold text-base-title">
                  {post.title}
                </h1>
                <span className="ml-4 w-[100px] text-end text-sm text-base-span">
                  {formatDistanceToNow(new Date(post.created_at), {
                    locale: ptBR,
                    addSuffix: true,
                  })}
                </span>
              </header>

              <p className="body-ellipsis mt-4">{post.body}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
