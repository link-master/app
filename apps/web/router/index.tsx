import { routes } from '@/data/navigation.tsx';
import { DefaultLayout } from '@/layouts/default-layout';
import { ErrorPage } from '@/pages/error-page';
import { ReferencesPage } from '@/pages/references-page';
import { createBrowserRouter } from 'react-router-dom';
import { collections } from '@/modules';

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
    children: [
      {
        path: '',
        element: routes.home.element,
      },
      {
        path: routes.references.path,
        element: <ReferencesPage />,
      },
      {
        path: routes.collections.path,
        element: <routes.collections.element />,
      },
      {
        path: routes.settings.path,
        element: routes.home.element,
      },
      {
        path: routes.templates.path,
        element: routes.home.element,
      },
    ],
  },
]);

export default router;
