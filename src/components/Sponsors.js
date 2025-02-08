import React from 'react';
import './sponsors.css'; // Ensure the CSS is linked correctly

const sponsors = [
  { id: 1, name: "Sponsor 1", logo: require("../assets/sponsors/bkt.png") },
  { id: 2, name: "Sponsor 2", logo: require("../assets/sponsors/godavari.png") },
  { id: 3, name: "Sponsor 3", logo: require("../assets/sponsors/lic.png") },
  { id: 4, name: "Sponsor 4", logo: require("../assets/sponsors/bkt.png") },
  { id: 5, name: "Sponsor 5", logo: require("../assets/sponsors/unstop.png") },
  { id: 6, name: "Sponsor 6", logo: require("../assets/sponsors/innosight.png") },
  { id: 7, name: "Sponsor 7", logo: require("../assets/sponsors/study_vista.png") },
  { id: 7, name: "Sponsor 7", logo: require("../assets/sponsors/kiaar.png") },
];

const SponsorScroll = () => {
  return (
    <>
      <div className="sponsor-heading">
        <h2>OUR SPONSORS</h2>
      </div>
      <div className="sponsor-scroll left-to-right">
        {sponsors.concat(sponsors).map((sponsor, index) => (
          <div key={`right-${index}`} className="sponsor-logo">
            <div className="sponsor-card">
              <img src={sponsor.logo} alt={sponsor.name} />
            </div>
          </div>
        ))}
      </div>
      <div className="sponsor-scroll right-to-left">
        {sponsors.concat(sponsors).map((sponsor, index) => (
          <div key={`left-${index}`} className="sponsor-logo">
            <div className="sponsor-card">
              <img src={sponsor.logo} alt={sponsor.name} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SponsorScroll;
