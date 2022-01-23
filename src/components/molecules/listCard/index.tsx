import React from 'react';
import './listCard.scss';
import ListContent from 'components/molecules/listContent';
import TextContent from 'components/molecules/textContent';

interface listCardProps {
  title: string;
  detail: string;
  detailList: string[];
  className: string;
}

const ListCard = ({ title, detail, className, detailList }: listCardProps) => {
  return (
    <div className={`list-card list-card--${className}`}>
      <TextContent title={title} detail={detail} />
      <ListContent className="card__detail--sub" list={detailList} />
    </div>
  );
};

export default ListCard;
