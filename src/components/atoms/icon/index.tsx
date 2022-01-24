import React from 'react';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const GithubIcon = () => {
  return <FontAwesomeIcon className="github" icon={faGithub} size="lg" />;
};

export const InstagramIcon = () => {
  return <FontAwesomeIcon className="insta" icon={faInstagram} size="lg" />;
};

export const EmailIcon = () => {
  return (
    <FontAwesomeIcon className="email" icon={faEnvelopeSquare} size="lg" />
  );
};

export const MoonIcon = () => {
  return <FontAwesomeIcon className="moon" icon={faMoon} size="lg" />;
};
