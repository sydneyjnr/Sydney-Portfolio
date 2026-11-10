const PROJECTS = [
  {
    title: 'Sydney – AI Companion',
    description: 'An interactive AI companion that chats naturally, searches the web for up-to-date answers, and remembers your conversations.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'MySQL', 'Auth.js', 'Groq', 'Tavily'],
    links: { live: 'https://sydney-six.vercel.app/' },
  },
  {
    title: 'Expense Tracker',
    description: 'A personal finance app for recording income and expenses, setting monthly budgets by category, and reviewing spending trends on a monthly dashboard, with email-verified accounts and currency preferences. Built with the DataThink intern team.',
    tags: ['Next.js', 'React', 'TypeScript', 'Chakra UI', 'Recharts', 'Prisma', 'MariaDB', 'NextAuth', 'Vitest'],
    links: {
      live: 'https://expense-tracker-ashy-phi-40.vercel.app/',
      github: 'https://github.com/femilabi/expense-tracker',
    },
  },
  {
    title: 'Git Visualizer',
    description: 'An interactive guide that shows where each Git command moves your changes, from your working files to staging, commits, the stash and the remote. Tap any command to see what it does.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    links: {
      live: 'https://sydney-s-git-next-app-practice.vercel.app/',
      github: 'https://github.com/sydneyjnr/Sydney-s-Git-Next-App-Practice',
    },
  },
  {
    title: 'US Housing permit analysis (1980–2010)',
    description: 'Explored U.S. housing trends from 1980–2010 through county-level and state-level visualizations, analyzing the housing boom, 2009 collapse, and early recovery, with a deep dive into Texas.',
    tags: ['Python', 'Polar', 'Lets-Plot', 'Marimo'],
    links: { live: '/projects/case_study_10.html' },
  },
  {
    title: 'Mapping the Global Spread of Afrobeat Artists Using Spotify Charts from 2023-2025',
    description: 'Discovering how Afrobeat music spread across different countries based on Spotify chart performance',
    tags: ['Python', 'Polar', 'Lets-Plot', 'Folium'],
    links: { live: '/projects/final_project.html' },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects" data-reveal>
      <div className="section-head">
        <span className="section-index" aria-hidden="true">02</span>
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Selected projects that showcase my skills and passion for building great software.
        </p>
      </div>

      <div className="projects__list">
        {PROJECTS.map((project) => (
          <article key={project.title} className="project">
            <h3 className="project__title">
              <a href={project.links.live} target="_blank" rel="noreferrer">
                {project.title}
              </a>
            </h3>
            <p className="project__description">{project.description}</p>
            <ul className="project__tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <div className="project__links">
              {project.links.github && (
                <a href={project.links.github} className="project__link" target="_blank" rel="noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  Source
                </a>
              )}
              <a href={project.links.live} className="project__link" target="_blank" rel="noreferrer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
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
