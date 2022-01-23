import React from 'react';

interface ImageProps {
  className?: string;
  imgSrc: any;
}

const Image = ({ className, imgSrc }: ImageProps) => {
  return (
    <div className={className}>
      <img src={imgSrc} alt={className} />
    </div>
  );
};

export default Image;
