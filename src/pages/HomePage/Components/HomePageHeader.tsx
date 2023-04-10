import styles from "./HomePageHeader.module.scss";
import logo from "../../../assets/logo.png";
import search_icon from "../../../assets/search_icon.png";

const HomePageHeader = () => {
  return (
    <>
      <div className={styles.HomePageHeader}>
        <nav>
          <img src={logo} alt="navbar logo" />
        </nav>
        <header>
          <div className={styles.search_bar}>
            <input type="text" placeholder="Search" />
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
