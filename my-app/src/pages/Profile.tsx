import React from 'react';
import '../styles/Profile.css';

interface UserProfile {
    name: string;
    handle: string;
    bio: string;
    avatar: string;
    banner: string;
    connectionsCount: number;
}

interface UserPost {
    id: number;
    timestamp: string;
    bowl: string;
    text: string;
    mediaUrl?: string;
}

const MOCK_PROFILE: UserProfile = {
    name: 'Saranya',
    handle: '@saranya',
    bio: 'Gathering my favorite people and sharing the family recipes that keep our kitchen warm. No public noise, just good food and better company. 🍅🍝',
    avatar: 'https://i.postimg.cc/gj23Zb1M/image.png',
    banner: 'https://i.postimg.cc/Y0rzzWLs/image.png',
    connectionsCount: 14 // Small, intimate circle numbers
};

const MOCK_MY_POSTS: UserPost[] = [
    {
        id: 101,
        timestamp: '3 days ago',
        bowl: 'Family',
        text: 'Baking some delicious cookies! Can\'t wait to share them with you!',
        mediaUrl: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzNndHBrOGJ6dzE2am84bWQyOG9lbzJ4ZWQ5aDZrZHVrOXRjdWhqcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OWBePM5rw75xpS2vaD/giphy.gif'
    },
    {
        id: 102,
        timestamp: '1 week ago',
        bowl: 'Friends',
        text: 'Had the absolute best espresso this morning at the small corner cafe. Missing our Sunday brunches together!'
    }
];

export const Profile: React.FC = () => {
    return (
        <div className="profile-container">
            {/* Header Layout: Banner & Avatar Stack */}
            <header className="profile-header-card">
                <div className="banner-wrapper">
                    <img src={MOCK_PROFILE.banner} alt="Profile background banner" className="profile-banner" />
                </div>
                
                <div className="avatar-meta-row">
                    <img src={MOCK_PROFILE.avatar} alt={MOCK_PROFILE.name} className="profile-avatar-circle" />
                    <button className="edit-profile-btn">Edit Space</button>
                </div>
            </header>

            {/* Bio & Details Section */}
            <section className="profile-bio-box">
                <h2 className="profile-name">{MOCK_PROFILE.name}</h2>
                <span className="profile-handle">{MOCK_PROFILE.handle}</span>
                
                <p className="profile-bio-text">{MOCK_PROFILE.bio}</p>
                
                <div className="profile-stats">
                    <span className="stat-pill">👥 {MOCK_PROFILE.connectionsCount} Trusted Connections</span>
                </div>
            </section>

            {/* My Personal Past Timeline */}
            <main className="profile-feed-section">
                <h3 className="feed-title">My Shared Memories</h3>
                
                <div className="posts-feed">
                    {MOCK_MY_POSTS.map((post) => (
                        <article key={post.id} className="post-card">
                            <div className="post-card-header">
                                <img src={MOCK_PROFILE.avatar} alt={MOCK_PROFILE.name} className="author-avatar" />
                                <div className="author-info">
                                    <h4 className="author-name">{MOCK_PROFILE.name}</h4>
                                    <span className="post-meta">
                                        {post.timestamp} • 
                                        {/* Highly explicit visibility badge to guarantee user confidence */}
                                        <span className="privacy-badge"> Visible to: 🥣 {post.bowl}</span>
                                    </span>
                                </div>
                            </div>

                            <p className="post-text">{post.text}</p>

                            {post.mediaUrl && (
                                <div className="post-media-box">
                                    <img src={post.mediaUrl} alt="Post attachment asset" className="post-media-asset" />
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Profile;
