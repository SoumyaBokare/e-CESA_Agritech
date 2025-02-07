import React from "react";
import Lottie from "lottie-react";
import ChickenAnimation from "../assets/chicken.json"; // Import the Lottie JSON

import "./Chicken.css"; // Import the CSS for positioning

const Chicken = () => {
  return (
    <div className="chicken-container">
      <Lottie animationData={ChickenAnimation} loop={true} className="chicken" />
    </div>
  );
};

export default Chicken;
