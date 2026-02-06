import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-cta">
                    <h2>Partner With Us</h2>
                    <p className="text-lg">Let's Shape What's Next</p>
                </div>
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="logo">prospique</Link>
                        <p className="footer-tagline">Empowering Unique Progress</p>
                    </div>
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <nav>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/contact">Contact</Link>
                        </nav>
                    </div>
                    <div className="footer-links">
                        <h4>Policies</h4>
                        <nav>
                            <Link to="/privacy">Privacy Policy</Link>
                            <Link to="/terms">Terms of Use</Link>
                        </nav>
                    </div>
                    <div className="footer-contact">
                        <h4>Contact</h4>
                        <address>
                            <p>U.S. Your building, Your City</p>
                            <p><a href="mailto:info@prospique.com">info@prospique.com</a></p>
                            <p><a href="tel:+11234567890">(123) 456-789</a></p>
                        </address>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 Prospique | All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
