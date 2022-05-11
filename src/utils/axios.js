import axios from 'axios';

import { config } from 'constant';

/* eslint-disable no-console */

const axiosApiInstance = axios.create({ baseURL: config.baseUrl });

export default axiosApiInstance;
