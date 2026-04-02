import styles from "../styles/footer.module.css";
import { FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      
      {/* TOP SECTION */}
      <div className={styles.top}>
        
        {/* LEFT */}
        <div>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>

          <div className={styles.subscribe}>
            <input placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.contact}>
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h4>CURRENCY</h4>
          <p>🇺🇸 USD</p>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* BOTTOM SECTION */}
      <div className={styles.bottom}>
        
        {/* COLUMN 1 */}
        <div>
          <h4>mettā muse</h4>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h4>QUICK LINKS</h4>
          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQs</p>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h4>FOLLOW US</h4>
          <div className={styles.icons}>
            <FiInstagram />
            <FiLinkedin />
          </div>

          <h4>mettā muse ACCEPTS</h4>
          <div className={styles.payments}>
            <span>GPay</span>
            <span>Mastercard</span>
            <span>PayPal</span>
            <span>Amex</span>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <p className={styles.copy}>
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
}