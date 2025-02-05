import { withAuthenticationRequired } from '@auth0/auth0-react';
import { RouterProvider } from 'react-router-dom';
import useAuthentication from './hooks/useAuthentication.ts';
import router from './router/index';

function App() {
  const { isLoggedIn, isLoading, authError } = useAuthentication();

  if (authError) {
    return <div>Oops... {authError.message}</div>;
  }

  if (isLoading || !isLoggedIn) {
    return <div className="h-full py-16">Loading...</div>;
  }

  return (
    <div className="App h-screen w-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default withAuthenticationRequired(App, {
  onRedirecting: () => <>Loading</>
});
