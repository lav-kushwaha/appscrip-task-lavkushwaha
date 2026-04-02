"use client";

import { useState } from "react";
import styles from "../styles/topbar.module.css";

export default function TopBar({ toggleSidebar }: any) {
  const [sortOpen, setSortOpen] = useState(false);

  return (
    <div className={styles.topBar}>
      
      <div className={styles.leftTop}>
        <span>3425 ITEMS</span>

        {/*Toggle sidebar */}
        <button className={styles.hideBtn} onClick={toggleSidebar}>
          <span>‹</span> HIDE FILTER
        </button>
      </div>

      <div className={styles.sortWrapper}>
        <button
          className={styles.sortBtn}
          onClick={() => setSortOpen(!sortOpen)}
        >
          RECOMMENDED ⌄
        </button>

        {sortOpen && (
          <div className={styles.dropdown}>
            <p>RECOMMENDED</p>
            <p>NEWEST FIRST</p>
            <p>POPULAR</p>
            <p>PRICE : HIGH TO LOW</p>
            <p>PRICE : LOW TO HIGH</p>
          </div>
        )}
      </div>
    </div>
  );
}