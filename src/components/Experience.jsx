const EXPERIENCE = [
{
  role: 'Data Science & Web Development Intern',
  company: 'DataThink.io {Idaho, United States}',
  period: 'Aug 2026 - Present',
  description: 'Participating in a structured internship focused on web development, data science, self-development, and professional growth.',
  achievements: [
    'Developing practical skills in web development and data science through guided learning, assignments, and hands-on activities.',
    'Building experience with JavaScript, TypeScript, React, Next.js, Prisma, MySQL, Chakra UI, Python, data analysis, and data visualization.',
    'Strengthening problem-solving, communication, collaboration, and professional skills through mentorship and practical learning.'
  ],
},
];

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section-head index-row" data-reveal>
        <span className="section-index" aria-hidden="true">03</span>
        <div>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey building software that makes an impact.
          </p>
        </div>
      </div>

      <div className="experience__list">
        {EXPERIENCE.map((item) => (
          <article key={item.role + item.company} className="job index-row" data-reveal>
            <p className={`job__period${item.period.endsWith('Present') ? ' job__period--current' : ''}`}>
              {item.period}
            </p>
            <div className="index-content job__body">
              <div>
                <h3 className="job__role">{item.role}</h3>
                <p className="job__company">{item.company}</p>
                <p className="job__description">{item.description}</p>
              </div>
              <ul className="job__achievements">
                {item.achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
