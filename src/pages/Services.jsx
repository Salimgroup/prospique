import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 'core-business-operations',
            title: 'Core Business Operations',
            headline: 'Optimizing the heart of your organization.',
            summary: 'Every business thrives on efficient operations. Our Core Business Operations team partners with clients to streamline processes, improve resource utilization, and elevate performance across all levels.',
            focusAreas: [
                'Process design and optimization',
                'Operating model transformation',
                'Performance measurement and accountability',
                'Cost efficiency and resource alignment',
                'Continuous improvement systems'
            ],
            image: '/images/operations-abstract.png'
        },
        {
            id: 'enterprise-technology',
            title: 'Enterprise Technology & Performance',
            headline: 'Harnessing innovation to accelerate growth.',
            summary: 'Technology should empower performance — not limit it. We help organizations integrate digital tools, data systems, and automation to drive smarter decision-making and measurable outcomes.',
            focusAreas: [
                'AI and automation strategy',
                'Technology enablement and integration',
                'Data management and analytics',
                'Digital transformation programs',
                'Enterprise performance management'
            ],
            image: '/images/technology-abstract.png'
        },
        {
            id: 'human-capital',
            title: 'Human Capital Consulting',
            headline: 'Empowering your most valuable asset.',
            summary: 'Growth starts with people. We help organizations design teams, cultures, and leadership frameworks that drive results.',
            focusAreas: [
                'Organizational design',
                'Talent strategy and workforce planning',
                'Leadership and capability development',
                'Employee engagement and culture transformation',
                'Change management and communications'
            ],
            image: '/images/about-abstract.png'
        },
        {
            id: 'strategy-analytics',
            title: 'Strategy & Analytics',
            headline: 'Turning insight into strategic advantage.',
            summary: 'Data and strategy work best when they inform each other. We help organizations translate insight into action — building decision frameworks, performance dashboards, and analytics models that reveal opportunities and guide smart investments.',
            focusAreas: [
                'Strategic planning and roadmap development',
                'Business intelligence and data visualization',
                'Performance analytics and reporting',
                'Market and competitive analysis',
                'Growth and investment strategy'
            ],
            image: '/images/strategy-abstract.png'
        },
        {
            id: 'customer-market',
            title: 'Customer & Market Strategy',
            headline: 'Building lasting connections that drive growth.',
            summary: 'We help clients understand, attract, and retain the customers that matter most. From brand positioning to digital engagement, our customer and marketing services combine creativity and analytics to create stronger connections and sustainable results.',
            focusAreas: [
                'Brand and market positioning',
                'Customer journey design',
                'Digital marketing and lifecycle engagement',
                'Sales enablement and transformation',
                'Product innovation and customer insights'
            ],
            image: '/images/innovation-abstract.png'
        }
    ];

    return (
        <main id="main-content" className="services-page">
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <h1 className="text-balance">Our Services</h1>
                    <p className="hero-tagline">
                        <em>Strategy, Operations, Technology, and Human Insight — Working Together to Drive Meaningful Progress</em>
                    </p>
                    <p className="hero-subtitle text-lg">
                        At Prospique, we help organizations strengthen their foundations, align their teams, and scale with purpose. Our services are designed to meet organizations wherever they are — from start-up and small business to enterprise — delivering practical, high-impact solutions that connect strategy to execution.
                    </p>
                    <p className="hero-text">
                        We combine strategic thinking, operational excellence, and intelligent use of technology to create measurable, lasting progress.
                    </p>
                </div>
            </section>

            {/* Services */}
            <section className="section-lg services-list-section">
                <div className="container">
                    {services.map((service, i) => (
                        <div key={i} id={service.id} className="service-block">
                            <div className="service-visual">
                                <img src={service.image} alt={service.title} />
                            </div>
                            <div className="service-content">
                                <h2>{service.title}</h2>
                                <p className="service-headline">{service.headline}</p>
                                <p className="service-summary">{service.summary}</p>
                                <div className="focus-areas">
                                    <h4>Focus Areas:</h4>
                                    <ul>
                                        {service.focusAreas.map((area, j) => (
                                            <li key={j}>{area}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="section-lg cta-section">
                <div className="container">
                    <div className="cta-block">
                        <div className="cta-content">
                            <h2>Ready to Get Started?</h2>
                            <p className="text-lg">Let's discuss how our services can help your organization achieve meaningful progress.</p>
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

export default Services;
