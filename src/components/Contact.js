import React, { useRef } from 'react'
import { Row, Container, Form } from 'react-bootstrap'
import emailjs from 'emailjs-com'

const Contact = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_rkgexid',
        'template_e6imvnj',
        contactRef.current,
        'user_sSxGD1kQzgarDOQXoLtLk'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
        const txtElement = document.querySelector('.status');
        txtElement.innerHTML = `<span className="txt">Success! You have submitted the form.\nI'll reply to you as soon as possible.</span>`
        setTimeout(() => {txtElement.innerHTML = ''}, 4000)
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
                    name='from_name'
                    required
                  />
                </div>
                <div>
                  <input
                    className='form-control mt-5 contact-email'
                    type='email'
                    placeholder='Enter your email: '
                    name='from_email'
                    required
                  />
                </div>
                <div>
                  <textarea
                    rows='10'
                    cols='5'
                    placeholder='Enter your message: '
                    className='form-control contact-textarea mt-5'
                    name='message'
                    required
                  />
                </div>
                <p className='status'></p>
                <button
                  type='submit'
                  id='myBtn'
                  className='btn btn-primary btn-lg'
                  style={{ borderRadius: '50px' }}
                >
                  Submit
                </button>
              </Form>
            </>
          </div>
          
        </Row>
      </Container>
    </section>
  )
}

export default Contact
