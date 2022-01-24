import React from 'react';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const GithubIcon = () => {
  return <FontAwesomeIcon icon={faGithub} size="lg" color="#000000" />;
};

export const InstagramIcon = () => {
  return <FontAwesomeIcon icon={faInstagram} size="lg" color="#000000" />;
};

export const EmailIcon = () => {
  return <FontAwesomeIcon icon={faEnvelopeSquare} size="lg" color="#000000" />;
};
