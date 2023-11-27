import { HomePage } from '@/pages/home-page';
import { TutorialPage } from '@/pages/tutorial-page';
import { collections } from '@/modules';

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
    element: <HomePage />,
  },
  templates: {
    path: '/templates',
    element: <HomePage />,
  },
  collections: {
    path: '/collections/',
    element: collections.pages.CollectionsPage,
  },
} as const;

export const navigation: NavigationItem[] = [
  {
    name: 'Главная',
    url: routes.home.path,
    icon: 'fe:home',
  },
  {
    name: 'Референсы',
    url: routes.references.path,
    icon: 'fe:link',
  },
  {
    name: 'Коллекции',
    url: routes.collections.path,
    icon: 'fe:layer',
  },
  {
    name: 'Шаблоны',
    url: routes.templates.path,
    icon: 'fe:sitemap',
  },
  {
    name: 'Настройки',
    url: '/settings',
    icon: 'fe:gear',
  },
];
