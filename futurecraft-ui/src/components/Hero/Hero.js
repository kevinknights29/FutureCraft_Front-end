// HeroSection.js
import React from 'react';
import { HeroContainer, HeroHeading, HeroSubheading, CTAButton } from './HeroStyles';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroHeading>Unlock Your Potential</HeroHeading>
      <HeroSubheading>With Tailored Growth for the Modern Professional.</HeroSubheading>
      <CTAButton className="btn-primary">Get Started</CTAButton>
    </HeroContainer>
  );
};

export default Hero;