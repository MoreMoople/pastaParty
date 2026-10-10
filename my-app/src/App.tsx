import './App.css'
import Home from './pages/index'
import Navbar from './components/Navbar'

const App: React.FC = () => {
  const navLinks = [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/about' },
  ];

  return (
    <>
    <Navbar links={navLinks}/>
    <Home />
    </>
  );
};

export default App
