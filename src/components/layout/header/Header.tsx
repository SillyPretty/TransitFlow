import { FC } from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'
import './../../App/index.scss'

const Header: FC = () => {
  return (
    <header>
      <div className={styles.wrapper}>
        <div className='container'>
          <div className={styles.header__container}>
            <Link to='/'>
              <div className={styles.logo}>
                <img src='/Logo.svg' alt='logo' />
                <div className={styles.logo__text}>TransitFlow</div>
              </div>
            </Link>
            <div className={styles.contact}>
              <div className={styles.contact__wrapper}>
                <img src='/Icon__watch.svg' alt='icon__watch' />
                <div className={styles.contact__text}>
                  Mon - Sat 9.00 - 18.00
                  <br /> Sunday Closed
                </div>
              </div>
              <div className={styles.contact__wrapper}>
                <img src='/Icon__email.svg' alt='icon__watch' />
                <div className={styles.contact__text}>
                  Email <br />
                  contact@logistics.com
                </div>
              </div>
              <div className={styles.contact__wrapper}>
                <img src='/Icon__phone.svg' alt='icon__watch' />
                <div className={styles.contact__text}>
                  Call Us <br />
                  (00) 112 365 489
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.wrapper__menu}>
        <div className='container'>
          <nav className={styles.nav}>
            <ul className={styles.menu}>
              <li className={styles.menu__item_active}>
                <Link to='/'>Home</Link>
              </li>
              <li className={styles.menu__item}>
                <Link to='/aboutUs'>About</Link>
              </li>
              <li className={styles.menu__item}>
                <a href='#'>Pages</a>
              </li>
              <li className={styles.menu__item}>
                <a href='#'>Project</a>
              </li>
              <li className={styles.menu__item}>
                <a href='#'>Contact</a>
              </li>
            </ul>
            <div className={styles.request}>
              <a href='#'>
                <img src='/Instagram.svg' alt='instagram' />
              </a>
              <a href='#'>
                <img src='/Facebook.svg' alt='Facebook' />
              </a>
              <a href='#'>
                <img src='/Twitter.svg' alt='Twitter' />
              </a>
              <a href='#'>
                <img src='/Linkdin.svg' alt='Linkdin' />
              </a>
              <button type='submit' className={styles.request__button}>
                Request Quote
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
