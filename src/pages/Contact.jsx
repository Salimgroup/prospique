import { useState } from 'react';
import { Mail, Phone, Linkedin, ArrowRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        interest: '',
        industry: '',
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
        alert('Thank you for your inquiry! We will be in touch soon.');
    };

    const interests = [
        'Core Business Operations',
        'Enterprise Technology & Performance',
        'Human Capital Consulting',
        'Strategy & Analytics',
        'Customer & Market Strategy',
        'General Inquiry'
    ];

    const industries = [
        'Professional Services',
        'Technology & SaaS',
        'Financial Services',
        'Healthcare & Life Sciences',
        'Education',
        'Logistics & Supply Chain',
        'Retail & Consumer Goods',
        'Food & Beverage',
        'Entertainment & Media',
        'Public Sector',
        'Nonprofit',
        'Other'
    ];

    return (
        <main className="contact-page">
            {/* Hero */}
            <section className="page-hero contact-hero">
                <div className="container">
                    <h1>Let's Start the Conversation</h1>
                    <p className="hero-desc">
                        We'll align around your goals and next steps.
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="section contact-section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Left Column - Info */}
                        <div className="contact-info">
                            <h2>Start the Conversation</h2>
                            <p>
                                Every organization's goals are unique—and so is the way we work with you. Our team will connect you with the right experts to understand your challenges and chart a path toward measurable results.
                            </p>

                            <div className="contact-details">
                                <div className="contact-item">
                                    <Mail size={20} />
                                    <a href="mailto:hello@prospique.com">hello@prospique.com</a>
                                </div>
                                <div className="contact-item">
                                    <Phone size={20} />
                                    <a href="tel:+15551234567">+1 (555) 123-4567</a>
                                </div>
                            </div>

                            <div className="social-connect">
                                <h4>Connect With Us</h4>
                                <div className="social-icons">
                                    <a href="#" aria-label="LinkedIn"><Linkedin size={24} /></a>
                                </div>
                            </div>

                            <div className="direct-email">
                                <p>Prefer to reach out directly?</p>
                                <a href="mailto:info@prospique.com">info@prospique.com</a>
                            </div>
                        </div>

                        {/* Right Column - Form */}
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
                                        <label htmlFor="email">Email *</label>
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
                                        <label htmlFor="company">Company / Organization</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Your organization"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="interest">Area of Interest</label>
                                        <select
                                            id="interest"
                                            name="interest"
                                            value={formData.interest}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select an area...</option>
                                            {interests.map((item, i) => (
                                                <option key={i} value={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="industry">Industry</label>
                                        <select
                                            id="industry"
                                            name="industry"
                                            value={formData.industry}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select an industry...</option>
                                            {industries.map((item, i) => (
                                                <option key={i} value={item}>{item}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group full-width">
                                    <label htmlFor="message">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Tell us about your project or challenge..."
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
                                        <span>Yes, I'd like to receive occasional updates and insights from Prospique.</span>
                                    </label>
                                </div>

                                <button type="submit" className="btn btn-primary submit-btn">
                                    Send Inquiry <ArrowRight size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
