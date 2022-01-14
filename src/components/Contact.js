import React from 'react'
import { Row, Container } from 'react-bootstrap'

const Contact = () => {
  return (
    <section id='contact'>
      <div>
        <p className='about-para'>Contact Me: </p>
        <p className='contact-border'></p>
      </div>
      <Container fluid>
        <Row>
          <div className='col-sm-36 col-md-18 col-lg-12 pt-5 pl-5'>
            <>
              <form>
                  <div>
                <input
                  type='name'
                  placeholder='Enter your name: '
                />
                </div>
                <div>
                <input
                  type='email'
                  placeholder='Enter your email: '
                />
                </div>
                <div>
                <textarea
                  rows='5'
                  placeholder='Enter your message: '
                  name='message'
                />
                </div>
              </form>
            </>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
