import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Industries.css';

const Industries = () => {
    const industries = [
        {
            name: 'Financial Services',
            tagline: 'Reinventing banking, insurance, and capital markets',
            sectors: ['Banking', 'Insurance', 'Capital Markets', 'Payments', 'Wealth Management'],
            stat: { value: '$12B+', label: 'in value created' }
        },
        {
            name: 'Technology',
            tagline: 'Scaling the companies defining the future',
            sectors: ['Enterprise Software', 'Consumer Tech', 'Semiconductors', 'Telecom', 'Media & Entertainment'],
            stat: { value: '200+', label: 'tech transformations' }
        },
        {
            name: 'Healthcare & Life Sciences',
            tagline: 'Improving outcomes for patients and providers',
            sectors: ['Providers', 'Payers', 'Pharmaceuticals', 'Medical Devices', 'Digital Health'],
            stat: { value: '50M+', label: 'patients impacted' }
        },
        {
            name: 'Energy & Utilities',
            tagline: 'Powering the transition to a sustainable future',
            sectors: ['Oil & Gas', 'Power & Utilities', 'Renewables', 'Mining', 'Chemicals'],
            stat: { value: '30%', label: 'avg emissions reduction' }
        },
        {
            name: 'Consumer & Retail',
            tagline: 'Building brands that resonate and scale',
            sectors: ['Retail', 'Consumer Goods', 'Food & Beverage', 'Apparel', 'Luxury'],
            stat: { value: '$8B+', label: 'revenue growth enabled' }
        },
        {
            name: 'Public Sector',
            tagline: 'Modernizing government and public services',
            sectors: ['Federal', 'State & Local', 'Defense', 'Education', 'Nonprofit'],
            stat: { value: '100M+', label: 'citizens served' }
        },
    ];

    return (
        <main id="main-content" className="industries-page">
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <span className="overline">Industries</span>
                    <h1 className="text-balance">Deep Expertise Across Sectors</h1>
                    <p className="hero-subtitle text-lg">
                        We bring decades of experience and proprietary insights to the industries shaping the global economy.
                    </p>
                </div>
            </section>

            {/* Industries List */}
            <section className="section-lg industries-list">
                <div className="container">
                    {industries.map((industry, i) => (
                        <div key={i} className="industry-block">
                            <div className="industry-main">
                                <div className="industry-info">
                                    <h2>{industry.name}</h2>
                                    <p className="industry-tagline">{industry.tagline}</p>
                                    <div className="industry-sectors">
                                        {industry.sectors.map((sector, j) => (
                                            <span key={j} className="tag-outline">{sector}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="industry-stat">
                                    <span className="stat-value">{industry.stat.value}</span>
                                    <span className="stat-label">{industry.stat.label}</span>
                                </div>
                            </div>
                            <div className="industry-cta">
                                <Link to="/work" className="btn-ghost">
                                    View case studies
                                </Link>
                            </div>
                            {i < industries.length - 1 && <hr className="divider" />}
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="section-lg cta-section">
                <div className="container">
                    <div className="cta-block">
                        <h2>Sector expertise meets cross-industry insight</h2>
                        <p className="text-lg">Let's explore what's possible in your industry.</p>
                        <Link to="/contact" className="btn btn-primary btn-lg">
                            Connect With Us <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Industries;
