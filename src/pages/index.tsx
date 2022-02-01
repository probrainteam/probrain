import React from 'react';
import './index.scss';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from 'components/layout';
import ScrollComponent from 'components/atoms/Scroll';
import Section from 'components/organisms/section';
import Welcome from 'components/organisms/welcome';
import Registration from 'components/organisms/registration';
import ListCard from 'components/organisms/listCard';
import ImageCard from 'components/organisms/imageCard';
import TextContent from 'components/molecules/textContent';
import Image from 'components/atoms/image';

interface StaticImageType {
  blueLogo: {
    publicURL: string;
  };
  mt: {
    publicURL: string;
  };
  homecoming: {
    publicURL: string;
  };
  education: {
    publicURL: string;
  };
  contest: {
    publicURL: string;
  };
}

const IndexPage = () => {
  const { blueLogo, mt, homecoming, education, contest } =
    useStaticQuery<StaticImageType>(graphql`
      query {
        blueLogo: file(name: { eq: "logo-blue" }) {
          publicURL
        }
        mt: file(name: { eq: "mt" }) {
          publicURL
        }
        homecoming: file(name: { eq: "homecoming" }) {
          publicURL
        }
        education: file(name: { eq: "education" }) {
          publicURL
        }
        contest: file(name: { eq: "contest" }) {
          publicURL
        }
      }
    `);

  return (
    <Layout>
      <Welcome />
      {/* ABOUT */}
      <Section
        className="grid-2"
        title="ABOUT"
        subtitle="PROBRAIN은 어떤 동아리일까요?"
      >
        <ScrollComponent className="scroll-up" scrollActiveLocation={0}>
          <Image src={blueLogo.publicURL} className="blueLogo" />
        </ScrollComponent>

        <ScrollComponent className="scroll-up" scrollActiveLocation={0}>
          <TextContent
            className=""
            title="웹 개발 동아리"
            detail="개발이라는 같은 관심사를 가지고, 성장이라는 같은 목적을 가진
              사람들이 모이면 개발에 대한 이런저런 이야기를 나누는 것은 전혀
              이상한 일이 아니죠. 오직 개발 관련 정보를 공유하기 위해 개설된
              카카오톡 오픈 채팅방과 디스코드 채널에서 눈치보지 않고 자유롭게
              이야기를 나눠보세요."
          />
        </ScrollComponent>
      </Section>

      <Section
        className="activity"
        title="ACTIVITY"
        subtitle="PROBRAIN 대표 활동들을 소개해요"
      >
        <ScrollComponent className="scroll-left" scrollActiveLocation={0}>
          <ImageCard
            title="01 Membership Training (MT)"
            detail="개발을 시작하기 전 서로를 잘 알아야 하는 것은 필수 사항이죠. Membership Training(MT)를 통해 같은 관심사를 가진 친구들과 이런저런 이야기를 나누어 서로의 친밀도를 높이고 앞으로의 동아리 활동의 방향성을 잡아보고 즐거움을 느껴보세요."
            src={mt.publicURL}
            className="left"
          />
        </ScrollComponent>
        <ScrollComponent className="scroll-right" scrollActiveLocation={0}>
          <ImageCard
            title="02 Homecoming day"
            detail="개발자라는 꿈을 가지고 동아리 활동을 하다보면 실제 개발자 생활이 궁금해지기도 하는것은 당연한거에요. 우리 동아리에서 졸업한 선배들을 환영하며 개발자의 삶에 대해 듣다보면 개발자에 대한 꿈이 확실해지죠. 동아리 선배들과 한 자리에서 시간을 보내 동아리에 대한 정도 쌓고 우리에게 도움이 될만한 이야기도 들어보세요."
            src={homecoming.publicURL}
            className="right"
          />
        </ScrollComponent>
        <ScrollComponent className="scroll-left" scrollActiveLocation={0}>
          <ImageCard
            title="03 Web Education"
            detail="개발을 하고싶더라도 혼자서 공부하는 것은 언제나 힘든 일이에요. 선배를 통해 친구들과 개발에 대한 지식을 습득하고 선배들의 팁을 들으며 개발에 한발짝 더 다가가보세요. 교육을 같이 듣는 친구들과 팀을 이루어 프로젝트를 진행하면서 궁금한 점도 물어볼 수 있는 교육이 될거에요.
            "
            src={education.publicURL}
            className="left"
          />
        </ScrollComponent>
        <ScrollComponent className="scroll-right" scrollActiveLocation={0}>
          <ImageCard
            title="04 Web Contest"
            detail="개발에 대한 공부를 하더라도 실제로 사용하지 않는다면 우리는 한 자리에 머무를수 밖에 없을거에요. 개발을 공부하고 우리가 습득한 기술들을 Web Contest를 통해 펼쳐보세요. 참가를 통해 자신이 성장하는 발판을 마련하는 것뿐 아니라 성과를 이루어 친구들과 상도받고 기쁨을 나눌 수 있는 소중한 경험을 쌓을수 있을거에요."
            src={contest.publicURL}
            className="right"
          />
        </ScrollComponent>
      </Section>

      <Section
        className="grid-2"
        title="PROBRAIN TMI"
        subtitle="PROBRAIN 의 사소한 정보들!"
      >
        <ScrollComponent className="scroll-up" scrollActiveLocation={0}>
          <ListCard
            title=" 01 전통이 있는 동아리 (since 2002)"
            detail="2002년 3월 25일에 개설된 프로브레인은 웹 프로그래밍을 중심으로 
            이규철 교수님의 지도를 받아서 운영되고 있습니다. 매년 자체 동아리 
            대회를 개최하여 컴퓨터융합학부의 웹에 대한 관심을 유도하고 있으며
            동아리원들의 친목을 위한 MT도 재밌게 준비하고 있어요 "
            detailList={[]}
          />
        </ScrollComponent>
        <ScrollComponent className="scroll-up" scrollActiveLocation={0}>
          <ListCard
            title="02 의욕적인 동아리"
            detail="PROB Junior을 통하여 자신의 팀원을 찾아서 자신이 생각하고 있는
            프로젝트를 시작해 볼 수 있으며 팀원으로 참여하여서 기여할 수도 있
            습니다. 더욱 많은 정보를 원하면 사이트 우측 상단의 JUNIOR 카테
            고리로 이동해 보세요!"
            detailList={[]}
          />
        </ScrollComponent>
        <ScrollComponent className="scroll-up" scrollActiveLocation={0}>
          <ListCard
            title="03 개발과 친목이 공존하는 동아리"
            detail="혼자 공부하다보면 지치고 힘들 때가 많은 것 같아요. 팀원들과 같이
              모여서 각자 코딩하는 모각코를 진행합니다. 분명 개발에 생기를
              불어넣어주는 활동이 될거에요."
            detailList={[]}
          />
        </ScrollComponent>
        <ScrollComponent className="scroll-up" scrollActiveLocation={0}>
          <ListCard
            title="04 선배들의 OUTPUT이 좋은 동아리"
            detail="포지션과 수준에 맞춰 팀이 꾸려져요. 팀 단위로 프로젝트를 진행하고
              학기 말에 발표회를 진행해요. 팀 별로 만든 프로젝트를 테스트 및
              배포하고 기회가 된다면 다양한 대회에 출전도 해보세요."
            detailList={[]}
          />
        </ScrollComponent>
      </Section>

      <section className="large-img" />

      <Registration
        title="  PROBRAIN 과 함께 하고 싶으신가요?"
        btnText="PROBRAIN에 가입신청하기"
        className="probrain-outro"
      />
    </Layout>
  );
};

export default IndexPage;
