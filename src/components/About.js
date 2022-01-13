import React, { useEffect, useState } from 'react'
import myImg from '../img/my_img.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <section className='about'>
      <div className='about-description'>
        <div
          className='about-text'
        >
          <p className='about-para'>About Me: </p>
          <p className='para-border'></p>
        </div>
        <div className='about-txt-img'>
          <div className='about-left'>
            <img
              src={myImg}
              alt='aboutPic'
              className='about-pic'
              data-aos='fade-right'
              data-aos-duration='1500'
            />
          </div>
          <div className='about-right'>
            <div
              className='about-text-right'
              data-aos='fade-left'
              data-aos-duration='2000'
              data-aos-delay='1000'
            >
              <div style={{ fontFamily: 'EB Garamond' }}>
                I'm currently a Computer Engineering Student at Simon Fraser
                University, Burnaby, BC, Canada. I'm extremely passionate about
                programming, technology, machine learning, and innovations in
                the tech space. I keep a very assertive mindset and this helps
                me remain constantly excited to learn something new in most
                areas throughout life. My mission, apirations and hope for the
                future is to improve the lives of people in disadvantaged
                communites around the world through technology. I'm a very
                active team member, partner, and strive to write not just good
                code but a well written and easily digestable code. Alongside
                coding and solving problems, I love discussing project ideas,
                working in a timely manner on projects, and coming up with new
                project goals during my spare time. I also enjoy Basketball and
                hanging out with friends.
              </div>
              <div className='connect-txt'>You can connect with me on:</div>
              <div className='social-icons'>
                <span style={{ paddingRight: '5vh', fontSize: '6vh' }}>
                  <a
                    href='https://www.facebook.com/eokonkwo.1'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </span>
                <span style={{ paddingRight: '5vh', fontSize: '6vh' }}>
                  <a
                    href='https://twitter.com/eokonkwo123'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </span>
                <span style={{ paddingRight: '5vh', fontSize: '6vh' }}>
                  <a
                    href='https://www.linkedin.com/in/emmanuel-okonkwo-77304719a/'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </span>
                <span style={{ paddingRight: '5vh', fontSize: '6vh' }}>
                  <a
                    href='https://www.instagram.com/okonkwo.cee/'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
