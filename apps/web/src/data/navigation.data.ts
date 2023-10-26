export interface NavigationItem {
  name: string;
  url: string;
  icon: `${string}:${string}`;
}
export const navigation = [
  {
    name: 'Главная',
    url: '/',
    icon: 'fe:home',
  },
  {
    name: 'Коллекции',
    url: '/collections',
    icon: 'fe:layer',
  },
  {
    name: 'Настройки',
    url: '/settings',
    icon: 'fe:gear',
  }
]
