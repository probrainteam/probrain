import React from 'react';
import './textContent.scss';
// const ScrollComponent = ({ children, className, scrollActiveLocation } : ScrollProps) =>
interface textProps {
  title: string;
  detail: string;
}
const TextContent = ({ title, detail }: textProps) => {
  return (
    <div className="text">
      <div className="text__title">{title}</div>
      <div className="text__detail">{detail}</div>
    </div>
  );
};

export default TextContent;
