import styles from "./Products.module.scss";
import SingleProduct from "./SingleProduct";

const Products = () => {
  return (
    <>
      <div className={styles.Products}>
        <SingleProduct />
      </div>
    </>
  );
};

export default Products;
