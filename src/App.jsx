import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

import Loader from './components/Loader/Loader.jsx'
import Cursor from './components/Cursor/Cursor.jsx'
import ScrollProgress from './components/ScrollToTop/ScrollProgress.jsx'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Skills from './components/Skills/Skills.jsx'
import Projects from './components/Projects/Projects.jsx'
import Certificates from './components/Certificates/Certificates.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.body.classList.add('loading')
    const timer = setTimeout(() => {
      setLoading(false)
      document.body.classList.remove('loading')
    }, 2400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
