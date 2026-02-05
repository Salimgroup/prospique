import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        services: [
            { label: 'Strategy & Growth', to: '/services' },
            { label: 'Technology & Data', to: '/services' },
            { label: 'Operations', to: '/services' },
            { label: 'Human Capital', to: '/services' },
            { label: 'Sustainability', to: '/services' },
        ],
        industries: [
            { label: 'Financial Services', to: '/industries' },
            { label: 'Technology', to: '/industries' },
            { label: 'Healthcare', to: '/industries' },
            { label: 'Energy', to: '/industries' },
            { label: 'Public Sector', to: '/industries' },
        ],
        company: [
            { label: 'About Us', to: '/about' },
            { label: 'Insights', to: '/insights' },
            { label: 'Careers', to: '/about' },
            { label: 'Contact', to: '/contact' },
            { label: 'Newsroom', to: '/insights' },
        ],
        legal: [
            { label: 'Privacy Policy', to: '#' },
            { label: 'Terms of Use', to: '#' },
            { label: 'Cookie Settings', to: '#' },
            { label: 'Accessibility', to: '#' },
            { label: 'Sitemap', to: '#' },
        ],
    };

    const locations = ['New York', 'London', 'Singapore', 'Dubai', 'São Paulo'];

    return (
        <footer className="footer">
            <div className="container">
                {/* Newsletter */}
                <div className="footer-newsletter">
                    <div className="newsletter-content">
                        <h3>Stay ahead of change</h3>
                        <p>Subscribe to our insights and perspectives.</p>
                    </div>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit" className="btn btn-primary">Subscribe</button>
                    </form>
                </div>

                <hr className="divider" />

                {/* Links Grid */}
                <div className="footer-grid">
                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            {footerLinks.services.map((link, i) => (
                                <li key={i}><Link to={link.to}>{link.label}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Industries</h4>
                        <ul>
                            {footerLinks.industries.map((link, i) => (
                                <li key={i}><Link to={link.to}>{link.label}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            {footerLinks.company.map((link, i) => (
                                <li key={i}><Link to={link.to}>{link.label}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Legal</h4>
                        <ul>
                            {footerLinks.legal.map((link, i) => (
                                <li key={i}><Link to={link.to}>{link.label}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <hr className="divider" />

                {/* Bottom */}
                <div className="footer-bottom">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <span className="logo-mark">◆</span> Prospique
                        </Link>
                        <div className="footer-locations">
                            {locations.map((loc, i) => (
                                <span key={i}>{loc}</span>
                            ))}
                        </div>
                    </div>
                    <div className="footer-social">
                        <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
                        <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
                    </div>
                    <p className="footer-copyright">
                        © {currentYear} Prospique. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
