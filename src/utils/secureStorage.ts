export const setItemToStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getItemToStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const clearStorage = () => {
  localStorage.clear();
};
