import { createBrowserRouter } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import Home from '../../components/pages/home/Home'
import Error from '../../components/pages/error/Error'
import Blog from '../../components/pages/blog/Blog'

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
