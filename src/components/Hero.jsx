import heroImg from "../assets/hero.png";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__orb" />
        <div className="hero__circuit">
          <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
            <path
              d="M0 150h60l30-30 30 30h180"
              stroke="var(--gold-soft)"
              strokeWidth="0.5"
              opacity="0.15"
            />
            <path
              d="M0 180h40l20-20 20 20h220"
              stroke="var(--gold-soft)"
              strokeWidth="0.5"
              opacity="0.1"
            />
            <path
              d="M0 120h50l25-25 25 25h200"
              stroke="var(--gold-soft)"
              strokeWidth="0.5"
              opacity="0.1"
            />
            <circle
              cx="90"
              cy="150"
              r="2"
              fill="var(--gold-soft)"
              opacity="0.3"
            />
            <circle
              cx="150"
              cy="150"
              r="2"
              fill="var(--gold-soft)"
              opacity="0.3"
            />
            <circle
              cx="210"
              cy="150"
              r="2"
              fill="var(--gold-soft)"
              opacity="0.3"
            />
            <circle
              cx="60"
              cy="180"
              r="1.5"
              fill="var(--gold-soft)"
              opacity="0.2"
            />
            <circle
              cx="100"
              cy="160"
              r="1.5"
              fill="var(--gold-soft)"
              opacity="0.2"
            />
            <circle
              cx="50"
              cy="120"
              r="1.5"
              fill="var(--gold-soft)"
              opacity="0.2"
            />
            <circle
              cx="100"
              cy="95"
              r="1.5"
              fill="var(--gold-soft)"
              opacity="0.2"
            />
          </svg>
        </div>
        <div className="hero__code" aria-hidden="true">
          {["{ }", "< />", "() =>", ">>>_", "/* */"].map((s, i) => (
            <span
              key={i}
              className="hero__code-tag"
              style={{ animationDelay: `${i * 0.8}s` }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="hero__content">
        <div className="hero__text">
          <p className="hero__greeting">&lt;Hello World /&gt;</p>
          <h1 className="hero__name">
            I'm{" "}
            <span className="hero__name-highlight">Sydney</span>
          </h1>
          <p className="hero__title">
            Web Frontend Developer | Data Science Enthusiast
          </p>
          <p className="hero__description">
            I build responsive, user-focused web applications with modern
            frontend technologies while exploring the power of data to uncover
            insights and solve real-world problems. Passionate about clean code,
            intuitive user experiences, and continuous learning..
          </p>
          <div className="hero__actions">
            <button
              className="btn btn--primary"
              onClick={() => scrollTo("projects")}
            >
              View Projects
            </button>
            <button
              className="btn btn--outline"
              onClick={() => scrollTo("contact")}
            >
              Get In Touch
            </button>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__photo-frame">
            <img src={heroImg} alt="Sydney" className="hero__photo" />
          </div>
        </div>
      </div>
    </section>
  );
}
