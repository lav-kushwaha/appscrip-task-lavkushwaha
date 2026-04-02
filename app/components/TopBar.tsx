"use client";

import { useState } from "react";
import styles from "../styles/topbar.module.css";

export default function TopBar({
  showSidebar,
  toggleSidebar,
  openSidebar,
}: any) {
  const [sortOpen, setSortOpen] = useState(false);

  return (
    <div className={styles.topBar}>
      
      <div className={styles.leftTop}>
        
        {/* 📱 MOBILE FILTER */}
        <button
          className={styles.filterBtn}
          onClick={openSidebar}
        >
          FILTER
        </button>

        {/* 💻 DESKTOP TOGGLE */}
        <button
          className={styles.hideBtn}
          onClick={toggleSidebar}
        >
          {showSidebar ? "‹ HIDE FILTER" : "› SHOW FILTER"}
        </button>

      </div>

      {/* SORT */}
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