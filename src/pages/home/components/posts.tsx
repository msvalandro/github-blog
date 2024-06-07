import { zodResolver } from '@hookform/resolvers/zod'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as z from 'zod'

import { api } from '../../../lib/axios'
import { Post } from '../../post'

const REPOSITORY_URL = 'msvalandro/github-blog'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Posts() {
  const [posts, setPosts] = useState<Post[]>([])

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function fetchPosts(query = '') {
    try {
      const response = await api.get('/search/issues', {
        params: {
          q: `${query} repo:${REPOSITORY_URL}`,
        },
      })
      console.log(response.data)
      setPosts(response.data.items)
    } catch {}
  }

  async function handleSearchPosts({ query }: SearchFormInputs) {
    await fetchPosts(query)
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

      <form onSubmit={handleSubmit(handleSearchPosts)}>
        <input
          type="text"
          placeholder="Buscar publicações"
          className="mt-3 h-[50px] w-full rounded-md border border-base-border bg-base-input px-4 placeholder:text-base-label"
          {...register('query')}
        />
      </form>

      <ul className="mt-12 grid grid-cols-2 gap-8">
        {posts.map((post) => (
          <li
            key={post.id}
            className="h-[260px] overflow-hidden rounded-[10px] bg-base-post p-8"
          >
            <Link to={`post/${post.number}`}>
              <header className="flex justify-between">
                <h1 className="title-ellipsis text-xl font-bold text-base-title">
                  {post.title}
                </h1>
                <span className="ml-4 w-[150px] text-end text-sm text-base-span">
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
