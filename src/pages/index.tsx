import './index.scss';
import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from 'components/layout';
import ScrollComponent from 'components/atoms/Scroll';
import Section from 'components/organisms/section';
import Welcome from 'components/organisms/welcome';
import Registration from 'components/organisms/registration';
import ListCard from 'components/organisms/listCard';
import ImageCard from 'components/organisms/imageCard';
import About from 'components/organisms/about';
import Loading from 'components/organisms/Loading/index.';

interface IndexQueryType {
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

  meta: {
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

const IndexPage = () => {
  const { site, meta, blueLogo, mt, homecoming, education, contest } =
    useStaticQuery<IndexQueryType>(graphql`
      query {
        meta: file(name: { eq: "meta" }) {
          publicURL
        }
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

        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `);

  const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 1500);
  // }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeout(() => setLoading(false), 1500);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const activityInfo = [
    {
      title: '01 Membership Training (MT)',
      detail:
        '프로브레인은 동아리원들과 친목을 다지기 위해서 Membership Training(MT)를 진행해요. 멋진 동기들, 선배들, 후배들과 친해질 수 있는 계기가 되길 바래요.',
      src: mt.publicURL,
      className: 'left',
    },
    {
      title: '02 Homecoming day',
      detail:
        '프로브레인을 졸업한 선배들은 무슨 일을 하고 있을까요? 프로브레인은 매년 졸업한 선배들을 초청하는 행사를 진행하고 있어요. 취업한 선배들의 이야기를 들어보는 것은 앞으로의 생활에 큰 도움이 될 것이라 생각해요.',
      src: homecoming.publicURL,
      className: 'right',
    },
    {
      title: '03 Web Education',
      detail:
        '개발을 하고 싶더라도 막상 시작하기는 쉽지 않아요. 프로브레인은 여러분들이 효율적으로 공부할 수 있도록 도와드릴 수 있어요. 자체적으로 진행하는 웹 교육을 통해 여러분들의 개발을 시작해 보세요. 프로브레인의 개발 스터디 그룹인 PROB junior에서는 세미나를 개최하고 팀 단위로 프로젝트도 해볼 수 있어요.',
      src: education.publicURL,
      className: 'left',
    },
    {
      title: '04 Web Contest',
      detail:
        '프로브레인은 여러분들이 최신 기술을 사용하고 공부할 수 있도록 Web 개발 대회를 개최해요. 자신이 성장하는 발판을 마련하는 것뿐 아니라 성과를 이루어 친구들과 상도 받고 기쁨을 나눌 수 있는 소중한 경험을 쌓을 수 있을 거예요.',
      src: contest.publicURL,
      className: 'right',
    },
  ];

  const tmiInfo = [
    {
      title: ' 01 전통',
      detail:
        '2002년 3월 25일에 창립된 프로브레인은 웹 개발을 중심으로 이규철 교수님의 지도를 받아서 운영되고 있어요. 전통이 있는 만큼 사이트에 소개되어 있지 않은 재밌는 행사들과 활동들이 준비되어 있습니다!',
    },
    {
      title: '02 성취적',
      detail:
        '프로브레인은 활발한 활동을 추구해요. 공부, 친목 모두 진취적으로 활동해요. 프로브레인 스터디 그룹인 PROB Junior에서는 심화적인 개발 공부를 시작할 수 있어요.',
    },
    {
      title: '03 개발과 친목',
      detail:
        '프로브레인에서는 회원들과 개발 공부는 물론 친목을 다질 수 있는 다양한 행사를 진행하고 있기 때문에 재밌게 놀면서 공부할 수 있어요. ',
    },
    {
      title: '04 프로브레인의 성격',
      detail:
        '프로브레인의 회원들은 유쾌하고 활발한 성격이에요. 또한 프로브레인은 진취적이고 열정적이에요.',
    },
  ];

  const activityList = activityInfo.map((item, index) => (
    <ScrollComponent
      key={index}
      className={`scroll-${item.className}`}
      scrollActiveLocation={0}
    >
      <ImageCard
        title={item.title}
        detail={item.detail}
        src={item.src}
        className={item.className}
      />
    </ScrollComponent>
  ));

  const tmiList = tmiInfo.map((item, index) => (
    <ScrollComponent key={index} className="scroll-up" scrollActiveLocation={0}>
      <ListCard title={item.title} detail={item.detail} detailList={[]} />
    </ScrollComponent>
  ));

  return (
    <Layout
      title={site?.siteMetadata?.title}
      description={site?.siteMetadata?.description}
      url={site?.siteMetadata?.siteUrl}
      image={meta.publicURL}
    >
      {loading ? <Loading /> : null}
      <Welcome />
      <About
        imgSrc={blueLogo.publicURL}
        subtitle={'PROBRAIN은 어떤 동아리일까요?'}
        contentTitle={'웹 개발 동아리'}
        contentDetail={
          '프로브레인은 개발자를 꿈꾸는 모두를 위한 동아리입니다. 활발한 활동을 추구하며 세미나, 교육, 프로젝트를 통해 훌륭한 FE / BE 개발자를 양성합니다.'
        }
      />
      <Section
        className="activity"
        title="ACTIVITY"
        subtitle="PROBRAIN 대표 활동들을 소개해요"
      >
        {activityList}
      </Section>
      <Section
        className="grid-2"
        title="PROBRAIN TMI"
        subtitle="PROBRAIN 의 사소한 정보들!"
      >
        {tmiList}
      </Section>
      <section className="large-img" />
      <Registration
        title="  PROBRAIN 과 함께 하고 싶으신가요?"
        btnText="PROBRAIN에 가입신청하기"
        className="probrain-outro"
        url={
          'https://docs.google.com/forms/d/e/1FAIpQLSdJKBoffTumC0LqglGTVrl08DTdEsDXA1lkXm-F-7qhhFX69A/viewform?usp=sf_link'
        }
      />
    </Layout>
  );
};

export default IndexPage;
