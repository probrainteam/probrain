import ImageContent from 'components/atoms/image';
import TextContent from 'components/atoms/textContent';
import React from 'react';
import './imgCard.scss';
type ImgCardProps = {
  title: string;
  detail: string;
  className: string;
  imgSrc: any;
};

const ImgCard = ({ title, detail, className, imgSrc }: ImgCardProps) => {
  return (
    <div className={`card ${className}`}>
      <TextContent title={title} detail={detail} />
      <ImageContent className="card__img" imgSrc={imgSrc} />
    </div>
  );
};
export default ImgCard;
