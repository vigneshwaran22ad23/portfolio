import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import emailjs from '@emailjs/browser'
import {
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaMapMarkedAlt, FaWhatsapp,
} from 'react-icons/fa'
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import {
  CALL_LINK, WHATSAPP_LINK, EMAIL, GMAIL_COMPOSE_LINK, PHONE_NUMBER_DISPLAY, GITHUB_URL, LINKEDIN_URL,
  EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY,
} from '../../siteConfig.js'

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Please enter your name'
    if (!form.email.trim()) {
      errs.email = 'Please enter your email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email'
    }
    if (!form.subject.trim()) errs.subject = 'Please enter a subject'
    if (!form.message.trim()) errs.message = 'Please enter your message'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length !== 0) return

    setSending(true)
    setSendError(false)

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: EMAIL,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setSubmitted(true)
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 6000)
      })
      .catch((err) => {
        console.error('EmailJS send failed:', err)
        setSendError(true)
      })
      .finally(() => setSending(false))
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null })
  }

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <span className="section-label">Get In Touch</span>
        <h2 className="section-title">Contact <span>Me</span></h2>
        <div className="section-divider" />

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="contact-info-item">
              <div className="contact-info-icon"><FaEnvelope /></div>
              <div>
                <span className="contact-info-label">Email</span>
                <span className="contact-info-value">
                  <a href={GMAIL_COMPOSE_LINK} target="_blank" rel="noreferrer" className="contact-info-link">{EMAIL}</a>
                </span>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon"><FaPhoneAlt /></div>
              <div>
                <span className="contact-info-label">Phone</span>
                <span className="contact-info-value">
                  <a href={CALL_LINK} className="contact-info-link">{PHONE_NUMBER_DISPLAY}</a>
                </span>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon"><FaMapMarkerAlt /></div>
              <div>
                <span className="contact-info-label">Location</span>
                <span className="contact-info-value">Coimbatore, Tamil Nadu, India</span>
              </div>
            </div>

            <div className="contact-socials">
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="contact-social-link" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="contact-social-link" aria-label="GitHub"><FaGithub /></a>
              <a href={CALL_LINK} className="contact-social-link" aria-label="Call"><FaPhoneAlt /></a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="contact-social-link" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>

            <div className="map-container">
              <FaMapMarkedAlt className="map-pin" style={{ color: 'var(--gold)' }} />
              <span className="map-label">COIMBATORE, TAMIL NADU</span>
            </div>
          </motion.div>

          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            {submitted ? (
              <div className="form-success">
                <FiCheckCircle className="form-success-icon" />
                <h3 style={{ fontFamily: 'var(--font-display)', marginBottom: '8px', color: 'var(--gold)' }}>
                  Message Sent
                </h3>
                <p>Thanks for reaching out — your message has been sent. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    className={`form-input ${errors.subject ? 'error' : ''}`}
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && <span className="form-error">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={handleChange}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                {sendError && (
                  <div className="form-error" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <FiAlertCircle />
                    <span>Something went wrong sending your message. Please try again, or email me directly at {EMAIL}.</span>
                  </div>
                )}

                <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center' }} disabled={sending}>
                  <span>{sending ? 'Sending...' : 'Send Message'}</span>
                  <FiSend />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
