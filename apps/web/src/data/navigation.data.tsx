import {CollectionsPage} from "@/routes/CollectionsPage";
import {HomePage} from "@/routes/HomePage";

export interface NavigationItem {
  name: string;
  url: string;
  icon: `${string}:${string}`;
}


export const routes = {
  home: {
    path: "/",
    element: <HomePage />,
  },
  collections: {
    path: "/collections/",
    element: <CollectionsPage />,
  }
} as const;

export const navigation: NavigationItem[] = [
  {
    name: 'Главная',
    url: routes.home.path,
    icon: 'fe:home',
  },
  {
    name: 'Референсы / Рефы',
    url: routes.collections.path,
    icon: 'fe:link',
  },
  {
    name: 'Коллекции',
    url: routes.collections.path,
    icon: 'fe:layer',
  },
  {
    name: 'Шаблоны',
    url: routes.collections.path,
    icon: 'fe:sitemap',
  },
  {
    name: 'Настройки',
    url: '/settings',
    icon: 'fe:gear',
  }
];
