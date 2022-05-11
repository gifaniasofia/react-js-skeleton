import React, { useState, useEffect } from 'react';
import lodash from 'lodash';

import { ButtonStyle } from './style';

const Button = props => {
  const [reRender, setReRender] = useState(false);

  useEffect(() => {
    setReRender(!reRender);
  }, [props.isLoading]);

  const debouncedOnClick = lodash.debounce(
    () => props.onClick ? props.onClick() : null,
    1000,
    {
      leading: true,
      trailing: false,
    }
  );

  return (
    <ButtonStyle
      className={ props.className }
      styleType={ props.styleType }
      color={ props.color }
      width={ props.width }
      height={ props.height }
      bgColor={ props.bgColor }
      borderColor={ props.borderColor }
      borderRadius={ props.borderRadius }
      padding={ props.padding }
      marginTop={ props.marginTop }
      disabled={ props.disabled }
      size={ props.size }
      fontWeight={ props.fontWeight }
    >
      <button onClick={ debouncedOnClick } disabled={ props.disabled } style={ props.style }>
        <span>
          {
            // props.isLoading
            // ?
            // <img className="loading" src={images.loadingRipple} alt=""/>
            // :
            props.text || props.children
          }
        </span>
      </button>
    </ButtonStyle>
  );
};

export default Button;
