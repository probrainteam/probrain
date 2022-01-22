import React from 'react';
// const ScrollComponent = ({ children, className, scrollActiveLocation } : ScrollProps) =>
interface ImageProps {
  className: string;
  imgSrc: any;
}
const ImageContent = ({ className, imgSrc }: ImageProps) => {
  return (
    <div className={className}>
      <img src={imgSrc} alt="probrain" />
    </div>
  );
};

export default ImageContent;
