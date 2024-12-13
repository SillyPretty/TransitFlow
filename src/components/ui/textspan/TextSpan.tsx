import clsx from 'clsx'
import { FC, ReactNode } from 'react'

import styles from './TextSpan.module.scss'

type ComponentType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span'

interface IText {
  Component: ComponentType
  children: ReactNode
  Styles?: string
}

const TextSpan: FC<IText> = ({ children, Component, Styles }) => {
  return (
    <Component className={clsx(styles[Component], Styles)}>
      {children}
    </Component>
  )
}

export default TextSpan
