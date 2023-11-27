import { routeList, routes } from '@/data/navigation.tsx';
import { DefaultLayout } from '@/layouts/default-layout';
import { ErrorPage } from '@/pages/error-page';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: routes.tutorial.path,
    element: routes.tutorial.element,
    errorElement: <ErrorPage />,
  },
  {
    path: routes.home.path,
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: routeList,
  },
]);

export default router;
