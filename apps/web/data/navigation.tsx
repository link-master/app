import { FEATURE_COLLECTION } from '@/data/feature';
import { HomePage } from '@/pages/home-page';
import { ReferencesPage } from '@/modules/references/pages/references-page';
import { TutorialPage } from '@/pages/tutorial-page';
import { collections } from '@/modules';
import { RouteObject } from 'react-router-dom';

export interface NavigationItem {
  name: string;
  url: string;
  icon: `${string}:${string}`;
}

export const routes = {
  home: {
    path: '/',
    element: <HomePage />,
  },
  tutorial: {
    path: '/tutorial',
    element: <TutorialPage />,
  },
  settings: {
    path: '/settings',
    element: <HomePage />,
  },
  references: {
    path: '/references',
    element: <ReferencesPage />,
  },
  templates: {
    path: '/templates',
    element: <HomePage />,
  },
  collections: {
    path: '/collections/',
    element: <collections.pages.CollectionsPage />,
    feature: FEATURE_COLLECTION,
  },
} as const;

export const routeList = Object.values(routes).filter((item) => {
  if ('feature' in item) {
    console.log({ feature: item.feature });
    return item.feature as boolean;
  }
  return true;
}) as RouteObject[];

const navigation: NavigationItem[] = [];
navigation.push(
  {
    name: 'Главная',
    url: routes.home.path,
    icon: 'fe:home',
  },
  {
    name: 'Референсы',
    url: routes.references.path,
    icon: 'fe:link',
  }
);

if (FEATURE_COLLECTION) {
  navigation.push({
    name: 'Коллекции',
    url: routes.collections.path,
    icon: 'fe:layer',
  });
}

navigation.push(
  {
    name: 'Шаблоны',
    url: routes.templates.path,
    icon: 'fe:sitemap',
  },
  {
    name: 'Настройки',
    url: '/settings',
    icon: 'fe:gear',
  }
);

export { navigation };
