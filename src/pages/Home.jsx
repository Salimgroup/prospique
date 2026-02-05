import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Cpu, BarChart3, Lightbulb, Zap, Shield, TrendingUp } from 'lucide-react';
import './Home.css';

const Home = () => {
    const services = [
        { icon: Target, title: 'Core Business Operations', desc: 'Streamline systems, strengthen efficiency, and scale with clarity.' },
        { icon: Cpu, title: 'Enterprise Technology & Performance', desc: 'Leverage AI, automation, and digital tools for agility and growth.' },
        { icon: Users, title: 'Human Capital Consulting', desc: 'Develop leaders, culture, and workforce capabilities for long-term success.' },
        { icon: BarChart3, title: 'Strategy & Analytics', desc: 'Turn insights into confident, data-driven decisions.' },
        { icon: TrendingUp, title: 'Customer & Market Strategy', desc: 'Build lasting connections and competitive differentiation.' },
    ];

    const industries = [
        'Professional Services', 'Technology & SaaS', 'Financial Services',
        'Healthcare & Life Sciences', 'Education', 'Logistics & Supply Chain',
        'Retail & Consumer Goods', 'Food & Beverage', 'Entertainment & Media',
        'Public Sector', 'Mission-Driven Nonprofits'
    ];

    const values = [
        { icon: Users, title: 'Collaborative Approach', desc: 'Solutions designed with you, not for you.' },
        { icon: Zap, title: 'Integrated Expertise', desc: 'Strategy, technology, and human capital connected for success.' },
        { icon: Lightbulb, title: 'Data-Driven Clarity', desc: 'Insights that power smarter, faster decisions.' },
        { icon: Shield, title: 'Sustainable Solutions', desc: 'Foundations that last beyond the engagement.' },
    ];

    return (
        <main className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg">
                    <div className="hero-gradient"></div>
                    <div className="hero-lines"></div>
                </div>
                <div className="container hero-content">
                    <h1 className="hero-title animate-fade-in-up">
                        Empowering Unique Progress
                    </h1>
                    <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Business consulting that unites strategy, technology, and human insight to help organizations work smarter, grow stronger, and achieve meaningful results.
                    </p>
                    <div className="hero-ctas animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <Link to="/contact" className="btn btn-primary">
                            Let's Talk <ArrowRight size={18} />
                        </Link>
                        <Link to="/services" className="btn btn-secondary">
                            Discover How We Work
                        </Link>
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="section about-preview">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-content">
                            <span className="subheading">Trusted Partners</span>
                            <h2>Who We Are</h2>
                            <p>
                                Prospique is a consulting firm helping organizations navigate change, improve performance, and scale with purpose. Our consultants bring deep expertise across industries—from professional services and technology to healthcare, education, and the public sector—combining strategic insight, operational excellence, and technological innovation.
                            </p>
                            <p>
                                We connect people, processes, and data to build stronger organizations that can adapt, evolve, and thrive.
                            </p>
                            <Link to="/about" className="btn btn-ghost">
                                Learn More About Prospique <ArrowRight size={18} />
                            </Link>
                        </div>
                        <div className="about-visual">
                            <div className="visual-card"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section services-preview">
                <div className="container">
                    <div className="section-header">
                        <span className="subheading">Comprehensive Capabilities</span>
                        <h2>Sustainable Growth</h2>
                        <p>
                            We deliver integrated solutions across business operations, people, technology, and strategy—helping organizations achieve clarity, alignment, and measurable outcomes.
                        </p>
                    </div>
                    <div className="services-grid stagger-children">
                        {services.map((service, index) => (
                            <div key={index} className="service-card card animate-fade-in-up">
                                <div className="service-icon">
                                    <service.icon size={28} />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="services-cta">
                        <Link to="/services" className="btn btn-primary">
                            View All Services <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="section industries">
                <div className="container">
                    <div className="section-header">
                        <span className="subheading">Experience Across Sectors and Scales</span>
                        <h2>Industries We Support</h2>
                        <p>
                            Prospique works with organizations of every size and mission, applying proven frameworks with the flexibility to fit unique goals.
                        </p>
                    </div>
                    <div className="industries-grid">
                        {industries.map((industry, index) => (
                            <div key={index} className="industry-tag">
                                {industry}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Perspective Section */}
            <section className="section perspective">
                <div className="container">
                    <div className="perspective-grid">
                        <div className="perspective-content">
                            <span className="subheading">Our Perspective</span>
                            <h2>Insights That Shape Smarter Businesses</h2>
                            <p>
                                Every engagement begins with one simple belief—progress comes from clarity. Prospique's perspective combines data, creativity, and discipline to help organizations make better decisions, embrace innovation, and sustain growth.
                            </p>
                        </div>
                        <div className="values-grid">
                            {values.map((value, index) => (
                                <div key={index} className="value-card">
                                    <value.icon size={24} className="value-icon" />
                                    <h4>{value.title}</h4>
                                    <p>{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-banner">
                        <h2>Let's Shape What's Next Together</h2>
                        <p>Progress happens when strategy meets execution.</p>
                        <Link to="/contact" className="btn">
                            Contact Us <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
