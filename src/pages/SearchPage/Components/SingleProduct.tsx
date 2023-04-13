import styles from "./SingleProduct.module.scss";
import star_icon from "../Images/star_icon.png";
import image1 from "../Images/1.png";

type SingleProductProps = {
  image: string;
  name: string;
  price: string;
  stars: number;
  brand: string;
};

const SingleProduct = ({
  image,
  name,
  price,
  stars,
  brand,
}: SingleProductProps) => {
  return (
    <>
      <div className={styles.SingleProduct}>
        <img src={image} alt="" />
        <p>{name}</p>
        <p>{price}</p>
        <p>{stars}</p>
        <p>{brand}</p>
      </div>
    </>
  );
};

export default SingleProduct;
