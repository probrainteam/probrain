import ScrollComponent from 'components/atoms/Scroll';
import TextContent from 'components/molecules/textContent';
import React from 'react';
import Section from '../section';
import Image from 'components/atoms/image';

interface AboutProps {
  imgSrc: string;
  subtitle: string;
  contentTitle: string;
  contentDetail: string;
}

const About = ({
  imgSrc,
  subtitle,
  contentTitle,
  contentDetail,
}: AboutProps) => {
  return (
    <Section className="grid-2" title="ABOUT" subtitle={subtitle}>
      <ScrollComponent className="scroll-up" scrollActiveLocation={0}>
        <Image src={imgSrc} className="blueLogo" />
      </ScrollComponent>
      <ScrollComponent className="scroll-up" scrollActiveLocation={0}>
        <TextContent className="" title={contentTitle} detail={contentDetail} />
      </ScrollComponent>
    </Section>
  );
};

export default About;
