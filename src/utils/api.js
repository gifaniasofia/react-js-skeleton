import { apiHelper } from 'helpers';

/* eslint-disable no-console */

const isFunctionType = handler => typeof handler === 'function';

const customApiRequest = async (
  endpoint,
  body,
  preFunction = null,
  postFunction = null,
  successFunction,
  errorFunction = null
) => {
  try {
    // Before fetch data, e.g: dispatch loading
    if (preFunction && isFunctionType(preFunction)) {
      await preFunction();
    }

    // Make request to server with axios or fetch
    const response = await apiHelper.createRequestFetch(endpoint, body);

    // If code 200, handle with success function & resolve
    if (response.code === 200 || response.code === 202) {
      if (successFunction && isFunctionType(successFunction)) {
        await successFunction(response);
      }
    } else {
      // If the response code is not 200, error handling
      console.log('Error debugger: utilities/api: (#1)', response);

      if (errorFunction && isFunctionType(errorFunction)) {
        errorFunction(response);
      }
    }
  } catch (error) {
    console.log('Error debugger: utilities/api: (#2)', error);

    // Stock error, handle it with error function or just show alert (default)
    if (errorFunction && isFunctionType(errorFunction)) {
      errorFunction(error);
    } else {
      alert('Oops, sorry, we are experiencing some problem');
    }
  } finally {
    /**
     * After fetching data, function handler either success or error
     * e.g. set stop loading
     */
    if (postFunction && isFunctionType(postFunction)) {
      postFunction();
    }
  }
};

export default customApiRequest;
