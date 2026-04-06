require('dotenv').config();
import { getProducts } from "./lib/api";
import HomeClient from "./components/HomeClient";
import styles from "./styles/home.module.css";

export const metadata = {
  title: "Discover Our Products",
  description: "Browse latest products online",
};

export default async function Home() {
  const products = await getProducts();

  return (
    <main className={styles.container}>
      
      <h1 className={styles.title}>DISCOVER OUR PRODUCTS</h1>

      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident animi ratione saepe velit! Hic recusandae laboriosam voluptatem. Aliquid nam nobis eveniet tempora placeat veritatis quia non unde! Dicta, deleniti maxime!
      </p>

      {/*Client logic here */}
      <HomeClient products={products} />

    </main>
  );
}