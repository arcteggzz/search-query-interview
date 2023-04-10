import { useContext } from "react";
import styles from "./HomePage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import HomePageHeader from "./Components/HomePageHeader";
import LatestTrends from "./Components/LatestTrends";
import { AppContext } from "../../context/AppContext";

const HomePage = () => {
  const { searchHomePanelOpen } = useContext(AppContext);
  return (
    <>
      <AnimatedFadeInPage>
        <div className={styles.HomePage}>
          <HomePageHeader />
          {searchHomePanelOpen ? <LatestTrends /> : <></>}
        </div>
      </AnimatedFadeInPage>
    </>
  );
};

export default HomePage;
