import React from 'react';
import Layout from 'components/layout';
import './junior.scss';
import memoticon1 from 'images/memoticon1.png';
import memoticon2 from 'images/memoticon2.png';
import memoticon3 from 'images/memoticon3.png';
import property1 from 'images/property1.png';
import property2 from 'images/property2.png';
import property3 from 'images/property3.png';
import property4 from 'images/property4.png';
import outro from 'images/outro-image.png';

const Junior = () => (
  <Layout>
    {/* intro section */}
    <section className="intro">
      <div className="intro__inner">
        <div className="intro__title">
          <div className="intro__title--sub">PROB junior 와 함께 성장할</div>
          <div className="intro__title--main">
            미래의 훌륭한 인재들을 모집해요
          </div>
        </div>
        <button className="button--intro">PROB junior 1기 신청</button>
        {/* // TODO : 화살표 애니메이션 */}
      </div>
    </section>

    {/* content-1 section */}
    <section className="content">
      <div className="content__inner">
        <div className="content__title">
          <div className="content__title--main">창단 동기</div>
          <div className="content__title--sub">
            PROB junior 는 왜 만들어졌을까요?
          </div>
        </div>

        {/* // TODO : card content 컴포넌트 분리 */}
        <div className="content__card">
          <div className="content__card__item">
            <div className="content__row-flex">
              <div className="content__culumn-flex">
                <div className="content__card__item--title">
                  다른 사람들은 어떻게 생각할까요?
                </div>
                <div className="content__card__item--sub">
                  개발을 할 때 내가 하고 있는 것이 맞는지, 혹은 다른 사람들은
                  어떻게 생각하고 하는지 궁금할 때가 많았습니다. 하지만 학교나
                  주변에서 이걸 물어보며 이야기를 자유롭게 나눌 수 있는 곳이
                  없다는 것을 깨달았습니다. 그래서 같은 개발이라는 관심사를 가진
                  사람들만 모인 그룹을 만들어 자신의 지식을 공유하고 같이 공부할
                  수 있는 환경을 만들고자 했습니다. 같이 프로젝트도 진행하면서
                  자신의 포트폴리오를 늘릴 수 있는 것은 덤이죠.
                </div>
                <div className="content__card__item--right-name">
                  17학번 전병민
                </div>
              </div>

              <img
                src={memoticon1}
                className="content__card__item--memoticon--right"
                alt="memoticon"
              />
            </div>
          </div>
          <div className="content__card__item">
            <div className="content__row-flex">
              <img
                src={memoticon2}
                className="content__card__item--memoticon--left"
                alt="memoticon"
              />
              <div className="content__culumn-flex">
                <div className="content__card__item--title">
                  누구와 같이하면 좋을까요?
                </div>
                <div className="content__card__item--sub">
                  개발 공부를 시작하면서 어떻게 개발을 하는지 무엇을 해야할지
                  길을 찾는것이 어렵고, 혼자 공부를 하는것이 쉽지않았다. 다른
                  사람과 같이 프로젝트를 해보고 싶어도 같이 할 사람을 찾기가
                  어려워 하고자 하는의지만 있다면 쉽게 팀원을 구할수 있는 모임을
                  만들고 싶었다.
                </div>
                <div className="content__card__item--left-name">
                  19학번 변수미
                </div>
              </div>
            </div>
          </div>
          <div className="content__card__item">
            <div className="content__row-flex">
              <div className="content__culumn-flex">
                <div className="content__card__item--title">
                  학교 수업만으로 충분할까요?
                </div>
                <div className="content__card__item--sub">
                  수업을 잘 듣고 성적을 잘 받아도 실무에서 사용하는 프로젝트의
                  기술들을 찾아보면 전혀 모르는 내용이 있어 회의감이 들고
                  불안했다. 많은 학우들이 모여 실무 개발 트렌드를 공부해 시야를
                  넓히고 프로젝트 경험을 만들어 미래에 대한 불안감을 덜어냈으면
                  좋겠다.
                </div>
                <div className="content__card__item--right-name">
                  17학번 최현석
                </div>
              </div>
              <img
                src={memoticon3}
                className="content__card__item--memoticon--right"
                alt="memoticon"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* content-2 section */}
    <section className="content">
      <div className="content__inner">
        <div className="content__title">
          <div className="content__title--main">PROB junior?</div>
          <div className="content__title--sub">
            PROB junior 특징에 대해 알아보아요.
          </div>
        </div>

        {/* // TODO : icon content 컴포넌트 분리 */}
        <div className="content__icon">
          <div className="content__icon__item">
            <img
              src={property1}
              className="content__icon__item--image"
              alt="property1"
            />
            <div className="content__icon__item--title">
              01 웹 / 앱 개발 그룹
            </div>
            <div className="content__icon__item--sub">
              PROB junior 는 웹 / 앱 개발자들을 위한 그룹입니다.
            </div>
          </div>
          <div className="content__icon__item">
            <img
              src={property2}
              className="content__icon__item--image"
              alt="property1"
            />
            <div className="content__icon__item--title">02 팀 중심 활동</div>
            <div className="content__icon__item--sub">
              PROB junior 는 각 포지션에 맞게 꾸려진 팀 별로 프로젝트, 모각코
              활동을 진행합니다.
            </div>
          </div>
          <div className="content__icon__item">
            <img
              src={property3}
              className="content__icon__item--image"
              alt="property1"
            />
            <div className="content__icon__item--title">03 소통의 장</div>
            <div className="content__icon__item--sub">
              PROB junior 는 활발한 질문과 소통을 추구합니다.
            </div>
          </div>
          <div className="content__icon__item">
            <img
              src={property4}
              className="content__icon__item--image"
              alt="property1"
            />
            <div className="content__icon__item--title">
              04 신뢰할 수 있는 동료
            </div>
            <div className="content__icon__item--sub">
              PROB junior 는 면접을 통해 개발 가능 인력을 선발하여 신뢰합니다.
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* content-3 section */}
    <section className="content">
      <div className="content__inner">
        <div className="content__title">
          <div className="content__title--main">동료와 함께라면</div>
          <div className="content__title--main">성장이 두렵지 않습니다.</div>
          <div className="content__title--sub">
            PROB junior 는 다양한 활동들을 하며 함께 성장해요.
          </div>
        </div>

        {/* // TODO : description content 컴포넌트 분리 */}
        {/* // TODO : mobile View 반응형 스와이프 형식으로 */}
        <div className="content__description">
          <div className="content__description__item">
            <div className="content__description__item--title">
              01 활발한 정보 공유
            </div>
            <div className="content__description__item--sub">
              개발이라는 같은 관심사를 가지고, 성장이라는 같은 목적을 가진
              사람들이 모이면 개발에 대한 이런저런 이야기를 나누는 것은 전혀
              이상한 일이 아니죠. 오직 개발 관련 정보를 공유하기 위해 개설된
              카카오톡 오픈 채팅방과 디스코드 채널에서 눈치보지 않고 자유롭게
              이야기를 나눠보세요.
            </div>
            <ul className="content__description__item--list">
              <li>앱 /프론트엔드 / 백엔드 / 전체 카카오톡 오픈 채팅방 운영</li>
              <li>
                개발 자료 공유를 위해 전체 & 팀 별 디스코드 개발 공간 운영
              </li>
            </ul>
          </div>
          <div className="content__description__item">
            <div className="content__description__item--title">
              02 세미나 개최
            </div>
            <div className="content__description__item--sub">
              내가 생각하는 것을 다른 사람들은 어떻게 생각할까요? 하나의 공통된
              주제에 대해서 이야기를 나눌 수 있는 정기적인 세미나를 개최해요.
              정해지는 주제에 대해서 개인적으로 공부하고 준비해서 발표하는
              시간을 가져봅시다.
            </div>
            <ul className="content__description__item--list">
              <li>앱 / 프론트엔드 / 백엔드로 나뉘어 개인 발표</li>
              <li>월 별로 진행 (변경 가능)</li>
              <li>회원들이 직접 돌아가며 주제 선정</li>
            </ul>
          </div>
          <div className="content__description__item">
            <div className="content__description__item--title">
              03 모각코 활동
            </div>
            <div className="content__description__item--sub">
              혼자 공부하다보면 지치고 힘들 때가 많은 것 같아요. 팀원들과 같이
              모여 각자 코딩하는 모각코를 진행합니다. 분명 개발에 생기를
              불어넣어주는 활동이 될 거에요.
            </div>
            <ul className="content__description__item--list">
              <li>온라인 / 오프라인 다양한 형태 선정</li>
              <li>자유로운 형식과 계획 작성</li>
              <li>PROB junior 회원들의 기술블로그 링크를 게시</li>
            </ul>
          </div>
          <div className="content__description__item">
            <div className="content__description__item--title">
              04 프로젝트 참여
            </div>
            <div className="content__description__item--sub">
              포지션과 수준에 맞게 꾸려진 팀 단위로 프로젝트를 진행하고 학기
              말에 발표회를 진행해요. 팀 별로 만든 프로젝트를 테스트 및 배포하는
              활동이 될 거에요. 기회가 된다면 다양한 공모전 및 대회에
              출전해보세요.
            </div>
            <ul className="content__description__item--list">
              <li>간단한 토이 프로젝트부터 정식 서비스를 위한 프로젝트까지</li>
              <li>외부 디자이너 팀원 영입 가능</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="outro">
      <div className="outro__inner">
        <div className="outro__row-flex">
          <img src={outro} alt="outro" />
          <div className="outro__column-flex">
            <div className="outro__title">
              PROB junior 는 이런 사람들을 기다립니다.
            </div>
            <div className="outro__description-list">
              <div className="outro__description">
                01 web/app 개발에 관심이 있는 학생
              </div>
              <div className="outro__description">
                02 적극적으로 활동할 의지가 있는 학생
              </div>
              <div className="outro__description">
                03 다양한 사람들과 소통을 즐기고 배려할 줄 아는 학생
              </div>
              <div className="outro__description">
                04 성장에 대해 지속적으로 고민하는 학생
              </div>
            </div>
            <button className="button--outro">PROB junior 1기 신청</button>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Junior;
