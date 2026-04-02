"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import Sidebar from "./Sidebar";
import styles from "../styles/home.module.css";

export default function ProductSection({ products }: any) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter logic
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (p: any) => p.category.toLowerCase() === selectedCategory
        );

  return (
    <div className={styles.layout}>
      <Sidebar setCategory={setSelectedCategory} />

      <div className={styles.grid}>
        {filteredProducts.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}