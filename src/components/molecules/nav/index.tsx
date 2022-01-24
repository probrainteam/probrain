import React, { useEffect, useState } from 'react';
import './nav.scss';
import { Link } from 'gatsby';
import Text from 'components/atoms/text';
import { MoonIcon } from 'components/atoms/icon';

declare global {
  interface Window {
    __theme: string;
    __setPreferredTheme(colorMode: string): void;
  }
}

const Nav = () => {
  const getInitialColorMode = () => {
    if (typeof window !== 'undefined') {
      return window.__theme;
    } else {
      return 'light';
    }
  };

  const [colorMode, setColorMode] = useState(getInitialColorMode());

  const darkModeHandling = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    window.__setPreferredTheme(colorMode);
  }, [colorMode]);

  return (
    <nav className="nav">
      <div className="nav__inner">
        <Link to="/" className="nav__item">
          <Text className="nav">PROBRAIN</Text>
        </Link>
        <Link to="/junior" className="nav__item">
          <Text className="nav">PROB junior</Text>
        </Link>
        <Link to="/contact" className="nav__item">
          <Text className="nav">CONTACT</Text>
        </Link>
        <div className="nav__icon-wrapper" onClick={darkModeHandling}>
          <MoonIcon />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
