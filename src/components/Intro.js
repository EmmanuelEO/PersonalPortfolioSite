import React, { Fragment, useEffect } from 'react'
import myImg from '../img/my_pic.png'

const Intro = () => {
  class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement
      this.words = words
      this.txt = ''
      this.wordIndex = 0
      this.wait = parseInt(wait, 10)
      this.type()
      this.isDeleting = false
    }

    type() {
      const current = this.wordIndex % this.words.length
      const fullTxt = this.words[current]
      const cursorSpan = document.querySelector('.cursor')

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1)
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1)
      }

      if (this.txt.length !== fullTxt.length) {
        cursorSpan.classList.add('typing')
      } else {
        cursorSpan.classList.remove('typing')
      }

      // Insert txt into element
      this.txtElement.innerHTML = `<span className="txt">${this.txt}</span>`

      // Initial Type Speed
      let typeSpeed = 130

      if (this.isDeleting) {
        typeSpeed /= 2
      }

      // If word is complete
      if (!this.isDeleting && this.txt === fullTxt) {
        typeSpeed = this.wait
        this.isDeleting = true
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false
        this.wordIndex++
        typeSpeed = 160
      }

      setTimeout(() => this.type(), typeSpeed)
    }
  }

  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init)

  // Init App
  function init() {
    const txtElement = document.querySelector('.text-type')
    const words = JSON.parse(txtElement.getAttribute('data-words'))
    const wait = txtElement.getAttribute('data-wait')
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait)
  }

  return (
    <section className='Home'>
      <div className='main'>
        <div className='left'>
          <div className='my-background-2'></div>
          <div className='inside-left'>
            <div style={{ position: 'relative', left: '-7vh' }}>
              <h2
                className='greeting'
                style={{
                  paddingBottom: '25px',
                  fontWeight: 'bolder',
                  fontSize: '5vh',
                }}
              >
                Hello! I'm
              </h2>
              <p
                className='name'
                style={{
                  fontWeight: '900',
                  fontSize: '11vh',
                  paddingBottom: '25px',
                }}
              >
                Emmanuel
              </p>
              <p
                className='name'
                style={{
                  fontWeight: '900',
                  fontSize: '11vh',
                  paddingBottom: '25px',
                }}
              >
                Okonkwo
              </p>
            </div>
            <div>
              <span
                className='title'
                style={{
                  fontSize: '47px',
                  left: '-8vh',
                  display: 'inline-block',
                }}
              >
                <span style={{ postion: 'relative', fontSize: '6.5vh' }}>
                  and I'm a&nbsp;
                </span>
                <span
                  style={{ position: 'static' }}
                  className='text-type'
                  data-wait='3000'
                  data-words='["Creator", "Developer", "Designer", "Engineer", "Learner"]'
                ></span>
                <span style={{ fontSize: '47px' }} className='cursor'>
                  &nbsp;
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='my-background-1'></div>
          <img src={myImg} alt='myImg' className='my-img' />
        </div>
      </div>
    </section>
  )
}

export default Intro
