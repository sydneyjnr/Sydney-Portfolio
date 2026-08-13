const PROJECTS = [
  {
    title: 'Blacc Farms',
    description: 'Collaborated with Meshack Amadi on Blacc Farms, contributing to its responsive web development and user experience.',
    tags: ['React', 'Tailwind CSS'],
    links: { github: '#', live: 'https://meshackamadi.github.io/blacc-farms/' },
  },
  {
    title: 'US Housing permit analysis (1980–2010)',
    description: 'Explored U.S. housing trends from 1980–2010 through county-level and state-level visualizations, analyzing the housing boom, 2009 collapse, and early recovery, with a deep dive into Texas.',
    tags: ['Python', 'Polar', 'Lets-Plot', 'Marimo'],
    links: { github: '#', live: '/projects/case_study_10.html' },
  },
  {
    title: 'Mapping the Global Spread of Afrobeat Artists Using Spotify Charts from 2023-2025',
    description: 'Discovering how Afrobeat music spread across different countries based on Spotify chart performance',
    tags: ['Python', 'Polar', 'Lets-Plot', 'Folium'],
    links: { github: '#', live: '/projects/final_project.html' },
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
