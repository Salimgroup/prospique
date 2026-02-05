import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Work.css';

const Work = () => {
    const caseStudies = [
        {
            client: 'Global Financial Institution',
            industry: 'Financial Services',
            title: 'Accelerating Digital Transformation Across 40 Markets',
            outcome: '40% faster time-to-market',
            impact: '$2.3B annual value created',
            services: ['Technology & Data', 'Operations', 'Human Capital']
        },
        {
            client: 'Major Healthcare System',
            industry: 'Healthcare',
            title: 'Reimagining Patient Experience Through Digital Innovation',
            outcome: '60% improvement in patient satisfaction',
            impact: '$450M operational savings',
            services: ['Strategy & Growth', 'Technology & Data', 'Operations']
        },
        {
            client: 'Energy Industry Leader',
            industry: 'Energy & Utilities',
            title: 'Executing a Net-Zero Transition Strategy',
            outcome: '35% emissions reduction in Year 1',
            impact: 'Industry-leading sustainability rating',
            services: ['Sustainability', 'Operations', 'Strategy & Growth']
        },
        {
            client: 'Global Technology Company',
            industry: 'Technology',
            title: 'Building an AI-First Enterprise Operating Model',
            outcome: '50% productivity gains in key functions',
            impact: '$1.8B market cap increase',
            services: ['Technology & Data', 'Human Capital', 'Strategy & Growth']
        },
        {
            client: 'Consumer Goods Multinational',
            industry: 'Consumer & Retail',
            title: 'Supply Chain Transformation for Resilience',
            outcome: '25% reduction in supply chain costs',
            impact: '99.2% order fulfillment rate',
            services: ['Operations', 'Technology & Data', 'Strategy & Growth']
        },
        {
            client: 'Federal Government Agency',
            industry: 'Public Sector',
            title: 'Modernizing Citizen Services at Scale',
            outcome: '80% faster service delivery',
            impact: '45M citizens impacted',
            services: ['Technology & Data', 'Operations', 'Human Capital']
        },
    ];

    const clients = [
        'Fortune 50 Bank', 'Global Health System', 'Energy Major',
        'Tech Giant', 'Consumer Leader', 'Federal Agency',
        'Insurance Carrier', 'Pharma Innovator'
    ];

    return (
        <main id="main-content" className="work-page">
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <span className="overline">Our Work</span>
                    <h1 className="text-balance">Outcomes That Speak for Themselves</h1>
                    <p className="hero-subtitle text-lg">
                        Transformations delivered. Value created. Impact at scale.
                    </p>
                </div>
            </section>

            {/* Impact Stats */}
            <section className="section impact-section">
                <div className="container">
                    <div className="impact-grid">
                        <div className="impact-stat">
                            <span className="impact-value">$47B+</span>
                            <span className="impact-label">Cumulative Value Created</span>
                        </div>
                        <div className="impact-stat">
                            <span className="impact-value">2,400+</span>
                            <span className="impact-label">Transformations Delivered</span>
                        </div>
                        <div className="impact-stat">
                            <span className="impact-value">500+</span>
                            <span className="impact-label">Global Clients</span>
                        </div>
                        <div className="impact-stat">
                            <span className="impact-value">98%</span>
                            <span className="impact-label">Client Satisfaction</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="section-lg cases-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Featured Case Studies</h2>
                    </div>
                    <div className="cases-grid stagger">
                        {caseStudies.map((study, i) => (
                            <div key={i} className="case-block animate-fade-in-up">
                                <div className="case-header">
                                    <span className="tag-outline">{study.industry}</span>
                                    <p className="case-client">{study.client}</p>
                                </div>
                                <h3>{study.title}</h3>
                                <div className="case-results">
                                    <div className="result-item">
                                        <span className="result-value">{study.outcome}</span>
                                    </div>
                                    <div className="result-item">
                                        <span className="result-impact">{study.impact}</span>
                                    </div>
                                </div>
                                <div className="case-services">
                                    {study.services.map((svc, j) => (
                                        <span key={j} className="service-tag">{svc}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clients */}
            <section className="section clients-section">
                <div className="container">
                    <p className="text-caption text-center text-muted">Trusted by industry leaders</p>
                    <div className="clients-grid">
                        {clients.map((client, i) => (
                            <span key={i} className="client-item">{client}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-lg cta-section">
                <div className="container">
                    <div className="cta-block">
                        <h2>What will your story be?</h2>
                        <p className="text-lg">Let's create outcomes worth sharing.</p>
                        <Link to="/contact" className="btn btn-primary btn-lg">
                            Start a Conversation <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Work;
