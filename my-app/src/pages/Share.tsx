import React, { useState } from 'react';
import '../styles/Share.css';

const AVAILABLE_BOWLS = ['Friends', 'Family', 'Besties', 'Chefs'];

export const Share: React.FC = () => {
    const [selectedBowl, setSelectedBowl] = useState<string>('Family');
    const [usePrompt, setUsePrompt] = useState<boolean>(false);

    // Hardcoded daily prompt example that updates the textbox if clicked
    const DAILY_PROMPT = "What's a place you've wanted to travel to but haven't yet?";

    return (
        <div className="share-page-container">
            {/* Page Header */}
            <header className="share-header">
                <h1>Share Good Vibes</h1>
                <p>Drop something warm into your close circles.</p>
            </header>

            {/* Daily Prompt Banner Accent */}
            <div className="prompt-card-banner">
                <div className="prompt-badge">✨ Daily Prompt</div>
                <p className="prompt-text">"{DAILY_PROMPT}"</p>
                <button 
                    className={`use-prompt-btn ${usePrompt ? 'prompt-selected' : ''}`}
                    onClick={() => setUsePrompt(!usePrompt)}
                >
                    {usePrompt ? '✓ Using Prompt' : '✍️ Answer this prompt'}
                </button>
            </div>

            {/* Content Creator Card */}
            <main className="creator-card">
                
                {/* 1. Explicit Privacy Target: Selecting the Bowl */}
                <section className="creator-section">
                    <label className="section-label">1. Choose who can see this (Select a Bowl):</label>
                    <div className="bowl-selection-row">
                        {AVAILABLE_BOWLS.map((bowl) => (
                            <button
                                key={bowl}
                                type="button"
                                className={`bowl-select-pill ${selectedBowl === bowl ? 'active' : ''}`}
                                onClick={() => setSelectedBowl(bowl)}
                            >
                                🥣 {bowl}
                            </button>
                        ))}
                    </div>
                    <p className="privacy-hint-text">
                        🔒 Safe Space: This post will *only* be visible to people inside your <strong>{selectedBowl}</strong> bowl.
                    </p>
                </section>

                {/* 2. Text Input Area */}
                <section className="creator-section">
                    <label className="section-label">2. Write your post:</label>
                    <textarea 
                        className="post-textarea-input"
                        placeholder="What's cooking? Share your thoughts, a quick life update, or attach a photo..."
                        defaultValue={usePrompt ? DAILY_PROMPT + "\n\n" : ""}
                        key={usePrompt ? "with-prompt" : "empty"} // Forces reset/update on state click
                    />
                </section>

                {/* 3. Media Upload Triggers Placeholder */}
                <section className="creator-section">
                    <label className="section-label">3. Add media (Optional):</label>
                    <div className="media-upload-grid">
                        <div className="media-upload-box">
                            <span className="upload-icon">🖼️</span>
                            <span className="upload-text">Image</span>
                        </div>
                        <div className="media-upload-box">
                            <span className="upload-icon">🎥</span>
                            <span className="upload-text">Video</span>
                        </div>
                        <div className="media-upload-box">
                            <span className="upload-icon">👾</span>
                            <span className="upload-text">GIF</span>
                        </div>
                    </div>
                </section>

                {/* Submit Action Block */}
                <footer className="creator-footer">
                    <button className="cancel-post-btn" type="button">Cancel</button>
                    <button className="publish-post-btn" type="button">
                        Publish to {selectedBowl}
                    </button>
                </footer>

            </main>
        </div>
    );
};

export default Share;
