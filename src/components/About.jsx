import './About.css';

function About() {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="about__grid">
                    <div className="about__content">
                        <h2 className="section-title">About Me</h2>
                        <p className="about__intro">
                            I'm a <strong>final-year Computer Science student</strong> at the National University of Singapore,
                            graduating in July 2026 with First Class Honours. I'm an <strong>ASEAN Scholar</strong> with a
                            deep passion for building robust, scalable software systems.
                        </p>

                        <p className="about__text">
                            My journey in tech has taken me from developing maritime management systems to building
                            AI-powered compliance platforms and data lakehouses. I thrive at the intersection of
                            <strong> distributed systems</strong>, <strong>database engineering</strong>, and <strong>AI/ML</strong>.
                        </p>

                        <p className="about__text">
                            Starting soon, I'll be joining <strong>UBS</strong> as part of their
                            <strong> Graduate Talent Program 2026</strong>, where I'm excited to apply
                            my skills in a global financial technology environment.
                        </p>

                        <div className="about__highlights">
                            <div className="about__highlight">
                                <div className="about__highlight-icon">🎓</div>
                                <div>
                                    <h4>Education</h4>
                                    <p>NUS Computer Science • First Class Honours</p>
                                </div>
                            </div>
                            <div className="about__highlight">
                                <div className="about__highlight-icon">🏆</div>
                                <div>
                                    <h4>Recognition</h4>
                                    <p>ASEAN Scholar</p>
                                </div>
                            </div>
                            <div className="about__highlight">
                                <div className="about__highlight-icon">🎯</div>
                                <div>
                                    <h4>Focus Areas</h4>
                                    <p>Parallel & Distributed Systems, Databases</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about__visual">
                        <div className="about__card about__card--education">
                            <div className="about__card-header">
                                <span className="about__card-icon">🏛️</span>
                                <span className="about__card-label">Education</span>
                            </div>
                            <h3>National University of Singapore</h3>
                            <p className="about__card-degree">Bachelor of Computing in Computer Science</p>
                            <p className="about__card-date">Aug 2022 - Jul 2026</p>
                            <div className="about__card-tags">
                                <span className="tag tag-accent">First Class Honours</span>
                                <span className="tag tag-accent">ASEAN Scholar</span>
                            </div>
                        </div>

                        <div className="about__card about__card--next">
                            <div className="about__card-header">
                                <span className="about__card-icon">🚀</span>
                                <span className="about__card-label">What's Next</span>
                            </div>
                            <h3>Incoming @ UBS</h3>
                            <p className="about__card-degree">Graduate Talent Program 2026</p>
                            <div className="about__card-tags">
                                <span className="tag tag-accent">Starting 2026</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
