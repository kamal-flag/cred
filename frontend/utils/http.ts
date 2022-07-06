import toast from 'react-hot-toast';
import { NEXT_URL } from '../config';
import { messages } from '../config/messages';
import { apiNext } from '../services/apiNext';

export const postRequest = async (payload: any, url: string) => {
  const notification = toast.loading(messages.CHARGEMENT);

  const res = await apiNext
    .post(`${NEXT_URL}/http/post`, { payload: payload, url: url })
    .then((response: any) => {
      toast.success(response.message, {
        id: notification,
      });
      return response;
    })
    .catch((reason: any) => {
      toast.error(reason.message, {
        id: notification,
      });
      return reason;
    });

  return res;
};


export const putRequest = async (payload: any, url: string) => {
  const notification = toast.loading(messages.CHARGEMENT);

  const res = await apiNext
    .post(`${NEXT_URL}/http/put`, { payload: payload, url: url })
    .then((response: any) => {
      toast.success(response.message, {
        id: notification,
      });
      return response;
    })
    .catch((reason: any) => {
      toast.error(reason.message, {
        id: notification,
      });
      return reason;
    });

  return res;
};

export const deleteRequest = async (id: number, url: string) => {
  const notification = toast.loading(messages.CHARGEMENT);

  const res = await apiNext
    .post(`${NEXT_URL}/http/delete`, { id: id, url: url })
    .then((response: any) => {
      toast.success(response.message, {
        id: notification,
      });
      return response;
    })
    .catch((reason: any) => {
      toast.error(reason.message, {
        id: notification,
      });
      return reason;
    });

  return res;
};

export const getRequest = async (id: number, url: string) => {
  const notification = toast.loading(messages.CHARGEMENT);

  const res = await apiNext
    .post(`${NEXT_URL}/http/get`, { id: id, url: url })
    .then((response: any) => {
      toast.success(response.message, {
        id: notification,
      });
      return response;
    })
    .catch((reason: any) => {
      toast.error(reason.message, {
        id: notification,
      });
      return reason;
    });

  return res;
};

export const getAllRequest = async (url: string) => {
  //const notification = toast.loading(messages.CHARGEMENT);

  const res = await apiNext
    .post(`${NEXT_URL}/http/getAll`, { url: url })
    .then((response: any) => {
      /*toast.success(response.message, {
        id: notification,
      });*/
      return response;
    })
    .catch((reason: any) => {
      /*toast.error(reason.message, {
        id: notification,
      });*/
      return reason;
    });

  return res;
};

export const getRequestWithParams = async (payload: any, url: string) => {
  //const notification = toast.loading(messages.CHARGEMENT);

  const res = await apiNext
    .post('/http/getWithParams', { payload: payload, url: url })
    .then((response: any) => {
      /*toast.success(response.message, {
        id: notification,
      });*/
      return response;
    })
    .catch((reason: any) => {
      /*toast.error(reason.message, {
        id: notification,
      });*/
      return reason;
    });

  return res;
};
