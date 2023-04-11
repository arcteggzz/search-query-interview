import { useContext } from "react";
import styles from "./HomePageHeader.module.scss";
import logo from "../../../assets/logo.png";
import search_icon from "../../../assets/search_icon.png";
import { AppContext } from "../../../context/AppContext";

const HomePageHeader = () => {
  const { setSearchHomePanelOpen, searchHomePanelOpen } =
    useContext(AppContext);

  const routeToQueryPage = () => {};

  return (
    <>
      <div className={styles.HomePageHeader}>
        <nav>
          <img src={logo} alt="navbar logo" />
        </nav>
        <header>
          <div
            className={styles.search_bar}
            onClick={() => setSearchHomePanelOpen(!searchHomePanelOpen)}
          >
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => routeToQueryPage}
            />
            <div className={styles.search_icon}>
              <img src={search_icon} alt="search_button" />
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default HomePageHeader;
