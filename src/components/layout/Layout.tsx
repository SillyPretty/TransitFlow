import { FC, ReactNode } from 'react'

import Header from './header/Header'
import Footer from './footer/Footer'

import './Layout.scss'

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
