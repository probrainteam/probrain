import * as React from 'react';
import Logo from 'components/atoms/logo';
import Nav from 'components/molecules/nav';
import './header.scss';

const Header = () => (
  <header className="header">
    <div className="header__inner">
      <Logo />
      <Nav />
    </div>
  </header>
);

export default Header;
