export const getIDBKey = (store: string, id: string): string => {
  return `${store}:${id}`;
}
