import { Posts } from './components/posts'
import { Profile } from './components/profile'

export function Home() {
  return (
    <main className="max-w-[1440px] px-72">
      <Profile />
      <Posts />
    </main>
  )
}
