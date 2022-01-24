import Image from 'components/atoms/image';
import TextContent from 'components/molecules/textContent';
import React from 'react';
import './shadowCard.scss';

interface ShadowCardProps {
  title: string;
  detail: string;
  className: string;
  src: string;
  author?: string;
}

const ShadowCard = ({
  title,
  detail,
  className,
  src,
  author,
}: ShadowCardProps) => {
  return (
    <div className={`shadow-card shadow-card--${className}`}>
      <TextContent className="" title={title} detail={detail} author={author} />
      <Image className="memoticon" src={src} />
    </div>
  );
};

export default ShadowCard;
