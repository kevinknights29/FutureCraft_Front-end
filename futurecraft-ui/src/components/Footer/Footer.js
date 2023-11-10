// Footer.js
import React from 'react';
import { FooterContainer, FooterContent, FooterLink } from './FooterStyles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Footer content */}
        <FooterLink>Privacy Policy</FooterLink>
        <FooterLink>Terms of Service</FooterLink>
        {/* Add more footer links as needed */}
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
