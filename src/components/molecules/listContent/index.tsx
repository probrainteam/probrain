import Text from 'components/atoms/text';
import React from 'react';
import './listContent.scss';

interface ListContentProps {
  className: string;
  list: string[];
}

const ListContent = ({ list, className }: ListContentProps) => {
  return (
    <div className={className}>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <Text className="list">{item}</Text>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListContent;
