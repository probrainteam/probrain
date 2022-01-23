import Button from 'components/atoms/button';
import Text from 'components/atoms/text';
import React from 'react';
import './registration.scss';

interface RegistrationProps {
  className: string;
  title: string;
  btnText: string;
}

const Registration = ({ className, btnText, title }: RegistrationProps) => {
  return (
    <section className={`${className}`}>
      <div className={`${className}__inner`}>
        <Text className="probrain-outro">{title}</Text>
        <Button className="gray"> {btnText}</Button>
      </div>
    </section>
  );
};

export default Registration;
