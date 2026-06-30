import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaCrown } from 'react-icons/fa'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = links.map(l => document.querySelector(l.href))
      const pos = window.scrollY + 150
      sections.forEach((sec, i) => {
        if (sec && sec.offsetTop <= pos && sec.offsetTop + sec.offsetHeight > pos) {
          setActive(links[i].href)
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => {
    setOpen(false)
    setActive(href)
  }

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <a href="#home" className="nav-logo" onClick={() => handleClick('#home')}>
        <FaCrown />VR<span>Vigneshwaran Rajasekar</span>
      </a>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className={active === l.href ? 'active' : ''}
              onClick={() => handleClick(l.href)}
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" className="nav-cta" onClick={() => handleClick('#contact')}>
            Contact Me
          </a>
        </li>
      </ul>

      <button
        className={`hamburger ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </motion.nav>
  )
}
