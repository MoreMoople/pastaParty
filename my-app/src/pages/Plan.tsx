import React, { useState } from 'react';
import '../styles/Plan.css';

interface LocalDiscoveryEvent {
    id: number;
    title: string;
    date: string;
    venue: string;
    description: string;
}

const MOCK_LOCAL_EVENTS: LocalDiscoveryEvent[] = [
    {
        id: 101,
        title: 'Downtown Autumn Farmers Market 🍁',
        date: 'Saturday, Oct 17',
        venue: 'Town Square Park',
        description: 'Gather fresh seasonal ingredients, local garlic, and hand-milled flours directly from regional growers.'
    },
    {
        id: 102,
        title: 'Annual Italian Street Food Festival 🍕',
        date: 'Oct 24 - Oct 25',
        venue: 'Waterfront Promenade',
        description: 'An open-air celebration featuring local vendors cooking historic wood-fired breads, porchetta, and fresh cannoli.'
    }
];

const AVAILABLE_BOWLS = ['Family', 'Friends', 'Besties', 'Chefs'];
const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const CALENDAR_DAYS = [
    { day: null }, { day: null }, { day: null }, { day: null }, 
    { day: 1 }, { day: 2 }, { day: 3, event: { title: 'Sunday Preps 🍅', bowl: 'Family' } },
    { day: 4 }, { day: 5 }, { day: 6 }, { day: 7 }, { day: 8 }, { day: 9 }, 
    { day: 10 }, { day: 11, event: { title: 'Ragù Night 🍝', bowl: 'Family' } }, { day: 12 }, 
    { day: 13 }, { day: 14 }, { day: 15 }, { day: 16 }, { day: 17, event: { title: 'Pasta Class 👨‍🍳', bowl: 'Chefs' } }, 
    { day: 18 }, { day: 19 }, { day: 20 }, { day: 21 }, { day: 22 }, { day: 23, event: { title: 'Wine Tasting 🍷', bowl: 'Friends' } }, 
    { day: 24 }, { day: 25 }, { day: 26 }, { day: 27 }, { day: 28 }, { day: 29 }, 
    { day: 30 }, { day: 31, event: { title: 'Halloween Pizza 🍕', bowl: 'Besties' } }
];

export const Plan: React.FC = () => {
    const [eventTitle, setEventTitle] = useState('');
    const [targetBowl, setTargetBowl] = useState('Family');
    const [eventDate, setEventDate] = useState('2026-10-10');
    const [eventTime, setEventTime] = useState('18:00'); // New Time state
    const [eventDescription, setEventDescription] = useState(''); // New Description state

    return (
        <div className="plan-page-container">
            <header className="plan-header">
                <h1>Plan & Gather</h1>
                <p>Coordinate warm real-world moments with your circles.</p>
            </header>

            <div className="plan-grid-layout">
                {/* LEFT SIDE: Full Calendar & Creator Box */}
                <main className="calendar-main-panel">
                    
                    {/* Full Month Calendar Dashboard View */}
                    <section className="plan-card calendar-dashboard-card">
                        <div className="calendar-month-header">
                            <h2>October 2026</h2>
                            <div className="calendar-legend">
                                <span className="legend-dot family">Family</span>
                                <span className="legend-dot friends">Friends</span>
                                <span className="legend-dot chefs">Chefs</span>
                                <span className="legend-dot foodies">Besties</span>
                            </div>
                        </div>

                        <div className="calendar-weekdays-row">
                            {WEEKDAYS.map(day => (
                                <div key={day} className="weekday-label">{day}</div>
                            ))}
                        </div>

                        <div className="calendar-days-grid">
                            {CALENDAR_DAYS.map((cell, idx) => (
                                <div 
                                    key={idx} 
                                    className={`calendar-day-cell ${cell.day === null ? 'empty-cell' : ''} ${cell.day === 10 ? 'today-cell' : ''}`}
                                >
                                    {cell.day && <span className="day-number-label">{cell.day}</span>}
                                    {cell.event && (
                                        <div className={`calendar-event-sticker bowl-${cell.event.bowl.toLowerCase()}`}>
                                            <span className="event-sticker-title">{cell.event.title}</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Updated Event Creator Form Section */}
                    <section className="plan-card creator-subcard">
                        <h3>🗓️ Schedule a New Gathering</h3>
                        
                        <div className="input-row">
                            <div className="input-group flex-2">
                                <label>What are we doing?</label>
                                <input 
                                    type="text" 
                                    placeholder="e.g., Sunday Roast, Coffee Catchup..." 
                                    value={eventTitle}
                                    onChange={(e) => setEventTitle(e.target.value)}
                                    className="plan-text-input"
                                />
                            </div>
                            <div className="input-group flex-1">
                                <label>Target Bowl</label>
                                <select 
                                    value={targetBowl} 
                                    onChange={(e) => setTargetBowl(e.target.value)}
                                    className="plan-select-dropdown"
                                >
                                    {AVAILABLE_BOWLS.map(bowl => (
                                        <option key={bowl} value={bowl}>🥣 {bowl}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Date and Time selectors in their own row */}
                        <div className="input-row margin-top-16">
                            <div className="input-group flex-1">
                                <label>Date</label>
                                <input 
                                    type="date" 
                                    value={eventDate}
                                    onChange={(e) => setEventDate(e.target.value)}
                                    className="plan-text-input"
                                />
                            </div>
                            <div className="input-group flex-1">
                                <label>Time</label>
                                <input 
                                    type="time" 
                                    value={eventTime}
                                    onChange={(e) => setEventTime(e.target.value)}
                                    className="plan-text-input"
                                />
                            </div>
                        </div>

                        {/* New Description field */}
                        <div className="input-group margin-top-16">
                            <label>Notes / Description (Optional)</label>
                            <textarea 
                                placeholder="Add kitchen notes, what to bring details, or directions..." 
                                value={eventDescription}
                                onChange={(e) => setEventDescription(e.target.value)}
                                className="plan-textarea-input"
                                rows={3}
                            />
                        </div>

                        <div className="creator-actions-footer margin-top-16">
                            <button type="button" className="create-event-btn">
                                Post to {targetBowl} Calendar
                            </button>
                        </div>
                    </section>
                </main>

                {/* RIGHT SIDE: Local Community Discovery Board */}
                <aside className="local-discovery-sidebar">
                    <div className="plan-card discovery-subcard">
                        <div className="discovery-header">
                            <h3>🌍 Local Inspiration</h3>
                            <span className="local-area-badge">Tempe Area</span>
                        </div>
                        <p className="discovery-intro">Community events to add to your calendar or invite your families to join:</p>

                        <div className="local-cards-list">
                            {MOCK_LOCAL_EVENTS.map(localEvent => (
                                <div key={localEvent.id} className="local-event-mini-card">
                                    <span className="local-date-stamp">{localEvent.date}</span>
                                    <h4>{localEvent.title}</h4>
                                    <p className="local-venue-text">🏢 {localEvent.venue}</p>
                                    <p className="local-desc-text">{localEvent.description}</p>
                                    <button type="button" className="invite-circle-action-btn">
                                        📬 Invite a Bowl...
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Plan;
