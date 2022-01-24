import Text from 'components/atoms/text';
import React, { ReactNode } from 'react';
import './section.scss';

interface SectionProps {
  className: string;
  children: ReactNode;
  title: string;
  title2?: string;
  subtitle: string;
}

const Section = ({
  className,
  children,
  title,
  title2,
  subtitle,
}: SectionProps) => {
  return (
    <section className="section">
      <div className="section__inner">
        <div className="section__title">
          <Text className="section-title">{title}</Text>
          <Text className="section-title">{title2}</Text>
          <Text className="section-subtitle">{subtitle}</Text>
        </div>
        <div className={`${className}__content`}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
