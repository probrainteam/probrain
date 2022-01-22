// 사이트 내 일반적인 버튼

import React, { ReactNode } from 'react';
import './button.scss';
interface ButtonProps {
  children: ReactNode;
  className: string;
}

const Button = ({ children, className }: ButtonProps) => {
  return <button className={className}>{children}</button>;
};

export default Button;
