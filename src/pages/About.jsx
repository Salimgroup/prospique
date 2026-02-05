import { Link } from 'react-router-dom';
import { ArrowRight, Users, Globe, Target, Award } from 'lucide-react';
import './About.css';

const About = () => {
    const stats = [
        { value: '25+', label: 'Years of Impact' },
        { value: '500+', label: 'Global Clients' },
        { value: '8,000+', label: 'Professionals' },
        { value: '35', label: 'Countries' },
    ];

    const values = [
        { icon: Target, title: 'Outcomes First', desc: 'We measure success by the value we create for clients, not by the hours we bill or the decks we produce.' },
        { icon: Users, title: 'One Team', desc: 'We bring the best of our firm to every engagement—no silos, no egos, just collective expertise focused on your success.' },
        { icon: Globe, title: 'Global Reach, Local Depth', desc: 'We combine worldwide perspective with deep understanding of local markets, cultures, and regulatory environments.' },
        { icon: Award, title: 'Integrity Always', desc: 'We tell clients what they need to hear, not what they want to hear. Trust is the foundation of everything we do.' },
    ];

    const leadership = [
        { name: 'Alexandra Chen', role: 'Chief Executive Officer' },
        { name: 'Marcus Williams', role: 'Managing Partner, Americas' },
        { name: 'Sarah Patel', role: 'Managing Partner, EMEA' },
        { name: 'David Kim', role: 'Managing Partner, Asia Pacific' },
    ];

    return (
        <main id="main-content" className="about-page">
            {/* Hero */}
            <section className="page-hero about-hero">
                <div className="container">
                    <span className="overline">About Prospique</span>
                    <h1 className="text-balance">We exist to help organizations achieve what matters most</h1>
                    <p className="hero-subtitle text-lg">
                        For over two decades, we've partnered with leaders to solve their most critical challenges and capture their biggest opportunities.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="section stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, i) => (
                            <div key={i} className="stat-item">
                                <span className="stat-value">{stat.value}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="section-lg story-section">
                <div className="container">
                    <div className="story-content">
                        <div className="story-intro">
                            <span className="overline">Our Story</span>
                            <h2>Built Different</h2>
                        </div>
                        <div className="story-text">
                            <p className="text-lg">
                                Prospique was founded on a simple conviction: the best consulting happens when strategists, technologists, and operators work as one integrated team.
                            </p>
                            <p>
                                We rejected the traditional model of siloed practices and isolated experts. Instead, we built a firm where collaboration is the default, where technology enables rather than complicates, and where every engagement is designed around outcomes—not deliverables.
                            </p>
                            <p>
                                Today, we serve some of the world's most ambitious organizations across every major industry. Our work spans strategy through execution, and our teams embed with clients to drive lasting change—not just recommendations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-lg values-section">
                <div className="container">
                    <div className="section-header">
                        <span className="overline">Our Values</span>
                        <h2>Principles That Guide Us</h2>
                    </div>
                    <div className="grid grid-2 values-grid">
                        {values.map((value, i) => (
                            <div key={i} className="value-card">
                                <div className="value-icon">
                                    <value.icon size={24} strokeWidth={1.5} />
                                </div>
                                <div className="value-content">
                                    <h3>{value.title}</h3>
                                    <p>{value.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="section-lg leadership-section">
                <div className="container">
                    <div className="section-header">
                        <span className="overline">Leadership</span>
                        <h2>A Team of Practitioners</h2>
                        <p className="text-lg">Our leaders have walked in our clients' shoes—as executives, entrepreneurs, and operators.</p>
                    </div>
                    <div className="grid grid-4 leadership-grid">
                        {leadership.map((leader, i) => (
                            <div key={i} className="leader-card">
                                <div className="leader-photo">
                                    <img src="/images/about-abstract.png" alt={leader.name} />
                                </div>
                                <h4>{leader.name}</h4>
                                <p>{leader.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Careers CTA */}
            <section className="section-lg careers-section">
                <div className="container">
                    <div className="careers-block">
                        <div className="careers-content">
                            <span className="overline">Join Us</span>
                            <h2>Build Your Career at Prospique</h2>
                            <p className="text-lg">
                                We're always looking for exceptional people who want to solve the world's toughest problems alongside talented colleagues.
                            </p>
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                View Open Roles <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
