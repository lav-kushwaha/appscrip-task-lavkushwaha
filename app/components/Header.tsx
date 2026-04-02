"use client";

import { useState } from "react";
import styles from "../styles/header.module.css";
import Image from "next/image";
import { FiSearch, FiHeart, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      
      {/* Top Bar */}
      <div className={styles.topBar}>
        
        <div className={styles.leftSection}>
          {/* ✅ Toggle menu */}
          <div onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FiX className={styles.menuIcon} />
            ) : (
              <FiMenu className={styles.menuIcon} />
            )}
          </div>

          <Image src="/logo.png" alt="logo" width={28} height={28} />
        </div>

        {/* Center Logo */}
        <div className={styles.logo}>
          LOGO
        </div>

        {/* Right Icons */}
        <div className={styles.icons}>
          <FiSearch />
          <FiHeart />
          <FiShoppingBag />
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className={styles.nav}>
        <ul>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </nav>

      {/* ✅ Mobile Menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            <li>SHOP</li>
            <li>SKILLS</li>
            <li>STORIES</li>
            <li>ABOUT</li>
            <li>CONTACT US</li>
          </ul>
        </div>
      )}
    </header>
  );
}