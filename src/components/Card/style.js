import Styled from 'styled-components';
import { colors } from 'constant';

export const CardStyle = Styled.div`
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 20px;

  box-shadow: 0 5px 20px 0 ${ colors.black.shadow };
  border: 1px solid ${ colors.grey.lighter };
  
  ${ props => !!props.onClick

    ? `
      cursor: pointer;

      &:hover {
        transition-duration: 500ms;
        transform: scale(1.02);
      }
    `
    : ''
  };
  
`;