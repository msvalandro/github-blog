import { Outlet } from 'react-router-dom'

import { Header } from '../components/header'

export function DefaultLayout() {
  return (
    <div className="flex flex-col items-center">
      <Header />

      <main className="max-w-[1440px] px-72 pb-56">
        <Outlet />
      </main>
    </div>
  )
}
