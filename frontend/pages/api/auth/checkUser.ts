import type { NextApiRequest, NextApiResponse } from 'next';
import { apiBackend } from '../../../services/apiBackend';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const { 'cred.email': email, 'cred.token': token } = req.cookies;

    if (token) {
      let config = {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          email: email,
        },
      };

      apiBackend
        .get('/users/email', config)
        .then((response: any) => {
          res.status(response.status).json({ value: response.data });
        })
        .catch((reason: any) => {
          res
            .status(reason.response?.status!)
            .json({ customError: reason.response?.data });
        });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
