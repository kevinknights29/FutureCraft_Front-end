// Header.js
import React from 'react';
import { HeaderContainer, Logo, NavLinks, NavLink, SearchBar, UserAccess, SupportLink } from './HeaderStyles';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>FutureCraft</Logo>

      <NavLinks>
        <NavLink href="#courses">Courses</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#success-stories">Success Stories</NavLink>
      </NavLinks>

      <SearchBar type="text" placeholder="Search..."/>

      <UserAccess>
        <NavLink href="#profile">Profile</NavLink>
        <NavLink href="#notifications">Notifications</NavLink>
      </UserAccess>

      <SupportLink href="#support">Support</SupportLink>
    </HeaderContainer>
  );
};

export default Header;
