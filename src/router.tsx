import { createBrowserRouter } from 'react-router-dom';
import {
  HomePage,
  LoginPage,
  DeveloperDetailPage,
} from './pages';
import Layout from './components/layout/Layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        errorElement: <div>Unknown Error</div>,
      },
      {
        path: '/login',
        element: <LoginPage />,
        errorElement: <div>Unknown Error</div>,
      },
      {
        path: '/developer/:id',
        element: <DeveloperDetailPage />,
        errorElement: <div>Unknown Error</div>,
      },
    ],
  },
]);
