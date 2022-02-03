import Button from 'components/atoms/button';
import Text from 'components/atoms/text';
import React from 'react';
import './registration.scss';
import ArrowDown from 'svgs/double_arrow.svg';

interface RegistrationProps {
  className: string;
  title: string;
  lightTitle?: string;
  btnText: string;
  url?: string;
}

const Registration = ({
  className,
  btnText,
  lightTitle,
  title,
  url,
}: RegistrationProps) => {
  return (
    <section className={`${className}`}>
      <div className={`${className}__inner`}>
        <div className={`${className}__title`}>
          <Text className={`${className}--light`}>{lightTitle}</Text>
          <Text className={className}>{title}</Text>
        </div>
        <Button url={url} className="gray">
          {btnText}
        </Button>
      </div>
      {className === 'junior-intro' ? (
        <div className="arrow-down-icon-container">
          <div className="arrow-down-icon-wrapper">
            <ArrowDown
              style={{ fill: 'var(--mainColor)' }}
              height="40"
              width="40"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Registration;
