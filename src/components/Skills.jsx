const SKILLS = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML/CSS'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'] },
  { category: 'Tools', items: ['Git', 'VS Code', 'Docker', 'Figma', 'Linux'] },
  { category: 'Other', items: ['System Design', 'Agile', 'Testing', 'CI/CD', 'Performance'] },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="skills__reveal">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          Technologies I work with daily to build modern, scalable applications.
        </p>
      </div>

      <div className="skills__grid">
        {SKILLS.map((group, i) => (
          <div
            key={group.category}
            className="skill-card"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <h3 className="skill-card__title">{group.category}</h3>
            <ul className="skill-card__list">
              {group.items.map((skill) => (
                <li key={skill} className="skill-card__item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
