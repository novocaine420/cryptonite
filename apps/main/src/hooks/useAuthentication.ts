import { useCallback, useEffect, useState } from 'react';
import { useAuth0, User } from '@auth0/auth0-react';

interface IUseAuthenticationReturn {
  isLoading: boolean;
  isLoggedIn: boolean;
  authError: Error | undefined;
  user: User | undefined;
}

const useAuthentication = (): IUseAuthenticationReturn => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isLoading, error, user, getAccessTokenSilently } = useAuth0();

  const getToken = useCallback(async () => {
    const token = await getAccessTokenSilently();
    if (token) {
      localStorage.setItem('auth-token', token);
      setIsLoggedIn(true);
    }
  }, [getAccessTokenSilently]);

  useEffect(() => {
    if (user) {
      getToken();
    }
  }, [user, getToken]);

  return { isLoading, isLoggedIn, authError: error, user };
};

export default useAuthentication;
