import React from 'react';
import Countdown from 'react-countdown';
import './countdown.css'; // Import the CSS file

const CountdownTimer = () => {
  const targetDate = new Date('2025-03-01T00:00:00');

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      
      <div className="countdown-timer">
        <div className="countdown-item">
          <div className="countdown-number">{days}</div>
          <div className="countdown-label">Days</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">{hours}</div>
          <div className="countdown-label">Hours</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">{minutes}</div>
          <div className="countdown-label">Minutes</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-number">{seconds}</div>
          <div className="countdown-label">Seconds</div>
        </div>
      </div>
    );
  };

  return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownTimer;
