import React from 'react'
import eComImg from '../img/ecommerce-img.jpeg'
import studentManagementImg from '../img/studentManagement.png'
import contactManagerImg from '../img/contactManagement.jpeg'
import myPortfolio from '../img/myPortfolio.jpeg'
import rushHourSolver from '../img/Rush_Hour_Game.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className='portfolio-1'>
        <p className='port-title'>Portfolio</p>
        <p className='port-border'></p>
        <div></div>

        <div className='container-fluid'>
          <div className='row rounded'>
            <div className='col-sm-12 col-md-6 col-lg-4 py-3'>
              <div className='card' data-aos='zoom-in'>
                <a
                  href='https://shopoutletapp.herokuapp.com/'
                  target='_blank'
                  className='text-decoration-none'
                  rel='noreferrer'
                >
                  <img
                    className='card-img port-width'
                    src={eComImg}
                    alt='eComImg'
                  />
                </a>
                <div className='card-body'>
                  <a
                    href='https://shopoutletapp.herokuapp.com/'
                    target='_blank'
                    className='text-decoration-none'
                    rel='noreferrer'
                  >
                    <h5 className='card-title port-size'>
                      Website: &nbsp;E-Commerce App (ShopOutlet)
                    </h5>
                  </a>
                  <a
                    href='https://github.com/EmmanuelEO/ShopOutletApp'
                    target='_blank'
                    className='text-decoration-none'
                    rel='noreferrer'
                  >
                    <h5 className='card-title port-size'>
                      Github Repo: &nbsp;E-Commerce App (ShopOutlet)
                    </h5>
                  </a>
                  <p className='card-text'>
                    Built a MERN full stack e-commerce project from sratch with
                    Bootstrap, HTML, CSS, Javascript, MongoDB (NoSQL), and
                    developed the Product Pages showcasing products on the site,
                    the Order Pages in conjunction with an integrated PayPal API
                    to allow a test order purchase to take note of delivered
                    orders.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 py-3'>
              <div className='card' data-aos='zoom-in'>
                <a
                  href='http://studentmanagementappfullstack-env.eba-6ayfszt3.us-east-1.elasticbeanstalk.com/'
                  target='_blank'
                  className='text-decoration-none'
                  rel='noreferrer'
                >
                  <img
                    className='card-img port-width'
                    src={studentManagementImg}
                    alt='studentManagementImg'
                  />
                </a>
                <div className='card-body'>
                  <a
                    href='http://studentmanagementappfullstack-env.eba-6ayfszt3.us-east-1.elasticbeanstalk.com/'
                    target='_blank'
                    className='text-decoration-none'
                    rel='noreferrer'
                  >
                    <h5 className='card-title port-size'>
                      Website: &nbsp;AWS Student Management App
                    </h5>
                  </a>
                  <a
                    href='https://github.com/EmmanuelEO/StudentManagementApp'
                    target='_blank'
                    className='text-decoration-none'
                    rel='noreferrer'
                  >
                    <h5 className='card-title port-size'>
                      Github Repo: &nbsp;AWS Student Management App
                    </h5>
                  </a>
                  <p className='card-text pb-0 pt-0 mt-0 mb-0'>
                    Implemented a full stack app for managing students using
                    Java (Spring Boot, postgreSQL) for the backend of the app,
                    React for the frontend of the app, Jib/Maven/Docker to add
                    dependencies to the to the project that allow pushing up a
                    docker image instance, Github Actions for CI/CD automations
                    upon pull request from a branch, and AWS Elastic Beanstalk
                    to host the app via access from a docker container.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 py-3'>
              <div className='card' data-aos='zoom-in'>
                <a
                  href='https://damp-mountain-49351.herokuapp.com/'
                  target='_blank'
                  className='text-decoration-none'
                  rel='noreferrer'
                >
                  <img
                    className='card-img port-width'
                    src={contactManagerImg}
                    alt='contactManagerImg'
                  />
                </a>
                <div className='card-body'>
                  <a
                    href='https://damp-mountain-49351.herokuapp.com/'
                    target='_blank'
                    className='text-decoration-none'
                    rel='noreferrer'
                  >
                    <h5 className='card-title port-size'>
                      Website: &nbsp;Contact Manager App
                    </h5>
                  </a>
                  <a
                    href='https://github.com/EmmanuelEO/ContactManagerApp'
                    target='_blank'
                    className='text-decoration-none'
                    rel='noreferrer'
                  >
                    <h5 className='card-title port-size'>
                      Github Repo: &nbsp;Contact Manager App
                    </h5>
                  </a>
                  <p className='card-text'>
                    <h6>
                      Technologies Used: MongoDB, Express, React, NodeJS,
                      Context API, Hooks API, Github
                    </h6>
                    Implemented a contact Manager MERN full stack application
                    that allows a user to register and login via JWT (Json Web
                    Token) authentication. When logged in, the user has access
                    to all their personal and professional contacts and can also
                    filter through their existing contacts to easliy retrieve a
                    contact. Deployed the complete applicaiton thrhough Git to
                    Heroku.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 py-3'>
              <div className='card' data-aos='zoom-in'>
                <a
                  href='https://google.com'
                  target='_blank'
                  className='text-decoration-none'
                  rel='noreferrer'
                >
                  <img
                    className='card-img port-width'
                    src={myPortfolio}
                    alt='myPortfolio'
                  />
                </a>
                <div className='card-body'>
                  <a
                    href='https://www.spigotmc.org/resources/minionminer.91687/'
                    target='_blank'
                    className='text-decoration-none'
                    rel='noreferrer'
                  >
                    <h5 className='card-title port-size'>
                      Github Repo: Personal Portfolio Website
                    </h5>
                  </a>
                  <p className='card-text'>
                    <h6>
                      Technologies Used: HTML, CSS, JavaScript, React, Bootstrap
                    </h6>
                    Built a fully responsive personal portfolio website from the
                    ground up using React, Bootstrap, HTML, CSS, and Javascript.
                    Each section in the website are divided into components for
                    effortless maintenance. Deployed the complete project to
                    Heroku and used Github for version control throughout the
                    span of the project.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4 py-3'>
              <div className='card' data-aos='zoom-in'>
                <a
                  href='https://github.com/EmmanuelEO/CMPT225_Rush_Hour_Solver'
                  target='_blank'
                  className='text-decoration-none'
                  rel='noreferrer'
                >
                  <img
                    className='card-img port-width'
                    src={rushHourSolver}
                    alt='rushHourSolver'
                  />
                </a>
                <div className='card-body'>
                  <a
                    href='https://github.com/EmmanuelEO/CMPT225_Rush_Hour_Solver'
                    target='_blank'
                    className='text-decoration-none'
                    rel='noreferrer'
                  >
                    <h5 className='card-title port-size'>
                      &nbsp;&nbsp;&nbsp;Github Repo: Rush Hour Solver using A*
                      algorithm, BFS &amp; DFS algortihm
                    </h5>
                  </a>
                  <p className='card-text'>
                    <h6>Technologies Used: Java</h6>
                    Led in a group project with my partner on developing a Rush
                    Hour Solver given a matrix of inputted cars. I formalized
                    the solution to the problem by using a graph representation
                    and came up with expedited the time complexity to solutions
                    of about 1.65s when all of BFS, DFS, and Astar's algorithms
                    were used.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
