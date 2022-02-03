import React from 'react';
import './welcome.scss';
import Button from 'components/atoms/button';
import Text from 'components/atoms/text';
import Image from 'components/atoms/image';
import { graphql, useStaticQuery } from 'gatsby';

interface StaticImageType {
  main: {
    publicURL: string;
  };
}

const Welcome = () => {
  const { main } = useStaticQuery<StaticImageType>(graphql`
    query {
      main: file(name: { eq: "main" }) {
        publicURL
      }
    }
  `);

  return (
    <section className="welcome">
      <div className="welcome__inner">
        <div className="welcome__top">
          <div className="welcome__title">
            <Text className="main-subtitle">프로브레인과 함께 추억을 쌓을</Text>
            <Text className="main-title">멋진 친구를 찾고 있어요</Text>
          </div>
          <Button
            url={
              'https://docs.google.com/forms/d/1tpDN6Tg7tDaOFJc5VErKlTTLnXpdL886yyQ0qdEljJQ/edit?usp=drive_open'
            }
            className="gray"
          >
            PROBRAIN 가입 신청
          </Button>
        </div>
        <Image className="welcome-image" src={main.publicURL} />
      </div>
    </section>
  );
};

export default Welcome;
