import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './index.scss';

import Layout from 'components/layout';
const IndexPage = () => (
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
              maxime atque provident ips architecto. Consequatur unde eius sit,
              minus consequuntur magnam.
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p> */}
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={['auto', 'webp', 'avif']}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
  </Layout>
);

export default IndexPage;
