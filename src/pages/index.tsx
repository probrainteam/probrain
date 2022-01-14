import React, { useState, useEffect, FunctionComponent, useRef } from 'react';
// import { StaticImage } from 'gatsby-plugin-image';
import './index.scss';
import Layout from 'components/layout';
import debounce from 'lodash/debounce';

const DetectScrollTextComponent: FunctionComponent = () => {
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
    // console.log(scroll.top, window.innerHeight);
    if (scroll.top < window.innerHeight - 150) {
      setIsShow(true);
      console.log(typeof scroll.top);
    } else {
      setIsShow(false);
    }
  };
  return (
    <section className={`text ${isShow ? 'active' : ''}`} ref={scrollRef}>
      <div className="text__inner">
        <div className="text__main">PROBRAIN</div>
        <div className="text__sub">professional brain group</div>
      </div>
    </section>
  );
};
const DetectScrollCardComponent: FunctionComponent = ({ children }) => {
  const scrollRef = useRef(null);
  const delay = 15;
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    if (!scrollRef.current) return;
    window.addEventListener('scroll', debounce(yScrollEvent, delay));
    // window.addEventListener('scroll', yScrollEvent);
    return () => {
      window.removeEventListener('scroll', yScrollEvent);
    };
  }, [scrollRef.current]);
  const yScrollEvent = () => {
    const scroll: DOMRect = scrollRef.current.getBoundingClientRect();
    if (scroll.top < window.innerHeight - 150) {
      //   console.log('show');
      setIsShow(true);
    } else {
      //   console.log('hidden');
      setIsShow(false);
    }
  };

  return (
    <div className={`c1__card ${isShow ? 'active' : ''}`} ref={scrollRef}>
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
      <DetectScrollTextComponent />
      <section className="c1">
        <div className="c1__inner">
          <div className="c1__content">
            <DetectScrollCardComponent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              laudantium in debitis nisi laboriosam possimus saepe. Accusantium
              eveniet nostrum quos in fugi Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Facere laudantium in debitis nisi
              laboriosam possimus saepe. Accusantium eveniet nostrum quos in
              fugiat, architecto impedit possimus dolores, minima non
              perspiciatis. Recusandae!at, architecto impedit possimus dolores,
              minima non perspiciatis. Recusandae!
            </DetectScrollCardComponent>
            <DetectScrollCardComponent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              laudantium in debitis nisi lab Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Facere laudantium in debitis nisi
              laboriosam possimus saepe. Accusantium eveniet nostrum quos in
              fugiat, architecto impedit possimus dolores, minima non
              perspiciatis. Recusandae!oriosam possimus saepe. Accusantium
              eveniet nostrum quos in fugiat, architecto impedit possimus
              dolores, minima non perspiciatis. Recusandae!
            </DetectScrollCardComponent>
            <DetectScrollCardComponent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              laudantium in debitis nis Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Facere laudantium in debitis nisi laboriosam
              possimus saepe. Accusantium eveniet nostrum quos in fugiat,
              architecto impedit possimus dolores, minima non perspiciatis.
              Recusandae!i laboriosam possimus saepe. Accusantium eveniet
              nostrum quos in fugiat, architecto impedit possimus dolores,
              minima non perspiciatis. Recusandae!
            </DetectScrollCardComponent>
            <DetectScrollCardComponent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              laudantium in debitis nisi laboriosam possimus saepe. Accusantium
              eveniet nostrum quos in Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Facere laudantium in debitis nisi laboriosam
              possimus saepe. Accusantium eveniet nostrum quos in fugiat,
              architecto impedit possimus dolores, minima non perspiciatis.
              Recusandae! fugiat, architecto impedit possimus dolores, minima
              non perspiciatis. Recusandae!
            </DetectScrollCardComponent>
            <DetectScrollCardComponent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              laudantium in debitis nisi laboriosam possimus saepe. Accusantium
              eveniet nostrum quos in fugiat, architecto impedit possimus
              dolores, minima non perspiciatis. Recusandae! Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Facere laudantium in
              debitis nisi laboriosam possimus saepe. Accusantium eveniet
              nostrum quos in fugiat, architecto impedit possimus dolores,
              minima non perspiciatis. Recusandae!
            </DetectScrollCardComponent>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
