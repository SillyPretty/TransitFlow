import { FC } from 'react'
import { Link } from 'react-router-dom'

import TextSpan from '../../textspan/TextSpan'
import Button from '../../button/Button'

import '../../App/index.scss'
import styles from './Error.module.scss'

const Error:FC = () => {
  return (
    <section className={styles.error}>
      <div className={styles.errorTitle}>0</div>
      <TextSpan Component='h3'>Oops! Page not found.</TextSpan>
      <TextSpan Component='p'>Let’s get you to where you need to be.</TextSpan>
      <Button type='button__light'>
        <Link to={'/'}>Back to home</Link>
      </Button>
    </section>
  )
}

export default Error
