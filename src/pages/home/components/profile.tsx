import {
  ArrowSquareOut,
  BuildingOffice,
  GithubLogo,
  Users,
} from '@phosphor-icons/react'

export function Profile() {
  return (
    <div className="relative flex h-[212px] min-w-[864px] -translate-y-[88px] items-center rounded-[10px] bg-base-profile px-10 py-8">
      <img
        src="https://github.com/msvalandro.png"
        alt="Foto de perfil do usuário"
        className="mr-8 h-[148px] w-[148px] rounded-lg"
      />

      <div className="flex h-full flex-col">
        <h1 className="text-lg font-bold text-base-title">
          Cameron Williamson
        </h1>

        <p className="text-md mt-2">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <ul className="mt-auto flex gap-6">
          <li className="flex items-center">
            <GithubLogo size={18} className="mr-2 text-base-label" />
            cameronwll
          </li>

          <li className="flex items-center">
            <BuildingOffice size={18} className="mr-2 text-base-label" />
            Rocketseat
          </li>

          <li className="flex items-center">
            <Users size={18} className="mr-2 text-base-label" />
            32 seguidores
          </li>
        </ul>
      </div>

      <a
        href="https://github.com/msvalandro"
        className="absolute right-8 top-10 flex items-center gap-2 text-xs font-medium uppercase leading-none text-blue"
      >
        github
        <ArrowSquareOut />
      </a>
    </div>
  )
}
