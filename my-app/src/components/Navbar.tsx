import React from 'react';
import '../styles/Navbar.css'

type NavbarProps = {
    links: { text: string; url: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
    return (
        <nav>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;