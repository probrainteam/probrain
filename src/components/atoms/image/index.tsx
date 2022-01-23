import React from 'react';
import './image.scss';

interface ImageProps {
  className?: string;
  src: string;
}

const Image = ({ className, src }: ImageProps) => {
  return (
    <div className={className}>
      <img src={src} alt={className} />
    </div>
  );
};

export default Image;
