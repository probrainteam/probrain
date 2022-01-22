import React, { useState, useEffect, FunctionComponent, useRef } from 'react';
// import { StaticImage } from 'gatsby-plugin-image';
import './index.scss';
import Layout from 'components/layout';
import mainImage from 'images/mainImage.png';
import probrainLogoBlue from 'images/probrainLogo-blue.png';
import Education from 'images/Education.png';
import HomecomingDay from 'images/HomecomingDay.png';
import MT from 'images/MT.png';
import exImg from 'images/exImg.png';

import ScrollComponent from 'components/molecules/Scroll';
const IndexPage = () => {
  return (
    <Layout>
      <section className="welcome">
        <div className="welcome__inner">
          <div className="welcome__top">
            <div className="welcome__title">
              <div className="welcome__title--light">PROBRAIN과</div>
              <div className="welcome__title--light">함께 추억을 쌓을</div>
              <div className="welcome__title--bold">
                멋진 동료를 찾고 있어요
              </div>
            </div>
            <button className="btn btn--grey">PROBRAIN 가입 신청</button>
          </div>
          <div className="welcome__image">
            {/* picture? */}
            <img src={mainImage} alt="mainImage" />
          </div>
        </div>
      </section>
      <section className="about">
        <div className="about__inner">
          <div className="about__title">
            <div className="about__title--main">ABOUT</div>
            <div className="about__title--sub">
              PROBRAIN은 어떤 동아리일까요?
            </div>
          </div>
          <div className="about__content">
            <div className="card">
              <div className="card__text">
                <div className="card__title">웹 개발 동아리</div>
                <div className="card__detail">
                  개발이라는 같은 관심사를 가지고, 성장이라는 같은 목적을 가진
                  사람들이 모이면 개발에 대한 이런저런 이야기를 나누는 것은 전혀
                  이상한 일이 아니죠. 오직 개발 관련 정보를 공유하기 위해 개설된
                  카카오톡 오픈 채팅방과 디스코드 채널에서 눈치보지 않고
                  자유롭게 이야기를 나눠보세요.
                </div>
              </div>
              <div className="card__img">
                <img src={probrainLogoBlue} alt="probrain" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="activity">
        <div className="activity__inner">
          <div className="activity__title">
            <div className="activity__title--main">ACTIVITY</div>
            <div className="activity__title--sub">
              PROBRAIN 대표 활동들을 소개해요
            </div>
          </div>
          <div className="card-list">
            <div className="card card--left">
              <div className="card__img">
                <img src={MT} alt="MT" />
              </div>
              <div className="card__text">
                <div className="card__title">01 Membership Training (MT)</div>
                <div className="card__detail">
                  내가 생각하는 것을 다른 사람들은 어떻게 생각할까요? 하나의
                  공통된 주제에 대해서 이야기를 나눌 수 있는 정기적인 세미나를
                  개최해요. 월 별로 정해지는 주제에 대해서 개인적으로 공부하고
                  준비해서 발표하는 시간을 가져봅시다.
                </div>
              </div>
            </div>
            <div className="card card--right">
              <div className="card__text">
                <div className="card__title">02 Homecoming day</div>
                <div className="card__detail">
                  내가 생각하는 것을 다른 사람들은 어떻게 생각할까요? 하나의
                  공통된 주제에 대해서 이야기를 나눌 수 있는 정기적인 세미나를
                  개최해요. 월 별로 정해지는 주제에 대해서 개인적으로 공부하고
                  준비해서 발표하는 시간을 가져봅시다.
                </div>
              </div>
              <div className="card__img">
                <img src={HomecomingDay} alt="HomecomingDay" />
              </div>
            </div>
            <div className="card card--left">
              <div className="card__img">
                <img src={Education} alt="Education" />
              </div>
              <div className="card__text">
                <div className="card__title">03 Web Education</div>
                <div className="card__detail">
                  내가 생각하는 것을 다른 사람들은 어떻게 생각할까요? 하나의
                  공통된 주제에 대해서 이야기를 나눌 수 있는 정기적인 세미나를
                  개최해요. 월 별로 정해지는 주제에 대해서 개인적으로 공부하고
                  준비해서 발표하는 시간을 가져봅시다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="intro">
        <div className="intro__inner">
          <div className="intro__title">
            <p className="intro__title--main">
              프로브레인과 함께 성장할 <br />
              멋진 동료를 찾고 있어요
            </p>
            <p className="intro__title--sub">
              프로브레인 어쩌고 저쩌고 프로브레인 어쩌고 저쩌고
              프로브레인화이팅!
            </p>
          </div>
          <div className="intro__content">
            <div className="card">
              <div className="card__title">PROBRAIN TMI1</div>
              <div className="card__subtitle">&#35;PROBRAIN</div>
              <div className="card__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                quasi sint quidem maxime atque provident ipsam ab? Facilis sint
                repellat reiciendis autem architecto. Consequatur unde eius sit,
                minus consequuntur magnam.
              </div>
            </div>
            <div className="card">
              <div className="card__title"> PROBRAIN TMI2</div>
              <div className="card__subtitle">&#35;2022 &#35;😀</div>
              <div className="card__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                quasi sint quidem maxime atque provident ipsam ab? Facilis sint
                repellat reiciendis autem architecto. Consequatur unde eius sit,
                minus consequuntur magnam.Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Animi quasi sint quidem maxime atque provident
                ipsam ab? Facilis sin adipisicing elit. Animi quasi sint quidem
                maxime atque provident ips architecto. Consequatur unde eius
                sit, minus consequuntur magnam.
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollComponent classname="text" scrollActiveLocation={150}>
        <div className="text__inner">
          <div className="text__main">PROBRAIN</div>
          <div className="text__sub">professional brain group</div>
        </div>
      </ScrollComponent>
      <section className="c1">
        <div className="c1__inner">
          <div className="c1__content">
            <ScrollComponent classname="c1__card" scrollActiveLocation={150}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              laudantium in debitis nisi laboriosam possimus saepe. Accusantium
              eveniet nostrum quos in fugi Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Facere laudantium in debitis nisi
              laboriosam possimus saepe. Accusantium eveniet nostrum quos in
              fugiat, architecto impedit possimus dolores, minima non
              perspiciatis. Recusandae!at, architecto impedit possimus dolores,
              minima non perspiciatis. Recusandae!
            </ScrollComponent>
            <ScrollComponent classname="c1__card" scrollActiveLocation={150}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              laudantium in debitis nisi laboriosam possimus saepe. Accusantium
              eveniet nostrum quos in fugi Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Facere laudantium in debitis nisi
              laboriosam possimus saepe. Accusantium eveniet nostrum quos in
              fugiat, architecto impedit possimus dolores, minima non
              perspiciatis. Recusandae!at, architecto impedit possimus dolores,
              minima non perspiciatis. Recusandae!
            </ScrollComponent>
            <ScrollComponent classname="c1__card" scrollActiveLocation={150}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              laudantium in debitis nisi laboriosam possimus saepe. Accusantium
              eveniet nostrum quos in fugi Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Facere laudantium in debitis nisi
              laboriosam possimus saepe. Accusantium eveniet nostrum quos in
              fugiat, architecto impedit possimus dolores, minima non
              perspiciatis. Recusandae!at, architecto impedit possimus dolores,
              minima non perspiciatis. Recusandae!
            </ScrollComponent>
          </div>
        </div>
      </section>
      <section className="registration">
        <div className="registration__inner">
          <button className="registration__btn">가입 신청</button>
        </div>
      </section>
      <section className="intro-junior">
        <div className="intro-junior__inner">
          <div className="intro-junior__left">
            <div className="intro-junior__title">
              프로브레인과 함께할 <br />
              멋진 동료를 찾고있어요
            </div>
            <div className="intro-junior__sub-title">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
              dignissimos vm, dolor sit amet consectetur adipisicing elit. Ullam
              dignissimos v
            </div>
            <div>
              <button className="intro-junior__btn">PROB junior 소개</button>
            </div>
          </div>
          <div className="intro-junior__right">
            <div className="intro-junior__logo"></div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default IndexPage;
