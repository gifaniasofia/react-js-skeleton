import React from 'react';

import Text from '../Text';

const ErrorState = ({ message = 'Sorry, we are experiencing some problem, please try again later!' }) => {
  return <Text>{ message }</Text>;
};

export default ErrorState;
