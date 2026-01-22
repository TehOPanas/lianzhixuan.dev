import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            <div className="hero__container container">
                <div className="hero__content">
                    <div className="hero__badge animate-fade-in-up">
                        <span className="hero__badge-dot"></span>
                        <span>UBS Graduate Talent Program 2026</span>
                    </div>

                    <h1 className="hero__title animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        Hi, I'm <span className="hero__name">Lian Zhi Xuan</span>
                    </h1>

                    <p className="hero__subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <span className="mono">Full Stack Developer</span> &
                        <span className="mono"> CS Student @ NUS</span>
                        <span className="hero__location">📍 Based in Singapore</span>
                    </p>

                    <p className="hero__description animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        Building scalable systems and AI-powered solutions.
                        Passionate about distributed systems, database engineering, and crafting elegant code.
                    </p>

                    <div className="hero__actions animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <a href="#projects" className="btn btn-primary">
                            View My Work
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Get in Touch
                        </a>
                    </div>

                    <div className="hero__stats animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                        <div className="hero__stat">
                            <span className="hero__stat-value">2+</span>
                            <span className="hero__stat-label">Years Experience</span>
                        </div>
                        <div className="hero__stat-divider"></div>
                        <div className="hero__stat">
                            <span className="hero__stat-value">5+</span>
                            <span className="hero__stat-label">Projects Built</span>
                        </div>
                        <div className="hero__stat-divider"></div>
                        <div className="hero__stat">
                            <span className="hero__stat-value">First Class</span>
                            <span className="hero__stat-label">Honours @ NUS</span>
                        </div>
                    </div>
                </div>

                <div className="hero__visual animate-float">
                    <div className="hero__code-block">
                        <div className="hero__code-header">
                            <span className="hero__code-dot hero__code-dot--red"></span>
                            <span className="hero__code-dot hero__code-dot--yellow"></span>
                            <span className="hero__code-dot hero__code-dot--green"></span>
                        </div>
                        <pre className="hero__code">
                            <code>
                                {`const developer = {
  name: "Lian Zhi Xuan",
  role: "Full Stack Developer",
  skills: [
    "React", "Python",
    "Distributed Systems",
    "AI/ML Pipelines"
  ],
  passion: "Building the future"
};`}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>

            <div className="hero__scroll-indicator">
                <span>Scroll</span>
                <div className="hero__scroll-line"></div>
            </div>
        </section>
    );
}

export default Hero;
