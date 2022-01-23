import React from 'react';
import './imageCard.scss';
import Image from 'components/atoms/image';
import TextContent from 'components/molecules/textContent';

interface ImageCardProps {
  title: string;
  detail: string;
  className: string;
  src: string;
}

const ImageCard = ({ title, detail, className, src }: ImageCardProps) => {
  return (
    <div className={`image-card image-card--${className}`}>
      <TextContent title={title} detail={detail} />
      <Image className="image-card" src={src} />
    </div>
  );
};

export default ImageCard;
