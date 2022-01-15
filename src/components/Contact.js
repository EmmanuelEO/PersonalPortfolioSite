import React, { useRef } from 'react'
import { Row, Container, Form } from 'react-bootstrap'

const Contact = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

    const contactRef = useRef()
  return (
    <section id='contact'>
      <div>
        <p className='about-para'>Contact Me: </p>
        <p className='contact-border'></p>
      </div>
      <Container fluid>
        <Row>
          <div className='col-sm-36 col-md-18 col-lg-6 pt-2 pl-5 mt-0'>
            <>
              <Form ref={contactRef} onSubmit={onSubmitHandler}>
                <div>
                  <input
                    className='form-control mt-5 contact-name'
                    type='name'
                    placeholder='Enter your name: '
                  />
                </div>
                <div>
                  <input
                    className='form-control mt-5 contact-email'
                    type='email'
                    placeholder='Enter your email: '
                  />
                </div>
                <div>
                  <textarea
                    rows='10'
                    cols='5'
                    placeholder='Enter your message: '
                    className='form-control contact-textarea mt-5'
                    name='message'
                  />
                </div>
                <button onClick={''} type="submit" class="btn btn-primary btn-lg" style={{ borderRadius: '50px' }}>Submit</button>
              </Form>
            </>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
