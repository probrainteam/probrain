import React, { useState } from 'react';
import Logo from 'components/atoms/logo';
import Nav from 'components/molecules/nav';
import './header.scss';
import Modal from '../modal';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">
        <Logo />
        <Nav onToggleClick={() => setToggle(prev => !prev)} />
      </div>
      {toggle ? (
        <Modal
          onToggleClick={() => {
            setToggle(prev => !prev);
          }}
        />
      ) : null}
    </header>
  );
};

export default Header;
