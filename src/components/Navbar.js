import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`custom-navbar ${isScrolled ? 'navbar-hidden' : ''}`}>
            <div className="nav-container">
                <div className="nav-pills">
                    <button className="nav-link">Home</button>
                    <button className="nav-link">About</button>
                    <button className="nav-link">Timeline</button>
                    <button className="nav-link">Prizes</button>
                    <button className="nav-link">Rules</button>
                    <button className="nav-link">Sponsers</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;