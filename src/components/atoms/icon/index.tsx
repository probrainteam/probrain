import React from 'react';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelopeSquare,
  faMoon,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import './icon.scss';

interface IconProps {
  onClick?: React.MouseEventHandler<SVGSVGElement>;
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
  <FontAwesomeIcon onClick={onClick} className="bars" icon={faBars} size="lg" />
);

export const XIcon = ({ onClick }: IconProps) => (
  <FontAwesomeIcon onClick={onClick} className="x" icon={faTimes} size="2x" />
);
