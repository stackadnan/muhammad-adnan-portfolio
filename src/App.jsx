import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import LoadingSpinner from './components/LoadingSpinner'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="relative z-0 theme-bg-primary transition-colors duration-300">
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
    </ThemeProvider>
  )
}

export default App
