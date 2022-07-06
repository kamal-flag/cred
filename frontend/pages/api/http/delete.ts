import { AxiosError, AxiosResponse } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { API_URL } from '../../../config';
import { apiBackend } from '../../../services/apiBackend';
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { 'cred.token': token } = req.cookies;
  let config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  let { url, id } = req.body;

  apiBackend
    .delete(`${API_URL}${url}/${id}`, config)
    .then((response: AxiosResponse) => {
      res.status(response.status).json({ value: response.data });
    })
    .catch((reason: AxiosError) => {
      res
        .status(reason.response?.status!)
        .json({ customError: reason.response?.data });
    });
};
