import React, { useRef } from "react";
import "./gallery.css";
import gsap from "gsap";

const Gallery = () => {
  const imageRefs = useRef([]);

  const images = [
    {
      id: 1,
      src: require("../assets/images/farm.jpg"),
      alt: "farm close up",
      className: "farm",
      problemStatement: "Precision Agriculture",
    },
    {
      id: 2,
      src: require("../assets/images/supply.png"),
      alt: "Soil close up",
      className: "soil",
      problemStatement: "Supply Chain and Market Access",
    },
    {
      id: 3,
      src: require("../assets/images/robot.jpg"),
      alt: "Robot",
      className: "robot",
      problemStatement: "Biofuel",
    },
    {
      id: 4,
      src: require("../assets/images/farmer.jpg"),
      alt: "Green USB device",
      className: "usb",
      problemStatement: "Farmers' Empowerment and Education",
    },
    {
      id: 5,
      src: require("../assets/images/soil.jpg"),
      alt: "Drone in sky",
      className: "drone",
      problemStatement: "Open Innovation",
    },
  ];

  const handleMouseEnter = (index) => {
    const target = imageRefs.current[index];
  
    gsap.to(target, {
      width: "1200px",
      height: "650px",
      position: "relative",
      top: 0,
      left: 0,
      zIndex: 10,
      transform: index === 1 || index === 4 ? "none" : "translate(-50%, -50%)",
      ease: "power3.out",
    });
  
    gsap.to(".gallery-container", {
      overflow: "hidden",
      duration: 0.3,
    });
  
    gsap.to(".gallery-item:not(:nth-child(" + (index + 1) + "))", {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power3.out",
    });
  };
  
  const handleMouseLeave = (index) => {
    const target = imageRefs.current[index];
  
    gsap.to(target, {
      width: "",
      height: "",
      position: "relative",
      top: "0%",
      left: "0%",
      transform: "translate(0, 0)", // Reset to default
      zIndex: 1,
      duration: 0.5,
      ease: "power3.inOut",
    });
  
    gsap.to(".gallery-container", {
      overflow: "visible",
      duration: 0.3,
    });
  
    gsap.to(".gallery-item", {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power3.inOut",
    });
  };
  
  

  return (
    <div>
      <div className="domains-title">
        <h2>DOMAINS</h2>
      </div>
      <div className="gallery-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`gallery-item ${image.className}`}
            ref={(el) => (imageRefs.current[index] = el)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <img src={image.src} alt={image.alt} />
            <div className="overlay">
              <div className="text">{image.problemStatement}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
