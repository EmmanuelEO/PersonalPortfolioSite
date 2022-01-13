import React from 'react'
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
          <h2 className='greeting'>Hello! I'm</h2>
          <h1 className='name'>Emmanuel Okonkwo</h1>
          <span className='title' style={{ fontSize: '50px' }}>
            <span>and I'm a </span>
            <span
              className='text-type'
              data-wait='3000'
              data-words='["Developer", "Designer", "Creator"]'
            ></span>
            <span style={{ fontSize: '50px' }} className='cursor'>
              &nbsp;
            </span>
          </span>
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
