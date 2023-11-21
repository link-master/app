import { HomePage } from '@/pages/home-page';
import { TutorialPage } from '@/pages/tutorial-page';

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
    element: <HomePage />,
  },
} as const;

export const navigation: NavigationItem[] = [
  {
    name: 'Главная',
    url: routes.home.path,
    icon: 'fe:home',
  },
  {
    name: 'Референсы / Рефы',
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
