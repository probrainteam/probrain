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
import ImageContent from 'components/atoms/image';

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
      <Section
        className="grid-2"
        title="ABOUT"
        subtitle="PROBRAIN은 어떤 동아리일까요?"
      >
        <ScrollComponent className="scroll-up" scrollActiveLocation={150}>
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
        <ScrollComponent className="scroll-up" scrollActiveLocation={150}>
          <ImageContent src={blueLogo.publicURL} className="" />
        </ScrollComponent>
      </Section>

      <Section
        title="ACTIVITY"
        subtitle="PROBRAIN 대표 활동들을 소개해요"
        className="activity"
      >
        <ScrollComponent className="scroll-left" scrollActiveLocation={150}>
          <ImageCard
            title="01 Membership Training (MT)"
            detail="개발이라는 같은 관심사를 가지고, 성장이라는 같은 목적을 가진
        사람들이 모이면 개발에 대한 이런저런 이야기를 나누는 것은 전혀
        이상한 일이 아니죠. 오직 개발 관련 정보를 공유하기 위해 개설된
        카카오톡 오픈 채팅방과 디스코드 채널에서 눈치보지 않고 자유롭게
        이야기를 나눠보세요."
            src={mt.publicURL}
            className="left"
          />
        </ScrollComponent>
        <ScrollComponent className="scroll-right" scrollActiveLocation={150}>
          <ImageCard
            title="02 Homecoming day"
            detail="개발이라는 같은 관심사를 가지고, 성장이라는 같은 목적을 가진
          사람들이 모이면 개발에 대한 이런저런 이야기를 나누는 것은 전혀
          이상한 일이 아니죠. 오직 개발 관련 정보를 공유하기 위해 개설된
          카카오톡 오픈 채팅방과 디스코드 채널에서 눈치보지 않고 자유롭게
          이야기를 나눠보세요."
            src={homecoming.publicURL}
            className="right"
          />
        </ScrollComponent>
        <ScrollComponent className="scroll-left" scrollActiveLocation={150}>
          <ImageCard
            title="03 Web Education"
            detail="개발이라는 같은 관심사를 가지고, 성장이라는 같은 목적을 가진
          사람들이 모이면 개발에 대한 이런저런 이야기를 나누는 것은 전혀
          이상한 일이 아니죠. 오직 개발 관련 정보를 공유하기 위해 개설된
          카카오톡 오픈 채팅방과 디스코드 채널에서 눈치보지 않고 자유롭게
          이야기를 나눠보세요."
            src={education.publicURL}
            className="left"
          />
        </ScrollComponent>
        <ScrollComponent className="scroll-right" scrollActiveLocation={150}>
          <ImageCard
            title="04 Web Contest"
            detail="개발이라는 같은 관심사를 가지고, 성장이라는 같은 목적을 가진
          사람들이 모이면 개발에 대한 이런저런 이야기를 나누는 것은 전혀
          이상한 일이 아니죠. 오직 개발 관련 정보를 공유하기 위해 개설된
          카카오톡 오픈 채팅방과 디스코드 채널에서 눈치보지 않고 자유롭게
          이야기를 나눠보세요."
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
        <ScrollComponent className="scroll-up" scrollActiveLocation={150}>
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
          />
        </ScrollComponent>
        <ScrollComponent className="scroll-up" scrollActiveLocation={150}>
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
          />
        </ScrollComponent>
        <ScrollComponent className="scroll-up" scrollActiveLocation={150}>
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
          />
        </ScrollComponent>
        <ScrollComponent className="scroll-up" scrollActiveLocation={150}>
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
