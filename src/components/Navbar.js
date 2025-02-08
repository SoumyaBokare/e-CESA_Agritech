import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo1 from '../assets/icons/trust.png'; // Replace with the actual path to your image
import logo2 from '../assets/icons/somaiya.png'; // Replace with the actual path to your image

const Navbar = ({ isNightMode }) => {
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 100);

      // Toggle visibility based on scroll direction and location
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true); // Hide when scrolling up, after 100px
      } else {
        setIsHidden(false); // Show when scrolling down or within the first 100px
      }

      // Update the last scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`custom-navbar ${isScrolled ? 'scrolled' : ''} ${isHidden ? 'navbar-hidden' : ''}`}>
      <div className="nav-container">
        <div className="nav-logos">
          <img src={logo1} alt="Logo 1" className="nav-logo" />
          <img src={logo2} alt="Logo 2" className="nav-logo" />
        </div>
        <div className="nav-pills">
          <button className={`nav-link ${isNightMode ? 'night-mode' : 'day-mode'}`} onClick={() => scrollToSection('home')}>Home</button>
          <button className={`nav-link ${isNightMode ? 'night-mode' : 'day-mode'}`} onClick={() => scrollToSection('timeline')}>Timeline</button>
          <button className={`nav-link ${isNightMode ? 'night-mode' : 'day-mode'}`} onClick={() => scrollToSection('prizes')}>Prizes</button>
          <button className={`nav-link ${isNightMode ? 'night-mode' : 'day-mode'}`} onClick={() => scrollToSection('rules')}>Rules</button>
          <button className={`nav-link ${isNightMode ? 'night-mode' : 'day-mode'}`} onClick={() => scrollToSection('sponsors')}>Sponsors</button>
          <button className={`nav-link ${isNightMode ? 'night-mode' : 'day-mode'}`} onClick={() => scrollToSection('footer')}>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;