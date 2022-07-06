import { AxiosError, AxiosResponse } from 'axios';
import cookie from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';
import toast from 'react-hot-toast';
import { apiBackend } from '../../../services/apiBackend';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    apiBackend
      .post('/users/login', {
        email,
        password,
      })
      .then((response: AxiosResponse) => {
        const { user, token } = response.data;

        const cookies = [];
        cookies.push(
          cookie.serialize('cred.email', user.email, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            maxAge: 60 * 60 * 24 * 7, // 1 week
            sameSite: 'strict',
            path: '/',
          })
        );
        cookies.push(
          cookie.serialize('cred.role', user.role, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            maxAge: 60 * 60 * 24 * 7, // 1 week
            sameSite: 'strict',
            path: '/',
          })
        );

        cookies.push(
          cookie.serialize('cred.token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            maxAge: 60 * 60 * 24 * 7, // 1 week
            sameSite: 'strict',
            path: '/',
          })
        );
        res.setHeader('Set-Cookie', cookies);
        res.status(response.status).json({ value: user });
      })
      .catch((reason: AxiosError) => {
        res
          .status(reason.response?.status!)
          .json({ customError: reason.response?.data });
      });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
