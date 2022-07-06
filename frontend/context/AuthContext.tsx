import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { apiNext } from '../services/apiNext';
import toast from 'react-hot-toast';
import { messages } from '../config/messages';

type AuthContextType = {
  isAuthenticated: boolean;
  user: any;
  login: (data: SignInData) => Promise<void>;
  logout: () => Promise<void>;
};

type SignInData = {
  email: string;
  password: string;
};
const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User>();
  const router = useRouter();
  const isAuthenticated = !!user;

  const checkUser = async () => {
    apiNext
      .get('/auth/checkUser')
      .then((response: any) => {
        setUser(response.data.value);
      })
      .catch(async (reason: any) => {
        await logout();
      });
  };

  useEffect(() => {
    checkUser();
  }, []);

  const login = async ({ email, password }: SignInData) => {
    const notification = toast.loading(messages.CONNECTION_EN_COURS);
    apiNext
      .post('/auth/login', { email, password })
      .then((response: any) => {
        setUser(response.data.value);
        router.push('/entreprise');
        toast.success(messages.CONNECTION_REUSSI, {
          id: notification,
        });
      })
      .catch((reason: any) => {
        toast.error(reason.message, {
          id: notification,
        });
      });
  };

  const logout = async () => {
    const notification = toast.loading(messages.DECONNECTION_EN_COURS);
    const res = await apiNext
      .post('/auth/logout')
      .then(() => {
        setUser(undefined);
        router.push('/auth/login');
        toast.success(messages.DECONNECTION_REUSSI, {
          id: notification,
        });
      })
      .catch((reason) => {
        toast.error(reason.message, {
          id: notification,
        });
      });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
