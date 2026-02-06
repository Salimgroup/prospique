import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Home.css';

const Home = () => {
    const services = [
        { title: 'Core Business Operations', link: '/services/core-business-operations' },
        { title: 'Enterprise Technology & Performance', link: '/services/enterprise-technology' },
        { title: 'Human Capital Consulting', link: '/services/human-capital' },
        { title: 'Strategy & Analytics', link: '/services/strategy-analytics' },
        { title: 'Customer & Market Strategy', link: '/services/customer-market' },
    ];

    const industries = [
        'Professional Services', 'Technology & SaaS', 'Financial Services',
        'Healthcare & Life Sciences', 'Education', 'Logistics & Supply Chain',
        'Retail & Consumer Goods', 'Food & Beverage',
        'Entertainment, Media & Creative Industries', 'Public Sector', 'Mission-Driven Nonprofits'
    ];

    const perspectives = [
        { title: 'Strategy with Purpose', desc: 'Align vision and execution for measurable impact.' },
        { title: 'Technology That Enables', desc: 'Use innovation to strengthen efficiency and performance.' },
        { title: 'People Who Lead', desc: 'Empower teams to drive meaningful, lasting change.' },
    ];

    const whyChoose = [
        { title: 'Collaborative Approach', desc: 'Solutions designed with you, not for you.' },
        { title: 'Integrated Expertise', desc: 'Strategy, technology, and human capital connected for success.' },
        { title: 'Data-Driven Clarity', desc: 'Insights that power smarter, faster decisions.' },
        { title: 'Sustainable Solutions', desc: 'Foundations that last beyond the engagement.' },
    ];

    return (
        <main id="main-content" className="home-page">
            {/* Hero */}
            <section className="hero">
                <div className="hero-bg">
                    <div className="hero-gradient"></div>
                    <div className="hero-mesh"></div>
                    <img src="/images/hero-abstract.png" alt="" className="hero-abstract-img" />
                </div>
                <div className="container hero-content">
                    <h1 className="display text-balance animate-fade-in-up">
                        Empowering Unique Progress
                    </h1>
                    <p className="hero-subtitle text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Business consulting that unites strategy, technology, and human insight to help organizations work smarter, grow stronger, and achieve meaningful results.
                    </p>
                    <div className="hero-ctas animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <Link to="/services" className="btn btn-primary btn-lg">
                            Discover How We Work
                        </Link>
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section className="section-lg who-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Trusted Partners in Strategy, Transformation, and Growth</h2>
                    </div>
                    <div className="who-content">
                        <p className="text-lg">
                            Prospique is a consulting firm helping organizations navigate change, improve performance, and scale with purpose. Our consultants bring deep expertise across industries—from professional services and technology to healthcare, education, and the public sector—combining strategic insight, operational excellence, and technological innovation.
                        </p>
                        <p>
                            We connect people, processes, and data to build stronger organizations that can adapt, evolve, and thrive.
                        </p>
                        <Link to="/about" className="btn btn-outline">
                            Learn More About Prospique
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="section-lg services-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Comprehensive Capabilities for Sustainable Growth</h2>
                        <p className="text-lg">Our Core Services</p>
                    </div>
                    <div className="services-list">
                        {services.map((service, i) => (
                            <Link key={i} to={service.link} className="service-item">
                                <span>{service.title}</span>
                                <ArrowRight size={20} />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="section-lg industries-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Experience Across Sectors and Scales</h2>
                        <p className="text-lg">Industries We Support</p>
                    </div>
                    <p className="industries-intro">
                        Prospique works with organizations of every size and mission, applying proven frameworks with the flexibility to fit unique goals.
                    </p>
                    <div className="industries-grid">
                        {industries.map((industry, i) => (
                            <div key={i} className="industry-tile">
                                <span>{industry}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Perspective */}
            <section className="section-lg perspective-section">
                <div className="container">
                    <div className="perspective-content">
                        <div className="perspective-header">
                            <h2>Our Perspective</h2>
                            <p className="perspective-tagline"><em>Insights That Shape Smarter Businesses</em></p>
                            <p className="perspective-intro">
                                Every engagement begins with one simple belief—progress comes from clarity. Prospique's perspective combines data, creativity, and discipline to help organizations make better decisions, embrace innovation, and sustain growth.
                            </p>
                        </div>
                        <div className="perspective-grid">
                            {perspectives.map((item, i) => (
                                <div key={i} className="perspective-item">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Clients Choose Prospique */}
            <section className="section-lg why-section">
                <div className="container">
                    <div className="why-content">
                        <div className="why-header">
                            <h2>Why Clients Choose Prospique</h2>
                            <p className="why-tagline"><em>Strategic Insight. Measurable Impact. Meaningful Partnership.</em></p>
                            <p className="why-intro">
                                Our work is defined by collaboration, guided by data, and anchored in results. Prospique partners with clients to turn vision into execution—helping organizations build stronger systems, empowered teams, and sustainable performance.
                            </p>
                        </div>
                        <div className="why-grid">
                            {whyChoose.map((item, i) => (
                                <div key={i} className="why-item">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            ))}
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
                            <h2>Partner With Us</h2>
                            <p className="text-lg">Let's Shape What's Next</p>
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                Let's Talk
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
