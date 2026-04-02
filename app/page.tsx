import { getProducts } from "./lib/api";
import ProductCard from "./components/ProductCard";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import styles from "./styles/home.module.css";

export const metadata = {
  title: "Discover Our Products",
  description: "Browse latest products online",
};

export default async function Home() {
  const products = await getProducts();

  return (
    <main className={styles.container}>
      
      {/* Title */}
      <h1 className={styles.title}>DISCOVER OUR PRODUCTS</h1>

      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      {/* TOP BAR (IMPORTANT) */}
      <TopBar />

      {/* Layout */}
      <div className={styles.layout}>
        
        {/* Sidebar (Desktop only) */}
        <div className={styles.sidebarWrapper}>
          <Sidebar />
        </div>

        {/* Product Grid */}
        <div className={styles.grid}>
          {products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </main>
  );
}