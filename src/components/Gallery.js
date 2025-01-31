import React from 'react';
import './gallery.css';
import CountdownTimer from './CountdownTimer'; // Import CountdownTimer if needed

const Gallery = () => {
  const images = [
    {
      src: require("../assets/images/farm.jpg"),
      alt: "farm close up",
      className: "farm",
      problemStatement: "Precision Agriculture",
      moreInfo: "Additional information about Problem Statement 1."
    },
    {
      src: require("../assets/images/soil.jpg"),
      alt: "Soil close up",
      className: "soil",
      problemStatement: "Supply Chain and Market Access",
      moreInfo: "Additional information about Problem Statement 2."
    },
    {
      src: require("../assets/images/robot.jpg"),
      alt: "Robot",
      className: "robot",
      problemStatement: " Farmers' Empowerment and Education",
      moreInfo: "Additional information about Problem Statement 3."
    },
    {
      src: require("../assets/images/farmer.jpg"),
      alt: "Green USB device",
      className: "usb",
      problemStatement: "Biofuel",
      moreInfo: "Additional information about Problem Statement 4."
    },
    {
      src: require("../assets/images/soil.jpg"),
      alt: "Drone in sky",
      className: "drone",
      problemStatement: "Open Innovation",
      moreInfo: "Additional information about Problem Statement 5."
    },
  ];

  return (
    <div>
      <div className="header-container">
        <h1>E-CESA KJSCE PRESENTS</h1>
        <h2>AGRITECH 2K24</h2>
        <button className="register-button">REGISTER NOW</button>
        <p>REGISTRATION CLOSES IN:</p>
        <CountdownTimer />
      </div>
      <div className="domains-title">
        <h2>DOMAINS</h2>
      </div>
      <div className="gallery-container">
        {images.map((image, index) => (
          <div key={index} className={`gallery-item ${image.className}`}>
            <img src={image.src} alt={image.alt} />
            <div className="overlay">
              <div className="text">
                {image.problemStatement}
                <div className="more-info">{image.moreInfo}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;