import React from 'react';
import './nav.scss';
import { Link } from 'gatsby';
import Text from 'components/atoms/text';

const Nav = () => {
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
      </div>
    </nav>
  );
};

export default Nav;
