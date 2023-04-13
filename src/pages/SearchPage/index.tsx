import styles from "./SearchPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import SearchNavbar from "./Components/SearchNavbar";
import Products from "./Components/Products";
import Sidebar from "../../Components/Sidebar";

const SearchPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.SearchPage}>
          <SearchNavbar />
          <h3>Search Results</h3>
          <section>
            <Sidebar />
            <Products />
          </section>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default SearchPage;
