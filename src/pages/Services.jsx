import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Cpu, Users, BarChart3, Globe, Zap, Target, Lightbulb, Shield } from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: TrendingUp,
            title: 'Strategy & Growth',
            tagline: 'From vision to value creation',
            description: 'We help leaders navigate complexity and capitalize on opportunity. Our strategy practice combines rigorous analysis with creative problem-solving to chart paths that accelerate growth and build lasting competitive advantage.',
            capabilities: ['Corporate Strategy', 'M&A Advisory', 'Market Entry', 'Business Model Innovation', 'Portfolio Optimization']
        },
        {
            icon: Cpu,
            title: 'Technology & Data',
            tagline: 'Intelligent systems for the modern enterprise',
            description: 'Technology is no longer just infrastructure—it\'s the engine of transformation. We architect and implement solutions that turn data into decisions and platforms into competitive moats.',
            capabilities: ['Digital Transformation', 'AI & Machine Learning', 'Cloud Architecture', 'Data Strategy', 'Cybersecurity']
        },
        {
            icon: Users,
            title: 'Human Capital',
            tagline: 'Unlock the potential of your people',
            description: 'Organizations succeed when their people do. We design talent strategies, leadership programs, and cultures that attract, develop, and retain the capabilities you need.',
            capabilities: ['Talent Strategy', 'Organization Design', 'Leadership Development', 'Culture Transformation', 'Change Management']
        },
        {
            icon: BarChart3,
            title: 'Operations Excellence',
            tagline: 'Optimize across the value chain',
            description: 'Operational excellence is the foundation of sustainable performance. We help clients streamline processes, reduce costs, and build resilient supply chains.',
            capabilities: ['Process Optimization', 'Supply Chain', 'Procurement', 'Shared Services', 'Performance Management']
        },
        {
            icon: Globe,
            title: 'Sustainability',
            tagline: 'Build responsible, resilient enterprises',
            description: 'Sustainability is a strategic imperative. We help clients integrate ESG into core strategy, measure impact, and build businesses that thrive across generations.',
            capabilities: ['ESG Strategy', 'Carbon Reduction', 'Sustainable Finance', 'Circular Economy', 'Reporting & Disclosure']
        },
        {
            icon: Zap,
            title: 'Innovation & Ventures',
            tagline: 'Accelerate breakthrough ideas to market',
            description: 'Innovation requires more than ideas—it demands execution. We help clients build innovation capabilities, launch ventures, and partner with the startup ecosystem.',
            capabilities: ['Innovation Labs', 'Corporate Venturing', 'Startup Partnerships', 'R&D Strategy', 'Product Development']
        },
    ];

    const approach = [
        { icon: Target, title: 'Outcomes First', desc: 'Every engagement starts with the end in mind. We define success metrics upfront and hold ourselves accountable.' },
        { icon: Lightbulb, title: 'Insight Driven', desc: 'We combine proprietary research, data analytics, and deep industry expertise to surface insights others miss.' },
        { icon: Shield, title: 'Execution Ready', desc: 'Strategy without implementation is just a deck. We stay to help you execute and capture full value.' },
    ];

    return (
        <main id="main-content" className="services-page">
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <span className="overline">Our Services</span>
                    <h1 className="text-balance">Integrated Solutions for Complex Challenges</h1>
                    <p className="hero-subtitle text-lg">
                        We bring together strategy, technology, operations, and human capital expertise to drive transformation at scale.
                    </p>
                </div>
            </section>

            {/* Approach */}
            <section className="section approach-section">
                <div className="container">
                    <div className="grid grid-3">
                        {approach.map((item, i) => (
                            <div key={i} className="approach-item">
                                <div className="approach-icon">
                                    <item.icon size={24} strokeWidth={1.5} />
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Detail */}
            <section className="section-lg services-detail">
                <div className="container">
                    {services.map((service, i) => (
                        <div key={i} className="service-block">
                            <div className="service-header">
                                <div className="service-icon-lg">
                                    <service.icon size={32} strokeWidth={1.5} />
                                </div>
                                <div className="service-intro">
                                    <span className="overline">{service.tagline}</span>
                                    <h2>{service.title}</h2>
                                </div>
                            </div>
                            <div className="service-content">
                                <p className="service-desc">{service.description}</p>
                                <div className="capabilities">
                                    <h4>Key Capabilities</h4>
                                    <ul className="capability-list">
                                        {service.capabilities.map((cap, j) => (
                                            <li key={j}>{cap}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {i < services.length - 1 && <hr className="divider" />}
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="section-lg cta-section">
                <div className="container">
                    <div className="cta-block">
                        <h2>Let's solve what matters</h2>
                        <p className="text-lg">Tell us about your challenge. We'll bring the right team.</p>
                        <Link to="/contact" className="btn btn-primary btn-lg">
                            Start a Conversation <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Services;
