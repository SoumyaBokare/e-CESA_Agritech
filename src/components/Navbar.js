import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            if (window.scrollY > window.innerHeight) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`custom-navbar ${isScrolled ? 'scrolled' : ''} ${isHidden ? 'navbar-hidden' : ''}`}>
            <div className="nav-container">
                <div className="nav-pills">
                    <button className="nav-link" onClick={() => scrollToSection('home')}>Home</button>
                    <button className="nav-link" onClick={() => scrollToSection('about')}>About</button>
                    <button className="nav-link" onClick={() => scrollToSection('timeline')}>Timeline</button>
                    <button className="nav-link" onClick={() => scrollToSection('prizes')}>Prizes</button>
                    <button className="nav-link" onClick={() => scrollToSection('rules')}>Rules</button>
                    <button className="nav-link" onClick={() => scrollToSection('sponsors')}>Sponsors</button>
                    <button className="nav-link" onClick={() => scrollToSection('footer')}>Contact</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;