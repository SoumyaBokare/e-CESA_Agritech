import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  background-color: #f7f7f7;  // Soft background color for better readability
  padding: 40px 20px;         // Increased padding for better spacing
  text-align: center;
  border-radius: 8px;         // Rounded corners for a modern look
  margin: 20px auto;          // Centering the container
  max-width: 800px;           // Max width for optimal reading experience
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); // Subtle shadow for depth
`;

const Title = styled.h2`
  color: #4CAF50;             // Theme color
  margin-bottom: 20px;        // Space below the title
`;

const Text = styled.p`
  color: #333;                // Darker text for contrast
  font-size: 16px;            // Increased font size for readability
  line-height: 1.6;           // Line height for paragraph spacing
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>ABOUT</Title>
      <Text>
        Agri-Tech Hackathon 2025 is a national-level offline hackathon that brings together the brightest minds to innovate, collaborate, and develop technology-driven solutions for agriculture. Hosted by K. J. Somaiya School of Engineering (KJSSE), this event will be a 24-hour coding sprint where participants will work on challenges spanning precision agriculture, supply chain optimization, farmers’ empowerment, biofuel innovation, and open innovation in agriculture.
      </Text>
    </AboutContainer>
  );
};

export default About;
