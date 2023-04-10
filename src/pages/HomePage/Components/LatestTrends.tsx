import styles from "./LatestTrends.module.scss";
import SingleLatestTrend from "./SingleLatestTrend";
import trend01 from "../Images/trend01.png";
import trend02 from "../Images/trend02.png";
import trend03 from "../Images/trend03.png";
import trend04 from "../Images/trend04.png";
import trend05 from "../Images/trend05.png";

const LatestTrends = () => {
  const trends_data = [
    {
      image: trend01,
      name: "Shirt with puffed sleeves",
    },
    {
      image: trend02,
      name: "Linen jumpsuit",
    },
    {
      image: trend03,
      name: "White formal suit",
    },
    {
      image: trend04,
      name: "Pattern dresses",
    },
    {
      image: trend05,
      name: "Leather shirt dress",
    },
  ];

  const popular_suggestions_data = [
    "Striped shirt dress",
    "Satin shirts",
    "Denim jumpsuit",
    "Leather dresses",
    "Solid tshirts",
  ];

  return (
    <>
      <main className={styles.LatestTrends}>
        <div className={styles.container}>
          <section className={styles.latest_trends_container}>
            <h3>Latest Trends</h3>
            <div className={styles.trends}>
              {trends_data.map((trend, id) => {
                return (
                  <SingleLatestTrend
                    image={trend.image}
                    name={trend.name}
                    key={Date.now() * id}
                  />
                );
              })}
            </div>
          </section>
          <section className={styles.popular_suggestions_container}>
            <h3>Popular suggestions</h3>
            <div className={styles.popular_suggestions}>
              {popular_suggestions_data.map((popular_suggestion, id) => {
                return <p key={Date.now() * id}>{popular_suggestion}</p>;
              })}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default LatestTrends;
