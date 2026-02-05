import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Cpu, Users, BarChart3, Globe, Zap } from 'lucide-react';
import './Home.css';

const Home = () => {
    const services = [
        { icon: TrendingUp, title: 'Strategy & Growth', desc: 'Chart the path from vision to value creation.', image: '/images/strategy-abstract.png' },
        { icon: Cpu, title: 'Technology & Data', desc: 'Engineer intelligent systems for competitive advantage.', image: '/images/technology-abstract.png' },
        { icon: Users, title: 'Human Capital', desc: 'Unlock the full potential of your workforce.', image: '/images/about-abstract.png' },
        { icon: BarChart3, title: 'Operations', desc: 'Optimize performance across the value chain.', image: '/images/operations-abstract.png' },
        { icon: Globe, title: 'Sustainability', desc: 'Build resilient, responsible enterprises.', image: '/images/innovation-abstract.png' },
        { icon: Zap, title: 'Innovation', desc: 'Accelerate breakthrough ideas to market.', image: '/images/insights-featured.png' },
    ];

    const industries = [
        'Financial Services', 'Technology', 'Healthcare & Life Sciences',
        'Energy & Utilities', 'Consumer Goods', 'Public Sector'
    ];

    const insights = [
        { tag: 'AI', title: 'The Generative Enterprise: Beyond Automation', date: 'Feb 2026', read: '8 min', image: '/images/insights-featured.png' },
        { tag: 'Strategy', title: 'Resilience as Competitive Advantage', date: 'Jan 2026', read: '5 min', image: '/images/strategy-abstract.png' },
        { tag: 'Digital', title: 'Cloud-Native: The New Operating Model', date: 'Jan 2026', read: '6 min', image: '/images/technology-abstract.png' },
    ];

    const caseStudies = [
        { client: 'Global Bank', outcome: '40% faster decisions', industry: 'Financial Services', image: '/images/technology-abstract.png' },
        { client: 'Healthcare Leader', outcome: '$2.1B value unlocked', industry: 'Healthcare', image: '/images/innovation-abstract.png' },
        { client: 'Energy Major', outcome: '60% emissions reduced', industry: 'Energy', image: '/images/operations-abstract.png' },
    ];

    const beliefs = [
        { title: 'Outcomes over outputs', desc: 'We measure success by the value we create, not the hours we bill.' },
        { title: 'Technology with purpose', desc: 'Every implementation serves a strategic imperative.' },
        { title: 'Velocity through clarity', desc: 'Complex problems demand simple, decisive action.' },
        { title: 'Partnership, not projects', desc: 'We succeed when our clients succeed—full stop.' },
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
                    <span className="overline animate-fade-in">The Future of Enterprise</span>
                    <h1 className="display text-balance animate-fade-in-up">
                        We don't need to convince you — we're already here.
                    </h1>
                    <p className="hero-subtitle text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Strategy meets execution. Technology meets humanity. Ambition meets reality.
                    </p>
                    <div className="hero-ctas animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <Link to="/contact" className="btn btn-primary btn-lg">
                            Book a Call
                        </Link>
                        <Link to="/work" className="btn btn-outline btn-lg">
                            View Our Work
                        </Link>
                    </div>
                    <div className="hero-proof animate-fade-in" style={{ animationDelay: '0.5s' }}>
                        <div className="proof-item">
                            <span className="proof-value">$47B+</span>
                            <span className="proof-label">Value Created</span>
                        </div>
                        <div className="proof-divider"></div>
                        <div className="proof-item">
                            <span className="proof-value">500+</span>
                            <span className="proof-label">Global Partners</span>
                        </div>
                        <div className="proof-divider"></div>
                        <div className="proof-item">
                            <span className="proof-value">2,400+</span>
                            <span className="proof-label">Transformations</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="section-lg services-section">
                <div className="container">
                    <div className="section-header">
                        <span className="overline">Capabilities</span>
                        <h2>What We Do</h2>
                        <p className="text-lg">Integrated solutions across strategy, technology, and operations.</p>
                    </div>
                    <div className="grid grid-3 stagger">
                        {services.map((service, i) => (
                            <div key={i} className="card service-card animate-fade-in-up">
                                <div className="service-image">
                                    <img src={service.image} alt={service.title} />
                                </div>
                                <div className="service-content">
                                    <div className="service-icon">
                                        <service.icon size={24} strokeWidth={1.5} />
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                    <Link to="/services" className="btn-ghost">Learn more</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="section-lg industries-section">
                <div className="container">
                    <div className="section-header">
                        <span className="overline">Industries</span>
                        <h2>Deep Expertise, Broad Reach</h2>
                    </div>
                    <div className="industries-grid">
                        {industries.map((industry, i) => (
                            <Link key={i} to="/industries" className="industry-tile">
                                <span>{industry}</span>
                                <ArrowRight size={20} />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Insights */}
            <section className="section-lg insights-section">
                <div className="container">
                    <div className="section-header-row">
                        <div>
                            <span className="overline">Insights</span>
                            <h2>Perspectives That Move Markets</h2>
                        </div>
                        <Link to="/insights" className="btn btn-outline">View All</Link>
                    </div>
                    <div className="grid grid-3 stagger">
                        {insights.map((insight, i) => (
                            <article key={i} className="card insight-card animate-fade-in-up">
                                <div className="insight-image">
                                    <img src={insight.image} alt={insight.title} />
                                </div>
                                <div className="insight-content">
                                    <span className="tag">{insight.tag}</span>
                                    <h3>{insight.title}</h3>
                                    <div className="insight-meta">
                                        <span>{insight.date}</span>
                                        <span>·</span>
                                        <span>{insight.read} read</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="section-lg work-section">
                <div className="container">
                    <div className="section-header-row">
                        <div>
                            <span className="overline">Featured Work</span>
                            <h2>Outcomes That Speak</h2>
                        </div>
                        <Link to="/work" className="btn btn-outline">All Case Studies</Link>
                    </div>
                    <div className="grid grid-3 stagger">
                        {caseStudies.map((study, i) => (
                            <div key={i} className="card case-card animate-fade-in-up">
                                <div className="case-image">
                                    <img src={study.image} alt={study.client} />
                                </div>
                                <div className="case-content">
                                    <span className="tag-outline">{study.industry}</span>
                                    <div className="case-outcome">{study.outcome}</div>
                                    <p className="case-client">{study.client}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="clients-strip">
                        <p className="text-caption text-muted">Trusted by leaders across industries</p>
                        <div className="client-logos">
                            {['Client A', 'Client B', 'Client C', 'Client D', 'Client E', 'Client F'].map((c, i) => (
                                <span key={i} className="client-logo">{c}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Beliefs / POV */}
            <section className="section-lg beliefs-section">
                <div className="container">
                    <div className="beliefs-content">
                        <div className="beliefs-header">
                            <span className="overline">What We Believe</span>
                            <h2>Principles Over Platitudes</h2>
                        </div>
                        <div className="beliefs-grid">
                            {beliefs.map((belief, i) => (
                                <div key={i} className="belief-item">
                                    <h4>{belief.title}</h4>
                                    <p>{belief.desc}</p>
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
                            <h2>Ready to move?</h2>
                            <p className="text-lg">Let's build something that matters.</p>
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                Start the Conversation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
