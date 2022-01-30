import { MoonIcon, XIcon } from 'components/atoms/icon';
import Text from 'components/atoms/text';
import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import './modal.scss';

interface ModalProps {
  onToggleClick: () => void;
}

const Modal = ({ onToggleClick }: ModalProps) => {
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
    <div className="modal">
      <XIcon onClick={onToggleClick} />
      <div className="mobile-nav-wrapper">
        <Link to="/">
          <Text className="mobile-nav">PROBRAIN</Text>
        </Link>
        <Link to="/junior">
          <Text className="mobile-nav">PROBRAIN JUNIOR</Text>
        </Link>
      </div>
      <div onClick={darkModeHandling}>
        <MoonIcon size="2x" className="fixed" />
      </div>
    </div>
  );
};

export default Modal;
