import ScrollComponent from 'components/atoms/Scroll';
import TextContent from 'components/molecules/textContent';
import React from 'react';
import Section from '../section';
import Image from 'components/atoms/image';

interface ListCardProps {
  imgSrc: string;
}

const About = ({ imgSrc }: ListCardProps) => {
  return (
    <Section
      className="grid-2"
      title="ABOUT"
      subtitle="PROBRAIN은 어떤 동아리일까요?"
    >
      <ScrollComponent className="scroll-up" scrollActiveLocation={0}>
        <Image src={imgSrc} className="blueLogo" />
      </ScrollComponent>
      <ScrollComponent className="scroll-up" scrollActiveLocation={0}>
        <TextContent
          className=""
          title="웹 개발 동아리"
          detail="프로브레인은 개발자를 꿈꾸는 모두를 위한 동아리입니다. 활발한 활동을 추구하며 세미나, 교육, 프로젝트를 통해 훌륭한 FE / BE 개발자를 양성합니다.
        "
        />
      </ScrollComponent>
    </Section>
  );
};

export default About;
