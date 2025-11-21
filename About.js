import React from 'react';
import { Heart, Users, Globe, Award, Target, Handshake } from 'lucide-react';
import './About.css';

function AboutUs() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>About Our Mission</h1>
          <p>Connecting passionate volunteers with meaningful opportunities to create positive change in communities worldwide.</p>
        </div>
        <div className="hero-decoration">
          <div className="floating-icon">
            <Heart className="icon" />
          </div>
          <div className="floating-icon">
            <Users className="icon" />
          </div>
          <div className="floating-icon">
            <Globe className="icon" />
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission-section">
        <div className="section-content">
          <h2>Our Mission</h2>
          <p>We believe that everyone has the power to make a difference. Our platform bridges the gap between willing hearts and worthy causes, creating a world where volunteering is accessible, impactful, and rewarding for all.</p>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="section-content">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <Heart className="icon" />
              </div>
              <h3>Compassion</h3>
              <p>We lead with empathy and understanding, ensuring every interaction is meaningful and supportive.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Target className="icon" />
              </div>
              <h3>Impact</h3>
              <p>We focus on creating measurable, lasting change that transforms communities and lives.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Users className="icon" />
              </div>
              <h3>Community</h3>
              <p>We foster connections that build stronger, more resilient communities worldwide.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Handshake className="icon" />
              </div>
              <h3>Integrity</h3>
              <p>We operate with transparency, honesty, and accountability in everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="section-content">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>Founded in 2020 by a group of passionate changemakers, our platform was born from a simple observation: there are countless people who want to help, and countless causes that need support, but connecting them was often difficult and inefficient.</p>
              <p>What started as a small community initiative has grown into a global movement, connecting over 100,000 volunteers with meaningful opportunities across education, healthcare, environment, and community development.</p>
              <p>Today, we continue to innovate and expand, always keeping our core mission at heart: making volunteering accessible, impactful, and rewarding for everyone involved.</p>
            </div>
            <div className="story-visual">
              <div className="achievement-card">
                <div className="achievement-number">100K+</div>
                <div className="achievement-label">Volunteers Connected</div>
              </div>
              <div className="achievement-card">
                <div className="achievement-number">5K+</div>
                <div className="achievement-label">Organizations Partnered</div>
              </div>
              <div className="achievement-card">
                <div className="achievement-number">50+</div>
                <div className="achievement-label">Countries Reached</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-content">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">
                <Users className="avatar-icon" />
              </div>
              <h3>Sarah Johnson</h3>
              <p className="member-role">Founder & CEO</p>
              <p className="member-bio">Passionate about social impact with 15+ years in nonprofit leadership.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <Award className="avatar-icon" />
              </div>
              <h3>Michael Chen</h3>
              <p className="member-role">Head of Technology</p>
              <p className="member-bio">Tech innovator dedicated to building platforms that create positive change.</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <Globe className="avatar-icon" />
              </div>
              <h3>Emma Rodriguez</h3>
              <p className="member-role">Community Director</p>
              <p className="member-bio">Community builder with expertise in volunteer engagement and program development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="section-content">
          <h2>Join Our Mission</h2>
          <p>Ready to make a difference? Whether you're looking to volunteer or need volunteers for your cause, we're here to help you create meaningful impact.</p>
          <div className="cta-buttons">
            <button className="cta-button primary">Start Volunteering</button>
            <button className="cta-button secondary">Partner With Us</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;