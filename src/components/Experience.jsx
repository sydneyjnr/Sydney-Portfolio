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

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="experience__reveal">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          My professional journey building software that makes an impact.
        </p>
      </div>

      <div className="experience__timeline">
        {EXPERIENCE.map((item, i) => (
          <div
            key={item.role + item.company}
            className="experience-card"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="experience-card__dot" aria-hidden="true" />
            {i < EXPERIENCE.length - 1 && <div className="experience-card__line" aria-hidden="true" />}
            <div className="experience-card__content">
              <div className="experience-card__meta">
                <span className="experience-card__period">{item.period}</span>
              </div>
              <h3 className="experience-card__role">{item.role}</h3>
              <p className="experience-card__company">{item.company}</p>
              <p className="experience-card__description">{item.description}</p>
              <ul className="experience-card__achievements">
                {item.achievements.map((a) => (
                  <li key={a} className="experience-card__achievement">{a}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
