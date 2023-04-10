import styles from "./SearchPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import SearchNavbar from "./Components/SearchNavbar";
import Products from "./Components/Products";

const SearchPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.SearchPage}>
          <SearchNavbar />
          <Products />
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default SearchPage;
