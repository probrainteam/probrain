import React, { FunctionComponent } from 'react';
import './registration.scss';
type introduceProps = {
  className: string;
  title: string;
  btn: any;
};
const Registration: FunctionComponent<introduceProps> = ({
  className,
  btn,
  title,
}) => {
  return (
    <section className={`${className}`}>
      <div className={`${className}__inner`}>
        <div className={`${className}__title`}>{title}</div>
        {btn}
      </div>
    </section>
  );
};

export default Registration;
