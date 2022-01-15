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
        <div>
          
        </div>

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
                    A Minecraft Java plugin that creates a minion that
                    automatically mines for a player. Each minion has certain
                    characteristics such as mining speed and inventory size that
                    is upgradeable.
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
                  <p className='card-text'>
                    A Minecraft Java plugin that creates a minion that
                    automatically mines for a player. Each minion has certain
                    characteristics such as mining speed and inventory size that
                    is upgradeable.
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
                    A Minecraft Java plugin that creates a minion that
                    automatically mines for a player. Each minion has certain
                    characteristics such as mining speed and inventory size that
                    is upgradeable.
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
                    A Minecraft Java plugin that creates a minion that
                    automatically mines for a player. Each minion has certain
                    characteristics such as mining speed and inventory size that
                    is upgradeable.
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
                    A Minecraft Java plugin that creates a minion that
                    automatically mines for a player. Each minion has certain
                    characteristics such as mining speed
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
