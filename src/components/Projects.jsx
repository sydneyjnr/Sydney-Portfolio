const PROJECTS = [
  {
    title: 'Project Alpha',
    description: 'A full-stack application built with React and Node.js featuring real-time data processing and interactive dashboards.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    links: { github: '#', live: '#' },
  },
  {
    title: 'Platform Core',
    description: 'Enterprise-grade platform architecture with microservices, caching layers, and comprehensive monitoring.',
    tags: ['TypeScript', 'Docker', 'Redis'],
    links: { github: '#', live: '#' },
  },
  {
    title: 'Design System',
    description: 'Component library and design tokens for consistent UI across multiple applications with accessibility built-in.',
    tags: ['React', 'Storybook', 'CSS'],
    links: { github: '#', live: '#' },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="projects__reveal">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Selected projects that showcase my skills and passion for building great software.
        </p>
      </div>

      <div className="projects__grid">
        {PROJECTS.map((project, i) => (
          <article
            key={project.title}
            className="project-card"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="project-card__header">
              <div className="project-card__icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="var(--gold-soft)" strokeWidth="1.5" fill="none" />
                  <path d="M2 17l10 5 10-5" stroke="var(--gold-soft)" strokeWidth="1.5" fill="none" />
                  <path d="M2 12l10 5 10-5" stroke="var(--gold-soft)" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
              <h3 className="project-card__title">{project.title}</h3>
            </div>
            <p className="project-card__description">{project.description}</p>
            <div className="project-card__tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-card__tag">{tag}</span>
              ))}
            </div>
            <div className="project-card__links">
              <a href={project.links.github} className="project-card__link" target="_blank" rel="noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                Source
              </a>
              <a href={project.links.live} className="project-card__link" target="_blank" rel="noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
