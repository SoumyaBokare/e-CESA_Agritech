import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #333;
  color: white;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Contact us: hrishikesh.c@somaiya.edu | +91 9969594585</p>
      <p>© 2025 AgriTech Hackathon. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;