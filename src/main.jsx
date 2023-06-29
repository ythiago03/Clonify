import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Error from './pages/Error.jsx';
import Shop from './pages/Shop.jsx';
import Favorite from './pages/Favorite.jsx';
import Cart from './pages/Cart.jsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/shop',
    element: <Shop />,
  },
  {
    path: '/favorite',
    element: <Favorite />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
