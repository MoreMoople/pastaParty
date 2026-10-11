import React, { useState } from 'react';
import '../styles/Bowls.css';

interface Bowl {
  id: string;
  name: string;
  description: string;
  members: string[];
}

const INITIAL_BOWLS: Bowl[] = [
  {
    id: '1',
    name: 'Family',
    description: 'Growing closer to our loved ones!',
    members: ['Emma', 'Sumaya', 'Saranya']
  },
  {
    id: '2',
    name: 'Besties',
    description: 'Hanging out with my favorite people!',
    members: ['Morgan Free', 'Sam Chen', 'Chloe Bennett']
  },
  {
    id: '3',
    name: 'Friends',
    description: 'Super fun people!',
    members: ['Morgan Free', 'Sam Chen', 'Chloe Bennett', 'Aimee Johnson', 'Shayna Hussein']
  },
  {
    id: '4',
    name: 'Chefs',
    description: 'Cooking up cool things in the kitchen!',
    members: ['Jordan Taylor', 'Marcus Brody', 'Elena Rostova', 'Chef Boyardee']
  }
];

// Mock database of search discovered users on Rigatoni
const MOCK_PLATFORM_USERS = [
  'carbonara_king',
  'margherita_dot_js',
  'fettuccine_coder',
  'parmesan_power',
  'ravioli_router',
  'penne_tester',
  'lasagna_layer'
];

export const Bowls: React.FC = () => {
  const [bowls, setBowls] = useState<Bowl[]>(INITIAL_BOWLS);
  const [selectedBowlId, setSelectedBowlId] = useState<string>('1');
  
  // Creation Form State
  const [newBowlName, setNewBowlName] = useState('');
  const [newBowlDesc, setNewBowlDesc] = useState('');

  // User Search State
  const [searchQuery, setSearchQuery] = useState('');

  const activeBowl = bowls.find(b => b.id === selectedBowlId) || bowls[0];

  // Filter global users based on what the presenter types
  const filteredUsers = searchQuery.trim() === '' 
    ? [] 
    : MOCK_PLATFORM_USERS.filter(user => 
        user.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !activeBowl.members.includes(user)
      );

  const handleCreateBowl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBowlName.trim()) return;

    const newBowl: Bowl = {
      id: Date.now().toString(),
      name: newBowlName,
      description: newBowlDesc || 'No description provided yet.',
      members: ['You (Creator)']
    };

    setBowls([...bowls, newBowl]);
    setSelectedBowlId(newBowl.id);
    setNewBowlName('');
    setNewBowlDesc('');
  };

  const handleAddMember = (username: string) => {
    setBowls(prevBowls => 
      prevBowls.map(bowl => {
        if (bowl.id === selectedBowlId) {
          return {
            ...bowl,
            members: [...bowl.members, username]
          };
        }
        return bowl;
      })
    );
    // Clear search bar after adding
    setSearchQuery('');
  };

  return (
    <div className="explore-container">
      {/* Page Header */}
      <header className="explore-header">
        <h1>Rigatoni Bowls</h1>
        <p>Manage your custom spaces, view active members, and cook up new communities.</p>
      </header>

      {/* Bowls Selection Row */}
      <section className="bowls-section">
        <h3>Select a Bowl to Inspect</h3>
        <div className="bowls-track">
          {bowls.map((bowl) => (
            <button
                key={bowl.id}
                className={`bowl-pill ${selectedBowlId === bowl.id ? 'active-bowl' : ''}`}
                onClick={() => {
                    setSelectedBowlId(bowl.id);
                    setSearchQuery('');
                }}
                >
                <i className="fa-solid fa-gear" style={{ marginRight: '6px' }}></i> {bowl.name}
            </button>
          ))}
        </div>
      </section>

      {/* Main Grid Layout */}
      <div className="bowls-grid">
        
        {/* Bowl Details Panel */}
        <div className="bowl-card detail-panel">
          <div className="card-header">
            <h2>{activeBowl.name}</h2>
            <span className="member-count">{activeBowl.members.length} members</span>
          </div>
          
          <div className="detail-section">
            <h4>Description</h4>
            <p className="bowl-description">{activeBowl.description}</p>
          </div>

          {/* NEW: Add People Search Component */}
          <div className="detail-section search-member-section">
            <h4>Add People to Bowl</h4>
            <div className="search-input-wrapper">
            <input 
                type="text" 
                placeholder="Search by username..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="member-search-bar"
            />
            {searchQuery && <span className="search-icon"><i className="fa-solid fa-magnifying-glass"></i></span>}
            </div>

            {/* Live Search Results Dropdown */}
            {filteredUsers.length > 0 && (
              <ul className="search-results-box">
                {filteredUsers.map((user) => (
                  <li key={user} className="search-result-item">
                    <span>@{user}</span>
                    <button 
                      type="button" 
                      className="add-user-btn"
                      onClick={() => handleAddMember(user)}
                    >
                      + Add
                    </button>
                  </li>
                ))}
              </ul>
            )}
            {searchQuery.trim() !== '' && filteredUsers.length === 0 && (
              <p className="no-users-found">No matching chefs found or already in bowl.</p>
            )}
          </div>

          <div className="detail-section">
            <h4>Members in this Bowl</h4>
            <ul className="member-list">
              {activeBowl.members.map((member, index) => (
                <li key={index} className="member-item">
                  <div className="avatar-placeholder">
                    {member.startsWith('@') ? member.charAt(1) : member.charAt(0)}
                  </div>
                  <span>{member.startsWith('@') ? member : `@${member}`}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Create a Bowl Form Panel */}
        <div className="bowl-card creation-panel">
          <h3>Toss a New Bowl</h3>
          <form onSubmit={handleCreateBowl}>
            <div className="form-group">
              <label htmlFor="bowlName">Bowl Name</label>
              <input
                id="bowlName"
                type="text"
                placeholder="e.g., Spicy Arrabbiata Chat"
                value={newBowlName}
                onChange={(e) => setNewBowlName(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="bowlDesc">Description</label>
              <textarea
                id="bowlDesc"
                rows={3}
                placeholder="What should people share in this category?"
                value={newBowlDesc}
                onChange={(e) => setNewBowlDesc(e.target.value)}
              />
            </div>

            <button type="submit" className="submit-btn">
              Create Bowl
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Bowls;
