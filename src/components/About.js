import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 20px;
  text-align: center;
`;

const About = () => {
  return (
    <AboutContainer>
      <h2>ABOUT</h2>
      <p>
        Agri-Tech Hackathon 2025 is a national-level offline hackathon that brings together the brightest minds to innovate, collaborate, and develop technology-driven solutions for agriculture. Hosted by K. J. Somaiya School of Engineering (KJSSE), this event will be a 24-hour coding sprint where participants will work on challenges spanning precision agriculture, supply chain optimization, farmers’ empowerment, biofuel innovation, and open innovation in agriculture.
      </p>
    </AboutContainer>
  );
};

export default About;