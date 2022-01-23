import React from 'react';
import './footer.scss';
import SocialIcons from 'components/molecules/socialIcons';
import Text from 'components/atoms/text';

const Footer = () => (
  <footer className="footer">
    <div className="footer__inner">
      <Text className="footer">&copy; {new Date().getFullYear()} PROBRAIN</Text>
      <SocialIcons />
    </div>
  </footer>
);

export default Footer;
