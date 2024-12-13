import { FC } from 'react'
import { RouterProvider } from 'react-router-dom'

import { router } from '../../model/routes/routes'

import './index.scss'
import './reset.scss'

const App: FC = () => {
  return <RouterProvider router={router} />
}

export default App
