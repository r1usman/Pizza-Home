import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Cart from './features/cart/Cart';
import Menu from './features/menu/Menu';
import CreateOrder from './features/order/CreateOrder';
import Error from './ui/Error';
import Home from './ui/Home';

import AppLayout from './ui/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
      { path: '/cart', element: <Cart /> },
      {
        path: '/order/new',
        element: <CreateOrder />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
