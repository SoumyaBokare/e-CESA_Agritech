import React from 'react';
import './prizes.css';

const PrizeSection = () => {
  return (
    <div className="prize-section">
      <div className="heading">
        <h1>PRIZES</h1>
      </div>
      <div id="podium-box">
        {/* Silver Trophy */}
        <div className="step-container">
          <div id="second-step" className="step silver">
            <div className="trophy silver-trophy">🥈</div>
            <div className="prize-details">
              <h2>INR 70,000</h2>
              <p className="prize-type">CASH PRIZE</p>
              <p className="prize-extras">EXCITING GOODIES WORTH INR 1.5L & MORE!</p>
              <div className="prize-label">• RUNNER UP •</div>
            </div>
          </div>
        </div>

        {/* Gold Trophy */}
        <div className="step-container">
          <div id="first-step" className="step gold">
            <div className="trophy gold-trophy">🥇</div>
            <div className="prize-details">
              <h2>INR 1,00,000</h2>
              <p className="prize-type">CASH PRIZE</p>
              <p className="prize-extras">EXCITING GOODIES WORTH INR 2L & MORE!</p>
              <div className="prize-label">• WINNER •</div>
            </div>
          </div>
        </div>

        {/* Bronze Trophy */}
        <div className="step-container">
          <div id="third-step" className="step bronze">
            <div className="trophy bronze-trophy">🥉</div>
            <div className="prize-details">
              <h2>INR 30,000</h2>
              <p className="prize-type">CASH PRIZE</p>
              <p className="prize-extras">EXCITING GOODIES WORTH INR 1L & MORE!</p>
              <div className="prize-label">• 2ND RUNNER UP •</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizeSection;