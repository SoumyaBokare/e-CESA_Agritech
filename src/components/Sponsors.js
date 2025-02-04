import React from 'react';
import './sponsors.css'; // Ensure the CSS is linked correctly

const sponsors = [
  { id: 1, name: "Sponsor 1", logo: "/images/sponsor1.png" },
  { id: 2, name: "Sponsor 2", logo: "/images/sponsor2.png" },
  { id: 3, name: "Sponsor 3", logo: "/images/sponsor3.png" },
  { id: 4, name: "Sponsor 4", logo: "/images/sponsor4.png" },
  { id: 5, name: "Sponsor 5", logo: "/images/sponsor5.png" },
  { id: 6, name: "Sponsor 6", logo: "/images/sponsor6.png" },
  { id: 7, name: "Sponsor 7", logo: "/images/sponsor7.png" },
];

const SponsorScroll = () => {
  return (
    <div className="sponsor-scroll-container">
      {/* First Row (Right to Left) */}
      <div className="sponsor-scroll right-to-left">
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <div key={`left-${index}`} className="sponsor-logo">
            <div className="sponsor-card">
              <img src={sponsor.logo} alt={sponsor.name} />
            </div>
          </div>
        ))}
      </div>
      {/* Second Row (Left to Right) */}
      <div className="sponsor-scroll left-to-right">
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <div key={`right-${index}`} className="sponsor-logo">
            <div className="sponsor-card">
              <img src={sponsor.logo} alt={sponsor.name} />
            </div>
          </div>
        ))}
      </div>
      {/* Third Row (Right to Left) */}
      <div className="sponsor-scroll right-to-left">
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <div key={`left2-${index}`} className="sponsor-logo">
            <div className="sponsor-card">
              <img src={sponsor.logo} alt={sponsor.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorScroll;