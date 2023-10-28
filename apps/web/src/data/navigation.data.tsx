import {CollectionsPage} from "@/routes/CollectionsPage";
import {HomePage} from "@/routes/HomePage";
import {ReferencesPage} from "@/routes/ReferencesPage";
import {SettingsPage} from "@/routes/SettingsPage";
import {TemplatesPage} from "@/routes/TemplatesPage";

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
  settings: {
    path: "/settings",
    element: <SettingsPage />
  },
  references: {
    path: '/references',
    element: <ReferencesPage />
  },
  templates: {
    path: '/templates',
    element: <TemplatesPage />
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
  }
];
