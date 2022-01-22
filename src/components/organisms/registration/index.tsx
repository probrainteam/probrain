import Button from 'components/atoms/button';
import React, { FunctionComponent } from 'react';
import './registration.scss';
type introduceProps = {
  className: string;
  title: string;
  btnText: string;
};
const Registration: FunctionComponent<introduceProps> = ({
  className,
  btnText,
  title,
}) => {
  return (
    <section className={`${className}`}>
      <div className={`${className}__inner`}>
        <div className={`${className}__title`}>{title}</div>
        <Button className="btn btn--grey"> {btnText}</Button>
      </div>
    </section>
  );
};

export default Registration;
