import React from 'react';

import { CardStyle } from './style';

const Card = ({
  children,
  className,
  onClick
}) => {
  return (
    <CardStyle onClick={ onClick } className={ className }>
      { children }
    </CardStyle>
  );
};

export default Card;