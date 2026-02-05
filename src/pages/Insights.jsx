import { Link } from 'react-router-dom';
import './Insights.css';

const Insights = () => {
    const featured = {
        tag: 'Artificial Intelligence',
        title: 'The Generative Enterprise: How AI Is Redefining Competitive Advantage',
        desc: 'Generative AI represents the most significant technology shift since the internet. Leaders who move decisively now will define their industries for decades.',
        date: 'February 2026',
        read: '12 min read'
    };

    const insights = [
        { tag: 'Strategy', title: 'Resilience as Competitive Advantage', date: 'Jan 2026', read: '5 min' },
        { tag: 'Digital', title: 'Cloud-Native: The New Operating Model', date: 'Jan 2026', read: '6 min' },
        { tag: 'Finance', title: 'The Future of Payments: Embedded, Invisible, Everywhere', date: 'Jan 2026', read: '8 min' },
        { tag: 'Sustainability', title: 'Net Zero Roadmaps: From Commitment to Action', date: 'Dec 2025', read: '7 min' },
        { tag: 'Leadership', title: 'The CEO Agenda for 2026: Five Priorities', date: 'Dec 2025', read: '4 min' },
        { tag: 'Operations', title: 'Supply Chain Resilience in an Uncertain World', date: 'Dec 2025', read: '6 min' },
        { tag: 'Technology', title: 'Quantum Computing: Preparing for the Next Disruption', date: 'Nov 2025', read: '9 min' },
        { tag: 'Healthcare', title: 'The Digital Front Door: Reimagining Patient Experience', date: 'Nov 2025', read: '5 min' },
    ];

    const categories = ['All', 'Strategy', 'Technology', 'Digital', 'Sustainability', 'Leadership', 'Finance'];

    return (
        <main id="main-content" className="insights-page">
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <span className="overline">Insights</span>
                    <h1 className="text-balance">Perspectives That Move Markets</h1>
                    <p className="hero-subtitle text-lg">
                        Original research, analysis, and point of view on the forces shaping business and technology.
                    </p>
                </div>
            </section>

            {/* Featured */}
            <section className="section featured-section">
                <div className="container">
                    <Link to="/insights/featured" className="featured-card">
                        <div className="featured-content">
                            <span className="tag">{featured.tag}</span>
                            <h2>{featured.title}</h2>
                            <p>{featured.desc}</p>
                            <div className="insight-meta">
                                <span>{featured.date}</span>
                                <span>·</span>
                                <span>{featured.read}</span>
                            </div>
                        </div>
                        <div className="featured-visual">
                            <img src="/images/insights-featured.png" alt="AI Abstract" className="featured-img" />
                        </div>
                    </Link>
                </div>
            </section>

            {/* Filters */}
            <section className="section filters-section">
                <div className="container">
                    <div className="category-filters">
                        {categories.map((cat, i) => (
                            <button key={i} className={`filter-btn ${i === 0 ? 'active' : ''}`}>{cat}</button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Insights Grid */}
            <section className="section-lg insights-grid-section">
                <div className="container">
                    <div className="grid grid-4 stagger">
                        {insights.map((insight, i) => (
                            <Link key={i} to="/insights/article" className="card insight-card animate-fade-in-up">
                                <span className="tag">{insight.tag}</span>
                                <h3>{insight.title}</h3>
                                <div className="insight-meta">
                                    <span>{insight.date}</span>
                                    <span>·</span>
                                    <span>{insight.read}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="load-more">
                        <button className="btn btn-outline">Load More</button>
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="section-lg newsletter-section">
                <div className="container">
                    <div className="newsletter-block">
                        <div className="newsletter-content">
                            <h2>Stay ahead of change</h2>
                            <p className="text-lg">Get our latest insights delivered to your inbox.</p>
                        </div>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Enter your email" required />
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Insights;
