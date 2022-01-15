import React, { useState, useEffect, FunctionComponent, useRef } from 'react';
// import { StaticImage } from 'gatsby-plugin-image';
import './index.scss';
import Layout from 'components/layout';
import debounce from 'lodash/debounce';
type ScrollProps = {
  classname: string;
  scrollActiveLocation: number; //얼마나 보이고 이벤트 시작할지
};
const ScrollComponent: FunctionComponent<ScrollProps> = ({
  children,
  classname,
  scrollActiveLocation,
}) => {
  const scrollRef = useRef(null);
  const delay = 15;
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    if (!scrollRef.current) return;
    window.addEventListener('scroll', debounce(yScrollEvent, delay));
    return () => {
      window.removeEventListener('scroll', yScrollEvent);
    };
  }, [scrollRef.current]);
  const yScrollEvent = () => {
    const scroll: DOMRect = scrollRef.current.getBoundingClientRect();
    if (scroll.top < window.innerHeight - scrollActiveLocation) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };
  return (
    <div className={`${classname} ${isShow ? 'active' : ''}`} ref={scrollRef}>
      {children}
    </div>
  );
};
const IndexPage = () => {
  return (
    <Layout>
      <section className="intro">
        <div className="intro__inner">
          <div className="intro__title">
            <p className="intro__title--main">
              프로브레인과 함께 성장할 <br />
              멋진 동료를 찾고 있어요
            </p>
            <p className="intro__title--sub">2022년 PROBRAIN</p>
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
    </Layout>
  );
};

export default IndexPage;
