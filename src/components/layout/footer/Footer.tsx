import { FC } from 'react'

import Button from '../../button/Button'

import styles from './Footer.module.scss'
import './../../App/index.scss'

const Footer:FC = () => {
  return (
    <footer>
      <div className={styles.wrapper}>
        <nav className={styles.nav}>
          <div className='container'>
            <ul className={styles.menu}>
              <li
                className={styles.menu__item_active}
                onClick={() => alert('Вы тут')}
              >
                <div className={styles.logo}>
                  <img src='/Logo.svg' alt='logo' />
                  <div className={styles.logo__text}>TransitFlow</div>
                </div>
              </li>
              <li className={styles.menu__item}>Pages</li>
              <li className={styles.menu__item}>Utility</li>
              <li className={styles.menu__item}>Subscribe</li>
            </ul>
          </div>
        </nav>
        <div className='container'>
          <div className={styles.wrapper__footer}>
            <div className={styles.column}>
              <div className={styles.text}>
                Leverage agile frameworks to provide a robust synopsis for
                strategy collaborative thinking to further the overall value
                proposition.
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
            <div className={styles.column}>
              <ul className={styles.column__list}>
                <li className={styles.column__list_item}>About Us</li>
                <li className={styles.column__list_item}>Our Team</li>
                <li className={styles.column__list_item}>Our Project</li>
                <li className={styles.column__list_item}>Pricing</li>
                <li className={styles.column__list_item}>Contact</li>
              </ul>
            </div>
            <div className={styles.column}>
              <ul className={styles.column__list}>
                <li className={styles.column__list_item}>Style Guide</li>
                <li className={styles.column__list_item}>Changelog</li>
                <li className={styles.column__list_item}>Licenses</li>
                <li className={styles.column__list_item}>Protected</li>
                <li className={styles.column__list_item}>Not Found</li>
              </ul>
            </div>
            <div className={styles.column}>
              <input
                type='text'
                required
                placeholder='Email here*'
                className={styles.column__input}
              />
              <div className={styles.send}>
                <Button type='button__light'>Send Now</Button>
                <a href='#'>
                  <img src='/Linkdin.svg' alt='Linkdin' />
                </a>
                <a href='#'>
                  <img src='/Twitter.svg' alt='Twitter' />
                </a>
                <a href='#'>
                  <img src='/Facebook.svg' alt='Facebook' />
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className='container'>
          <div className={styles.copyright__wrapper}>
            <div className={styles.copyright__text}>
              Copyright © TransitFlow | Designed by VictorFlow - Powered by
              Webflow.
            </div>
            <div className={styles.copyright__buttons}>
              <a href='#'>Style Guide</a>
              <a href='#'>Licenses</a>
              <a href='#'>Changelog</a>
              <a href='#'>Password</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
