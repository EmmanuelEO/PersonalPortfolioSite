import './App.css'
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import { Container, Navbar, Row } from 'react-bootstrap'

window.onload = function () {
  const sec = document.querySelectorAll('section')
  const li = document.querySelectorAll('.links')

  function activeMenu() {
    let len = sec.length
    console.log(li)
    while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
    li.forEach((list) => list.classList.remove('active'))
    li[len].classList.add('active')
  }
  activeMenu()
  window.addEventListener('scroll', activeMenu)
}

function App() {
  return (
    <div className='App'>
      <>
        <header>
          <Row>
            <div className='main-head'>
              <Navbar className='flex-row-reverse'>
                <ul className='ul-1'>
                  <li className='links li-2'>
                    <a href='#home'> Home </a>
                  </li>
                  <li className='links li-2'>
                    <a href='#about'>About</a>
                  </li>
                  <li className='links li-2'>
                    <a href='#resume'>Resume</a>
                  </li>
                  <li className='links li-2'>
                    <a href='#portfolio'>Portfolio</a>
                  </li>
                  <li className='links li-2'>
                    <a href='#contact'>Contact</a>
                  </li>
                </ul>
              </Navbar>
            </div>
          </Row>
        </header>
      </>

      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
