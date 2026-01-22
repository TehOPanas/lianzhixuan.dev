import './Contact.css';

function Contact() {
    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div className="contact__wrapper">
                    <div className="contact__content">
                        <h2 className="section-title">Let's Connect</h2>
                        <p className="contact__intro">
                            I'm always open to discussing new opportunities, interesting projects,
                            or just having a chat about technology. Feel free to reach out!
                        </p>

                        <div className="contact__info">
                            <a href="mailto:lzx122603@gmail.com" className="contact__item">
                                <div className="contact__item-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <div className="contact__item-content">
                                    <span className="contact__item-label">Email</span>
                                    <span className="contact__item-value">lzx122603@gmail.com</span>
                                </div>
                            </a>

                            <a href="tel:+6588858351" className="contact__item">
                                <div className="contact__item-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <div className="contact__item-content">
                                    <span className="contact__item-label">Phone</span>
                                    <span className="contact__item-value">+65 8885 8351</span>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/lianzhixuan" target="_blank" rel="noopener noreferrer" className="contact__item">
                                <div className="contact__item-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect x="2" y="9" width="4" height="12"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </div>
                                <div className="contact__item-content">
                                    <span className="contact__item-label">LinkedIn</span>
                                    <span className="contact__item-value">linkedin.com/in/lianzhixuan</span>
                                </div>
                            </a>
                        </div>

                        <div className="contact__cta">
                            <a href="mailto:lzx122603@gmail.com" className="btn btn-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13"></line>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                </svg>
                                Send Me a Message
                            </a>
                        </div>
                    </div>

                    <div className="contact__visual">
                        <div className="contact__card">
                            <div className="contact__card-pattern"></div>
                            <div className="contact__card-content">
                                <div className="contact__avatar">LZX</div>
                                <h3>Lian Zhi Xuan</h3>
                                <p>Full Stack Developer</p>
                                <div className="contact__status">
                                    <span className="contact__status-dot"></span>
                                    <span>Open to opportunities</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
