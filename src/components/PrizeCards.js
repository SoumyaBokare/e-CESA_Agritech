import React, { useState, useEffect } from 'react';
import './prizes.css';

const PrizeCards = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const prizesElement = document.getElementById('prizes');
      const prizesTop = prizesElement.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      // Activate when the top of the prizes section is less than halfway through the viewport
      setIsActive(prizesTop < viewportHeight / 2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cards = [
    { amount: "₹70,000", rank: "First Runner Up", position: "2nd", className: "second" },
    { amount: "₹1,00,000", rank: "Winner", position: "1st", className: "first" },
    { amount: "₹30,000", rank: "Second Runner Up", position: "3rd", className: "third" },
  ];

  return (
    <div className="container" id="prizes">
      <h2>Prize Pool</h2>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className={`card ${card.className} ${isActive ? 'active' : ''}`}
               style={{ '--index': index }}>
            <div className="amount">{card.amount}</div>
            <div className="rank">{card.rank}</div>
            <div className="position">{card.position}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrizeCards;
