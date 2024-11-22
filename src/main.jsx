import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import router from './routes/router';
import { RouterProvider } from 'react-router-dom';
import AuthContext from './components/AuthContext/AuthContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </StrictMode>
);
