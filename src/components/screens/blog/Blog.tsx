import { FC } from 'react'

import TextSpan from '../../ui/textspan/TextSpan'

import { BlogData } from '../../../model/api/api'
import '../../App/index.scss'

import styles from './Blog.module.scss'

const Blog: FC = () => {
  return (
    <section className={styles.blog}>
      <div className={styles.blog__header}>
        <img src='/Blog_back.jpg' alt='Blog_back' />
        <div className='container'>
          <TextSpan Component='span'>Blog</TextSpan>
          <TextSpan Component='h1' Styles={styles.dop_styles}>
            Our Latest News
          </TextSpan>
        </div>
      </div>
      <div className={styles.blog__body}>
        <div className='container'>
          <div className={styles.blog__content}>
            <TextSpan Component='span'>Our Blog</TextSpan>
            <TextSpan Component='h3'>Our Latest News</TextSpan>
            <div className={styles.blog__wrap}>
              {BlogData.map(({ img, date, title, text, list }, index) => {
                return (
                  <div className={styles.blog__card} key={index}>
                    <div className={styles.blog__card_img}>
                      <img src={img} alt={img} />
                    </div>
                    <div className={styles.blog__card_date}>
                      <img src='/Calendar.svg' alt='Calendar' />
                      <TextSpan Component='h2'>{date.day}</TextSpan>
                      <TextSpan Component='p'>{date.month}</TextSpan>
                    </div>
                    <div className={styles.blog__card_separate}></div>
                    <div className={styles.blog__card_content}>
                      <TextSpan Component='h5'>{title}</TextSpan>
                      <TextSpan Component='p'>{text}</TextSpan>
                      <ul className={styles.blog__card_list}>
                        {list.map((item, index) => (
                          <li
                            className={styles.blog__card_list_item}
                            key={index}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
