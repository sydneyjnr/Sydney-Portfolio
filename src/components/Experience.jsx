import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const EXPERIENCE = [
{
  role: 'Data Science & Web Development Intern',
  company: 'DataThink.io {Idaho, United States}',
  period: 'Aug 2026 - Present',
  description: 'Participating in a structured internship focused on web development, data science, self-development, and professional growth.',
  achievements: [
    'Developing practical skills in web development and data science through guided learning, assignments, and hands-on activities.',
    'Building experience with JavaScript, React, Python, data analysis, and data visualization.',
    'Strengthening problem-solving, communication, collaboration, and professional skills through mentorship and practical learning.'
  ],
},
  {
    role: "Junior Frontend Developer",
    company: "ROU Technology {Nigeria}",
    period: "Jan 2025 - Present",
    description:
      "Building responsive and interactive web applications while enhancing user experiences using modern web technologies.",
    achievements: [
      "Developed responsive and interactive web applications",
      "Applied modern frontend technologies to improve user experiences",
      "Collaborated with others to build and improve web projects",
    ],
  },
];

const prefersReduced = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

function TimelineDot({ active }) {
  return (
    <motion.div
      className="timeline__dot"
      animate={active ? { scale: 1, opacity: 1 } : { scale: 0.3, opacity: 0.4 }}
      transition={{ type: "spring", stiffness: 260, damping: 24, mass: 0.6 }}
    >
      {active && !prefersReduced && <span className="timeline__dot-glow" />}
    </motion.div>
  );
}

function TimelineCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-30% 0px -30% 0px",
  });

  return (
    <div className="timeline__item" ref={ref}>
      <div className="timeline__item-dot">
        <TimelineDot active={inView} />
      </div>
      <motion.div
        className="timeline__card"
        initial={prefersReduced ? false : { opacity: 0, x: -24, y: 12 }}
        animate={
          inView || prefersReduced
            ? { opacity: 1, x: 0, y: 0 }
            : { opacity: 0, x: -24, y: 12 }
        }
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
            <li key={a} className="timeline__card-achievement">
              {a}
            </li>
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
    offset: prefersReduced ? undefined : ["start end", "end start"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="section experience" ref={sectionRef}>
      <motion.div
        className="experience__reveal"
        initial={prefersReduced ? false : { opacity: 0, y: 30 }}
        whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
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
              style={{ scaleY: lineScale, transformOrigin: "top" }}
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
