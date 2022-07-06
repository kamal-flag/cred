import axios from 'axios';
import { NEXT_URL } from '../config';
import { messages } from '../config/messages';

export const apiNext = axios.create({
  baseURL: NEXT_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiNext.interceptors.request.use((config) => {
  return config;
});

const customHttpResponse: CustomHttpResponse = {
  status: 0,
  message: '',
  success: false,
  data: undefined,
  dataErrors: undefined,
};

apiNext.interceptors.response.use(
  function (response) {
    customHttpResponse.status = response.status;
    customHttpResponse.data = response.data;
    customHttpResponse.dataErrors = null;
    customHttpResponse.message = messages.OPERATION_REUSSI;
    customHttpResponse.success = true;

    return customHttpResponse;
  },
  function (reason) {
    customHttpResponse.status = reason.response.status;
    customHttpResponse.data = null;
    customHttpResponse.dataErrors =
      reason.response?.data?.customError?.errorFields || null;
    customHttpResponse.message = reason.response?.data.customError.message;
    customHttpResponse.success = false;

    return Promise.reject(customHttpResponse);
  }
);
