import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        role: '',
        service: '',
        message: '',
        subscribe: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for reaching out. We\'ll be in touch within 24 hours.');
    };

    const services = [
        'Strategy & Growth',
        'Technology & Data',
        'Human Capital',
        'Operations Excellence',
        'Sustainability',
        'Innovation & Ventures',
        'Other'
    ];

    const offices = [
        { city: 'New York', address: '350 Fifth Avenue, 21st Floor', phone: '+1 (212) 555-0100' },
        { city: 'London', address: '30 St Mary Axe, Level 12', phone: '+44 20 7946 0958' },
        { city: 'Singapore', address: 'One Raffles Place, Tower 2', phone: '+65 6808 0500' },
    ];

    return (
        <main id="main-content" className="contact-page">
            {/* Hero */}
            <section className="page-hero contact-hero">
                <div className="container">
                    <span className="overline">Get in Touch</span>
                    <h1 className="text-balance">Let's Start the Conversation</h1>
                    <p className="hero-subtitle text-lg">
                        Tell us about your challenge. We'll connect you with the right team.
                    </p>
                </div>
            </section>

            {/* Contact Form + Info */}
            <section className="section-lg contact-section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Form */}
                        <div className="contact-form-wrap">
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Work Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="you@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="company">Company *</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your organization"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="role">Your Role</label>
                                        <input
                                            type="text"
                                            id="role"
                                            name="role"
                                            value={formData.role}
                                            onChange={handleChange}
                                            placeholder="e.g., CEO, VP Strategy"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="service">Area of Interest</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select a service area...</option>
                                        {services.map((svc, i) => (
                                            <option key={i} value={svc}>{svc}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">How Can We Help? *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Tell us about your challenge or opportunity..."
                                    />
                                </div>

                                <div className="form-group checkbox-group">
                                    <label className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            name="subscribe"
                                            checked={formData.subscribe}
                                            onChange={handleChange}
                                        />
                                        <span>I'd like to receive insights and updates from Prospique.</span>
                                    </label>
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg submit-btn">
                                    Send Message <ArrowRight size={18} />
                                </button>
                            </form>
                        </div>

                        {/* Info */}
                        <div className="contact-info">
                            <div className="info-block">
                                <h3>General Inquiries</h3>
                                <div className="contact-item">
                                    <Mail size={18} />
                                    <a href="mailto:hello@prospique.com">hello@prospique.com</a>
                                </div>
                                <div className="contact-item">
                                    <Phone size={18} />
                                    <a href="tel:+12125550100">+1 (212) 555-0100</a>
                                </div>
                            </div>

                            <div className="offices">
                                <h3>Our Offices</h3>
                                {offices.map((office, i) => (
                                    <div key={i} className="office-item">
                                        <h4>{office.city}</h4>
                                        <div className="office-detail">
                                            <MapPin size={14} />
                                            <span>{office.address}</span>
                                        </div>
                                        <div className="office-detail">
                                            <Phone size={14} />
                                            <span>{office.phone}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
