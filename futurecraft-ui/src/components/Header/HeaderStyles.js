// HeaderStyles.js
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: var(--electric-blue);
  color: white;
`;

export const Logo = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const SearchBar = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: none;
`;

export const UserAccess = styled.div`
  display: flex;
  gap: 20px;
`;

export const SupportLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
