import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Resume = () => {
  return (
    <section id='resume'>
      <div>
        <p className='resume-title'>Resume</p>
        <p className='resume-border'></p>
      </div>
      <Row className='resume-detail'>
        <Col sm={12} md={8} lg={6} id='col-1' data-aos='fade-right'>
          <ul className='a-2'>
            <h3 className='h-3'>Summary</h3>
            <li className='a-2'>
              <h4 className='n-1'>&nbsp;Name: Emmanuel Okonkwo</h4>
              <div className='p-1'>
                <p>Innovative, deadline-driven, and passion-driven Student, Software Engineer and Developer with 3+ years of programming
                experience. The relevant courses I've taken include:</p>
              </div>
              <ul className='a-1'>
                <li className='a-1-1'>Operating Systems</li>
                <li className='a-1-1'>Software Engineering</li>
                <li className='a-1-1'>Data Structures and Algorithms</li>
                <li className='a-1-1'>Design and Analysis of Algorithms</li>
                <li className='a-1-1'>Database Systems</li>
              </ul>
            </li>

            <h3 className='h-3-1'>Education</h3>
            <li className='a-2-1'>
              <h4 className='major'>&nbsp;Bachelor of Computer Engineering</h4>
              <h4 className='minor'>(with Computing Science Minor)</h4>
              <div className='div-1'>
                <h5>2019 - 2024</h5>
                <div className='school-txt'>
                  <p className='school-loc'>
                    Simon Fraser University (SFU), BC, Canada.
                  </p>
                  <p className='school-desc'>
                    - I'm pursuing a degree in computer engineering and I also
                    undertake a minor in Computing Science. I intend to take
                    classes like: Distributed Systems, Embedded Systems,
                    Compiler Design, and Software Developement Methods.
                  </p>
                </div>
              </div>
            </li>

            <div className='div-2'>
              <h3 className='h-3-2'>Volunteer Experience</h3>
              <li className='a-2-4'>
                <div className='div-4'>
                  <h4 className='volunteer-loc'>&nbsp;Beth Torrey Home</h4>
                  <h4 className='vol-where'>
                    &nbsp;(home for people with dementia problems)
                  </h4>
                  <div className='volunteer'>
                    <h5>2016</h5>
                    <div className='div-3'>
                      <p className='vol-loc'>
                        Located at: Festac, Lagos, Nigeria.
                      </p>
                      <p className='vol-desc'>
                        - Throughout this period, I led the initiative to come
                        up with ideas on ways to help the people with dementia
                        to make them feel better. I majorly assisted by:
                        <ul className='ul-3'>
                          <li className='li-1'>
                            Organizing lessons to teach them how to communicate
                            clearly and coherently to other people.
                          </li>
                          <li className='li-1'>
                            Scheduling sessions to teach them how to make bags
                            and jewelry.
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </ul>
        </Col>

        <Col id='col-2' sm={12} md={8} lg={6} data-aos='fade-left'>
          <ul className='a-2'>
            <h3 className='h-3'>Projects</h3>
            <li className='a-2-2'>
              <div className='div-5'>
                <h4 className='proj-1-title'>&nbsp;E-commerce Application</h4>
                <h4 className='proj-1-web'>
                  Website:{' '}
                  <a
                    href='https://shopoutletapp.herokuapp.com/'
                    rel='noreferrer'
                    target='_blank'
                  >
                    https://shopoutletapp.herokuapp.com/
                  </a>
                </h4>
                <div className='div-6'>
                  <h4 className='proj-1-tech'>&nbsp;(Technologies Used):</h4>
                  <div>
                    <h5 className='h5-1'>
                      React, Redux, MongoDB, Express, Git
                    </h5>
                  </div>
                  <h5 className='h5-1'>
                    PayPal API, Hooks API, Redux, Postman
                  </h5>
                  <h5 className='h5-1'>
                    Json Web Token, &nbsp;JWT Authentication, Heroku
                  </h5>
                  <ul className='ul-2-1'>
                    <li className='proj-1-desc'>
                      Implemented a MERN full stack e-commerce real world app
                      project where customers can login and browse for products
                      with their unique accounts protected by JWT authentication
                      and deployed the complete project to Heroku.
                    </li>
                    <li className='proj-1-desc'>
                      Established CRUD functionality by testing all of the POST,
                      &nbsp;GET, &nbsp;PUT,&nbsp; and DELETE endpoints and
                      tested these endpoints using Postman while using Redux for
                      state management and Git for Version Control.
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className='a-2-5'>
              <div className='div-7'>
                <h4 className='proj-2-title'>
                  &nbsp;Student Management Application
                </h4>
                <h4 className='proj-2-web'>
                  Website:{' '}
                  <a
                    href='http://studentmanagementappfullstack-env.eba-6ayfszt3.us-east-1.elasticbeanstalk.com/'
                    rel='noreferrer'
                    target='_blank'
                  >
                    http://studentmanagementappfullstack-env.eba-6ayfszt3.us-east-1.elasticbeanstalk.com/
                  </a>
                </h4>
                <div className='div-8'>
                  <h4 className='proj-2-tech'>&nbsp;(Technologies Used):</h4>

                  <h5 className='h5-1'>Java, Spring Boot, React, Hooks API</h5>
                  <h5 className='h5-1'>
                    Gitx, Github Actions (for CI/CD), Docker
                  </h5>
                  <h5 className='h5-1'>
                    postgreSQL (for Database), Postman API, Maven, Jib
                  </h5>
                  <h5 className='h5-1'>
                    AWS Elastic Beanstalk, AWS EC2, AWS RDS
                  </h5>
                  <ul className='ul-2'>
                    <li className='proj-2-desc'>
                      Implemented a full stack app for managing students using
                      Java for the backend and React with Ant Design Framework
                      for the frontend and established CRUD functionality by
                      testing all of the POST, &nbsp;GET, &nbsp;PUT,&nbsp; and
                      DELETE endpoints using Postman.
                    </li>
                    <li className='proj-2-desc'>
                      Integrated dockerHub and Jib to the application and
                      generated different docker images to push up instances of
                      the application to a docker repo.
                    </li>
                    <li className='proj-2-desc'>
                      Built a docker container to containerize the complete
                      application while pushing up to AWS Elastic Beanstalk.
                      Integrated postgreSQL database with AWS RDS and pushed up
                      various EC2 instances to Elastic Beanstalk.
                    </li>
                    <li className='proj-2-desc'>
                      Automated all the steps to the deployment of the after
                      pushing a commit to a new git branch using CI/CD. Using a
                      pre-written build.yml and deploy.yml file, I automated the
                      entire CI process after building the application to the
                      next CICD process when the application is successfully
                      built and merged to a git branch.
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </Col>
      </Row>
    </section>
  )
}

export default Resume
