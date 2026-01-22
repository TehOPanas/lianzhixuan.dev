import './Projects.css';

function Projects() {
    const projects = [
        {
            featured: true,
            title: 'FinAI: AI-Native Lakehouse',
            subtitle: 'Final Year Project',
            period: 'Aug 2025 - Present',
            description: 'Collaborated with a PhD researcher to design and construct a scalable AI-native lakehouse supporting structured, unstructured, and on-chain data. Features ETL/ELT pipelines, Delta Lake storage, and an LLM-enhanced query layer for natural language analytics.',
            highlights: [
                'Real-time and batch ingestion with Python, Kafka, Faust, Prefect',
                'Delta Lake–based storage with TimescaleDB, MinIO, and Hive',
                'LLM-enhanced query layer for natural language analytics',
                'Jupyter integration and lightweight dashboard for researchers'
            ],
            techStack: ['Python', 'Kafka', 'Delta Lake', 'TimescaleDB', 'MinIO', 'Hive'],
            links: {}
        },
        {
            featured: true,
            title: 'Regulo',
            subtitle: 'AI-Powered Regulatory Compliance Platform • Hackathon Project',
            period: 'Aug 2025',
            description: 'Built an AI-assisted system to determine whether product features require geo-specific compliance logic, leveraging a knowledge base of atomic regulatory facts for traceable reasoning.',
            highlights: [
                'Implemented Regulation & Terminology Repositories with vector-based retrieval',
                'Two-step LangGraph ReAct workflow for accuracy and human feedback',
                'Context-aware compliance evaluation with traceable reasoning'
            ],
            techStack: ['React', 'FastAPI', 'LangChain', 'LangGraph', 'Supabase'],
            links: { github: 'https://github.com/peanut-butter-jam/tiktok-tech-jam' }
        },
        {
            featured: false,
            title: 'PeerPrep',
            subtitle: 'Full Stack Developer',
            period: 'Aug 2024 - Nov 2024',
            description: 'Built a web application for peer-to-peer technical interview practice with real-time session handling.',
            highlights: [
                'Microservices architecture deployed on AWS (EKS, S3)',
                'CI/CD pipelines for automated deployment',
                'Real-time collaborative features'
            ],
            techStack: ['React', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS'],
            links: { github: 'https://github.com/CS3219-AY2425S1/cs3219-ay2425s1-project-g12' }
        },
        {
            featured: false,
            title: 'Orbital',
            subtitle: 'Software Engineering Project • Game Developer',
            period: 'May 2023 - Aug 2023',
            description: 'Designed and implemented core gameplay mechanics and player control system for a 2D platformer built from scratch.',
            highlights: [
                'Core gameplay mechanics and player control system',
                'Backend services for in-game state management',
                'Smooth gameplay flow implementation'
            ],
            techStack: ['Game Development', 'Backend Services'],
            links: {}
        }
    ];

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <div className="projects__header">
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        From AI-powered platforms to distributed data systems
                    </p>
                </div>

                <div className="projects__grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`projects__card card ${project.featured ? 'projects__card--featured' : ''}`}
                        >
                            <div className="projects__card-header">
                                <div className="projects__card-meta">
                                    {project.featured && <span className="projects__featured-badge">Featured</span>}
                                    <span className="projects__period mono">{project.period}</span>
                                </div>
                                <div className="projects__links">
                                    {project.links.github && (
                                        <a href={project.links.github} className="projects__link" aria-label="GitHub">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                            </svg>
                                        </a>
                                    )}
                                    {project.links.demo && (
                                        <a href={project.links.demo} className="projects__link" aria-label="Demo">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="projects__title">{project.title}</h3>
                            <p className="projects__subtitle">{project.subtitle}</p>
                            <p className="projects__description">{project.description}</p>

                            <ul className="projects__highlights">
                                {project.highlights.map((highlight, i) => (
                                    <li key={i}>{highlight}</li>
                                ))}
                            </ul>

                            <div className="projects__tech">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="tag tag-accent">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
