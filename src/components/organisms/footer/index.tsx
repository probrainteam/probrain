import * as React from 'react';
import SocialIcons from 'components/molecules/socialIcons';
import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer__inner">
      &copy; {new Date().getFullYear()} PROBRAIN
      <SocialIcons />
    </div>
  </footer>
);

export default Footer;
