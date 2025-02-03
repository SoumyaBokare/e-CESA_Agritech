import React from 'react';
import './sponsors.css';

const Sponsors = () => {
  return (
    <section className="sponsors">
      <h2>SPONSORS</h2>
      <div className="carousel">
        <div className="carousel-track">
          <div className="carousel-item">METROPOLIS</div>
          <div className="carousel-item">FAIR'S</div>
          <div className="carousel-item">SPONSOR 3</div>
          <div className="carousel-item">SPONSOR 4</div>
          <div className="carousel-item">SPONSOR 5</div>
          {/* Repeat items to create a continuous loop */}
          <div className="carousel-item">METROPOLIS</div>
          <div className="carousel-item">FAIR'S</div>
          <div className="carousel-item">SPONSOR 3</div>
          <div className="carousel-item">SPONSOR 4</div>
          <div className="carousel-item">SPONSOR 5</div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;