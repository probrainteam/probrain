import React from 'react';
interface textProps {
  className: string;
  list: string[];
}
const ListContent = ({ list, className }: textProps) => {
  const liElements = list.map(item => <li>{item}</li>);
  return (
    <div className={className}>
      <ul>{liElements}</ul>
    </div>
  );
};

export default ListContent;
