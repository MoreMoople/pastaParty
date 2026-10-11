import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBowlFood, 
  faCompass, 
  faUserShield,
  faCalendarDays, 
  faArrowRight 
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Home.css';

export const Home: React.FC = () => {
  return (
    <div className="home-wrapper">
      
      {/* 1. HERO SECTION */}
      <header className="home-hero-container">
        <div className="hero-badge">🥣 Welcome to Rigatoni</div>
        <h1>Cook Up Your Community</h1>
        <p className="hero-subtitle">
          The curated, safe, and close-knit alternative to chaotic social feeds. Organize your inner circles into custom category <strong>"Bowls"</strong> to share media, plan meetups, and protect what matters most.
        </p>
        <div className="hero-actions-row">
          <Link to="/explore" className="primary-cta-btn">
            Explore Rigatoni <FontAwesomeIcon icon={faArrowRight} />
          </Link>
          <Link to="/settings" className="secondary-cta-btn">
            Manage Family Setup
          </Link>
        </div>
      </header>

      {/* 2. CORE FEATURES MATRIX */}
      <main className="explore-container home-features-wrapper">
        <h2 className="section-title">Fresh Features, Prepared with Care</h2>
        <p className="section-desc">Everything you need to gather locally, coordinate reliably, and converse securely.</p>
        
        <div className="features-grid-layout">
          
          {/* Feature 1: Private Bowls */}
          <div className="bowl-card feature-showcase-card">
            <div className="feature-icon-circle green-bg">
              <FontAwesomeIcon icon={faBowlFood} />
            </div>
            <h3>Private Bowls</h3>
            <p>
              Craft custom groups for your family, friends, roommates, and more. Filter posts seamlessly by topic container so information never spills over into the wrong hands.
            </p>    
            <Link to="/bowls" className="feature-inline-link">
              Craft a new bowl &rarr;
            </Link>
          </div>

          {/* Feature 2: Community Event Finder */}
          <div className="bowl-card feature-showcase-card">
            <div className="feature-icon-circle brown-bg">
              <FontAwesomeIcon icon={faCompass} />
            </div>
            <h3>Local Event Finder</h3>
            <p>
              Discover nearby events, craft fairs, and farmers markets. Find curated, vetted physical gatherings directly aligned with your interests.
            </p>
            <Link to="/explore" className="feature-inline-link">
              Find fresh events &rarr;
            </Link>
          </div>

          {/* Feature 3: Live Calendar Syncing */}
          <div className="bowl-card feature-showcase-card">
            <div className="feature-icon-circle green-bg">
              <FontAwesomeIcon icon={faCalendarDays} />
            </div>
            <h3>Shared Bowl Calendars</h3>
            <p>
              Keep tracking dates completely headache-free. Every individual bowl category generates an auto-compiled agenda map so you can visually verify when soccer games, caretaking tasks, or study marathons kick off.
            </p>
            <Link to="/plan" className="feature-inline-link">
              View your dashboard planner &rarr;
            </Link>
          </div>

          {/* Feature 4: Granular Parental Controls */}
          <div className="bowl-card feature-showcase-card">
            <div className="feature-icon-circle brown-bg">
              <FontAwesomeIcon icon={faUserShield} />
            </div>
            <h3>Robust Parental Controls</h3>
            <p>
              Keep internet browsing completely wholesome and safe for young creators. Set custom lockout windows, supervise external contact list channels, and explicitly approve custom category invites.
            </p>
            <Link to="/settings" className="feature-inline-link">
              Configure kids dashboard &rarr;
            </Link>
          </div>

        </div>
      </main>

      {/* 3. PITCH FOOTER CTA */}
      <section className="home-pitch-banner">
        <h2>Ready to build your space?</h2>
        <p>Grab your friends, assemble your recipes, and slice up the noise of modern timelines.</p>
        <Link to="/share" className="pitch-action-btn">
          Start Sharing Today
        </Link>
      </section>

    </div>
  );
};

export default Home;
