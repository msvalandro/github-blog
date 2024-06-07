import {
  ArrowSquareOut,
  BuildingOffice,
  GithubLogo,
  Users,
} from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

import { Panel } from '../../../components/panel'
import { api } from '../../../lib/axios'

interface UserData {
  name: string
  avatarUrl: string
  bio: string
  login: string
  company: string
  followers: string
  url: string
}

export function Profile() {
  const [user, setUser] = useState<UserData>({} as UserData)

  async function fetchUserData() {
    try {
      const response = await api.get('/users/msvalandro')

      const {
        name,
        avatar_url: avatarUrl,
        bio,
        login,
        company,
        followers,
        html_url: url,
      } = response.data

      setUser({ name, avatarUrl, bio, login, company, followers, url })
    } catch {}
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <Panel className="h-[212px] items-center">
      <img
        src={user.avatarUrl}
        alt="Foto de perfil do usuário"
        className="mr-8 h-[148px] w-[148px] rounded-lg"
      />

      <div className="flex h-full flex-col">
        <h1 className="text-lg font-bold text-base-title">{user.name}</h1>

        <p className="text-md mt-2">{user.bio}</p>

        <ul className="mt-auto flex gap-6">
          <li className="flex items-center">
            <GithubLogo size={18} className="mr-2 text-base-label" />
            {user.login}
          </li>

          <li className="flex items-center">
            <BuildingOffice size={18} className="mr-2 text-base-label" />
            {user.company}
          </li>

          <li className="flex items-center">
            <Users size={18} className="mr-2 text-base-label" />
            {user.followers} seguidores
          </li>
        </ul>
      </div>

      <a
        href={user.url}
        target="_blank"
        className="absolute right-8 top-10 flex items-center gap-2 text-xs font-medium uppercase leading-none text-blue"
        rel="noreferrer"
      >
        github
        <ArrowSquareOut />
      </a>
    </Panel>
  )
}
