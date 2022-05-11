import { config } from 'constant';

import axiosApiInstance from 'utils/axios';

// make request with axios
const createRequestAxios = async (endpoint, body) => {
  const url = endpoint.path;
  const method = endpoint.method;

  try {
    const response = await axiosApiInstance.request({
      url,
      method,
      data: (method !== 'GET' && body) || null,
      params: (method === 'GET' && body)
    });

    const result = await {
      code: response.status,
      data: response.data
    };

    return result;
  } catch (error) {
    throw error;
  }
};

// make request with fetch
const createRequestFetch = async (endpoint, body) => {
  let url = `${ config.baseUrl }${ endpoint.path }`;
  const method = endpoint.method;

  // jika method GET, tambahkan query params ke url dari body
  // jika method bukan GET, body berperan sebagai payload body di options
  if (method === 'GET' && body) {
    // assign api_key to requestBody
    // Object.assign(body, { api_key: process.env.REACT_APP_API_KEY });

    let queryParams = Object.keys(body).length > 0 ? '?' : '';
    let i = 0;

    for (let key in body) {
      // Only if the key has a value, otherwise won't be added to the queryParams
      if (body[key] !== null) {
        queryParams += (i > 0 ? '&' : '') + key + '=' + body[key];
        ++i;
      }
    }

    url += queryParams;
  }

  const options = {
    method,
    body: (method !== 'GET' && body)
      ? JSON.stringify(body)
      : undefined
  };

  try {
    const response = await fetch(url, options);

    const data = await response.json();

    const result = await {
      code: response.status,
      data
    };

    return result;
  } catch (error) {
    throw error;
  }
};

export {
  createRequestAxios,
  createRequestFetch
};
