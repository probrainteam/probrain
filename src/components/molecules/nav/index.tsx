import React from 'react';
import { Link } from 'gatsby';
import './nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <Link to="/" className="nav__item">
          PROBRAIN
        </Link>
        <Link to="/junior" className="nav__item">
          PROB junior
        </Link>
        <Link to="/contact" className="nav__item">
          CONTACT
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
