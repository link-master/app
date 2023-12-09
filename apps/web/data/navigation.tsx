import {
  FEATURE_COLLECTION,
  FEATURE_HOME,
  FEATURE_SETTINGS,
  FEATURE_TEMPLATE,
} from '@/data/feature';
import { DashboardPage } from '@/modules/dashboard/pages';
import { ReferencesPage } from '@/modules/references/pages';
import { TutorialPage } from '@/modules/tutorial/pages';
import { CollectionsPage } from '@/modules/collections/pages';
import { RouteObject } from 'react-router-dom';

export interface NavigationItem {
  name: string;
  url: string;
  icon: `${string}:${string}`;
}

export const routes = {
  home: {
    path: '/',
    element: <DashboardPage />,
    feature: FEATURE_HOME,
  },
  tutorial: {
    path: '/tutorial',
    element: <TutorialPage />,
  },
  settings: {
    path: '/settings',
    element: <DashboardPage />,
    feature: FEATURE_SETTINGS,
  },
  references: {
    path: '/references',
    element: <ReferencesPage />,
  },
  templates: {
    path: '/templates',
    element: <DashboardPage />,
    feature: FEATURE_TEMPLATE,
  },
  collections: {
    path: '/collections/',
    element: <CollectionsPage />,
    feature: FEATURE_COLLECTION,
  },
} as const;

export const routeList = Object.values(routes).filter((item) => {
  if ('feature' in item) {
    return item.feature as boolean;
  }
  return true;
}) as RouteObject[];

if (!FEATURE_HOME) {
  routeList.push({
    path: '/',
    element: <ReferencesPage />,
  });
}

const navigation: NavigationItem[] = [];

if (FEATURE_HOME) {
  navigation.push({
    name: 'Главная',
    url: routes.home.path,
    icon: 'fe:home',
  });
}

navigation.push({
  name: 'Референсы',
  url: routes.references.path,
  icon: 'fe:link',
});

if (FEATURE_COLLECTION) {
  navigation.push({
    name: 'Коллекции',
    url: routes.collections.path,
    icon: 'fe:layer',
  });
}

if (FEATURE_TEMPLATE) {
  navigation.push({
    name: 'Шаблоны',
    url: routes.templates.path,
    icon: 'fe:sitemap',
  });
}

if (FEATURE_SETTINGS) {
  navigation.push({
    name: 'Настройки',
    url: '/settings',
    icon: 'fe:gear',
  });
}

export { navigation };
