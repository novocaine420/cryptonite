import { useAuth0 } from '@auth0/auth0-react';

const useLogout = (): { logoutWithRedirect: () => void } => {
  const { logout } = useAuth0();

  const logoutWithRedirect = (): void => {
    logout({
      logoutParams: {
        returnTo: window.location.origin
      }
    });
    localStorage.removeItem('auth-token');
  };
  return {
    logoutWithRedirect
  };
};

export default useLogout;
