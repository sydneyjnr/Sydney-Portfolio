const SKILLS = [
  {
    category: "Frontend",
    items: ["React", "JavaScript", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "TypeScript",
      "Prisma",
      "MySQL",
      "Google OAuth (Auth.js)",
      "AI integration (Groq, Tavily)",
      "Vercel",
    ],
  },
  {
    category: "Data Science",
    items: ["Python", "Pandas", "Polars", "Plotly", "Lets-Plot", "Marimo"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-head index-row" data-reveal>
        <span className="section-index" aria-hidden="true">01</span>
        <div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies I work with daily to build modern, scalable applications.
          </p>
        </div>
      </div>

      <div className="index-row">
        <div className="index-content skills__grid" data-reveal>
          {SKILLS.map((group) => (
            <div key={group.category} className="skill-group">
              <h3 className="skill-group__title">{group.category}</h3>
              <ul className="skill-group__list">
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
