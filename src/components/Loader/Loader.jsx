import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      className="loader-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="loader-logo">VR</div>
      <div className="loader-bar-track">
        <div className="loader-bar-fill" />
      </div>
      <div className="loader-text">Loading Portfolio</div>
    </motion.div>
  )
}
