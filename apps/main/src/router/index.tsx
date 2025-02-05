import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import Layout from '../components/layout/Layout';
import MainPage from '../pages/index';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<MainPage />} />
    </Route>
  )
);

export default router;
