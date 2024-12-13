import { createBrowserRouter } from 'react-router-dom'

import Blog from '../../components/screens/blog/Blog'
import Error from '../../components/screens/error/Error'
import Home from '../../components/screens/home/Home'

import Layout from '../../components/layout/Layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <Error />
      </Layout>
    )
  },
  {
    path: '/aboutUs',
    element: <Layout>aboutUs</Layout>
  },
  {
    path: '/blog',
    element: (
      <Layout>
        <Blog />
      </Layout>
    )
  }
])
