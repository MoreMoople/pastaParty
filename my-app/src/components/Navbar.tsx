import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

type NavbarProps = {
    links: { text: string; url: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
    const location = useLocation();

    return (
        <nav className="navbar-container">
            {/* Far Left Logo Link */}
            <Link to="/" className="navbar-logo">
                rigatoni
            </Link>

            {/* Navigation links structure */}
            <ul className="navbar-menu">
                {links.map((link, index) => {
                    const isLogOut = link.text.toLowerCase() === 'log out';
                    const isSettings = link.text.toLowerCase().includes('settings');
                    
                    // Determine custom layout pushing classes
                    let itemClass = '';
                    if (isSettings) itemClass = 'settings-item';
                    if (isLogOut) itemClass = 'logout-item';

                    return (
                        <li key={index} className={itemClass}>
                            <Link 
                                to={link.url}
                                className={location.pathname === link.url ? 'active' : ''}
                            >
                                {/* Injects crisp font icon for perfect color contrast overlay control */}
                                {isSettings && <FontAwesomeIcon icon={faGear} style={{ marginRight: '6px' }} />}
                                {link.text}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Navbar;