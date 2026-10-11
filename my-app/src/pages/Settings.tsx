import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPersonRunning, 
  faLifeRing, 
  faPhone, 
  faShieldHeart, 
  faChild, 
  faClock, 
  faCheck, 
  faUserPlus 
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Settings.css';

interface PendingApproval {
  id: string;
  childName: string;
  requester: string;
  bowlName: string;
}

export const SettingsPage: React.FC = () => {
  const navigate = useNavigate();

  // Mock State for Hackathon presentation tracking
  const [timeRestriction, setTimeRestriction] = useState<string>('8:00 PM - 7:00 AM');
  const [approvals, setApprovals] = useState<PendingApproval[]>([
    { id: '1', childName: 'Leo', requester: 'margherita_dot_js', bowlName: 'Tomato Sauce Scientists' },
    { id: '2', childName: 'Leo', requester: 'ravioli_router', bowlName: 'Pasta Painters' }
  ]);

  // 1. QUICK ESCAPE ACTION (Changes view instantly to protect user privacy)
  const handleQuickEscape = () => {
    // Redirects completely outside the app layout instantly
    window.location.href = 'https://google.com';
  };

  const handleApprove = (id: string) => {
    setApprovals(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="explore-container">
      {/* Page Header */}
      <header className="explore-header">
        <h1>Account Settings</h1>
        <p>Manage your account configurations, family controls, and workspace safety options.</p>
      </header>

      {/* EMERGENCY QUICK ESCAPE CTA BANNER */}
      <div className="quick-escape-banner">
        <div className="escape-text">
          <h3>Need to leave quickly?</h3>
          <p>Clicking this button immediately closes this page and redirects your active browser window to an unrelated safe site.</p>
        </div>
        <button className="escape-btn" onClick={handleQuickEscape}>
          <FontAwesomeIcon icon={faPersonRunning} /> Quick Escape (Exit Page)
        </button>
      </div>

      <div className="bowls-grid">
        
        {/* SECTION 1: CRISIS HELP RESOURCES PANEL */}
        <section className="bowl-card crisis-panel">
          <div className="panel-title-wrapper">
            <FontAwesomeIcon icon={faLifeRing} className="panel-icon-crisis" />
            <h2>Help &amp; Support Crisis Center</h2>
          </div>
          <p className="section-intro">If you or someone you know is going through a difficult time, resources are available. You are not alone.</p>
          
          <div className="resource-links-grid">
            <div className="resource-item-box">
              <h4>Suicide &amp; Crisis Lifeline</h4>
              <p>Free, confidential, 24/7 support available via text message or telephone calling channels.</p>
              <a href="https://988lifeline.org" target="_blank" rel="noreferrer" className="resource-link-btn">
                <FontAwesomeIcon icon={faPhone} /> Visit 988 Lifeline
              </a>
            </div>

            <div className="resource-item-box">
              <h4>Domestic Violence Support</h4>
              <p>Highly secure and private tools to connect with validation, protection planning strategies, and shelter networks.</p>
              <a href="https://thehotline.org" target="_blank" rel="noreferrer" className="resource-link-btn safety-btn-alt">
                <FontAwesomeIcon icon={faShieldHeart} /> Visit The Hotline
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 2: KIDS ACCOUNT MANAGEMENT PANEL */}
        <section className="bowl-card kids-panel">
          <div className="panel-title-wrapper">
            <FontAwesomeIcon icon={faChild} className="panel-icon-kids" />
            <h2>Kids Account Dashboard</h2>
          </div>

          {/* Child Identity Profile Summary Card Block */}
          <div className="child-profile-summary">
            <div className="child-avatar">L</div>
            <div className="child-meta">
              <h3>Leo (Child Account)</h3>
              <p className="status-badge">Active Managed Profile</p>
            </div>
          </div>

          {/* Child Friend Tracking Management Sub-Grid */}
          <div className="kids-dashboard-sub">
            <h4>Leo's Friend Network</h4>
            <ul className="kids-friend-list">
              <li className="kids-friend-item">
                <div className="mini-avatar">🍕</div>
                <span>@pepperoni_pal</span>
              </li>
              <li className="kids-friend-item">
                <div className="mini-avatar">🌱</div>
                <span>@basil_buddy</span>
              </li>
              <li className="kids-friend-item">
                <div className="mini-avatar">🧀</div>
                <span>@mozzarella_kid</span>
              </li>
            </ul>
          </div>

          {/* Bowl Member Add Request Form Approvals Block */}
          <div className="kids-dashboard-sub">
            <h4>Pending Bowl Category Approvals</h4>
            {approvals.length === 0 ? (
              <p className="no-requests-msg">All connection requests have been reviewed.</p>
            ) : (
              <ul className="approval-list-container">
                {approvals.map((req) => (
                  <li key={req.id} className="approval-request-card">
                    <div className="request-details">
                      <p><strong>{req.childName}</strong> was invited by <span>@{req.requester}</span> to join the bowl category <strong>{req.bowlName}</strong>.</p>
                    </div>
                    <button className="approve-action-btn" onClick={() => handleApprove(req.id)}>
                      <FontAwesomeIcon icon={faCheck} /> Approve
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Screentime/App Availability Lockout Configurations */}
          <div className="kids-dashboard-sub">
            <h4>Usage &amp; Lockout Time Restrictions</h4>
            <div className="time-picker-wrapper">
              <FontAwesomeIcon icon={faClock} className="picker-icon" />
              <div className="picker-controls">
                <label htmlFor="lockoutTime">Restrict App Access During These Hours:</label>
                <select 
                  id="lockoutTime"
                  value={timeRestriction} 
                  onChange={(e) => setTimeRestriction(e.target.value)}
                  className="lockout-dropdown-select"
                >
                  <option value="No Restrictions">No Restrictions (Open Access)</option>
                  <option value="8:00 PM - 7:00 AM">8:00 PM - 7:00 AM (Bedtime Lockout)</option>
                  <option value="9:00 PM - 6:00 AM">9:00 PM - 6:00 AM (Standard Lockout)</option>
                  <option value="6:00 PM - 8:00 AM">6:00 PM - 8:00 AM (Strict Off-hours)</option>
                </select>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default SettingsPage;
