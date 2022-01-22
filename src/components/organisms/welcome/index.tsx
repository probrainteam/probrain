import React from 'react';
import mainImage from 'images/mainImage.png';
import './welcome.scss';
const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome__inner">
        <div className="welcome__top">
          <div className="welcome__title">
            <div className="welcome__title--light">PROBRAIN과</div>
            <div className="welcome__title--light">함께 추억을 쌓을</div>
            <div className="welcome__title--bold">멋진 동료를 찾고 있어요</div>
          </div>
          <button className="btn btn--grey">PROBRAIN 가입 신청</button>
        </div>
        <div className="welcome__image">
          {/* picture? */}
          <img src={mainImage} alt="mainImage" />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
