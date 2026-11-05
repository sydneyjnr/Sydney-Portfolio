import GridBackground from "./GridBackground";
import heroImg from "../assets/hero.png";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ block: "start" });
  };

  return (
    <section id="home" className="hero">
      <GridBackground />

      <div className="hero__content">
        <div className="hero__text">
          <p className="hero__greeting">&lt;Hello World /&gt;</p>
          <h1 className="hero__name">
            I'm{" "}
            <span className="hero__name-highlight">Sydney</span>
          </h1>
          <p className="hero__title">
            <span className="hero__title-part">Web Developer</span>{" "}
            <span className="hero__title-part hero__title-divider">|</span>{" "}
            <span className="hero__title-part">Exploring AI & Data Science</span>
          </p>
          <p className="hero__description">
            I build responsive, user-focused web applications with modern
            technologies. Recently, I've started building AI-powered apps, like
            a chatbot that can search the web for up-to-date answers. I also
            enjoy exploring data to uncover insights and solve real-world
            problems. I'm passionate about clean code, intuitive user
            experiences, and continuous learning.
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
          <img
            src={heroImg}
            alt="Sydney"
            className="hero__photo"
            width="814"
            height="1071"
          />
        </div>
      </div>
    </section>
  );
}
