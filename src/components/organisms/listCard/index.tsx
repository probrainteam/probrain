import React from 'react';

import ListContent from 'components/molecules/listContent';
import TextContent from 'components/molecules/textContent';

interface ListCardProps {
  title: string;
  detail: string;
  detailList: string[];
}

const ListCard = ({ title, detail, detailList }: ListCardProps) => {
  return (
    <div className="list-card">
      <TextContent className="list-card__text" title={title} detail={detail} />
      <ListContent className="list-card__list" list={detailList} />
    </div>
  );
};

export default ListCard;
