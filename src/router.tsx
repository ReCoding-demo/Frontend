import { createBrowserRouter } from 'react-router-dom';
import {
  DeveloperDetailPage,
  HomePage,
  KakaoLoginPage,
  LoginPage,
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
        path: '/kakao',
        element: <KakaoLoginPage />,
        errorElement: <div>Unknown Error</div>,
      },
    ],
  },
]);
