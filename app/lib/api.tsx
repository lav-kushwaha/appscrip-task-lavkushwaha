export async function getProducts() {
  const res = await fetch("https://dummyjson.com/products");

  console.log("STATUS:", res.status); 

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  
  const data = await res.json();

  return data.products;
}