import React from 'react';
import './textContent.scss';
import Text from 'components/atoms/text';

interface TextContentProps {
  title: string;
  detail: string;
  className: string;
  author?: string;
}

const TextContent = ({
  className,
  title,
  detail,
  author,
}: TextContentProps) => {
  return (
    <div className={className}>
      <Text className="content-title">{title}</Text>
      <Text className="content-detail">{detail}</Text>
      <Text className="author">{author}</Text>
    </div>
  );
};

export default TextContent;
