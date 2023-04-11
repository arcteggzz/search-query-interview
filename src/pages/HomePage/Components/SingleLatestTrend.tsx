import styles from "./SingleLatestTrend.module.scss";

type SingleLatestTrendProps = {
  image: string;
  name: string;
};

const SingleLatestTrend = ({ image, name }: SingleLatestTrendProps) => {
  return (
    <>
      <main className={styles.SingleLatestTrend}>
        <img src={image} alt={name} />
        <p>{name}</p>
      </main>
    </>
  );
};

export default SingleLatestTrend;
