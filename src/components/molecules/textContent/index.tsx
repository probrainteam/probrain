import React from 'react';
import './textContent.scss';
import Text from 'components/atoms/text';

interface TextContentProps {
  title: string;
  detail: string;
}

const TextContent = ({ title, detail }: TextContentProps) => {
  return (
    <div>
      <Text className="content-title">{title}</Text>
      <Text className="content-detail">{detail}</Text>
    </div>
  );
};

export default TextContent;
