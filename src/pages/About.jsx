import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './About.css';

const About = () => {
    const values = [
        { title: 'Integrity', desc: 'We act with honesty, transparency, and purpose.' },
        { title: 'Collaboration', desc: 'We work side-by-side with clients, building trust through shared goals and genuine partnership.' },
        { title: 'Innovation', desc: 'We harness data, AI, and technology to create smarter paths to progress.' },
        { title: 'Excellence', desc: 'We pursue high standards of thinking, execution, and measurable results.' },
        { title: 'Sustainability', desc: 'We design systems and capabilities that continue to deliver long after our work is complete.' },
    ];

    return (
        <main id="main-content" className="about-page">
            {/* Hero */}
            <section className="page-hero about-hero">
                <div className="container hero-grid">
                    <div className="hero-content">
                        <h1 className="text-balance">About Prospique</h1>
                        <p className="hero-subtitle text-lg">
                            At Prospique, we believe that progress looks different for every organization. We partner with ambitious start-ups, growing small businesses, and global enterprises alike—helping each strengthen performance, enhance efficiency, and grow with purpose.
                        </p>
                        <p className="hero-text">
                            We bring together strategy, operations, human capital, analytics, and technology to create solutions that are practical, transformative, and sustainable.
                        </p>
                    </div>
                    <div className="hero-visual">
                        <img src="/images/blue-abstract-4.png" alt="Vision" className="hero-img" />
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section className="section-lg who-section">
                <div className="container">
                    <div className="section-content-grid">
                        <div className="section-visual">
                            <img src="/images/blue-abstract-1.png" alt="Abstract" />
                        </div>
                        <div className="section-text">
                            <h2>Who We Are</h2>
                            <p className="text-lg">
                                Prospique is a business consulting firm built on a single principle: that meaningful progress happens when clarity meets action.
                            </p>
                            <p>
                                Our consultants combine strategic insight with genuine collaboration, working alongside leadership teams to solve complex challenges, uncover new opportunities, and deliver results that last.
                            </p>
                            <p>
                                We help organizations design better systems, align people around purpose, and build the confidence to move forward with clarity and momentum.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="section-lg mission-section">
                <div className="container">
                    <div className="mission-block">
                        <h2>Our Mission</h2>
                        <p className="mission-text text-lg">
                            To empower organizations of all sizes to achieve unique progress—transforming ideas into strategy, strategy into action, and action into lasting success.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="section-lg approach-section">
                <div className="container">
                    <div className="section-content-grid reverse">
                        <div className="section-text">
                            <h2>Our Approach</h2>
                            <p className="text-lg">
                                Every organization has its own story—its own challenges, culture, and ambitions.
                            </p>
                            <p>
                                We start by listening deeply, understanding context, and defining success in your terms. From there, we co-create strategies that balance vision and execution—grounded in data, informed by human understanding, and supported by technology.
                            </p>
                            <p>
                                Whether improving operations, scaling growth, or shaping long-term strategy, we focus on solutions that endure.
                            </p>
                        </div>
                        <div className="section-visual">
                            <img src="/images/blue-abstract-2.png" alt="Strategy Network" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-lg values-section">
                <div className="container">
                    <div className="section-header centered">
                        <h2>What We Stand For</h2>
                    </div>
                    <div className="values-grid">
                        {values.map((value, i) => (
                            <div key={i} className="value-card">
                                <h3>{value.title}</h3>
                                <p>{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Serve */}
            <section className="section-lg serve-section">
                <div className="container">
                    <div className="serve-content">
                        <div className="serve-visual">
                            <img src="/images/blue-abstract-3.png" alt="Innovation" />
                        </div>
                        <div className="serve-text">
                            <h2>Who We Serve</h2>
                            <p className="text-lg">
                                From early-stage ventures to established enterprises, Prospique's approach adapts to your scale, goals, and growth journey.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-lg cta-section">
                <div className="container">
                    <div className="cta-block">
                        <img src="/images/innovation-abstract.png" alt="" className="cta-abstract" />
                        <div className="cta-content">
                            <h2>Ready to Start?</h2>
                            <p className="text-lg">Let's discuss how we can help your organization achieve meaningful progress.</p>
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                Let's Talk <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
