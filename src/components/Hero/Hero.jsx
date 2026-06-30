import { useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaUserAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { FiArrowRight, FiEye } from 'react-icons/fi'
import ImageWithFallback from '../shared/ImageWithFallback.jsx'
import ResumeModal from '../shared/ResumeModal.jsx'
import { CALL_LINK, WHATSAPP_LINK, EMAIL, GMAIL_COMPOSE_LINK, GITHUB_URL, LINKEDIN_URL, LEETCODE_URL } from '../../siteConfig.js'

const PROFILE_PHOTO = `${import.meta.env.BASE_URL}images/profile/profile.jpg`

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.7, ease: 'easeOut' },
  }),
}

export default function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false)

  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="bg-particles">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${10 + Math.random() * 15}s`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className="hero-grid">
          <div>
            <motion.span className="hero-greeting" variants={fadeUp} initial="hidden" animate="show" custom={0}>
              Hello, I'm
            </motion.span>

            <motion.h1 className="hero-name" variants={fadeUp} initial="hidden" animate="show" custom={1}>
              Vigneshwaran <span className="gold-text">Rajasekar</span>
            </motion.h1>

            <motion.p className="hero-role" variants={fadeUp} initial="hidden" animate="show" custom={2}>
              <strong>Data Analyst</strong> &nbsp;•&nbsp; <strong>Machine Learning Engineer</strong>
            </motion.p>

            <motion.div className="hero-typing" variants={fadeUp} initial="hidden" animate="show" custom={3}>
              <TypeAnimation
                sequence={[
                  'Turning raw data into decisions', 2000,
                  'Building predictive ML models', 2000,
                  'Designing Power BI dashboards', 2000,
                  'Solving real-world problems with Python', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p className="hero-desc" variants={fadeUp} initial="hidden" animate="show" custom={4}>
              Transforming data into meaningful insights and building intelligent
              solutions that drive real world impact.
            </motion.p>

            <motion.div className="hero-actions" variants={fadeUp} initial="hidden" animate="show" custom={5}>
              <a href="#projects" className="btn-gold">
                <span>Explore My Work</span>
                <FiArrowRight />
              </a>
              <button type="button" onClick={() => setResumeOpen(true)} className="btn-outline">
                <FiEye />
                <span>View Resume</span>
              </button>
            </motion.div>

            <motion.div className="hero-social" variants={fadeUp} initial="hidden" animate="show" custom={6}>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href={GMAIL_COMPOSE_LINK} target="_blank" rel="noreferrer" aria-label="Email"><FaEnvelope /></a>
              <a href={LEETCODE_URL} target="_blank" rel="noreferrer" aria-label="LeetCode"><SiLeetcode /></a>
              <a href={CALL_LINK} aria-label="Call"><FaPhoneAlt /></a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            </motion.div>
          </div>

          <motion.div
            className="hero-image-wrap"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
          >
            <div className="hero-image-dots" />
            <div className="hero-image-ring-outer" />
            <div className="hero-image-ring-inner" />
            <div className="hero-photo-frame">
              <div className="hero-photo-glow" />
              <ImageWithFallback
                src={PROFILE_PHOTO}
                alt="Vigneshwaran Rajasekar"
                className="hero-photo"
                fallbackClassName="hero-photo-placeholder"
                icon={<FaUserAlt className="icon" />}
              >
                <span>PROFILE PHOTO</span>
              </ImageWithFallback>
            </div>
          </motion.div>
        </div>
      </div>

      <a href="#about" className="hero-scroll">
        <span>Scroll Down</span>
        <div className="hero-scroll-line" />
      </a>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  )
}
