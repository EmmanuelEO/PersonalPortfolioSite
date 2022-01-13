import './App.css'
import Intro from './components/Intro'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <div className='App'>
      <Intro />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
