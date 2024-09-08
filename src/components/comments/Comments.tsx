import { FC } from 'react'
import clsx from 'clsx'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

import TextSpan from '../textspan/TextSpan'
import { CommentsData } from '../../model/api/api'

import styles from './Comments.module.scss'
import './../App/index.scss'

const Comments: FC = () => {
  return (
    <section className={styles.comments}>
      <div className='container'>
        <TextSpan Component='span'>Testimonial</TextSpan>
        <div className={styles.comments__header}>
          <TextSpan Component='h3'>What Our Customer Say</TextSpan>
          <div className={styles.comments__header_navigation}>
            <div className={styles.comments__header_navigation_back}>
              <BsArrowLeft />
            </div>
            <div className={styles.comments__header_navigation_next}>
              <BsArrowRight />
            </div>
          </div>
        </div>
        <div className={styles.comments__body}>
          {CommentsData.map(({ img, name, company, text, rating }, index) => (
            <div
              className={
                index % 2 === 0
                  ? styles.comments__card
                  : clsx(styles.comments__card_dark, styles.comments__card)
              }
              key={index}
            >
              <div className={styles.comments__card_header}>
                <div className={styles.comments__card_header_profile}>
                  <img src={img} alt={img} />
                  <div className={styles.comments__card_header_name}>
                    <TextSpan
                      Component='h5'
                      Styles={index % 2 === 0 ? '' : styles.dop__styles}
                    >
                      {name}
                    </TextSpan>
                    <TextSpan
                      Component='p'
                      Styles={index % 2 === 0 ? '' : styles.dop__styles}
                    >
                      {company}
                    </TextSpan>
                  </div>
                </div>
                <div className={styles.comments__icon}>
                  <img src='/“.png' alt='“' />
                </div>
              </div>
              <TextSpan
                Component='p'
                Styles={index % 2 === 0 ? '' : styles.dop__styles}
              >
                {text}
              </TextSpan>
              <div className={styles.star__wrap}>
                {Array(rating).fill(
                  <img src='/Star.svg' alt='Star' />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Comments
