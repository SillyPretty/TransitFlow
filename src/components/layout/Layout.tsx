import { FC, ReactNode } from 'react'

import './Layout.scss'
import Footer from './footer/Footer'
import Header from './header/Header'

interface ILayout {
  children: ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div className='body'>
      <Header />
      <main className='main'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
