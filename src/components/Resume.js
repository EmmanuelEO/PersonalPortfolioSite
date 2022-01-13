import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Resume = () => {
  return (
    <div className='container'>
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
                  fontWeight: '900'
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
                  wordSpacing: '3px',
                }}
              >
                Innovative, deadline-driven, and passion-driven Student,
                Software Engineer and Developer with 3+ years of programming
                experience. The relevant courses I've taken include:
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

            <h3 className='h-3-1' style={{ fontWeight: 'bold' }}>
              Education
            </h3>
            <li style={{ position: 'relative', top: '6px' }} className='a-2'>
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
                      fontFamily: "'Garamond'",
                      fontStyle: 'italic',
                      wordSpacing: '3px',
                      fontSize: '17px',
                    }}
                  >
                    - I'm pursuing a degree in computer engineering and I also undertake a minor in Computing Science. I intend to take classes like: Distributed Systems, Embedded Systems, Compiler Design, and Software Developement Methods.
                  </p>
                </div>
              </div>
            </li>

            <h3 className='h-3-1' style={{ fontWeight: 'bold' }}>
              Volunteer Experience
            </h3>
            <li style={{ position: 'relative', top: '6px' }} className='a-2'>
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
                  fontFamily: "'Garamond'",
                  fontStyle: 'italic',
                }}
              >
                &nbsp;(home for people)
              </h4>
              <div style={{ position: 'relative', top: '15px' }}>
                <h5>201</h5>
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
                    Home for people with dementia problems
                  </p>
                  <p
                    style={{
                      fontFamily: "'Garamond'",
                      fontStyle: 'italic',
                      wordSpacing: '3px',
                      fontSize: '17px',
                    }}
                  >
                    - I'm pursuing a degree in computer engineering and I also undertake a minor in Computing Science. I intend to take classes like: Distributed Systems, Embedded Systems, Compiler Design, and Software Developement Methods.
                  </p>
                </div>
              </div>
            </li>
            
          </ul>
        </Col>

        <Col id='col-2' md={6} data-aos='fade-left' data-aos-delay='2000'>
          <ul className='a-2'>
            <h3 className='h-3' style={{ fontFamily: "'Garamond'" }}>
              Professional Work Experience
            </h3>
            <li className='a-2-2' style={{ position: 'relative', top: '15px' }}>
              <p style={{ position: 'relative', top: '11px' }}>
                <h4
                  style={{
                    position: 'relative',
                    top: '10px',
                    left: '-5px',
                    fontFamily: "'Garamond'",
                    fontStyle: 'italic',
                  }}
                >
                  &nbsp;Senior Graphic Design Specialist
                </h4>
                <h5
                  style={{
                    position: 'relative',
                    top: '2px',
                    fontFamily: "'Garamond'",
                    fontStyle: 'italic',
                  }}
                >
                  2019 - Present
                </h5>
                <p
                  style={{
                    fontFamily: "'Garamond'",
                    fontStyle: 'italic',
                    position: 'relative',
                    top: '2px',
                  }}
                >
                  <em>Experion, New York, NY </em>
                </p>
                <ul className='ul-2'>
                  <li
                    style={{
                      fontFamily: "'Garamond'",
                      fontStyle: 'italic',
                      color: '#393a3b',
                    }}
                  >
                    Lead in the design, development, and implementation of the
                    graphic, layout, and production communication materials
                  </li>
                  <li
                    style={{
                      fontFamily: "'Garamond'",
                      fontStyle: 'italic',
                      color: '#393a3b',
                    }}
                  >
                    Delegate tasks to the 7 members of the design team and
                    provide counsel on all aspects of the project.{' '}
                  </li>
                  <li
                    style={{
                      fontFamily: "'Garamond'",
                      fontStyle: 'italic',
                      color: '#393a3b',
                    }}
                  >
                    Supervise the assessment of all graphic materials in order
                    to ensure quality and accuracy of the design
                  </li>
                  <li
                    style={{
                      fontFamily: "'Garamond'",
                      fontStyle: 'italic',
                      color: '#393a3b',
                    }}
                  >
                    Oversee the efficient use of production project budgets
                    ranging from $2,000 - $25,000
                  </li>
                </ul>
              </p>
            </li>

            <li style={{ position: 'relative', top: '3px' }} className='a-2-3'>
              <p style={{ position: 'relative', top: '9px', left: '7px' }}>
                <h4
                  style={{
                    position: 'relative',
                    top: '12px',
                    left: '-5px',
                    fontFamily: "'Garamond'",
                    fontStyle: 'italic',
                  }}
                >
                  Graphic Design Specialist
                </h4>
                <div style={{ position: 'relative', top: '15px' }}>
                  <h5>2017 - 2018</h5>
                  <div style={{ position: 'relative', top: '-10px' }}>
                    <p style={{ fontFamily: 'Garamond' }}>
                      <em>Stepping Stone Advertising, New York, NY</em>
                    </p>
                    <ul
                      style={{
                        position: 'relative',
                        left: '-23px',
                        top: '-3px',
                        listStyleType: 'disc',
                        color: '#393a3b',
                        fontFamily: 'Garamond',
                        fontStyle: 'italic',
                      }}
                    >
                      <li>
                        Developed numerous marketing programs (logos,
                        brochures,infographics, presentations, and
                        advertisements).
                      </li>
                      <li>
                        Managed up to 5 projects or tasks at a given time while
                        under pressure
                      </li>
                      <li>
                        Recommended and consulted with clients on the most
                        appropriate graphic design
                      </li>
                      <li>
                        Created 4+ design presentations and proposals a month
                        for clients and account managers
                      </li>
                    </ul>
                  </div>
                </div>
              </p>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  )
}

export default Resume
