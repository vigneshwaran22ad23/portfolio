import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skillCategories } from './skillsData.jsx'

function SkillBar({ name, pct, inView, delay }) {
  return (
    <div className="skill-item">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{pct}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section skills" id="skills" ref={ref}>
      <div className="container">
        <span className="section-label">My Expertise</span>
        <h2 className="section-title">Skills</h2>
        <div className="section-divider" />

        <div className="skills-grid">
          {skillCategories.map((cat, ci) => (
            <motion.div
              className="skill-category"
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.08, ease: 'easeOut' }}
            >
              <div className="skill-cat-header">
                <div className="skill-cat-icon">{cat.icon}</div>
                <h3>{cat.title}</h3>
              </div>
              {cat.skills.map((s, si) => (
                <SkillBar key={s.name} {...s} inView={inView} delay={0.2 + si * 0.08} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
