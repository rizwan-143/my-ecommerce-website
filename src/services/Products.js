export const getAllProducts = async () => {
  try {
    const response = await fetch('/products.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('error fetching products', error);
  }
};
