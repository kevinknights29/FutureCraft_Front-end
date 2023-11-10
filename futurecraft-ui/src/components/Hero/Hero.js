// HeroSection.js
import React from 'react';
import { HeroContainer, HeroHeading, HeroSubheading, CTAButton } from './HeroStyles';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroHeading>Your Path to Personal Growth</HeroHeading>
      <HeroSubheading>Explore courses that expand your horizons</HeroSubheading>
      <CTAButton className="btn-primary">Get Started</CTAButton>
    </HeroContainer>
  );
};

export default Hero;