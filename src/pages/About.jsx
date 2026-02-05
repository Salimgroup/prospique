import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Lightbulb, Award, Shield } from 'lucide-react';
import './About.css';

const About = () => {
    const values = [
        { icon: Heart, title: 'Integrity', desc: 'We act with honesty, transparency, and purpose.' },
        { icon: Users, title: 'Collaboration', desc: 'We work side-by-side with clients, building trust through shared goals and genuine partnership.' },
        { icon: Lightbulb, title: 'Innovation', desc: 'We harness data, AI, and technology to create smarter paths to progress.' },
        { icon: Award, title: 'Excellence', desc: 'We pursue high standards of thinking, execution, and measurable results.' },
        { icon: Shield, title: 'Sustainability', desc: 'We design systems and capabilities that continue to deliver long after our work is complete.' },
    ];

    const industries = [
        'Professional Services', 'Technology & SaaS', 'Financial Services',
        'Healthcare & Life Sciences', 'Education', 'Logistics & Supply Chain',
        'Retail & Consumer Goods', 'Food & Beverage', 'Entertainment, Media & Creative Industries',
        'Public Sector', 'Mission-Driven Nonprofits'
    ];

    return (
        <main className="about-page">
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <span className="subheading">About Prospique</span>
                    <h1>Empowering Unique Progress</h1>
                    <p className="hero-desc">
                        Business Consulting for Growth and Innovation.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="section mission">
                <div className="container">
                    <div className="mission-content">
                        <p className="mission-statement">
                            At Prospique, we believe that progress looks different for every organization. We partner with ambitious start-ups, growing small businesses, and global enterprises alike—helping each strengthen performance, enhance efficiency, and grow with purpose.
                        </p>
                    </div>
                    <div className="mission-vision">
                        <h2>Our Mission</h2>
                        <p>
                            To empower organizations of all sizes to achieve unique progress—transforming ideas into strategy, strategy into action, and action into lasting success.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="section approach">
                <div className="container">
                    <div className="approach-grid">
                        <div className="approach-content">
                            <span className="subheading">Our Approach</span>
                            <h2>How We Work</h2>
                            <p>
                                Every organization has its own story—its own challenges, culture, and ambitions. We start by listening deeply, understanding context, and defining success in your terms.
                            </p>
                            <p>
                                From there, we co-create strategies that balance vision and execution—grounded in data, informed by human understanding, and supported by technology.
                            </p>
                        </div>
                        <div className="approach-visual">
                            <div className="visual-element"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section values">
                <div className="container">
                    <div className="section-header">
                        <span className="subheading">What We Stand For</span>
                        <h2>Our Core Values</h2>
                    </div>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="value-card card">
                                <div className="value-icon-wrap">
                                    <value.icon size={24} />
                                </div>
                                <h3>{value.title}</h3>
                                <p>{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="section industries-section">
                <div className="container">
                    <div className="section-header">
                        <span className="subheading">Industries We Support</span>
                        <h2>Cross-Sector Experience</h2>
                        <p>
                            Trusted by organizations across technology, healthcare, finance, education, and other industries.
                        </p>
                    </div>
                    <div className="industries-list">
                        {industries.map((industry, index) => (
                            <div key={index} className="industry-item">
                                {industry}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section why-us">
                <div className="container">
                    <div className="why-grid">
                        <div className="why-content">
                            <span className="subheading">Why Clients Choose Prospique</span>
                            <h2>Boutique Agility, Enterprise Credibility</h2>
                            <ul className="why-list">
                                <li>
                                    <span className="bullet"></span>
                                    <span>Integrated expertise combining strategic depth with human connection</span>
                                </li>
                                <li>
                                    <span className="bullet"></span>
                                    <span>Consultants with large-firm advisory experience and modern agility</span>
                                </li>
                                <li>
                                    <span className="bullet"></span>
                                    <span>Culturally fluent, human-centered approach</span>
                                </li>
                                <li>
                                    <span className="bullet"></span>
                                    <span>Progress as a continuous discipline, not a single milestone</span>
                                </li>
                            </ul>
                        </div>
                        <div className="why-visual">
                            <div className="visual-graphic"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-banner">
                        <h2>Let's Shape What's Next Together</h2>
                        <p>Progress begins with a conversation.</p>
                        <Link to="/contact" className="btn">
                            Contact Our Team <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
