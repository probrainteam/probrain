import Button from 'components/atoms/button';
import Text from 'components/atoms/text';
import React from 'react';
import './registration.scss';
import ArrowDown from '../../../../assets/double_arrow.svg';

interface RegistrationProps {
  className: string;
  title: string;
  lightTitle?: string;
  btnText: string;
}

const Registration = ({
  className,
  btnText,
  lightTitle,
  title,
}: RegistrationProps) => {
  return (
    <section className={`${className}`}>
      <div className={`${className}__inner`}>
        <div className={`${className}__title`}>
          <Text className={`${className}--light`}>{lightTitle}</Text>
          <Text className={className}>{title}</Text>
        </div>
        <Button className="gray"> {btnText}</Button>
      </div>
      <div className="arrow-down-icon-container">
      <div className="arrow-down-icon">
        <ArrowDown height="40" width="40" />
      </div>
      </div>
     
    </section>
  );
};

export default Registration;
