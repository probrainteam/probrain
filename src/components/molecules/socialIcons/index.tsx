import React from 'react';
import './socialIcons.scss';
import { EmailIcon, GithubIcon, InstagramIcon } from 'components/atoms/icon';

const SocialIcons = () => (
  <div className="social-icons">
    <a href="https://github.com/probrainteam" target="_blank">
      <GithubIcon />
    </a>
    <a href="https://www.instagram.com/jeonbyeongm1n/?hl=ko" target="_blank">
      <InstagramIcon />
    </a>
    <EmailIcon />
  </div>
);

export default SocialIcons;
