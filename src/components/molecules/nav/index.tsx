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

interface NavProps {
  onToggleClick: () => void;
}

const Nav = ({ onToggleClick }: NavProps) => {
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
        <Link to="/" activeClassName="link-active" className="nav__item">
          <Text className="nav">PROBRAIN</Text>
        </Link>
        <Link to="/junior" activeClassName="link-active" className="nav__item">
          <Text className="nav">JUNIOR</Text>
        </Link>
        <button
          className="nav__icon-wrapper"
          onClick={darkModeHandling}
          aria-label="mode-change"
        >
          <MoonIcon size="lg" />
        </button>
      </div>

      <BarsIcon onClick={onToggleClick} />
    </nav>
  );
};

export default Nav;
