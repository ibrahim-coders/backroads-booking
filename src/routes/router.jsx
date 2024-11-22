import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Banneer from '../pages/News/Banner';

import Regster from '../pages/Regster/Regster';
import Login from '../pages/Login/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Banneer />,
      },
      {
        path: '/travel/login',
        element: <Login />,
      },
      {
        path: '/travel/regster',
        element: <Regster />,
      },
    ],
  },
]);

export default router;
