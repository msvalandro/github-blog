import {
  ArrowSquareOut,
  CalendarDot,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from '@phosphor-icons/react'
import Markdown from 'react-markdown'
import { Link } from 'react-router-dom'

import { Panel } from '../components/panel'

export function Post() {
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
            href="https://github.com/msvalandro"
            className="flex items-center gap-2 text-xs uppercase leading-none text-blue"
          >
            ver no github
            <ArrowSquareOut />
          </a>
        </div>

        <h1 className="mt-5 text-2xl font-bold text-base-title">
          JavaScript data types and data structures
        </h1>

        <ul className="mt-2 mt-auto flex gap-6">
          <li className="flex items-center text-base-span">
            <GithubLogo size={18} className="mr-2 text-base-label" />
            cameronwll
          </li>

          <li className="flex items-center text-base-span">
            <CalendarDot size={18} className="mr-2 text-base-label" />
            Há 1 dia
          </li>

          <li className="flex items-center text-base-span">
            <ChatCircle size={18} className="mr-2 text-base-label" />5
            comentários
          </li>
        </ul>
      </Panel>

      <div className="mt-10">
        <Markdown>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
          delectus.
        </Markdown>
      </div>
    </>
  )
}
