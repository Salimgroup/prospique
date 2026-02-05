import { Link } from 'react-router-dom';
import { ArrowRight, Target, Cpu, Users, BarChart3, TrendingUp } from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: Target,
            title: 'Core Business Operations',
            tagline: 'Streamline systems, strengthen efficiency, and scale with clarity.',
            description: 'Partners with clients to streamline processes, improve resource utilization, and elevate performance.',
            focus: ['Process design and optimization', 'Operating model transformation', 'Performance measurement and accountability', 'Cost efficiency and resource alignment', 'Continuous improvement systems'],
            industries: 'Applied across technology, healthcare, finance, education, and other industries.'
        },
        {
            icon: Cpu,
            title: 'Enterprise Technology & Performance',
            tagline: 'Leverage AI, automation, and digital tools for agility and growth.',
            description: 'Technology should empower performance—not limit it. We help integrate digital tools, data systems, and automation.',
            focus: ['AI and automation strategy', 'Technology enablement and integration', 'Data management and analytics', 'Digital transformation programs', 'Enterprise performance management'],
            industries: 'Applied across technology, healthcare, finance, education, and other industries.'
        },
        {
            icon: Users,
            title: 'Human Capital Consulting',
            tagline: 'Develop leaders, culture, and workforce capabilities for long-term success.',
            description: 'Success depends on how effectively teams adapt, grow, and lead.',
            focus: ['Organizational design', 'Talent strategy and workforce planning', 'Leadership and capability development', 'Employee engagement and culture transformation', 'Change management and communications'],
            industries: 'Applied across technology, healthcare, finance, education, and other industries.'
        },
        {
            icon: BarChart3,
            title: 'Strategy & Analytics',
            tagline: 'Turn insights into confident, data-driven decisions.',
            description: 'Focuses on aligning technology investments with business priorities to enhance efficiency, innovation, and profitability.',
            focus: ['Strategic planning and roadmapping', 'Business intelligence and reporting', 'Predictive analytics and modeling', 'Market and competitive analysis', 'Investment optimization'],
            industries: 'Applied across technology, healthcare, finance, education, and other industries.'
        },
        {
            icon: TrendingUp,
            title: 'Customer & Market Strategy',
            tagline: 'Build lasting connections and competitive differentiation.',
            description: 'Create customer-centric strategies that drive growth and market leadership.',
            focus: ['Customer experience design', 'Market positioning and segmentation', 'Brand strategy and differentiation', 'Growth and go-to-market planning', 'Customer journey optimization'],
            industries: 'Applied across technology, healthcare, finance, education, and other industries.'
        }
    ];

    return (
        <main className="services-page">
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <span className="subheading">Our Services</span>
                    <h1>Core Services — Connecting Strategy, People, and Technology</h1>
                    <p className="hero-desc">
                        We help organizations align, scale, and perform.
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="section services-intro">
                <div className="container">
                    <p className="intro-text">
                        Strategy, Operations, Technology, and Human Insight — Working Together to Drive Meaningful Progress. We help organizations strengthen their foundations, align their teams, and scale with purpose, delivering practical, high-impact solutions that connect strategy to execution.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section services-list">
                <div className="container">
                    {services.map((service, index) => (
                        <div key={index} className="service-detail">
                            <div className="service-header">
                                <div className="service-icon-large">
                                    <service.icon size={32} />
                                </div>
                                <div className="service-title-wrap">
                                    <h2>{service.title}</h2>
                                    <p className="service-tagline">{service.tagline}</p>
                                </div>
                            </div>
                            <div className="service-body">
                                <div className="service-content">
                                    <p className="service-description">{service.description}</p>
                                    <h4>Focus Areas</h4>
                                    <ul className="focus-list">
                                        {service.focus.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="service-sidebar">
                                    <div className="industry-note">
                                        <h5>Industry Applications</h5>
                                        <p>{service.industries}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-banner">
                        <h2>Explore How Prospique Can Accelerate Your Growth</h2>
                        <p>Let's discuss your unique challenges.</p>
                        <Link to="/contact" className="btn">
                            Let's Talk <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Services;
