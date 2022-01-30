import React from 'react';

import Layout from 'components/layout';
import Registration from 'components/organisms/registration';
import Section from 'components/organisms/section';
import ListCard from 'components/organisms/listCard';
import ShadowCard from 'components/organisms/shadowCard';
import Image from 'components/atoms/image';
import Text from 'components/atoms/text';
import Outro from 'components/organisms/outro';
import { graphql, useStaticQuery } from 'gatsby';
import ScrollComponent from 'components/atoms/Scroll';

interface StaticImageType {
  memoticon1: {
    publicURL: string;
  };
  memoticon2: {
    publicURL: string;
  };
  memoticon3: {
    publicURL: string;
  };
  property1: {
    publicURL: string;
  };
  property2: {
    publicURL: string;
  };
  property3: {
    publicURL: string;
  };
  property4: {
    publicURL: string;
  };
}

const Junior = () => {
  const {
    memoticon1,
    memoticon2,
    memoticon3,
    property1,
    property2,
    property3,
    property4,
  } = useStaticQuery<StaticImageType>(graphql`
    query {
      memoticon1: file(name: { eq: "memoticon1" }) {
        publicURL
      }
      memoticon2: file(name: { eq: "memoticon2" }) {
        publicURL
      }
      memoticon3: file(name: { eq: "memoticon3" }) {
        publicURL
      }
      property1: file(name: { eq: "property1" }) {
        publicURL
      }
      property2: file(name: { eq: "property2" }) {
        publicURL
      }
      property3: file(name: { eq: "property3" }) {
        publicURL
      }
      property4: file(name: { eq: "property4" }) {
        publicURL
      }
    }
  `);

  return (
    <Layout>
      {/* intro section */}
      <Registration
        className="junior-intro"
        btnText="PROB junior 1기 신청"
        lightTitle="PROB junior와 함께 성장할"
        title="미래의 훌륭한 인재들을 모집해요"
      />

      {/* content-1 section */}
      <Section
        className="card"
        title="창단 동기"
        subtitle="PROB junior 는 왜 만들어졌을까요?"
      >
        <ScrollComponent className="scroll-up" scrollActiveLocation={0}>
          <ShadowCard
            className="right"
            title="다른 사람들은 어떻게 생각할까요?"
            detail="개발을 할 때 내가 하고 있는 것이 맞는지, 혹은 다른 사람들은
                  어떻게 생각하고 하는지 궁금할 때가 많았습니다. 하지만 학교나
                  주변에서 이걸 물어보며 이야기를 자유롭게 나눌 수 있는 곳이
                  없다는 것을 깨달았습니다. 그래서 같은 개발이라는 관심사를 가진
                  사람들만 모인 그룹을 만들어 자신의 지식을 공유하고 같이 공부할
                  수 있는 환경을 만들고자 했습니다. 같이 프로젝트도 진행하면서
                  자신의 포트폴리오를 늘릴 수 있는 것은 덤이죠."
            src={memoticon1.publicURL}
            author="17학번 전병민"
          />
        </ScrollComponent>
        <ScrollComponent className="scroll-up" scrollActiveLocation={0}>
          <ShadowCard
            className="left"
            title="누구와 같이하면 좋을까요?"
            detail="개발 공부를 시작하면서 어떻게 개발을 하는지 무엇을 해야할지 길을
          찾는것이 어렵고, 혼자 공부를 하는것이 쉽지않았다. 다른 사람과
          같이 프로젝트를 해보고 싶어도 같이 할 사람을 찾기가 어려워
          하고자 하는의지만 있다면 쉽게 팀원을 구할수 있는 모임을 만들고
          싶었다."
            src={memoticon2.publicURL}
            author="19학번 변수미"
          />
        </ScrollComponent>
        <ScrollComponent className="scroll-up" scrollActiveLocation={0}>
          <ShadowCard
            className="right"
            title="학교 수업만으로 충분할까요?"
            detail="수업을 잘 듣고 성적을 잘 받아도 실무에서 사용하는 프로젝트의
          기술들을 찾아보면 전혀 모르는 내용이 있어 회의감이 들고
          불안했다. 많은 학우들이 모여 실무 개발 트렌드를 공부해 시야를
          넓히고 프로젝트 경험을 만들어 미래에 대한 불안감을 덜어냈으면
          좋겠다."
            src={memoticon3.publicURL}
            author="17학번 최현석"
          />
        </ScrollComponent>
      </Section>

      {/* content-2 section */}
      <Section
        className="grid-4"
        title="PROB junior?"
        subtitle="PROB junior 특징에 대해 알아보아요."
      >
        <ScrollComponent
          className="scroll-up scroll-up-1"
          scrollActiveLocation={0}
        >
          <div>
            <Image src={property1.publicURL} className="junior-property" />
            <Text className="junior-property--bold">01 웹 / 앱 개발 그룹</Text>
            <Text className="junior-property--light">
              PROB junior 는 웹 / 앱 개발자들을 위한 그룹입니다.
            </Text>
          </div>
        </ScrollComponent>
        <ScrollComponent
          className="scroll-up scroll-up-2"
          scrollActiveLocation={0}
        >
          <div>
            <Image src={property2.publicURL} className="junior-property" />
            <Text className="junior-property--bold">02 팀 중심 활동</Text>
            <Text className="junior-property--light">
              PROB junior 는 각 포지션에 맞게 꾸려진 팀 별로 프로젝트, 모각코
              활동을 진행합니다.
            </Text>
          </div>
        </ScrollComponent>
        <ScrollComponent
          className="scroll-up scroll-up-3"
          scrollActiveLocation={0}
        >
          <div>
            <Image src={property3.publicURL} className="junior-property" />
            <Text className="junior-property--bold">03 소통의 장</Text>
            <Text className="junior-property--light">
              PROB junior 는 활발한 질문과 소통을 추구합니다.
            </Text>
          </div>
        </ScrollComponent>
        <ScrollComponent
          className="scroll-up scroll-up-4"
          scrollActiveLocation={0}
        >
          <div>
            <Image src={property4.publicURL} className="junior-property" />
            <Text className="junior-property--bold">
              04 신뢰할 수 있는 동료
            </Text>
            <Text className="junior-property--light">
              PROB junior 는 면접을 통해 개발 가능 인력을 선발하여 신뢰합니다.
            </Text>
          </div>
        </ScrollComponent>
      </Section>

      {/* content-3 section */}
      <Section
        className="grid-2"
        title="동료와 함께라면"
        title2="성장이 두렵지 않습니다."
        subtitle="PROB junior 는 다양한 활동들을 하며 함께 성장해요."
      >
        <ScrollComponent className="scroll-up" scrollActiveLocation={0}>
          <ListCard
            title="01 활발한 정보 공유"
            detail="개발이라는 같은 관심사를 가지고, 성장이라는 같은 목적을 가진
          사람들이 모이면 개발에 대한 이런저런 이야기를 나누는 것은 전혀
          이상한 일이 아니죠. 오직 개발 관련 정보를 공유하기 위해 개설된
          카카오톡 오픈 채팅방과 디스코드 채널에서 눈치보지 않고 자유롭게
          이야기를 나눠보세요."
            detailList={[
              '앱 /프론트엔드 / 백엔드 / 전체 카카오톡 오픈 채팅방 운영',
              '개발 자료 공유를 위해 전체 & 팀 별 디스코드 개발 공간 운영',
            ]}
          />
        </ScrollComponent>
        <ScrollComponent className="scroll-up" scrollActiveLocation={0}>
          <ListCard
            title="02 세미나 개최"
            detail="내가 생각하는 것을 다른 사람들은 어떻게 생각할까요? 하나의 공통된
          주제에 대해서 이야기를 나눌 수 있는 정기적인 세미나를 개최해요.
          정해지는 주제에 대해서 개인적으로 공부하고 준비해서 발표하는 시간을
          가져봅시다."
            detailList={[
              '앱 / 프론트엔드 / 백엔드로 나뉘어 개인 발표',
              '월 별로 진행 (변경 가능)',
              '회원들이 직접 돌아가며 주제 선정',
            ]}
          />
        </ScrollComponent>
        <ScrollComponent className="scroll-up" scrollActiveLocation={0}>
          <ListCard
            title="03 모각코 활동"
            detail="혼자 공부하다보면 지치고 힘들 때가 많은 것 같아요. 팀원들과 같이
          모여 각자 코딩하는 모각코를 진행합니다. 분명 개발에 생기를
          불어넣어주는 활동이 될 거에요."
            detailList={[
              '온라인 / 오프라인 다양한 형태 선정',
              '자유로운 형식과 계획 작성',
              'PROB junior 회원들의 기술블로그 링크를 게시',
            ]}
          />
        </ScrollComponent>
        <ScrollComponent className="scroll-up" scrollActiveLocation={0}>
          <ListCard
            title="04 프로젝트 참여"
            detail="포지션과 수준에 맞게 꾸려진 팀 단위로 프로젝트를 진행하고 학기 말에
          발표회를 진행해요. 팀 별로 만든 프로젝트를 테스트 및 배포하는 활동이
          될 거에요. 기회가 된다면 다양한 공모전 및 대회에 출전해보세요."
            detailList={[
              '간단한 토이 프로젝트부터 정식 서비스를 위한 프로젝트까지',
              '외부 디자이너 팀원 영입 가능',
            ]}
          />
        </ScrollComponent>
      </Section>

      {/* outro section */}
      <Outro />
    </Layout>
  );
};
export default Junior;
