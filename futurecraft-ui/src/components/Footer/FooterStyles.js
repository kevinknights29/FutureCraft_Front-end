import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: var(--professional-grey);
  color: white;
  padding: 20px 0;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  transition: text-decoration 0.3s ease;

  &:hover {
    text-decoration: underline;
  }
`;

export default { FooterContainer, FooterContent, FooterLink };
