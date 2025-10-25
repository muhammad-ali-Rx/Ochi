import React from 'react' 
import Navbar from './components/Navbar'
import Landing from './components/landing'
import Marquee from './components/marquee'
import About from './components/about'
import Eye from './components/eye'
import Project from './components/project'
import Showcards from './components/card'
import Footers from './components/footer'
import LocomotiveScroll from 'locomotive-scroll'


function App() {

  const locomotive = new LocomotiveScroll();
  
  return (
    <div className='min-h-screen w-full '>
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eye />
      <Project />
      <Showcards />
      <Footers />
    </div>
  )
}

export default App