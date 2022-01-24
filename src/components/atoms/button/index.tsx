import React, { ReactNode } from 'react';
import './button.scss';

interface ButtonProps {
  children: ReactNode;
  className: string;
}

const Button = ({ children, className }: ButtonProps) => {
  return <button className={`button button--${className}`}>{children}</button>;
};

export default Button;
