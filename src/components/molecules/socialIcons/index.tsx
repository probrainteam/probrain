import React from 'react';
import './socialIcons.scss';
import { EmailIcon, GithubIcon, InstagramIcon } from 'components/atoms/icon';

const SocialIcons = () => (
  <div className="social-icons">
    <a
      href="https://github.com/probrainteam"
      target="_blank"
      aria-label="github"
      rel="noopener noreferrer"
    >
      <GithubIcon />
    </a>
    <a
      href="https://www.instagram.com/jeonbyeongm1n/?hl=ko"
      target="_blank"
      aria-label="instagram"
      rel="noopener noreferrer"
    >
      <InstagramIcon />
    </a>
    <EmailIcon />
  </div>
);

export default SocialIcons;
