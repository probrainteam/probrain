import React, { FunctionComponent } from 'react';
import './card.scss';
type cardProps = {
  //   className: string;
  title: string;
  detail: string;
  className: string;
  imgSrc?: any;
  detailSub?: any;
};

const Card: FunctionComponent<cardProps> = ({
  title,
  detail,
  className,
  detailSub,
  imgSrc,
}) => {
  return (
    <div className={`card ${className}`}>
      <div className="card__text">
        <div className="card__title">{title}</div>
        <div className="card__detail">{detail}</div>
      </div>
      {detailSub && <div className="card__detail--sub">{detailSub}</div>}
      {imgSrc && (
        <div className="card__img">
          <img src={imgSrc} alt="probrain" />
        </div>
      )}
    </div>
  );
};

export default Card;
