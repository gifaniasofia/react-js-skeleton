import styled, { css } from 'styled-components';

import { colors } from 'constant';

const primaryBtn = `
  background-color: ${ colors.blue.default };

  span {
    color: ${ colors.white.default };
  }
`;

const secondaryBtn = `
  background-color: ${ colors.grey.otherGrey };

  span {
    color: ${ colors.blue.default };
  }
`;

const inverseBtn = `
  background-color: transparent;
  border: 1px solid ${ colors.blue.default };

  &:hover {
    background-color: ${ colors.blue.default };

    span {
      color: ${ colors.white.default };
    }
  }

  span {
    color: ${ colors.blue.default };
  }
`;

const disabledBtn = `
  background-color: ${ colors.grey.default };
  cursor: not-allowed;

  span {
    color: ${ colors.white.default };
  }
`;

const buttonStyle = type => {
  switch (type) {
    case 'primary': return primaryBtn;
    case 'secondary': return secondaryBtn;
    case 'inverse': return inverseBtn;
    case 'disable': return disabledBtn;
    default: return primaryBtn;
  }
};

export const ButtonStyle = styled.div`
  button {
    ${ props => buttonStyle(props.styleType) };
    ${ props => props.bgColor && css`background-color: ${ props => props.bgColor }` };
    ${ props => props.borderColor && css`border: 1px solid ${ props => props.borderColor }` };

    width: ${ props => props.width ? props.width : '120px' };
    height: ${ props => props.height ? props.height : '40px' };
    border-radius: ${ props => props.borderRadius ? props.borderRadius : '10px' };
    cursor: ${ props => props.disabled ? 'default' : 'pointer' };

    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s all;

    span {
      ${ props => props.color && css`color: ${ props => props.color }` };

      font-size: ${ props => props.size ? props.size : '14px' };
      font-weight: ${ props => props.fontWeight ? props.fontWeight : '700' };

      .loading {
        height: 35px;
        width: auto;
      }
    }

    ${ props => props.styleType !== 'disabled' && props.styleType !== 'inverse' && `
      &:hover {
        opacity: 0.8;
      }
    `}

    &:focus {
      outline: none;
    }
  }
`;
