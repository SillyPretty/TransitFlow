import clsx from 'clsx'
import { FC, ReactNode } from 'react'

import styles from './Button.module.scss'

type TypeButton = 'button__dark' | 'button__light'

interface IButton {
  type: TypeButton
  children: ReactNode
  onClick?: any
}

const Button: FC<IButton> = ({ children, type, onClick, ...props }) => {
  return (
    <button
      className={clsx(styles[type], styles.button)}
      type='submit'
      onClick={() => onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
