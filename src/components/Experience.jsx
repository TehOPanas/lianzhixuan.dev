import './Experience.css';

function Experience() {
    const experiences = [
        {
            type: 'internship',
            title: 'Software Developer Intern',
            company: 'The Software Practice',
            period: 'Jan 2025 - Oct 2025',
            description: [
                'Resolved 50+ client-reported bugs and incident tickets, improving overall system reliability and user satisfaction',
                'Revived a deprecated automated testing framework by fixing database seeder tools (30% more efficient) and refactoring 2,000+ end-to-end test cases to follow the Page Object Model, making them 25% faster and easier to maintain',
            ],
            techStack: ['C#', '.NET Core', 'Vue.js', 'SQL Server']
        },
        {
            type: 'work',
            title: 'Junior Full Stack Developer',
            company: 'All Round Square',
            period: 'Jan 2024 - Aug 2024',
            description: [
                'Designed and implemented the Assessment Module to track and organise seafarer qualifications',
                'Rebuilt the Payroll Module to handle complex maritime salary calculations and automate report outputs',
                'Refactored legacy backend code and redesigned database structures, improving performance by 35% and reducing query redundancy',
            ],
            techStack: ['Flask', 'Jinja', 'SQLAlchemy', 'PostgreSQL']
        },
        {
            type: 'teaching',
            title: 'Teaching Assistant',
            company: 'School of Computing, NUS',
            period: 'Aug 2023 - Nov 2024',
            description: [
                'Assisted in Programming Methodology I & II (Java OOP) and Introduction to AI/ML courses, classes of 8–15 students',
                'Graded assignments and provided tutorial guidance; all students showed measurable improvement, averaging 70th percentile',
            ],
            techStack: ['Java', 'Python', 'AI/ML']
        },
        {
            type: 'leadership',
            title: 'Head',
            company: 'KEWEB',
            period: 'May 2023 - Apr 2024',
            description: [
                'Led 15-person team to develop and manage hostel websites, handling venue bookings, room allocations, and admin systems for 400+ residents',
                'Maintained and updated hostel landing page and administrative platform',
            ],
            techStack: ['Web Development', 'Team Leadership']
        }
    ];

    const getTypeIcon = (type) => {
        switch (type) {
            case 'internship': return '💼';
            case 'work': return '🏢';
            case 'teaching': return '📚';
            case 'leadership': return '👥';
            default: return '💼';
        }
    };

    const getTypeLabel = (type) => {
        switch (type) {
            case 'internship': return 'Internship';
            case 'work': return 'Full-time';
            case 'teaching': return 'Teaching';
            case 'leadership': return 'Leadership';
            default: return type;
        }
    };

    return (
        <section id="experience" className="experience section">
            <div className="container">
                <div className="experience__header">
                    <h2 className="section-title">Experience</h2>
                    <p className="section-subtitle">
                        From startups to academia — building real-world impact through code
                    </p>
                </div>

                <div className="experience__timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience__item">
                            <div className="experience__marker">
                                <div className="experience__dot"></div>
                                {index < experiences.length - 1 && <div className="experience__line"></div>}
                            </div>

                            <div className="experience__card card">
                                <div className="experience__card-header">
                                    <div className="experience__type">
                                        <span className="experience__type-icon">{getTypeIcon(exp.type)}</span>
                                        <span className="experience__type-label">{getTypeLabel(exp.type)}</span>
                                    </div>
                                    <span className="experience__period mono">{exp.period}</span>
                                </div>

                                <h3 className="experience__title">{exp.title}</h3>
                                <p className="experience__company">{exp.company}</p>

                                <ul className="experience__description">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>

                                <div className="experience__tech">
                                    {exp.techStack.map((tech) => (
                                        <span key={tech} className="tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
