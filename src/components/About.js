import React, { useEffect, useState } from 'react'
import myImg from '../img/my_img.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { Card, Col, Container, Row } from 'react-bootstrap'

const About = () => {
  return (
    <section id='about'>
      <div className='about-description'>
        <div>
          <p className='about-para'>About Me: </p>
          <p className='para-border'></p>
        </div>
        <Container fluid>
          <Row>
            <div className='col-sm-12 col-md-6 col-lg-4 pt-5 pl-5'>
              <Card style={{ borderRadius: '50px' }}>
                <Card.Img
                  style={{ borderRadius: '50px' }}
                  src={myImg}
                  alt='aboutPic'
                  data-aos='fade-right'
                  data-aos-duration='1500'
                />
              </Card>
            </div>
            <div className='col-sm-24 col-md-12 col-lg-8 pt-5 pl-5'>
              <div>
                <div className='about-info'>
                  I'm currently a Computer Engineering Student at Simon Fraser
                  University, Burnaby, BC, Canada. I'm extremely passionate
                  about programming, technology, machine learning, and
                  innovations in the tech space. I keep a very assertive mindset
                  and this helps me remain constantly excited to learn something
                  new in most areas throughout life. My mission, apirations and
                  hope for the future is to improve the lives of people in
                  disadvantaged communites around the world through technology.
                  I'm a very active team member, partner, and strive to write
                  not just good code but a well written and easily digestable
                  code. Alongside coding and solving problems, I love discussing
                  project ideas, working in a timely manner on projects, and
                  coming up with new project goals during my spare time. I also
                  enjoy Basketball and hanging out with friends.
                </div>
                <div className='connect-txt'>You can connect with me on:</div>
                <div className='social-icons'>
                  <span>
                    <a
                      href='https://www.facebook.com/eokonkwo.1'
                      rel='noreferrer'
                      target='_blank'
                      className='social-icon'
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </span>
                  <span>
                    <a
                      href='https://twitter.com/eokonkwo123'
                      rel='noreferrer'
                      target='_blank'
                      className='social-icon'
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </span>
                  <span className='social-icon'>
                    <a
                      href='https://www.linkedin.com/in/emmanuel-okonkwo-77304719a/'
                      rel='noreferrer'
                      target='_blank'
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </span>
                  <span className='social-icon'>
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
          </Row>
        </Container>

        {/* <div className='about-txt-img'>
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
              <div className='about-info'>
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
                <span>
                  <a
                    href='https://www.facebook.com/eokonkwo.1'
                    rel='noreferrer'
                    target='_blank'
                    className='social-icon'
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </span>
                <span>
                  <a
                    href='https://twitter.com/eokonkwo123'
                    rel='noreferrer'
                    target='_blank'
                    className='social-icon'
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </span>
                <span className='social-icon'>
                  <a
                    href='https://www.linkedin.com/in/emmanuel-okonkwo-77304719a/'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </span>
                <span className='social-icon'>
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
        </div> */}
      </div>
    </section>
  )
}

export default About
