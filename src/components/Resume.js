import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Resume = () => {
  return (
    <section className='resume'>
      <div>
        <p className='resume-title'>Resume</p>
        <p className='resume-border'></p>
      </div>
      <Row className='resume-detail'>
        <Col md={6} id='col-1' data-aos='fade-right' data-aos-delay='500'>
          <ul className='a-2'>
            <h3 className='h-3' style={{}}>
              Summary
            </h3>
            <li className='a-2' style={{ position: 'relative', top: '15px' }}>
              <h4
                style={{
                  position: 'relative',
                  top: '10px',
                  left: '-5px',
                  fontSize: '30px',
                  fontFamily: 'EB Garamond',
                  fontStyle: 'italic',
                  fontWeight: '900',
                }}
              >
                &nbsp;Name: Emmanuel Okonkwo
              </h4>
              <p
                className='p-1'
                style={{
                  color: '#393a3b',
                  fontFamily: 'EB Garamond',
                  fontStyle: 'normal',
                  fontSize: '25px',
                  fontWeight: '300',
                  color: 'grey',
                  wordSpacing: '2px',
                }}
              >
                Innovative, deadline-driven, and passion
              </p>
              <p
                className='p-1'
                style={{
                  color: '#393a3b',
                  fontFamily: 'EB Garamond',
                  fontStyle: 'normal',
                  fontSize: '25px',
                  fontWeight: '300',
                  color: 'grey',
                  wordSpacing: '2px',
                  position: 'relative',
                  top: '-1.5vh',
                }}
              >
                -driven Student, Software Engineer and
              </p>
              <p
                className='p-1'
                style={{
                  color: '#393a3b',
                  fontFamily: 'EB Garamond',
                  fontStyle: 'normal',
                  fontSize: '25px',
                  fontWeight: '300',
                  color: 'grey',
                  wordSpacing: '2px',
                  position: 'relative',
                  top: '-4.2vh',
                }}
              >
                Developer with 3+ years of programming
              </p>
              <p
                className='p-1'
                style={{
                  color: '#393a3b',
                  fontFamily: 'EB Garamond',
                  fontStyle: 'normal',
                  fontSize: '25px',
                  fontWeight: '300',
                  color: 'grey',
                  wordSpacing: '2px',
                  position: 'relative',
                  top: '-6.3vh',
                }}
              >
                experience. The relevant courses I've taken
              </p>
              <p
                className='p-1'
                style={{
                  color: '#393a3b',
                  fontFamily: 'EB Garamond',
                  fontStyle: 'normal',
                  fontSize: '25px',
                  fontWeight: '300',
                  color: 'grey',
                  wordSpacing: '2px',
                  position: 'relative',
                  top: '-8vh',
                }}
              >
                include:
              </p>
              <ul className='a-1'>
                <li
                  className='a-1-1'
                  style={{
                    listStyleType: 'disc',
                    color: '#393a3b',
                    fontFamily: "'Garamond'",
                    fontSize: '22px',
                    fontStyle: 'italic',
                  }}
                >
                  Operating Systems
                </li>
                <li
                  className='a-1-1'
                  style={{
                    listStyleType: 'disc',
                    color: '#393a3b',
                    fontSize: '22px',
                    fontFamily: "'Garamond'",
                    fontStyle: 'italic',
                  }}
                >
                  Software Engineering
                </li>
                <li
                  className='a-1-1'
                  style={{
                    listStyleType: 'disc',
                    color: '#393a3b',
                    fontSize: '22px',
                    fontFamily: "'Garamond'",
                    fontStyle: 'italic',
                  }}
                >
                  Data Structures and Algorithms
                </li>
                <li
                  className='a-1-1'
                  style={{
                    listStyleType: 'disc',
                    color: '#393a3b',
                    fontSize: '22px',
                    fontFamily: "'Garamond'",
                    fontStyle: 'italic',
                  }}
                >
                  Design and Analysis of Algorithms
                </li>
                <li
                  className='a-1-1'
                  style={{
                    listStyleType: 'disc',
                    color: '#393a3b',
                    fontSize: '22px',
                    fontFamily: "'Garamond'",
                    fontStyle: 'italic',
                  }}
                >
                  Database Systems
                </li>
              </ul>
            </li>

            <h3 className='h-3-1' style={{ fontWeight: 'bold', position: 'relative', top: '-7vh' }}>
              Education
            </h3>
            <li style={{ position: 'relative', top: '-8vh' }} className='a-2'>
              <h4
                style={{
                  position: 'relative',
                  top: '12px',
                  left: '-5px',
                  color: '#626269',
                  fontFamily: 'EB Garamond',
                  fontWeight: 'bold',
                  fontSize: '30px',
                  fontStyle: 'italic',
                }}
              >
                &nbsp;Bachelor of Computer Engineering
              </h4>
              <h4
                style={{
                  position: 'relative',
                  top: '12px',
                  left: '-5px',
                  color: '#626269',
                  fontFamily: "'Garamond'",
                  fontStyle: 'italic',
                }}
              >
                (with Computing Science Minor)
              </h4>
              <div style={{ position: 'relative', top: '15px' }}>
                <h5>2019 - 2024</h5>
                <div
                  style={{
                    position: 'relative',
                    top: '-15px',
                    fontFamily: "'Garamond'",
                    wordSpacing: '3px',
                    color: '#393a3b',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Garamond'",
                      fontStyle: 'italic',
                      wordSpacing: '3px',
                      fontSize: '18px',
                      color: '#9d9da1',
                      fontWeight: 'bold',
                    }}
                  >
                    Simon Fraser University (SFU), BC, Canada.
                  </p>
                  <p
                    style={{
                      fontFamily: 'EB Garamond',
                      fontStyle: 'normal',
                      wordSpacing: '3px',
                      fontSize: '20px',
                    }}
                  >
                    - I'm pursuing a degree in computer engineering and I also
                    undertake a minor in Computing Science. I intend to take
                    classes like: Distributed Systems, Embedded Systems,
                    Compiler Design, and Software Developement Methods.
                  </p>
                </div>
              </div>
            </li>

            <h3 className='h-3-1' style={{ fontWeight: 'bold', position: 'relative', top: '-6vh' }}>
              Volunteer Experience
            </h3>
            <li
              style={{ position: 'relative', top: '-7vh' }}
              className='a-2-4'
            >
              <h4
                style={{
                  position: 'relative',
                  top: '12px',
                  left: '-5px',
                  color: '#626269',
                  fontFamily: "'Garamond'",
                  fontStyle: 'italic',
                }}
              >
                &nbsp;Beth Torrey Home
              </h4>
              <h4
                style={{
                  position: 'relative',
                  top: '12px',
                  left: '-5px',
                  color: '#626269',
                  fontSize: '20px',
                  fontFamily: "'Garamond'",
                  fontStyle: 'italic',
                }}
              >
                &nbsp;(home for people with dementia problems)
              </h4>
              <div style={{ position: 'relative', top: '15px' }}>
                <h5>2016</h5>
                <div
                  style={{
                    position: 'relative',
                    top: '-15px',
                    fontFamily: "'Garamond'",
                    wordSpacing: '3px',
                    color: '#393a3b',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Garamond'",
                      fontStyle: 'italic',
                      wordSpacing: '3px',
                      fontSize: '18px',
                      color: '#9d9da1',
                      fontWeight: 'bold',
                    }}
                  >
                    Located at: Festac, Lagos, Nigeria.
                  </p>
                  <p
                    style={{
                      fontFamily: 'EB Garamond',
                      fontStyle: 'normal',
                      wordSpacing: '3px',
                      fontSize: '21px',
                    }}
                  >
                    - Throughout this period, I led the initiative to come up
                    with ideas on ways to help the people with dementia to make
                    them feel better. I majorly assisted by:
                    <ul
                      style={{
                        position: 'relative',
                        top: '-5vh',
                        left: '-7vh',
                      }}
                    >
                      <li
                        style={{
                          listStyleType: 'disc',
                          color: '#393a3b',
                          fontFamily: "'Garamond'",
                          fontSize: '19px',
                          fontStyle: 'italic',
                        }}
                      >
                        Organizing lessons to teach them how to communicate
                        clearly and coherently to other people.
                      </li>
                      <li
                        style={{
                          listStyleType: 'disc',
                          color: '#393a3b',
                          fontSize: '19px',
                          fontFamily: "'Garamond'",
                          fontStyle: 'italic',
                        }}
                      >
                        Scheduling sessions to teach them how to make bags and
                        jewelry.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </Col>

        <Col id='col-2' md={6} data-aos='fade-left' data-aos-delay='2000'>
          <ul className='a-2'>
            <h3 className='h-3' style={{ fontFamily: 'EB Garamond' }}>
              Projects
            </h3>
            <li className='a-2-2' style={{ position: 'relative', top: '15px' }}>
              <p style={{ position: 'relative', top: '0px' }}>
                <h4
                  style={{
                    position: 'relative',
                    top: '8px',
                    left: '-5px',
                    fontFamily: 'EB Garamond',
                    fontStyle: 'italic',
                    fontSize: '30px',
                    fontWeight: 'bold',
                  }}
                >
                  &nbsp;E-commerce Application
                </h4>
                <h4
                  style={{
                    position: 'relative',
                    top: '10px',
                    left: '0px',
                    fontFamily: "'Garamond'",
                    fontSize: '2.5vh',
                    fontStyle: 'italic',
                    paddingBottom: '10px',
                  }}
                >
                  Website:{' '}
                  <a href='https://shopoutletapp.herokuapp.com/' rel='noreferrer'
                    target='_blank'>
                    https://shopoutletapp.herokuapp.com/
                  </a>
                </h4>
                <div style={{ position: 'relative', top: '-8px' }}>
                  <h4
                    style={{
                      position: 'relative',
                      top: '10px',
                      left: '-5px',
                      fontFamily: "'Garamond'",
                      fontSize: '2.5vh',
                      fontStyle: 'italic',
                      paddingBottom: '10px',
                    }}
                  >
                    &nbsp;(Technologies Used):
                  </h4>
                  <div>
                    <h5 style={{ fontFamily: 'EB Garamond' }}>
                      React, Redux, MongoDB, Express, Git
                    </h5>
                  </div>
                  <h5
                    style={{
                      fontFamily: 'EB Garamond',
                      position: 'relative',
                      top: '-3vh',
                    }}
                  >
                    PayPal API, Hooks API, Redux, Postman
                  </h5>
                  <h5
                    style={{
                      fontFamily: 'EB Garamond',
                      position: 'relative',
                      top: '-4.5vh',
                    }}
                  >
                    Jsoan Web Token, &nbsp;JWT Authentication, Heroku
                  </h5>
                  <ul className='ul-2-1'>
                    <li
                      style={{
                        fontFamily: 'EB Garamond',
                        fontStyle: 'normal',
                        color: '#393a3b',
                        fontSize: '16px',
                      }}
                    >
                      Implemented a MERN full stack e-commerce real world app
                      project where customers can login and browse for products
                      with their unique accounts protected by JWT authentication
                      and deployed the complete project to Heroku.
                    </li>
                    <li
                      style={{
                        fontFamily: 'EB Garamond',
                        fontStyle: 'normal',
                        color: '#393a3b',
                        fontSize: '16px',
                      }}
                    >
                      Established CRUD functionality by testing all of the POST,
                      &nbsp;GET, &nbsp;PUT,&nbsp; and DELETE endpoints and
                      tested these endpoints using Postman while using Redux for
                      state management and Git for Version Control.
                    </li>
                  </ul>
                </div>
              </p>
            </li>

            <li
              className='a-2-5'
              style={{ position: 'relative', top: '-13vh' }}
            >
              <p style={{ position: 'relative', top: '11px' }}>
                <h4
                  style={{
                    position: 'relative',
                    top: '1px',
                    left: '-5px',
                    fontSize: '30px',
                    fontFamily: 'EB Garamond',
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                  }}
                >
                  &nbsp;Student Management Application
                </h4>
                <h4
                  style={{
                    position: 'relative',
                    top: '10px',
                    left: '0px',
                    fontFamily: "'Garamond'",
                    fontSize: '2.5vh',
                    fontStyle: 'italic',
                    paddingBottom: '10px',
                  }}
                >
                  Website:{' '}
                  <a href='http://studentmanagementappfullstack-env.eba-6ayfszt3.us-east-1.elasticbeanstalk.com/' rel='noreferrer'
                    target='_blank'>
                    http://studentmanagementappfullstack-env.eba-6ayfszt3.us-east-1.elasticbeanstalk.com/
                  </a>
                </h4>
                <div style={{ position: 'relative', top: '-1vh' }}>
                  <h4
                    style={{
                      position: 'relative',
                      top: '10px',
                      left: '-5px',
                      fontFamily: "'Garamond'",
                      fontSize: '2.5vh',
                      fontStyle: 'italic',
                      paddingBottom: '10px',
                    }}
                  >
                    &nbsp;(Technologies Used):
                  </h4>

                  <h5 style={{ fontFamily: 'EB Garamond' }}>
                    Java, Spring Boot, React, Hooks API
                  </h5>
                  <h5
                    style={{
                      fontFamily: 'EB Garamond',
                      position: 'relative',
                      top: '3vh',
                      left: '-33.7vh'
                    }}
                  >
                    Git, Github Actions (for CI/CD), Docker
                  </h5>
                  <h5
                    style={{
                      fontFamily: 'EB Garamond',
                      position: 'relative',
                      top: '2vh',
                    }}
                  >
                    postgreSQL (for Database), Postman API, Maven, Jib
                  </h5>
                  <h5
                    style={{
                      fontFamily: 'EB Garamond',
                      position: 'relative',
                      top: '1vh',
                    }}
                  >
                    AWS Elastic Beanstalk, AWS EC2, AWS RDS
                  </h5>
                  <ul className='ul-2'>
                    <li
                      style={{
                        fontFamily: 'EB Garamond',
                        fontStyle: 'normal',
                        color: '#393a3b',
                        fontSize: '16px',
                      }}
                    >
                      Implemented a full stack app for managing students using
                      Java for the backend and React with Ant Design Framework
                      for the frontend and established CRUD functionality by
                      testing all of the POST, &nbsp;GET, &nbsp;PUT,&nbsp; and
                      DELETE endpoints using Postman.
                    </li>
                    <li
                      style={{
                        fontFamily: 'EB Garamond',
                        fontStyle: 'normal',
                        color: '#393a3b',
                        fontSize: '16px',
                      }}
                    >
                      Integrated dockerHub and Jib to the application and
                      generated different docker images to push up instances of
                      the application to a docker repo.
                    </li>
                    <li
                      style={{
                        fontFamily: 'EB Garamond',
                        fontStyle: 'normal',
                        color: '#393a3b',
                        fontSize: '16px',
                      }}
                    >
                      Built a docker container to containerize the complete
                      application while pushing up to AWS Elastic Beanstalk.
                      Integrated postgreSQL database with AWS RDS and pushed up
                      various EC2 instances to Elastic Beanstalk.
                    </li>
                    <li
                      style={{
                        fontFamily: 'EB Garamond',
                        fontStyle: 'normal',
                        color: '#393a3b',
                        fontSize: '16px',
                      }}
                    >
                      Automated all the steps to the deployment of the after
                      pushing a commit to a new git branch using CI/CD. Using a
                      pre-written build.yml and deploy.yml file, I automated the
                      entire CI process after building the application to the
                      next CICD process when the application is successfully
                      built and merged to a git branch.
                    </li>
                  </ul>
                </div>
              </p>
            </li>
          </ul>
        </Col>
      </Row>
    </section>
  )
}

export default Resume
