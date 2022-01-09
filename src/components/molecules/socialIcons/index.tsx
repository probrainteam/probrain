import * as React from 'react';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './socialIcons.scss';

const SocialIcons = () => (
  <div className="social-icons">
    <a href="https://github.com/probrainteam" target="_blank">
      <FontAwesomeIcon icon={faGithub} size="lg" color="#000000" />
    </a>
    <a href="https://www.instagram.com/jeonbyeongm1n/?hl=ko" target="_blank">
      <FontAwesomeIcon icon={faInstagram} size="lg" color="#000000" />
    </a>
    <FontAwesomeIcon icon={faEnvelopeSquare} size="lg" color="#000000" />
  </div>
);

export default SocialIcons;
