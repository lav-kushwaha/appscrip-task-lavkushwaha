"use client";

import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import styles from "../styles/home.module.css";

export default function HomeClient({ products }: any) {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <>
      {/* TOP BAR */}
      <TopBar
        showSidebar={showSidebar}
        toggleSidebar={() => setShowSidebar(!showSidebar)}
      />

      <div className={styles.layout}>
        
        {/*Sidebar toggle */}
        {showSidebar && (
          <div className={styles.sidebarWrapper}>
            <Sidebar />
          </div>
        )}

        {/* PRODUCTS */}
        <div className={styles.grid}>
          {products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </>
  );
}