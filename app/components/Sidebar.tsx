"use client";

import { useState } from "react";
import styles from "../styles/sidebar.module.css";

const sections = [
  "IDEAL FOR",
  "OCCASION",
  "WORK",
  "FABRIC",
  "SEGMENT",
  "SUITABLE FOR",
  "RAW MATERIALS",
  "PATTERN",
];

export default function Sidebar({ setCategory, onClose }: any) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <aside className={styles.sidebar}>
      {/* Checkbox */}
      <div className={styles.checkbox}>
        <input type="checkbox" />
        <span>CUSTOMIZBLE</span>
      </div>

      {/* Sections */}
      {sections.map((section) => (
        <div key={section} className={styles.section}>
          
          <div
            className={styles.sectionHeader}
            onClick={() => toggleSection(section)}
          >
            <span>{section}</span>
            <span className={styles.arrow}>
              {openSection === section ? "⌄" : "›"}
            </span>
          </div>

          <div className={styles.subText}>All</div>

          {openSection === section && (
            <div className={styles.sectionContent}>
              <p onClick={() => setCategory("beauty")}>Beauty</p>
              <p onClick={() => setCategory("furniture")}>Furniture</p>
              <p onClick={() => setCategory("groceries")}>Groceries</p>
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}