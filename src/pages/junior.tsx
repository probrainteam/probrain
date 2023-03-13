import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from 'components/layout';
import Registration from 'components/organisms/registration';
import Section from 'components/organisms/section';
import ListCard from 'components/organisms/listCard';
import Outro from 'components/organisms/outro';
import ScrollComponent from 'components/atoms/Scroll';
import Property from 'components/molecules/property';
import About from 'components/organisms/about';
import ShadowCard from 'components/organisms/shadowCard';

interface JuniorQueryType {
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
  meta: {
    publicURL: string;
  };
  junior: {
    publicURL: string;
  };
  site: {
    siteMetadata: {
      title: string;
      description: string;
      siteUrl: string;
    };
  };
}

const Junior = () => {
  const {
    site,
    meta,
    junior,
    memoticon1,
    memoticon2,
    memoticon3,
    property1,
    property2,
    property3,
    property4,
  } = useStaticQuery<JuniorQueryType>(graphql`
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
      junior: file(name: { eq: "junior" }) {
        publicURL
      }
      meta: file(name: { eq: "meta" }) {
        publicURL
      }

      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  const foundInfo = [
    {
      className: 'right',
      title: '다른 사람들은 어떻게 생각할까요?',
      detail:
        '개발을 할 때 내가 하고 있는 것이 맞는지, 혹은 다른 사람들은 어떻게 생각하고 하는지 궁금할 때가 많았습니다. 그래서 같은 목적을 가진 사람들과 지식을 공유하고 공부할 수 있는 환경을 만들고자 했습니다. 프로브 주니어는 동료들과 같이 프로젝트를 진행하면서 자신의 포트폴리오를 만들어나갈 수 있는 기회가 될 것이라 생각합니다.',
      src: memoticon1.publicURL,
      author: '17학번 전병민',
    },
    {
      className: 'left',
      title: '경험을 어떻게 쌓으면 좋을까요?',
      detail:
        '개발 공부를 시작하면서 공부를 잘 하고 있는건지 걱정이 많이 들고, 그래서 실무 경험이나 프로젝트 경험을 해보고 싶어도 기회를 얻기 쉽지가 않았습니다. 프로브 주니어로 인해 다름 사람들과 협업하는 경험을 쌓고, 자신의 능력을 기를수 있는 기회를 놓치지 않았으면 좋겠습니다. ',
      src: memoticon2.publicURL,
      author: '19학번 변수미',
    },
    {
      className: 'right',
      title: '학교 수업만으로 충분할까요?',
      detail:
        '수업을 잘 듣고 성적을 잘 받아도 실무에서 사용하는 프로젝트의 기술들을 찾아보면 전혀 모르는 내용이 있어 회의감이 들고 불안했습니다. 많은 학우들이 모여 실무 개발 트렌드를 공부해 시야를 넓히고 프로젝트 경험을 만들어 미래에 대한 불안감을 덜어낼 수 있을 것이라 생각합니다.',
      src: memoticon3.publicURL,
      author: '17학번 최현석',
    },
  ];

  const juniorPropertyInfo = [
    {
      title: '01 개발 스터디 그룹',
      content: 'PROB junior 는 FE / BE 개발자들을 위한 스터디 그룹입니다.',
      src: property1.publicURL,
    },
    {
      title: '02 팀 중심 활동',
      content:
        'PROB junior 는 각 포지션에 맞게 꾸려진 팀 별로 프로젝트, 모각코 활동을 진행합니다.',
      src: property2.publicURL,
    },
    {
      title: '03 성장과 발전',
      content:
        'PROB junior 는 계속 성장할 예정이며, 디자이너도 모집할 계획입니다.',
      src: property3.publicURL,
    },
    {
      title: ' 04 신뢰할 수 있는 동료',
      content:
        'PROB junior 는 개발 가능 인력을 선발하여 신뢰할 수 있는 팀원을 만날 수 있습니다.',
      src: property4.publicURL,
    },
  ];

  const listCardInfo = [
    {
      title: '01 활발한 정보 공유',
      detail:
        '개발이라는 같은 관심사를 가지고, 성장이라는 같은 목적을 가진 사람들이 모이면 서로 개발에 대한 이야기를 나누는 것은 전혀 이상한 일이 아니에요. 눈치 보지 않고 자유롭게 이야기를 나눌 수 있어요.',
      detailList: [
        'FE / BE / 전체 오픈 채팅방 운영',
        '개발 자료 공유를 위한 공간 운영',
      ],
    },
    {
      title: '02 세미나 개최',
      detail:
        '내가 생각하는 것을 다른 사람들은 어떻게 생각할까요? 하나의 공통된 주제에 대해서 이야기를 나눌 수 있는 정기적인 세미나를 개최해요. 정해지는 주제에 대해서 개인적으로 공부하고 준비해서 발표하는 시간을 가져보세요.',
      detailList: [
        'FE / BE 로 나뉘어 개인 발표',
        '월 별로 진행 (변경 가능)',
        '회원들이 직접 돌아가며 주제 선정',
      ],
    },
    {
      title: '03 모각코 활동',
      detail:
        '혼자 공부하다 보면 지치고 힘들 때가 많은 것 같아요. 팀원들과 모각코를 진행합니다. 분명 지친 개발 공부에 생기를 불어넣어 주는 활동이 될 거예요.',
      detailList: [
        '온라인 / 오프라인 다양한 형태 선정',
        '자유로운 형식과 계획 작성',
        'PROB junior 회원들의 기술블로그 링크를 게시',
      ],
    },
    {
      title: '04 프로젝트 참여',
      detail:
        '포지션에 맞게 꾸려진 팀 단위로 프로젝트를 진행하고 학기 말에 발표회를 진행해요. 팀 별로 만든 프로젝트를 테스트하고 배포하는 활동이 될 거예요. 기회가 된다면 다양한 공모전 및 대회에 출전해 보세요.',
      detailList: [
        '간단한 토이 프로젝트부터 정식 서비스를 위한 프로젝트까지',
        '외부 디자이너 팀원 영입 가능',
      ],
    },
  ];

  const foundList = foundInfo.map((item, index) => (
    <ScrollComponent
      key={index}
      className="scroll-up card"
      scrollActiveLocation={0}
    >
      <ShadowCard
        className={item.className}
        title={item.title}
        detail={item.detail}
        src={item.src}
        author={item.author}
      />
    </ScrollComponent>
  ));

  const juniorPropertyList = juniorPropertyInfo.map((item, index) => (
    <ScrollComponent
      className={`scroll-up scroll-up-${index + 1}`}
      scrollActiveLocation={0}
      key={index}
    >
      <Property
        className={'junior-property'}
        title={item.title}
        content={item.content}
        imgUrl={item.src}
      />
    </ScrollComponent>
  ));

  const listCardList = listCardInfo.map((item, index) => (
    <ScrollComponent key={index} className="scroll-up" scrollActiveLocation={0}>
      <ListCard
        title={item.title}
        detail={item.detail}
        detailList={item.detailList}
      />
    </ScrollComponent>
  ));

  return (
    <Layout
      title={site?.siteMetadata?.title}
      description={site?.siteMetadata?.description}
      url={site?.siteMetadata?.siteUrl}
      image={meta.publicURL}
    >
      {/* intro section */}
      <Registration
        className="junior-intro"
        btnText="PROB junior 1기 신청"
        lightTitle="PROB junior와 함께 성장할"
        title="미래의 훌륭한 인재들을 모집해요"
        url={
          'https://docs.google.com/forms/d/e/1FAIpQLScCj-Ba8a-ec1R_mcV-vOg-iTB_dHnjvdalw7KvUQZuQmKZFA/viewform?usp=sf_link'
        }
      />
      {/* content-1 section */}

      <About
        imgSrc={junior.publicURL}
        subtitle={'프로브 주니어를 소개합니다!'}
        contentTitle={'개발 스터디 그룹'}
        contentDetail={
          '2022년에 시작한 프로브 주니어는 프로브레인의 개발 스터디 그룹입니다. 항상 성장과 발전에 대해 고민하고 활발한 소통을 추구합니다. 프로브레인 회원을 포함한 모든 학생들이 가입할 수 있습니다.'
        }
      />

      <Section
        className="card"
        title="창단 동기"
        subtitle="PROB junior 는 왜 만들어졌을까요?"
      >
        {foundList}
      </Section>

      {/* content-2 section */}
      <Section
        className="grid-4"
        title="PROB junior?"
        subtitle="PROB junior 특징을 소개합니다!"
      >
        {juniorPropertyList}
      </Section>

      {/* content-3 section */}
      <Section
        className="grid-2"
        title="동료와 함께라면"
        title2="성장이 두렵지 않습니다."
        subtitle="PROB junior 는 다양한 활동들을 하며 함께 성장해요."
      >
        {listCardList}
      </Section>

      {/* outro section */}
      <Outro />
    </Layout>
  );
};
export default Junior;
