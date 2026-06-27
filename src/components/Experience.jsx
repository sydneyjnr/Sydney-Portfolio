import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const EXPERIENCE = [
  {
    role: 'Senior Software Engineer',
    company: 'Tech Company',
    period: '2023 - Present',
    description: 'Led development of distributed systems serving 1M+ users. Architected microservices and improved system reliability by 99.9%.',
    achievements: ['Architected microservices infrastructure', 'Reduced latency by 40%', 'Mentored junior developers'],
  },
  {
    role: 'Software Engineer',
    company: 'Startup Inc.',
    period: '2021 - 2023',
    description: 'Built and shipped customer-facing features using React and Node.js. Collaborated across teams to deliver product roadmap.',
    achievements: ['Shipped 20+ features', 'Built CI/CD pipeline', 'Reduced build times by 60%'],
  },
  {
    role: 'Junior Developer',
    company: 'Agency Co.',
    period: '2019 - 2021',
    description: 'Developed responsive web applications for diverse clients. Gained expertise in modern frontend technologies.',
    achievements: ['Delivered 30+ client projects', 'Introduced testing practices', 'Won internal hackathon'],
  },
];

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function TimelineDot({ active }) {
  return (
    <motion.div
      className="timeline__dot"
      animate={active ? { scale: 1, opacity: 1 } : { scale: 0.3, opacity: 0.4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24, mass: 0.6 }}
    >
      {active && !prefersReduced && (
        <span className="timeline__dot-glow" />
      )}
    </motion.div>
  );
}

function TimelineCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-30% 0px -30% 0px',
  });

  return (
    <div className="timeline__item" ref={ref}>
      <div className="timeline__item-dot">
        <TimelineDot active={inView} />
      </div>
      <motion.div
        className="timeline__card"
        initial={prefersReduced ? false : { opacity: 0, x: -24, y: 12 }}
        animate={inView || prefersReduced ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -24, y: 12 }}
        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="timeline__card-meta">
          <span className="timeline__card-period">{item.period}</span>
        </div>
        <h3 className="timeline__card-role">{item.role}</h3>
        <p className="timeline__card-company">{item.company}</p>
        <p className="timeline__card-description">{item.description}</p>
        <ul className="timeline__card-achievements">
          {item.achievements.map((a) => (
            <li key={a} className="timeline__card-achievement">{a}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: prefersReduced ? undefined : sectionRef,
    offset: prefersReduced ? undefined : ['start end', 'end start'],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="section experience" ref={sectionRef}>
      <motion.div
        className="experience__reveal"
        initial={prefersReduced ? false : { opacity: 0, y: 30 }}
        whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          My professional journey building software that makes an impact.
        </p>
      </motion.div>

      <div className="timeline">
        <div className="timeline__track" aria-hidden="true">
          <div className="timeline__track-bg" />
          {!prefersReduced && (
            <motion.div
              className="timeline__track-progress"
              style={{ scaleY: lineScale, transformOrigin: 'top' }}
            />
          )}
        </div>

        <div className="timeline__items">
          {EXPERIENCE.map((item) => (
            <TimelineCard key={item.role + item.company} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
