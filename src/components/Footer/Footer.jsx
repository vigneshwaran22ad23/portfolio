import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { FiArrowRight } from 'react-icons/fi'
import { CALL_LINK, WHATSAPP_LINK, EMAIL, GMAIL_COMPOSE_LINK, GITHUB_URL, LINKEDIN_URL, LEETCODE_URL } from '../../siteConfig.js'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
]

const moreLinks = [
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: `${import.meta.env.BASE_URL}resume.pdf` },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="logo">VR</span>
            <p>
              Data Analyst & Machine Learning Engineer crafting data-driven
              solutions that turn insight into impact.
            </p>
            <div className="footer-socials">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="footer-social-link" aria-label="GitHub"><FaGithub /></a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="footer-social-link" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href={GMAIL_COMPOSE_LINK} target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Email"><FaEnvelope /></a>
              <a href={LEETCODE_URL} target="_blank" rel="noreferrer" className="footer-social-link" aria-label="LeetCode"><SiLeetcode /></a>
              <a href={CALL_LINK} className="footer-social-link" aria-label="Call"><FaPhoneAlt /></a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="footer-social-link" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((l) => (
                <li key={l.href}><a href={l.href}><FiArrowRight />{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>More</h4>
            <ul className="footer-links">
              {moreLinks.map((l) => (
                <li key={l.href}><a href={l.href}><FiArrowRight />{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Vigneshwaran Rajasekar. All rights reserved.</p>
          <p>Designed &amp; built with <span>♛</span> in Tamil Nadu, India</p>
        </div>
      </div>
    </footer>
  )
}
