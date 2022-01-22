import React, { FunctionComponent } from 'react';
import './introduce.scss';
type introduceProps = {
  className: string;
  title: string;
  subtitle: string;
};
const Introduce: FunctionComponent<introduceProps> = ({
  className,
  children,
  title,
  subtitle,
}) => {
  return (
    <section className={className}>
      <div className={`${className}__inner`}>
        <div className={`${className}__title`}>
          <div className={`${className}__title--main`}>{title}</div>
          <div className={`${className}__title-sub`}>{subtitle}</div>
        </div>
        <div className={`${className}__content`}>{children}</div>
      </div>
    </section>
  );
};

export default Introduce;
