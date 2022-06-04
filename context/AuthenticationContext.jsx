import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import usePostQuery from '@/hooks/usePostQuery';
import instance from '@/axios/instance';
import useToast from '@/hooks/useToast';
import { useRouter } from 'next/router';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const { notify } = useToast();
  const loginMutation = usePostQuery('/login/verify');

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get('token');
      if (token) {
        instance.defaults.headers.Authorization = `Bearer ${token}`;

        setIsAuthenticated(Boolean(token));
      }

      setLoading(false);
    }
    loadUserFromCookies();
  }, [loading]);

  const login = async (data, path = '/') => {
    loginMutation.mutate(data, {
      onSuccess: (res) => {
        console.log('res', res);
        if (res.type === 'error') return notify('error', res.message);
        Cookies.set('email', res['email']);
        Cookies.set('token', res.loginToken);
        // Cookies.set('nim', res.nim);
        setIsAuthenticated(true);

        instance.defaults.headers.Authorization = `Bearer ${res.loginToken}`;

        notify('success', 'Login Success!!');
        return router.replace(path);
      },
      onError: () => {
        notify('error', 'Sorry, Something went wrong1!');
      },
      // onSettled: () => router.reload(),
    });
  };

  const logout = () => {
    Cookies.remove('token');
    Cookies.remove('email');
    Cookies.remove('nim');
    delete instance.defaults.headers.common['Authorization'];
    window.location.pathname = '/auth/login';
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,

        login,
        loading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
