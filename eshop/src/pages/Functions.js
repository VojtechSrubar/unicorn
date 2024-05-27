export const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products/");
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error);
  }
};