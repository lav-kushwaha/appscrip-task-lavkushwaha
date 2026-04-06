export async function getProducts() {
   const res = await fetch(process.env.NEXT_PUBLIC_API_URL!);
  console.log("STATUS:", res.status); 

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  
  const data = await res.json();

  return data.products;
}