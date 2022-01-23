import Text from 'components/atoms/text';
import React from 'react';

interface ListContentProps {
  className: string;
  list: string[];
}

const ListContent = ({ list, className }: ListContentProps) => {
  return (
    <div className={className}>
      <ul>
        {list.map(item => (
          <li>
            <Text className="list">{item}</Text>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListContent;
