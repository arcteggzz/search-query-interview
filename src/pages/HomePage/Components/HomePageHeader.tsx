import { useContext } from "react";
import styles from "./HomePageHeader.module.scss";
import logo from "../../../assets/logo.png";
import search_icon from "../../../assets/search_icon.png";
import { AppContext } from "../../../context/AppContext";
import { useNavigate } from "react-router-dom";

const HomePageHeader = () => {
  const { setSearchHomePanelOpen, searchHomePanelOpen } =
    useContext(AppContext);
  const navigate = useNavigate();

  const routeToQueryPage = () => navigate("/filter-product-search");

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
            <form onSubmit={routeToQueryPage} className={styles.search_bar}>
              <input type="text" placeholder="Search" />
              <div className={styles.search_icon} onClick={routeToQueryPage}>
                <img src={search_icon} alt="search_button" />
              </div>
            </form>
          </div>
        </header>
      </div>
    </>
  );
};

export default HomePageHeader;
