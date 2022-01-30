import React from 'react';
import './outro.scss';
import Button from 'components/atoms/button';
import Image from 'components/atoms/image';
import Text from 'components/atoms/text';
import { graphql, useStaticQuery } from 'gatsby';

interface StaticImageType {
  outro: {
    publicURL: string;
  };
}

const Outro = () => {
  const { outro } = useStaticQuery<StaticImageType>(graphql`
    query {
      outro: file(name: { eq: "outro" }) {
        publicURL
      }
    }
  `);

  return (
    <section className="outro">
      <div className="outro__inner">
        <div className="row-flex">
          <Image className="outro" src={outro.publicURL} />

          <div className="column-flex">
            <div>
              <Text className="junior-outro--title">
                PROB junior 는 이런 사람들을 기다립니다.
              </Text>

              <div className="outro__description-list">
                <Text className="junior-outro--detail">
                  01 web/app 개발에 관심이 있는 학생
                </Text>
                <Text className="junior-outro--detail">
                  02 적극적으로 활동할 의지가 있는 학생
                </Text>
                <Text className="junior-outro--detail">
                  03 다양한 사람들과 소통을 즐기고 배려할 줄 아는 학생
                </Text>
                <Text className="junior-outro--detail">
                  04 성장에 대해 지속적으로 고민하는 학생
                </Text>
              </div>
            </div>

            <Button className="gray">PROB junior 1기 신청</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outro;
