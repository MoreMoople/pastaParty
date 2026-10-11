import React, { useState } from 'react';
import '../styles/Explore.css';

interface Post {
    id: number;
    author: string;
    avatar: string;
    timestamp: string;
    bowl: string;
    text: string;
    mediaType?: 'image' | 'video' | 'gif';
    mediaUrl?: string;
}

const MOCK_BOWLS = ['All', 'Friends', 'Family', 'Besties', 'Chefs'];

const MOCK_POSTS: Post[] = [
    {
        id: 1,
        author: 'Prof. Lester',
        avatar: 'https://i.postimg.cc/5tC7Xfb9/profile1.jpg',
        timestamp: '2 hours ago',
        bowl: 'Family',
        text: 'I just had a fantastic time at Hacks for Humanity! It would be so cool if you all joined next year!',
        mediaType: 'image',
        mediaUrl: 'https://i.postimg.cc/1X2VV19z/hacksforhumanity.jpg'
    },
    {
        id: 2,
        author: 'Happy Hacker',
        avatar: 'https://i.postimg.cc/VNCGJzm6/profile10.jpg',
        timestamp: 'Yesterday',
        bowl: 'Friends',
        text: 'My favorite part of today was meeting so many cool new people!',
        mediaType: 'gif',
        mediaUrl: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExODA5ODZsbW50eTYzbTJwbW16b3M4Yjg2ZmFpaW1yMnptOHoyc3h1bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WOIGpnJ3ye445BUQl4/giphy.gif'
    }
];

// Available reactions for our cozy food-themed social app
const REACTION_OPTIONS = [
    { emoji: '❤️', label: 'Love' },
    { emoji: '😋', label: 'Yum' },
    { emoji: '👨‍🍳', label: 'Chef' },
    { emoji: '🙏', label: 'Thanks' }
];

export const Explore: React.FC = () => {
    const [selectedBowl, setSelectedBowl] = useState<string>('All');
    
    // State to track which reaction is selected for which post ID: e.g., { 1: '❤️', 2: '😋' }
    const [userReactions, setUserReactions] = useState<Record<number, string>>({});

    const handleReactionClick = (postId: number, emoji: string) => {
        setUserReactions(prev => ({
            ...prev,
            // If they click the same emoji again, remove it (toggle feature)
            [postId]: prev[postId] === emoji ? '' : emoji
        }));
    };

    const filteredPosts = selectedBowl === 'All' 
        ? MOCK_POSTS 
        : MOCK_POSTS.filter(post => post.bowl === selectedBowl);

    return (
        <div className="explore-container">
            <header className="explore-header">
                <h1>Explore the Feed</h1>
                <p>Discover what is cooking in your network</p>
            </header>

            <section className="bowls-section">
                <h3>Select a Bowl:</h3>
                <div className="bowls-track">
                    {MOCK_BOWLS.map((bowl) => (
                        <button
                            key={bowl}
                            className={`bowl-pill ${selectedBowl === bowl ? 'active-bowl' : ''}`}
                            onClick={() => setSelectedBowl(bowl)}
                        >
                            🥣 {bowl}
                        </button>
                    ))}
                </div>
            </section>

            <main className="posts-feed">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <article key={post.id} className="post-card">
                            <div className="post-card-header">
                                <img src={post.avatar} alt={post.author} className="author-avatar" />
                                <div className="author-info">
                                    <h4 className="author-name">{post.author}</h4>
                                    <span className="post-meta">{post.timestamp} • <span className="bowl-tag">{post.bowl}</span></span>
                                </div>
                            </div>

                            <p className="post-text">{post.text}</p>

                            {post.mediaType && post.mediaUrl && (
                                <div className="post-media-box">
                                    {post.mediaType === 'video' ? (
                                        <video controls className="post-media-asset">
                                            <source src={post.mediaUrl} type="video/mp4" />
                                        </video>
                                    ) : (
                                        <img src={post.mediaUrl} alt="Post asset" className="post-media-asset" />
                                    )}
                                </div>
                            )}

                            {/* NEW: Reaction Panel Section */}
                            <div className="post-actions-panel">
                                <span className="action-prompt">Leave an acknowledgment:</span>
                                <div className="reactions-container">
                                    {REACTION_OPTIONS.map((option) => {
                                        const isCurrentReaction = userReactions[post.id] === option.emoji;
                                        return (
                                            <button
                                                key={option.label}
                                                title={option.label}
                                                className={`reaction-button ${isCurrentReaction ? 'reacted' : ''}`}
                                                onClick={() => handleReactionClick(post.id, option.emoji)}
                                            >
                                                <span className="reaction-emoji">{option.emoji}</span>
                                                {isCurrentReaction && <span className="reaction-check">✓</span>}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </article>
                    ))
                ) : (
                    <div className="empty-feed">No posts found in this bowl yet!</div>
                )}
            </main>
        </div>
    );
};

export default Explore;
