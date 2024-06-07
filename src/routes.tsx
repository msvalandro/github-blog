import { createBrowserRouter } from 'react-router-dom'

import { DefaultLayout } from './layouts/default-layout'
import { Home } from './pages/home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [{ path: '/', element: <Home /> }],
  },
])
