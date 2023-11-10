// HeroSectionStyles.js
import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  background-image: url('/path-to-your-background-image.jpg');
  background-size: cover;
  background-position: center;
  color: var(--professional-grey);
`;

export const HeroHeading = styled.h1`
  font-size: 3rem;
  color: var(--electric-blue);
`;

export const HeroSubheading = styled.h2`
  font-size: 1.5rem;
  margin-top: 20px;
`;

export const CTAButton = styled.button`
  margin-top: 30px;
  // Use your global button styles
`;
