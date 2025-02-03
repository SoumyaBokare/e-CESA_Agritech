import React from "react";
import Countdown from "react-countdown";
import { motion } from "framer-motion";
import { FaLeaf, FaRobot, FaSeedling, FaArrowRight } from "react-icons/fa";
import "./hero.css";

const Hero = () => {
  const targetDate = new Date("2025-03-01T00:00:00");

  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">
          <span className="highlight">Agritech 2025</span>
        </h1>
        <p className="hero-subtitle">
          Where <span className="green">Agriculture</span> Meets{" "}
          <span className="tech">Technology</span>
        </p>

        <div className="icon-container">
          <FaLeaf className="hero-icon" />
          <FaRobot className="hero-icon" />
          <FaSeedling className="hero-icon" />
        </div>

        <div className="hero-countdown">
          <Countdown
            date={targetDate}
            renderer={({ days, hours, minutes, seconds }) => (
              <div className="countdown-container">
                <div className="countdown-item">
                  <span className="countdown-number">{days}</span>
                  <span className="countdown-label">Days</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-number">{hours}</span>
                  <span className="countdown-label">Hours</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-number">{minutes}</span>
                  <span className="countdown-label">Minutes</span>
                </div>
                <div className="countdown-item">
                  <span className="countdown-number">{seconds}</span>
                  <span className="countdown-label">Seconds</span>
                </div>
              </div>
            )}
          />
        </div>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <button className="register-btn">
            Register Now <FaArrowRight className="arrow-icon" />
          </button>
          <button className="learn-btn">Learn More</button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;