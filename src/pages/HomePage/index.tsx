import styles from "./HomePage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import LatestTrends from "./Components/LatestTrends";

const HomePage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <div className={styles.HomePage}>
          <LatestTrends />
        </div>
      </AnimatedFadeInPage>
    </>
  );
};

export default HomePage;
