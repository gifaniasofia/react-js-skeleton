/* eslint-disable no-undef */
export const clearToken = () => {
  return localStorage.removeItem('token');
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const setTokenUser = token => {
  return localStorage.setItem('token', token);
};

export const setUserStorage = user => {
  return localStorage.setItem('token', user.token);
};

export const clearStorage = () => {
  return localStorage.removeItem('token');
};
