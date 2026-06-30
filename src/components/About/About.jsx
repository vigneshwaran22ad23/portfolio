import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaUserAlt, FaUser, FaEnvelope, FaMapMarkerAlt, FaBriefcase,
  FaGraduationCap, FaCertificate
} from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'
import { projects } from '../Projects/projectsData.js'
import { certificates } from '../Certificates/certificatesData.js'
import { internships } from './internshipsData.js'
import { courses } from './coursesData.js'
import { skillCategories } from '../Skills/skillsData.jsx'
import ImageWithFallback from '../shared/ImageWithFallback.jsx'
import { EMAIL } from '../../siteConfig.js'

const PROFILE_PHOTO = `${import.meta.env.BASE_URL}images/profile/about.jpg`

const allSkillPcts = skillCategories.flatMap((cat) => cat.skills.map((s) => s.pct))
const avgSkillScore = allSkillPcts.length
  ? Math.round(allSkillPcts.reduce((a, b) => a + b, 0) / allSkillPcts.length)
  : 0

const stats = [
  { num: `${projects.length}+`, lbl: 'Projects Built' },
  { num: `${certificates.length}+`, lbl: 'Certifications' },
  { num: `${internships.length}+`, lbl: 'Internships' },
  { num: `${avgSkillScore}%`, lbl: 'Avg. Skill Score' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: 0.1 * i, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container">
        <motion.span className="section-label" variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={0}>
          Get To Know Me
        </motion.span>
        <motion.h2 className="section-title" variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={1}>
          About <span>Me</span>
        </motion.h2>
        <motion.div className="section-divider" variants={fadeUp} initial="hidden" animate={inView ? 'show' : 'hidden'} custom={1.5} />

        <div className="about-grid">
          <motion.div
            className="about-image-wrap"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="about-photo-frame">
              <div className="about-corner-tl" />
              <div className="about-corner-br" />
              <ImageWithFallback
                src={PROFILE_PHOTO}
                alt="Vigneshwaran Rajasekar"
                className="about-photo"
                fallbackClassName="about-photo-placeholder"
                icon={<FaUserAlt className="icon" />}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--white-muted)', letterSpacing: '2px' }}>
                  ABOUT PHOTO
                </span>
              </ImageWithFallback>
            </div>
            <div className="about-stats">
              {stats.map((s, i) => (
                <motion.div
                  className="about-stat"
                  key={s.lbl}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? 'show' : 'hidden'}
                  custom={i + 2}
                >
                  <span className="num">{s.num}</span>
                  <span className="lbl">{s.lbl}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            <p className="about-bio">
              I'm Vigneshwaran Rajasekar, a passionate Data Analyst and Machine Learning Engineer who enjoys transforming raw data into meaningful insights and building intelligent solutions. I love analyzing data, creating interactive dashboards, and developing machine learning models that solve real-world problems—turning data into decisions that make an impact. .
            </p>

            <div className="about-info-grid">
              <div className="about-info-item">
                <FaUser className="about-info-icon" />
                <div>
                  <span className="about-info-label">Name</span>
                  <span className="about-info-value">Vigneshwaran R</span>
                </div>
              </div>
              <div className="about-info-item">
                <FaEnvelope className="about-info-icon" />
                <div>
                  <span className="about-info-label">Email</span>
                  <span className="about-info-value">{EMAIL}</span>
                </div>
              </div>
              <div className="about-info-item">
                <FaMapMarkerAlt className="about-info-icon" />
                <div>
                  <span className="about-info-label">Location</span>
                  <span className="about-info-value">Coimbatore, Tamil Nadu, India</span>
                </div>
              </div>
              <div className="about-info-item">
                <FaBriefcase className="about-info-icon" />
                <div>
                  <span className="about-info-label">Job,Internship,Freelance</span>
                  <span className="about-info-value">Available</span>
                </div>
              </div>
            </div>

            <div className="about-edu-exp">
              <div className="about-card">
                <FaGraduationCap className="about-card-icon" />
                <h4>Education</h4>
                <p>B.Tech Artificial Intelligence And Data Science</p>
                <span>Tamilnadu College Of Engineering</span><br />
                <span>2022 – 2026</span>
              </div>
              <div className="about-card about-card-experience">
                <FaBriefcase className="about-card-icon" />
                <h4>Experience</h4>
                {internships.map((exp) => (
                  <div key={exp.id} className="about-exp-entry">
                    <p>{exp.role}</p>
                    <span>{exp.company}{exp.type ? ` · ${exp.type}` : ''}</span><br />
                    <span>{exp.duration}</span>
                    {exp.location && <><br /><span>{exp.location}</span></>}
                  </div>
                ))}
              </div>
              <div className="about-card about-card-courses">
                <FaCertificate className="about-card-icon" />
                <h4>Courses</h4>
                {courses.map((c) => (
                  <div key={c.id} className="about-exp-entry">
                    <p>{c.title}</p>
                    <span>{c.provider}</span>
                    {c.date && <><br /><span>{c.date}</span></>}
                  </div>
                ))}
              </div>
            </div>

            <a href={`${import.meta.env.BASE_URL}resume.pdf`} className="btn-gold" download>
              <FiDownload />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
