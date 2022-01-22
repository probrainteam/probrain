import ListContent from 'components/atoms/listContent';
import TextContent from 'components/atoms/textContent';
import React from 'react';
import './listCard.scss';
type listCardProps = {
  title: string;
  detail: string;
  detailList: string[];
};

const ListCard = ({ title, detail, detailList }: listCardProps) => {
  return (
    <div className={`card `}>
      <TextContent title={title} detail={detail} />
      <ListContent className="card__detail--sub" list={detailList} />
    </div>
  );
};
export default ListCard;
