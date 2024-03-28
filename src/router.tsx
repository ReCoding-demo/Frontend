import { createBrowserRouter } from 'react-router-dom';
import { HomePage, LoginPage } from './pages';
  DeveloperDetailPage,
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
    ],
  },
]);
