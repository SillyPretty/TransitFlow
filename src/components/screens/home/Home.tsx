import clsx from 'clsx'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import Button from '../../ui/button/Button'
import Comments from '../../ui/comments/Comments'
import TextSpan from '../../ui/textspan/TextSpan'

import {
  BlogData,
  FakeData,
  OurTeamData,
  WorkData
} from '../../../model/api/api'

import './../../App/index.scss'
import styles from './Home.module.scss'

const Home: FC = () => {
  return (
    <>
      <section className={styles.main}>
        <img className={styles.image} src='/Back_main.png' alt='Back_main' />
        <div className='container'>
          <div className={styles.content}>
            <TextSpan Component='span'>
              Logistics & Supply Chain Solutions
            </TextSpan>
            <TextSpan Component='h1' Styles={styles.dop_styles}>
              Your Gateway to any Destination in the World
            </TextSpan>
            <TextSpan Component='p' Styles={styles.dop_styles}>
              In augue ligula, feugiat ut nulla consequat. Ut est lacus,
              molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl
              id dapibus finibus, enim diam interdum nulla, sed laoreet risus
              lectus.
            </TextSpan>
            <Button type='button__light'>Explore More</Button>
          </div>
        </div>
      </section>
      <section className={styles.WhatWe}>
        <div className='container'>
          <div className={styles.WhatWe_wrapper}>
            <div className={styles.WhatWe_wrapper_title}>
              <TextSpan Component='span' Styles={styles.span_dop}>
                What We Do
              </TextSpan>
              <TextSpan Component='h3'>
                Safe & Reliable Cargo Solutions
              </TextSpan>
            </div>
            <div className={styles.WhatWe_wrapper_content}>
              {FakeData.map(({ img, title, text }) => (
                <div className={styles.WhatWe__card} key={title}>
                  <img
                    className={styles.WhatWe__card_img}
                    src={img}
                    alt={title}
                  />
                  <div className={styles.WhatWe__card_content}>
                    <TextSpan Component='h5'>{title}</TextSpan>
                    <TextSpan Component='p'>{text}</TextSpan>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className={styles.WhatUs}>
        <img
          className={styles.WhatUs__image}
          src='/Back_WhatUs.jpg'
          alt='Back_WhatUs'
        />
        <div className='container'>
          <div className={styles.WhatUs__wrapper}>
            <div className={styles.WhatUs__content}>
              <TextSpan Component='span' Styles={styles.span_dop}>
                Why Us
              </TextSpan>
              <TextSpan Component='h3'>
                We provide full range global logistics solution
              </TextSpan>
              <TextSpan Component='p'>
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value proposition.
              </TextSpan>
              <TextSpan Component='p'>
                Organically grow the holistic world view of disruptive
                innovation via workplace diversity and empowerment.
              </TextSpan>
              <div className={styles.WhatUs__card}>
                <img
                  className={styles.WhatUs__card_image}
                  src='/Icon_delivery.svg'
                  alt='Icon_delivery'
                />
                <TextSpan Component='h5'>Delivery on Time</TextSpan>
              </div>
              <div className={styles.WhatUs__card}>
                <img
                  className={styles.WhatUs__card_image}
                  src='/Icon_money.svg'
                  alt='Icon_money'
                />
                <TextSpan Component='h5'>Optimized Travel Cost</TextSpan>
              </div>
            </div>
            <div className={styles.WhatUs__wrapper_image}>
              <img src='/Image_plane.jpg' alt='Image_plane' />
              <img
                className={styles.WhatUs__wrapper_absolute}
                src='/Image_people.jpg'
                alt='Image_people'
              />
            </div>
          </div>
          <div className={styles.Achievement}>
            <div className={styles.Achievement__card}>
              <TextSpan Component='h2'>1294</TextSpan>
              <div className={styles.Achievement__card_point} />
              <div className={styles.Achievement__card_text}>
                Delivered Packages
              </div>
            </div>
            <div className={styles.Achievement__card}>
              <TextSpan Component='h2'>3594</TextSpan>
              <div className={styles.Achievement__card_point} />
              <div className={styles.Achievement__card_text}>
                Satisfied Clients
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.work}>
        <div className={styles.work__back} />
        <div className={styles.work_content}>
          <TextSpan Component='h3'>Transporting Across The World</TextSpan>
          <div className={styles.work__wrapper}>
            {WorkData.map(({ img, text, title }) => (
              <div className={styles.work__card} key={title}>
                <img src={img} alt={title} className={styles.work__card_img} />
                <div className={styles.work__card_content}>
                  <div className={styles.work__title}>{title}</div>
                  <div className={styles.work__text}>{text}</div>
                </div>
              </div>
            ))}
          </div>
          <Button type='button__dark'>More Work</Button>
        </div>
      </section>
      <Comments />
      <section className={styles.choose}>
        <div className={styles.choose__container}>
          <div className={styles.choose__image}>
            <img src='/back_plane.jpg' alt='back_plane' />
            <div className={styles.choose__image_content}>
              <img src='/Icon_plane.svg' alt='Icon_plane' />
              <TextSpan Component='h5'>
                Moving your products <br /> across borders
              </TextSpan>
            </div>
          </div>
          <div className={styles.choose__content}>
            <TextSpan Component='span'>Why Choose</TextSpan>
            <TextSpan Component='h3'>
              We create opportunity to reach potential
            </TextSpan>
            <TextSpan Component='p'>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </TextSpan>
            <div className={styles.choose__menu}></div>
          </div>
        </div>
      </section>
      <section className={styles.meet}>
        <div className='container'>
          <TextSpan Component='span'>The Transporters</TextSpan>
          <TextSpan Component='h3'>Meet Expert Team</TextSpan>
          <div className={styles.meet__wrap}>
            {OurTeamData.map(({ name, img, social, company }) => (
              <div className={styles.meet__card} key={name}>
                <img src={img} alt={img} />
                <div className={styles.meet__card_social}>
                  {social.map(data => (
                    <img src={data + '_dark.svg'} alt={data} key={data} />
                  ))}
                </div>
                <div className={styles.meet__content}>
                  <TextSpan Component='h5' Styles={styles.title__dop}>
                    {name}
                  </TextSpan>
                  <TextSpan Component='p' Styles={styles.title__dop}>
                    {company}
                  </TextSpan>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.Contact}>
        <div className={clsx('container')}>
          <div className={styles.Contact__wrap}>
            <div className={styles.Contact__content}>
              <TextSpan Component='span'>Contact</TextSpan>
              <TextSpan Component='h3' Styles={styles.title__dop}>
                Get in touch with us
              </TextSpan>
              <TextSpan Component='p' Styles={styles.title__dop}>
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value.
              </TextSpan>
              <div className={styles.contact__wrap}>
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
                <div className={styles.contact__wrapper}>
                  <img src='/Icon__watch.svg' alt='icon__watch' />
                  <div className={styles.contact__text}>
                    Mon - Sat 9.00 - 18.00
                    <br /> Sunday Closed
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.Contact__form}>
              <input type='text' placeholder='Your name' required />
              <input type='text' placeholder='Email' required />
              <input type='text' placeholder='Phone Number' required />
              <input type='text' placeholder='City' required />
              <textarea name='comment' placeholder='Your Message' required />
              <button type='submit'>Submit Message</button>
            </div>
          </div>
          <div className={styles.Contact__img_wrap}>
            <img src='/Contact_img1.jpg' alt='Contact_img1' />
            <img src='/Contact_img2.jpg' alt='Contact_img2' />
            <img src='/Contact_img3.jpg' alt='Contact_img3' />
            <img src='/Contact_img4.jpg' alt='Contact_img4' />
          </div>
        </div>
      </section>
      <section className={styles.blog}>
        <div className='container'>
          <div className={styles.blog__content}>
            <TextSpan Component='span'>Our Blog</TextSpan>
            <TextSpan Component='h3'>Our Latest News</TextSpan>
            <div className={styles.blog__wrap}>
              {BlogData.map(({ img, date, title, text, list }, index) => {
                if (index >= 3) return <></>
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
            <Button type='button__dark'>
              <Link to={'/blog'}>More Blog</Link>
            </Button>
          </div>
        </div>
        <img src='/Back_blog6.jpg' alt='Back_blog6' />
      </section>
    </>
  )
}

export default Home
