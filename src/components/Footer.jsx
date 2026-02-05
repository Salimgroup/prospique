import { Link } from 'react-router-dom';
import { Linkedin, Youtube, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">Prospique</Link>
                        <p className="footer-tagline">Empowering Unique Progress</p>
                        <p className="footer-description">
                            Business consulting that unites strategy, technology, and human insight to help organizations work smarter, grow stronger, and achieve meaningful results.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Accessibility</a></li>
                            <li><a href="#">Cookie Notice</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact Us</h4>
                        <ul>
                            <li>
                                <Mail size={16} />
                                <a href="mailto:info@prospique.com">info@prospique.com</a>
                            </li>
                            <li>
                                <Phone size={16} />
                                <a href="tel:+15551234567">+1 (555) 123-4567</a>
                            </li>
                            <li>
                                <MapPin size={16} />
                                <span>United States</span>
                            </li>
                        </ul>
                        <div className="social-links">
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" aria-label="YouTube"><Youtube size={20} /></a>
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Prospique. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
