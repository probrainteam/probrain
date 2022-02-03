import React, { ReactNode } from 'react';
import './button.scss';

interface ButtonProps {
  children: ReactNode;
  className: string;
  url?: string;
}

const Button = ({ children, className, url }: ButtonProps) => {
  return (
    <a href={url} target="_blank" rel="noreferrer noopener">
      <button className={`button button--${className}`}>{children}</button>
    </a>
  );
};

export default Button;
