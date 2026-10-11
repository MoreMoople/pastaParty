import './App.css'
import Home from './pages/index'
import Navbar from './components/Navbar'
import { Explore } from './pages/Explore';
import { Chat } from './pages/Chat'
import { Plan } from './pages/Plan'
import { Profile } from './pages/Profile'
import { Share } from './pages/Share'
import { Bowls } from './pages/Bowls'
import { SettingsPage } from './pages/Settings';
import { HashRouter, Routes, Route } from 'react-router-dom';

// Create a placeholder page or point to profile for now
const SettingsPlaceholder = () => <div style={{padding: '40px', fontFamily: 'Fredoka, sans-serif'}}><h2>⚙️ Settings Coming Soon</h2></div>;

// Inside your App.tsx file:
const App: React.FC = () => {
  const navLinks = [
    { text: 'explore', url: '/explore' },
    { text: 'chat', url: '/chat' },
    { text: 'share', url: '/share' },
    { text: 'plan', url: '/plan' },
    { text: 'profile', url: '/profile' },
    { text: 'bowls', url: '/bowls' },
    { text: 'settings', url: '/settings' }, // Clean text string without emoji
    { text: 'log out', url: '/logout' },
  ];

  return (
    <HashRouter>
      <Navbar links={navLinks}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/share" element={<Share />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Home />} />
        <Route path="/bowls" element={<Bowls />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
