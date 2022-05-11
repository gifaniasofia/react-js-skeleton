import React from 'react';

import { themes as Themes } from 'constant';

import { TextStyle } from './style';

const Text = ({
  children,
  text,
  align,
  color,
  size,
  weight,
  themes,
  lineHeight,
  mb,
  mt,
  mr,
  ml,
  spacing,
  decoration,
  className,
  style,
  disabled,
  onClick,
  ellipsis,
  type
}) => {
  const textClassName = `${ className || '' } ${ ellipsis ? 'text-ellipsis' : '' }`;

  const h1 = (
    <h1
      style={ style }
      className={ textClassName }
      onClick={ onClick }
    >{ children || text }</h1>
  );
  const h2 = (
    <h2
      style={ style }
      className={ textClassName }
      onClick={ onClick }
    >{ children || text }</h2>
  );
  const h3 = (
    <h3
      style={ style }
      className={ textClassName }
      onClick={ onClick }
    >{ children || text }</h3>
  );
  const p = (
    <p
      style={ style }
      className={ textClassName }
      onClick={ onClick }
    >{ children || text }</p>
  );

  const render = () => {
    switch (type) {
      case 'h1': return h1;
      case 'h2': return h2;
      case 'h3': return h3;
      default: return p;
    }
  };

  return (
    <TextStyle
      fontSize={ Themes.fontSizes[size || 's'] }
      lineHeight={ lineHeight }
      fontFamily={ Themes.fontThemes(weight, themes) }
      weight={ weight }
      color={ color }
      spacing={ spacing }
      align={ align }
      mt={ mt }
      mb={ mb }
      ml={ ml }
      mr={ mr }
      decoration={ decoration }
      disabled={ disabled }
      click={ !!onClick }
    >
      { render() }
    </TextStyle>
  );
};

Text.defaultProps = {
  type: 'p',
  size: 's',
  weight: 500,
  themes: 'primary',
};

export default Text;