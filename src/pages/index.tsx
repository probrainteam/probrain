import React, { useState, useEffect, FunctionComponent, useRef } from 'react';
// import { StaticImage } from 'gatsby-plugin-image';
import './index.scss';
import Layout from 'components/layout';
import probrainLogoBlue from 'images/probrainLogo-blue.png';
import Education from 'images/Education.png';
import HomecomingDay from 'images/HomecomingDay.png';
import MT from 'images/MT.png';
import exImg from 'images/exImg.png';

import ScrollComponent from 'components/molecules/Scroll';
import Introduce from 'components/organisms/introduce';
import Welcome from 'components/organisms/welcome';
import Card, { CardLeft, CardRight } from 'components/molecules/listCard';
import Registration from 'components/organisms/registration';
import Button from 'components/atoms/button';
import ListCard from 'components/molecules/listCard';
import ImgCard from 'components/molecules/imgCard';
import TextContent from 'components/atoms/textContent';
import ImageContent from 'components/atoms/imageContent';
const IndexPage = () => {
  return (
    <Layout>
      <Welcome />
      <Introduce
        className="about"
        title="ABOUT"
        subtitle="PROBRAIN은 어떤 동아리일까요?"
      >
        <TextContent
          title="웹 개발 동아리"
          detail="개발이라는 같은 관심사를 가지고, 성장이라는 같은 목적을 가진
              사람들이 모이면 개발에 대한 이런저런 이야기를 나누는 것은 전혀
              이상한 일이 아니죠. 오직 개발 관련 정보를 공유하기 위해 개설된
              카카오톡 오픈 채팅방과 디스코드 채널에서 눈치보지 않고 자유롭게
              이야기를 나눠보세요."
        />
        <ImageContent imgSrc={probrainLogoBlue} className="" />
      </Introduce>
      <Introduce
        title="ACTIVITY"
        subtitle="PROBRAIN 대표 활동들을 소개해요"
        className="activity"
      >
        <ScrollComponent className="" scrollActiveLocation={150}>
          <ImgCard
            title="01 Membership Training (MT)"
            detail="개발이라는 같은 관심사를 가지고, 성장이라는 같은 목적을 가진
        사람들이 모이면 개발에 대한 이런저런 이야기를 나누는 것은 전혀
        이상한 일이 아니죠. 오직 개발 관련 정보를 공유하기 위해 개설된
        카카오톡 오픈 채팅방과 디스코드 채널에서 눈치보지 않고 자유롭게
        이야기를 나눠보세요."
            imgSrc={MT}
            className="card--left"
          />
        </ScrollComponent>
        <ScrollComponent className="" scrollActiveLocation={150}>
          <ImgCard
            title="02 Homecoming day"
            detail="개발이라는 같은 관심사를 가지고, 성장이라는 같은 목적을 가진
          사람들이 모이면 개발에 대한 이런저런 이야기를 나누는 것은 전혀
          이상한 일이 아니죠. 오직 개발 관련 정보를 공유하기 위해 개설된
          카카오톡 오픈 채팅방과 디스코드 채널에서 눈치보지 않고 자유롭게
          이야기를 나눠보세요."
            imgSrc={HomecomingDay}
            className="card--right"
          />
        </ScrollComponent>
        <ScrollComponent className="" scrollActiveLocation={150}>
          <ImgCard
            title="03 Web Education"
            detail="개발이라는 같은 관심사를 가지고, 성장이라는 같은 목적을 가진
          사람들이 모이면 개발에 대한 이런저런 이야기를 나누는 것은 전혀
          이상한 일이 아니죠. 오직 개발 관련 정보를 공유하기 위해 개설된
          카카오톡 오픈 채팅방과 디스코드 채널에서 눈치보지 않고 자유롭게
          이야기를 나눠보세요."
            imgSrc={Education}
            className="card--left"
          />
        </ScrollComponent>
      </Introduce>
      <Introduce
        className="tmi"
        title="PROBRAIN TMI"
        subtitle="PROBRAIN 의 사소한 정보들!"
      >
        <ListCard
          title=" 01 전통이 있는 동아리 (since 2002)"
          detail="  개발이라는 같은 관심사를 가지고, 성장이라는 같은 목적을 가진
              사람들이 모이면 개발에 대한 이런저런 이야기를 나누는 것은 전혀
              이상한 일이 아니죠. 오직 개발 관련 정보를 공유하기 위해 개설된
              카카오톡 오픈 채팅방과 디스코드 채널에서 눈치보지 않고 자유롭게
              이야기를 나눠보세요."
          detailList={[
            '온라인 / 오프라인 다양한 형태 선정',
            '온라인 / 오프라인 다양한 형태 선정',
            '온라인 / 오프라인 다양한 형태 선정',
          ]}
        ></ListCard>
        <ListCard
          title="02 의욕적인 동아리"
          detail="  내가 생각하는 것을 다른 사람들은 어떻게 생각할까요? 하나의 공통된
              주제에 대해서 이야기를 나눌 수 있는 정기적인 세미나를 개최해요. 월
              별로 정해지는 주제에 대해서 개인적으로 공부하고 준비해서 발표하는
              시간을 가져봅시다."
          detailList={[
            '온라인 / 오프라인 다양한 형태 선정',
            '온라인 / 오프라인 다양한 형태 선정',
            '온라인 / 오프라인 다양한 형태 선정',
          ]}
        ></ListCard>
        <ListCard
          title="03 개발과 친목이 공존하는 동아리"
          detail="혼자 공부하다보면 지치고 힘들 때가 많은 것 같아요. 팀원들과 같이
              모여서 각자 코딩하는 모각코를 진행합니다. 분명 개발에 생기를
              불어넣어주는 활동이 될거에요."
          detailList={[
            '온라인 / 오프라인 다양한 형태 선정',
            '온라인 / 오프라인 다양한 형태 선정',
            '온라인 / 오프라인 다양한 형태 선정',
          ]}
        ></ListCard>
        <ListCard
          title="04 선배들의 OUTPUT이 좋은 동아리"
          detail="포지션과 수준에 맞춰 팀이 꾸려져요. 팀 단위로 프로젝트를 진행하고
              학기 말에 발표회를 진행해요. 팀 별로 만든 프로젝트를 테스트 및
              배포하고 기회가 된다면 다양한 대회에 출전도 해보세요."
          detailList={[
            '온라인 / 오프라인 다양한 형태 선정',
            '온라인 / 오프라인 다양한 형태 선정',
            '온라인 / 오프라인 다양한 형태 선정',
          ]}
        ></ListCard>
      </Introduce>
      <section className="large-img"></section>
      <Registration
        title="  PRORAIN 과 함께 하고 싶으신가요?"
        btnText="PROBRAIN에 가입신청하기"
        className="together"
      />
    </Layout>
  );
};

export default IndexPage;
