import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import LoadingSpinner from './components/LoadingSpinner'

function App() {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navigation />
          <Suspense fallback={<LoadingSpinner />}>
            <Hero />
          </Suspense>
        </div>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </Router>
  )
}

export default App
