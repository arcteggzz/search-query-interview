import styles from "./SearchNavbar.module.scss";
import search_icon from "../../../assets/search_icon.png";
import logo from "../../../assets/logo.png";

const SearchNavbar = () => {
  return (
    <>
      <div className={styles.SearchNavbar}>
        <h1>Tega</h1>
        <div className={styles.search_bar}>
          <input type="text" placeholder="Search" />
          <div className={styles.search_icon}>
            <img src={search_icon} alt="search_button" />
          </div>
        </div>
        <img src={logo} alt="navbar logo" />
      </div>
    </>
  );
};

export default SearchNavbar;
