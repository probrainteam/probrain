import React, { FunctionComponent } from 'react';

type cardProps = {
  //   className: string;
  title: string;
  detail: string;
};
type cardImgProps = {
  title: string;
  detail: string;
  //   image: string;
};
const Card: FunctionComponent<cardProps> = ({ title, detail, children }) => {
  return (
    <div className="card">
      <div className="card__text">
        <div className="card__title">{title}</div>
        <div className="card__detail">{detail}</div>
        <div className="card__detail--sub">{children}</div>
      </div>
    </div>
  );
};
const CardLeft: FunctionComponent<cardImgProps> = ({
  children,
  title,
  detail,
}) => {
  return (
    <div className="card card--left">
      <div className="card__img">{children}</div>
      <div className="card__text">
        <div className="card__title">{title}</div>
        <div className="card__detail">{detail}</div>
      </div>
    </div>
  );
};
const CardRight: FunctionComponent<cardImgProps> = ({
  children,
  title,
  detail,
}) => {
  return (
    <div className="card card--right">
      <div className="card__text">
        <div className="card__title">{title}</div>
        <div className="card__detail">{detail}</div>
      </div>
      <div className="card__img">{children}</div>
    </div>
  );
};
export { CardRight, CardLeft };
export default Card;
