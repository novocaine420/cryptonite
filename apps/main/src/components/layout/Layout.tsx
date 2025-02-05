import { Outlet } from 'react-router-dom';
import useLogout from '../../hooks/useLogout';
import { useAuth0 } from '@auth0/auth0-react';
import { Header } from 'ui-components';

const Layout = (): JSX.Element => {
  const { user } = useAuth0();
  const { logoutWithRedirect } = useLogout();

  return (
    <>
      <Header className="w-screen fixed z-50" user={{ name: user?.name ?? 'User'}} onLogout={logoutWithRedirect}/>
      <div className="min-h-screen flex flex-row pt-[72px] sm:pr-5 relative w-full">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
