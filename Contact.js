import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>
          Have questions about adoption, volunteering, or our services? We'd love
          to hear from you!
        </p>
      </div>

      <div className="contact-grid">
        {/* Contact Form */}
        <div className="contact-form">
          <h3>Send us a Message</h3>
          <form>
            <div className="form-row">
              <input type="text" placeholder="Your first name" />
              <input type="text" placeholder="Your last name" />
            </div>
            <input type="email" placeholder="your.email@example.com" />
            <input type="text" placeholder="What is this regarding?" />
            <textarea placeholder="Tell us how we can help..."></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-card">
            <h3>Get in Touch</h3>
            <p>
              <strong>📍 Address</strong>
              <br />
              123 Animal Haven Blvd
              <br />
              Compassion City, CC 12345
            </p>
            <p>
              <strong>📞 Phone</strong>
              <br />
              (555) 123-PAWS
            </p>
            <p>
              <strong>📧 Email</strong>
              <br />
              info@pawhaven.org
            </p>
          </div>

          <div className="info-card">
            <h3>⏰ Shelter Hours</h3>
            <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
            <p>Saturday: 9:00 AM - 5:00 PM</p>
            <p>Sunday: 11:00 AM - 4:00 PM</p>
          </div>

          <div className="emergency-card">
            <h3>Emergency?</h3>
            <p>For animal emergencies outside our hours</p>
            <button>Call Emergency Line</button>
          </div>
        </div>
      </div>
    </div>
  );
}
