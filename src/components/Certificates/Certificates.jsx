import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCheckCircle, FaCalendarAlt } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import { certificates } from './certificatesData.js'
import CertModal from './CertModal.jsx'

export default function Certificates() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selected, setSelected] = useState(null)

  return (
    <section className="section certificates" id="certificates" ref={ref}>
      <div className="container">
        <span className="section-label">My Achievements</span>
        <h2 className="section-title">Certificates</h2>
        <div className="section-divider" />

        <div className="certs-grid">
          {certificates.map((c, i) => (
            <motion.div
              className="cert-card"
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
              onClick={() => setSelected(c)}
            >
              <div className="cert-badge">
                <FaCheckCircle />
              </div>
              <span className="cert-issuer-name" style={{ color: c.issuerColor === '#737373' ? 'var(--gold)' : c.issuerColor }}>
                {c.issuer}
              </span>
              <h3 className="cert-title">{c.title}</h3>
              <div className="cert-date">
                <FaCalendarAlt /> {c.date}
              </div>
              <button className="cert-verify-btn">
                Verify Certificate <FiArrowRight />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <CertModal cert={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
