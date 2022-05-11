import Styled from 'styled-components';

import {
  colors,
  themes as Themes,
  sizes
} from 'constant';

const properties = ({
  fontSize = 12,
  lineHeight = Themes.lineHeightDefault(fontSize),
  color = colors.black.isBlack,
  align = 'left',
  spacing = 0,
  mb = 0,
  mr = 0,
  mt = 0,
  ml = 0,
  decoration = 'none',
  fontFamily = 'InterRegular',
  disabled = false,
  click = false,
  weight
}) => `
  font-family: ${ fontFamily };
  font-size: ${ fontSize }px;
  line-height: ${ lineHeight }px;
  font-weight: ${ weight };
  color: ${ color };
  letter-spacing: ${ spacing }px;
  margin-bottom: ${ mb }px;
  margin-top: ${ mt }px;
  margin-left: ${ ml }px;
  margin-right: ${ mr }px;
  text-decoration: ${ decoration };
  text-align: ${ align };
  ${ disabled ? 'cursor: default;' : '' }
  ${ click && !disabled ? `
    cursor: pointer;
    ::hover {
      opacity: 0.8;
    }` : '' }
  
  @media ${ sizes.sizesMax.xs } {
    font-size: ${ fontSize > 12 ? fontSize - 2 : fontSize }px;
  }

  @media ${ sizes.sizesMax.xxs } {
    font-size: ${ fontSize > 10 ? fontSize - 4 : fontSize }px;
  }
`;

export const TextStyle = Styled.div`
  h1 {
    ${ props => properties(props) };
  }

  h2 {
    ${ props => properties(props) };
  }

  h3 {
    ${ props => properties(props) };
  }

  p {
    ${ props => properties(props) };
  }
`;
