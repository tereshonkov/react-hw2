const PRODUCTS_LS_KEY = 'products';

export const setProductsToLocalStorage = (data) => {
  localStorage.setItem(PRODUCTS_LS_KEY, JSON.stringify(data));
}

export const getProductsFromLocalStorage = () => {
  const value = localStorage.getItem(PRODUCTS_LS_KEY);

  return value ? JSON.parse(value) : null;
}