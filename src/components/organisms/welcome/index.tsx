import React from 'react';
import './welcome.scss';
import mainImage from 'images/mainImage.png';
import Button from 'components/atoms/button';
import Text from 'components/atoms/text';
import Image from 'components/atoms/image';

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome__inner">
        <div className="welcome__top">
          <div className="welcome__title">
            <Text className="main-subtitle">프로브레인과 함께 추억을 쌓을</Text>
            <Text className="main-title">멋진 동료를 찾고 있어요</Text>
          </div>
          <Button className="gray">PROBRAIN 가입 신청</Button>
        </div>
        <Image className="welcome" src={mainImage} />
      </div>
    </section>
  );
};

export default Welcome;
