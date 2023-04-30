import ReactDOM from 'react-dom/client';
import { Layout } from './pages/layouts';
import { Home, Error404, About, Experiencia } from './pages';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/sobremi',
          element: <About />,
        },
        {
          path: '/experiencia',
          element: <Experiencia />,
        },
      ],
    },
    {
      path: '*',
      element: <Error404 />,
    },
  ],
  { basename: '/portafolio_virtual' }
);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
);
