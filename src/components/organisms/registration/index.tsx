import Button from 'components/atoms/button';
import Text from 'components/atoms/text';
import React from 'react';
import './registration.scss';

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
    </section>
  );
};

export default Registration;
