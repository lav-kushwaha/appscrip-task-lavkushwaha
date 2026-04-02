import Image from "next/image";
import styles from "../styles/home.module.css";

type Props = {
  product: any;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className={styles.card}>
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={200}
        height={200}
        className={styles.image}
      />

      <h3 className={styles.productTitle}>
        {product.title}
      </h3>

      <p className={styles.price}>
        ${product.price}
      </p>
    </div>
  );
}