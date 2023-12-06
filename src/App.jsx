import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home'
import About from './screens/About'
import Projects from './screens/Projects'
import Contact from './screens/Contact'
import Skills from './screens/Skills'
import Experience from './screens/Experience'
import ProjectDetails from './screens/ProjectDetails'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/project/:id' element={<ProjectDetails />} />
      </Routes>
    </>
  )
}

export default App
