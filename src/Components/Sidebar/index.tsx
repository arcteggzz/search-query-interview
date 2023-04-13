import styles from "./Sidebar.module.scss";
import dropdown_icon from "../../assets/dropdown_icon.png";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Sidebar = () => {
  const {
    selectedBrandFilters,
    setSelectedBrandFilters,
    selectedPriceFilter,
    setSelectedPriceFilter,
    selectedRatingFilter,
    setSelectedRatingFilter,
  } = useContext(AppContext);

  const updateBrandFilterSelection = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.checked)
      setSelectedBrandFilters([...selectedBrandFilters, e.target.value]);
    if (!e.target.checked) {
      let filters = selectedBrandFilters.filter(
        (query) => query !== e.target.value
      );
      setSelectedBrandFilters(filters);
    }
  };

  const updatePriceFilterSelection = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedPriceFilter(+e.target.value);
  };

  const updateRatingFilterSelection = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedRatingFilter(+e.target.value);
  };

  const resetPriceRadioHandler = () => {
    setSelectedPriceFilter(0);
  };

  const resetRatingRadioHandler = () => {
    setSelectedRatingFilter(0);
  };

  return (
    <>
      <div className={styles.Sidebar}>
        <div className={styles.form_brand}>
          <div className={styles.brand_header}>
            <h3>Brand</h3>
            <img src={dropdown_icon} alt="dropdoen_icon" />
          </div>
          <div className={styles.brand_inputs}>
            <div className={styles.single_input}>
              <input
                type="checkbox"
                id="mango"
                name="mango"
                value="mango"
                onChange={(e) => updateBrandFilterSelection(e)}
              />
              <label htmlFor="mango"> Mango</label>
            </div>
            <div className={styles.single_input}>
              <input
                type="checkbox"
                id="h&m"
                name="h&m"
                value="h&m"
                onChange={(e) => updateBrandFilterSelection(e)}
              />
              <label htmlFor="h&m"> H&M</label>
            </div>
          </div>
        </div>
        <div className={styles.form_brand}>
          <div className={styles.brand_header}>
            <h3>Price Range</h3>
            <img src={dropdown_icon} alt="dropdoen_icon" />
          </div>
          <div className={styles.brand_inputs}>
            <div className={styles.single_input}>
              <input
                type="radio"
                id="under500"
                name="price_range"
                value="1"
                checked={selectedPriceFilter === 1}
                onChange={(e) => updatePriceFilterSelection(e)}
              />
              <label htmlFor="under500"> under 500</label>
            </div>
            <div className={styles.single_input}>
              <input
                type="radio"
                id="500-1000"
                name="price_range"
                value="2"
                checked={selectedPriceFilter === 2}
                onChange={(e) => updatePriceFilterSelection(e)}
              />
              <label htmlFor="500-1000"> 500-1000</label>
            </div>
            <div className={styles.single_input}>
              <input
                type="radio"
                id="over1000"
                name="price_range"
                value="3"
                checked={selectedPriceFilter === 3}
                onChange={(e) => updatePriceFilterSelection(e)}
              />
              <label htmlFor="over1000"> over1000</label>
            </div>
          </div>
          <button type="button" onClick={resetPriceRadioHandler}>
            Reset
          </button>
        </div>
        <div className={styles.form_brand}>
          <div className={styles.brand_header}>
            <h3>Ratings</h3>
            <img src={dropdown_icon} alt="dropdoen_icon" />
          </div>
          <div className={styles.brand_inputs}>
            <div className={styles.single_input}>
              <input
                type="radio"
                id="5Stars"
                name="rating_range"
                value="5"
                checked={selectedRatingFilter === 5}
                onChange={(e) => updateRatingFilterSelection(e)}
              />
              <label htmlFor="5Stars">5Stars</label>
            </div>
            <div className={styles.single_input}>
              <input
                type="radio"
                id="4Stars"
                name="rating_range"
                value="4"
                checked={selectedRatingFilter === 4}
                onChange={(e) => updateRatingFilterSelection(e)}
              />
              <label htmlFor="4Stars">4Stars</label>
            </div>
            <div className={styles.single_input}>
              <input
                type="radio"
                id="3Stars"
                name="rating_range"
                value="3"
                checked={selectedRatingFilter === 3}
                onChange={(e) => updateRatingFilterSelection(e)}
              />
              <label htmlFor="3Stars">3Stars</label>
            </div>
            <div className={styles.single_input}>
              <input
                type="radio"
                id="2Stars"
                name="rating_range"
                value="2"
                checked={selectedRatingFilter === 2}
                onChange={(e) => updateRatingFilterSelection(e)}
              />
              <label htmlFor="2Stars">2Stars</label>
            </div>
            <div className={styles.single_input}>
              <input
                type="radio"
                id="1Stars"
                name="rating_range"
                value="1"
                checked={selectedRatingFilter === 1}
                onChange={(e) => updateRatingFilterSelection(e)}
              />
              <label htmlFor="1Stars">1Stars</label>
            </div>
          </div>
          <button type="button" onClick={resetRatingRadioHandler}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
