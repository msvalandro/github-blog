import { createBrowserRouter } from 'react-router-dom'

import { DefaultLayout } from './layouts/default-layout'
import { Home } from './pages/home'
import { Post } from './pages/post'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/post/:id', element: <Post /> },
    ],
  },
])
