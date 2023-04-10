import styles from "./HomePage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import HomePageHeader from "./Components/HomePageHeader";
import LatestTrends from "./Components/LatestTrends";

const HomePage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <div className={styles.HomePage}>
          <HomePageHeader />
          <LatestTrends />
        </div>
      </AnimatedFadeInPage>
    </>
  );
};

export default HomePage;
