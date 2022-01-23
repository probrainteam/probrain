import React from 'react';

interface ImageProps {
  className?: string;
  imgSrc: any;
}

const ImageContent = ({ className, imgSrc }: ImageProps) => {
  return (
    <div className={className}>
      <img src={imgSrc} alt={className} />
    </div>
  );
};

export default ImageContent;
