import React from 'react';
import { ReactNode } from 'react';
import './text.scss';

interface TextProps {
  children: ReactNode;
  className: string;
}

const Text = ({ children, className }: TextProps) => {
  return <div className={`text text--${className}`}>{children}</div>;
};

export default Text;
