import React from 'react';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelopeSquare,
  faMoon,
  faBars,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import './icon.scss';

interface IconProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  size?: SizeProp;
  className?: string;
}

export const GithubIcon = () => (
  <FontAwesomeIcon className="github" icon={faGithub} size="lg" />
);

export const InstagramIcon = () => (
  <FontAwesomeIcon className="insta" icon={faInstagram} size="lg" />
);

export const EmailIcon = () => (
  <FontAwesomeIcon className="email" icon={faEnvelopeSquare} size="lg" />
);

export const MoonIcon = ({ size, className }: IconProps) => (
  <FontAwesomeIcon
    className={`moon ${className ?? ''}`}
    icon={faMoon}
    size={size}
  />
);

export const BarsIcon = ({ onClick }: IconProps) => (
  <div onClick={onClick} className="icon-wrapper">
    <FontAwesomeIcon className="bars" icon={faBars} size="lg" />
  </div>
);

export const XIcon = ({ onClick }: IconProps) => (
  <div onClick={onClick} className="x-icon-wrapper">
    <FontAwesomeIcon className="x" icon={faArrowLeft} size="2x" />
  </div>
);
