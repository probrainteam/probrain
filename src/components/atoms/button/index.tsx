import React, { ReactNode } from 'react';
import './button.scss';

interface ButtonProps {
  children: ReactNode;
  className: string;
  url?: string;
}

const Button = ({ children, className, url }: ButtonProps) => {
  return (
    <button className={`button button--${className}`}>
      <a href={url} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    </button>
  );
};

export default Button;
