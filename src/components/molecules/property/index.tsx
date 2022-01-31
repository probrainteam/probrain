import Image from 'components/atoms/image';
import Text from 'components/atoms/text';
import React from 'react';
// import './listContent.scss';

interface PropertyProps {
  className: string;
  title: string;
  content: string;
  imgUrl: string;
}

const Property = ({ className, title, content, imgUrl }: PropertyProps) => {
  return (
    <div>
      <Image src={imgUrl} className="junior-property" />
      <Text className="junior-property--bold">{title}</Text>
      <Text className="junior-property--light">{content}</Text>
    </div>
  );
};

export default Property;
