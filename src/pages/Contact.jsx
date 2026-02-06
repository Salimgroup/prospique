import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        areaOfInterest: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission
    };

    const areasOfInterest = [
        'Core Business Operations',
        'Enterprise Technology & Performance',
        'Human Capital Consulting',
        'Strategy & Analytics',
        'Customer & Market Strategy',
        'General Inquiry'
    ];

    return (
        <main id="main-content" className="contact-page">
            {/* Hero */}
            <section className="page-hero">
                <div className="container">
                    <h1 className="text-balance">Let's Shape What's Next Together</h1>
                    <p className="hero-subtitle text-lg">
                        Progress begins with a conversation. Whether you're optimizing operations, evolving your workforce, or embracing digital transformation, Prospique helps you move forward with clarity and confidence.
                    </p>
                </div>
            </section>

            {/* Contact Form */}
            <section className="section-lg contact-section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="form-intro">
                            <h2>Start the Conversation</h2>
                            <p className="text-lg">
                                Every organization's goals are unique—and so is the way we work with you. Whether you're seeking operational efficiency, strategic alignment, or technology-driven transformation, our team will connect you with the right experts to understand your challenges and chart a path toward measurable results.
                            </p>
                        </div>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="company">Company / Organization</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
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
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="areaOfInterest">Area of Interest</label>
                                <select
                                    id="areaOfInterest"
                                    name="areaOfInterest"
                                    value={formData.areaOfInterest}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select an area</option>
                                    {areasOfInterest.map((area, i) => (
                                        <option key={i} value={area}>{area}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message / Details</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your organization and how we can help..."
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
