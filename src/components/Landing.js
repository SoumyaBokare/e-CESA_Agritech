import React, { useEffect, useRef, useState } from "react";
import "./landing.css";
import Navbar from "./Navbar";
import Day from "../assets/images/day.png";
import Sun from "../assets/images/sun.png";
import LightFarm from "../assets/images/light_farm.png";
import LightTrees from "../assets/images/light_trees.png";
import LightClouds from "../assets/images/light_clouds.png";
import Comet from "../assets/images/comet.png";
import EcesaLogo from "../assets/icons/ecesa.png"; // Import the ecesa.png image

const Landing = () => {
  const starsRef = useRef(null);
  const moonRef = useRef(null);
  const farmRef = useRef(null);
  const treesRef = useRef(null);
  const cloudsRef = useRef(null);
  const cometRef = useRef(null);
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const starsSpeed = 0.5;
      const moonSpeed = 0.8;
      const farmSpeed = 0.3;
      const treesSpeed = 0.4;
      const cloudsSpeed = 0.2;

      if (starsRef.current) starsRef.current.style.transform = `translateY(${scrollY * starsSpeed}px)`;
      if (moonRef.current) moonRef.current.style.transform = `translateY(${scrollY * moonSpeed}px)`;
      if (farmRef.current) farmRef.current.style.transform = `translateY(${scrollY * farmSpeed}px)`;
      if (treesRef.current) treesRef.current.style.transform = `translateY(${scrollY * treesSpeed}px)`;
      if (cloudsRef.current) cloudsRef.current.style.transform = `translateY(${scrollY * cloudsSpeed}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const duration = 200;

    if (isNightMode) {
      setTimeout(() => {
        if (starsRef.current) starsRef.current.src = require("../assets/images/night.png");
        if (moonRef.current) moonRef.current.src = require("../assets/images/moon.png");
        if (farmRef.current) farmRef.current.src = require("../assets/images/dark_farm.png");
        if (treesRef.current) treesRef.current.src = require("../assets/images/dark_trees.png");
        if (cloudsRef.current) cloudsRef.current.src = require("../assets/images/dark_clouds.png");
        if (cometRef.current) cometRef.current.style.display = "block";
      }, duration);
    } else {
      setTimeout(() => {
        if (starsRef.current) starsRef.current.src = require("../assets/images/day.png");
        if (moonRef.current) moonRef.current.src = require("../assets/images/sun.png");
        if (farmRef.current) farmRef.current.src = require("../assets/images/light_farm.png");
        if (treesRef.current) treesRef.current.src = require("../assets/images/light_trees.png");
        if (cloudsRef.current) cloudsRef.current.src = require("../assets/images/light_clouds.png");
        if (cometRef.current) cometRef.current.style.display = "none";
      }, duration);
    }
  }, [isNightMode]);

  return (
    <div className={`landing-container ${isNightMode ? 'night-mode' : 'day-mode'}`}>
      <Navbar isNightMode={isNightMode} />
      <div className="presentation">
        <img src={EcesaLogo} alt="ECESA Logo" className="ecesa" /> {/* Add the ecesa.png image */}
        <h2>Agri-Tech Hackathon 2025</h2>
        <button onClick={() => window.open("https://unstop.com/hackathons/agri-tech-hackathon-k-j-somaiya-college-of-engineering-kjsce-mumbai-1378830", "_blank")}>Register Now</button>
      </div>
      <div className="theme-switch">
        <input
          type="checkbox"
          className="theme-switch__checkbox"
          id="theme-switch"
          checked={isNightMode}
          onChange={toggleNightMode}
        />
        <label className="theme-switch__container" htmlFor="theme-switch">
          <div className="theme-switch__circle-container">
            <div className="theme-switch__sun-moon-container">
              <div className="theme-switch__moon"></div>
            </div>
          </div>
        </label>
      </div>
      <img src={Day} className="landing-images" id="stars" ref={starsRef} alt="Stars"/>
      <img src={Sun} className="landing-images" id="moon" ref={moonRef} alt="Moon" />
      <img src={LightFarm} className="landing-images" id="farm" ref={farmRef} alt="Farm" />
      <img src={LightTrees} className="landing-images" id="trees" ref={treesRef} alt="Trees" />
      <img src={LightClouds} className="landing-images" id="clouds" ref={cloudsRef} alt="Clouds" />
      <img src={Comet} className="landing-images" id="comet" ref={cometRef} alt="Comet" style={{ display: "none" }} />
    </div>
  );
};

export default Landing;