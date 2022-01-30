import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import './nav.scss';
import Text from 'components/atoms/text';
import { BarsIcon, MoonIcon } from 'components/atoms/icon';

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
          <Text className="nav">JUNIOR</Text>
        </Link>
        <button className="nav__icon-wrapper" onClick={darkModeHandling}>
          <MoonIcon />
        </button>
      </div>
      <BarsIcon />
    </nav>
  );
};

export default Nav;
