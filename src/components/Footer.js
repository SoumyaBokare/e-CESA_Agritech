import React from 'react';
import {  FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section - Quick Links */}
        <div className="footer-section left">
          <h2 className="footer-title">Quick Links</h2>
          <div className="footer-links">
            <a href="/about">About</a>
            <a href="/timeline">Timeline</a>
            <a href="/prizes">Prizes</a>
          </div>
        </div>

        {/* Middle Section - Contact Us */}
        <div className="footer-section center">
          <h2 className="footer-title">Contact Us</h2>
          <div className="contact-info">
            <a href="mailto:eesa.engg@somaiya.edu" className="contact-item">
              <FaEnvelope /> eesa.engg@somaiya.edu
            </a>
            <a href="mailto:hrishkesh.c@somaiya.edu" className="contact-item">
              <FaEnvelope /> hrishkesh.c@somaiya.edu
            </a>
            <a href="tel:+919969594585" className="contact-item">
              <FaPhone /> +91 9969594585
            </a>
          </div>
        </div>

        {/* Right Section - Follow Us */}
        <div className="footer-section right">
          <h2 className="footer-title">Follow Us</h2>
          <div className="social-links">
            <a href="https://www.instagram.com/ecesa_kjsce/" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://in.linkedin.com/company/e-cesakjsce" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-text">
          © 2024-25 ECESA KJSCE. All rights reserved
        </div>
        <div className="made-with-love">
          Made with <span className="heart">❤️</span> by Tech Majdoor (ECESA Council)
        </div>
      </div>
    </footer>
  );
};

export default Footer;
