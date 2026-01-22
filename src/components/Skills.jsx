import './Skills.css';

function Skills() {
    const skillCategories = [
        {
            title: 'Programming Languages',
            icon: '💻',
            skills: ['Java', 'Python', 'C++', 'C#', 'JavaScript', 'SQL']
        },
        {
            title: 'Frameworks & Libraries',
            icon: '⚡',
            skills: ['.NET Core', 'React', 'Vue.js', 'Flask', 'FastAPI', 'Express', 'Jinja']
        },
        {
            title: 'Data & Databases',
            icon: '🗄️',
            skills: ['PostgreSQL', 'MongoDB', 'SQL Server', 'TimescaleDB', 'Delta Lake', 'SQLAlchemy', 'Hive']
        },
        {
            title: 'DevOps & Cloud',
            icon: '☁️',
            skills: ['Docker', 'Kubernetes', 'AWS (EKS, S3)', 'CI/CD Pipelines', 'MinIO']
        },
        {
            title: 'AI & Data Engineering',
            icon: '🤖',
            skills: ['LangChain', 'LangGraph', 'Kafka', 'Ray', 'Prefect', 'ETL Pipelines']
        }
    ];

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <div className="skills__header">
                    <h2 className="section-title">Skills & Technologies</h2>
                    <p className="section-subtitle">
                        A comprehensive toolkit built through real-world projects and continuous learning
                    </p>
                </div>

                <div className="skills__grid">
                    {skillCategories.map((category, index) => (
                        <div
                            key={category.title}
                            className="skills__category card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="skills__category-header">
                                <span className="skills__category-icon">{category.icon}</span>
                                <h3 className="skills__category-title">{category.title}</h3>
                            </div>
                            <div className="skills__list">
                                {category.skills.map((skill) => (
                                    <span key={skill} className="skills__item">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skills__languages">
                    <h3 className="skills__languages-title">Languages</h3>
                    <div className="skills__languages-list">
                        <div className="skills__language">
                            <span className="skills__language-name">English</span>
                            <span className="skills__language-level">Native</span>
                        </div>
                        <div className="skills__language">
                            <span className="skills__language-name">Chinese</span>
                            <span className="skills__language-level">Native</span>
                        </div>
                        <div className="skills__language">
                            <span className="skills__language-name">Malay</span>
                            <span className="skills__language-level">Professional</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
