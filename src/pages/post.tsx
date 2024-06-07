import {
  ArrowSquareOut,
  CalendarDot,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from '@phosphor-icons/react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useCallback, useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import { Link, useParams } from 'react-router-dom'

import { Panel } from '../components/panel'
import { api } from '../lib/axios'

const REPOSITORY_URL = 'msvalandro/github-blog'

export interface Post {
  id: number
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
}

export function Post() {
  const [post, setPost] = useState<Post>()

  const params = useParams()

  const fetchPostData = useCallback(async () => {
    try {
      const response = await api.get(
        `/repos/${REPOSITORY_URL}/issues/${params.id}`,
      )

      setPost(response.data)
    } catch {}
  }, [params.id])

  useEffect(() => {
    fetchPostData()
  }, [fetchPostData])

  if (!post) {
    return null
  }

  return (
    <>
      <Panel className="h-[168px] flex-col items-start">
        <div className="flex w-full justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-xs uppercase leading-none text-blue"
          >
            <CaretLeft size={12} />
            voltar
          </Link>

          <a
            href={post.html_url}
            target="_blank"
            className="flex items-center gap-2 text-xs uppercase leading-none text-blue"
            rel="noreferrer"
          >
            ver no github
            <ArrowSquareOut />
          </a>
        </div>

        <h1 className="mt-5 text-2xl font-bold text-base-title">
          {post.title}
        </h1>

        <ul className="mt-auto flex gap-6">
          <li className="flex items-center text-base-span">
            <GithubLogo size={18} className="mr-2 text-base-label" />
            cameronwll
          </li>

          <li className="flex items-center text-base-span">
            <CalendarDot size={18} className="mr-2 text-base-label" />
            {formatDistanceToNow(new Date(post.created_at), {
              locale: ptBR,
              addSuffix: true,
            })}
          </li>

          <li className="flex items-center text-base-span">
            <ChatCircle size={18} className="mr-2 text-base-label" />
            {post.comments}
            comentários
          </li>
        </ul>
      </Panel>

      <div className="markdown-content">
        <Markdown>{post.body}</Markdown>
      </div>
    </>
  )
}
