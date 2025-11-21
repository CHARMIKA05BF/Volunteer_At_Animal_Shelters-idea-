import React from 'react';
import { Heart, Users, Globe, Search, Calendar, Award, ArrowRight, Star, MapPin, Clock } from 'lucide-react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Make a Difference Today</h1>
            <p>Connect with meaningful volunteer opportunities in your community and around the world. Join thousands of passionate volunteers creating positive change.</p>
            <div className="hero-buttons">
              <button className="hero-button primary">
                Find Opportunities
                <ArrowRight className="button-icon" />
              </button>
              <button className="hero-button secondary">
                Learn More
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="card-icon">
                <Heart className="icon" />
              </div>
              <h3>100K+ Volunteers</h3>
              <p>Making impact worldwide</p>
            </div>
            <div className="hero-card">
              <div className="card-icon">
                <Globe className="icon" />
              </div>
              <h3>50+ Countries</h3>
              <p>Global reach and impact</p>
            </div>
            <div className="hero-card">
              <div className="card-icon">
                <Users className="icon" />
              </div>
              <h3>5K+ Organizations</h3>
              <p>Trusted partnerships</p>
            </div>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-content">
          <h2>Why Choose Our Platform?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Search className="icon" />
              </div>
              <h3>Easy Discovery</h3>
              <p>Find volunteer opportunities that match your interests, skills, and schedule with our intelligent matching system.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Calendar className="icon" />
              </div>
              <h3>Flexible Scheduling</h3>
              <p>Choose from one-time events, ongoing commitments, or remote opportunities that fit your lifestyle.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Award className="icon" />
              </div>
              <h3>Track Impact</h3>
              <p>See the real difference you're making with detailed impact reports and volunteer hour tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="section-content">
          <h2>Volunteer Categories</h2>
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-image education"></div>
              <div className="category-content">
                <h3>Education</h3>
                <p>Tutor students, teach skills, or support educational programs in your community.</p>
                <span className="opportunity-count">250+ opportunities</span>
              </div>
            </div>
            <div className="category-card">
              <div className="category-image healthcare"></div>
              <div className="category-content">
                <h3>Healthcare</h3>
                <p>Support medical missions, health awareness campaigns, and patient care programs.</p>
                <span className="opportunity-count">180+ opportunities</span>
              </div>
            </div>
            <div className="category-card">
              <div className="category-image environment"></div>
              <div className="category-content">
                <h3>Environment</h3>
                <p>Join conservation efforts, clean-up drives, and sustainability initiatives.</p>
                <span className="opportunity-count">320+ opportunities</span>
              </div>
            </div>
            <div className="category-card">
              <div className="category-image community"></div>
              <div className="category-content">
                <h3>Community</h3>
                <p>Help with local events, food banks, homeless shelters, and community development.</p>
                <span className="opportunity-count">400+ opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="opportunities-section">
        <div className="section-content">
          <h2>Featured Opportunities</h2>
          <div className="opportunities-grid">
            <div className="opportunity-card">
              <div className="opportunity-header">
                <div className="org-logo">
                  <Heart className="logo-icon" />
                </div>
                <div className="opportunity-meta">
                  <h3>Community Food Drive</h3>
                  <p className="org-name">Local Food Bank</p>
                </div>
                <div className="opportunity-rating">
                  <Star className="star-icon" />
                  <span>4.9</span>
                </div>
              </div>
              <p className="opportunity-description">
                Help distribute food to families in need. Perfect for individuals or groups looking to make an immediate impact.
              </p>
              <div className="opportunity-details">
                <div className="detail-item">
                  <MapPin className="detail-icon" />
                  <span>Downtown Community Center</span>
                </div>
                <div className="detail-item">
                  <Clock className="detail-icon" />
                  <span>Weekends, 4 hours</span>
                </div>
              </div>
              <button className="opportunity-button">Apply Now</button>
            </div>

            <div className="opportunity-card">
              <div className="opportunity-header">
                <div className="org-logo">
                  <Users className="logo-icon" />
                </div>
                <div className="opportunity-meta">
                  <h3>Youth Mentorship Program</h3>
                  <p className="org-name">Future Leaders Foundation</p>
                </div>
                <div className="opportunity-rating">
                  <Star className="star-icon" />
                  <span>4.8</span>
                </div>
              </div>
              <p className="opportunity-description">
                Mentor high school students in career development and life skills. Make a lasting impact on young lives.
              </p>
              <div className="opportunity-details">
                <div className="detail-item">
                  <MapPin className="detail-icon" />
                  <span>Various Schools</span>
                </div>
                <div className="detail-item">
                  <Clock className="detail-icon" />
                  <span>Flexible, 2-3 hours/week</span>
                </div>
              </div>
              <button className="opportunity-button">Apply Now</button>
            </div>

            <div className="opportunity-card">
              <div className="opportunity-header">
                <div className="org-logo">
                  <Globe className="logo-icon" />
                </div>
                <div className="opportunity-meta">
                  <h3>Beach Cleanup Initiative</h3>
                  <p className="org-name">Ocean Conservation Society</p>
                </div>
                <div className="opportunity-rating">
                  <Star className="star-icon" />
                  <span>4.7</span>
                </div>
              </div>
              <p className="opportunity-description">
                Join our monthly beach cleanup efforts to protect marine life and keep our coastlines beautiful.
              </p>
              <div className="opportunity-details">
                <div className="detail-item">
                  <MapPin className="detail-icon" />
                  <span>Sunset Beach</span>
                </div>
                <div className="detail-item">
                  <Clock className="detail-icon" />
                  <span>Monthly, 3 hours</span>
                </div>
              </div>
              <button className="opportunity-button">Apply Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-content">
          <h2>What Our Volunteers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"This platform connected me with the perfect volunteer opportunity. I've been tutoring kids for 6 months now and it's incredibly rewarding!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <Users className="avatar-icon" />
                </div>
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <p>Education Volunteer</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The impact tracking feature helps me see how my volunteer hours are making a real difference in the community. It's motivating!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <Heart className="avatar-icon" />
                </div>
                <div className="author-info">
                  <h4>Michael Chen</h4>
                  <p>Healthcare Volunteer</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"I love how easy it is to find opportunities that fit my schedule. The flexible options make volunteering accessible for busy professionals."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <Globe className="avatar-icon" />
                </div>
                <div className="author-info">
                  <h4>Emma Rodriguez</h4>
                  <p>Environmental Volunteer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-content">
          <div className="cta-content">
            <h2>Ready to Make a Difference?</h2>
            <p>Join thousands of volunteers who are already creating positive change in their communities. Start your volunteer journey today.</p>
            <div className="cta-buttons">
              <button className="cta-button primary">
                Get Started
                <ArrowRight className="button-icon" />
              </button>
              <button className="cta-button secondary">Browse Opportunities</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;