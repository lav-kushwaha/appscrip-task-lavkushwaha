"use client";

import { useState } from "react";
import styles from "../styles/topbar.module.css";
import { FiChevronDown } from "react-icons/fi";

export default function TopBar({
  showSidebar,
  toggleSidebar,
}: any) {
  const [sortOpen, setSortOpen] = useState(false);

  return (
    <div className={styles.topBar}>
      
      <div className={styles.leftTop}>
        
        {/* MOBILE FILTER */}
        <p className={styles.items}>
          3426 Items
        </p>

        {/* DESKTOP TOGGLE */}
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
        RECOMMENDED <FiChevronDown className={`${styles.icon} ${sortOpen ? styles.iconOpen : ""}`} />
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