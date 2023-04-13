import styles from "./Products.module.scss";
import SingleProduct from "./SingleProduct";
import { useContext, useEffect } from "react";
import { AppContext } from "../../../context/AppContext";
import { fakeProducts } from "../../../utils/FakeProducts";
import { fakeProductType } from "../../../context/AppContext";

const Products = () => {
  const {
    filteredProducts,
    setFilteredProducts,
    selectedBrandFilters,
    selectedPriceFilter,
    selectedRatingFilter,
  } = useContext(AppContext);

  // const filterBrandProductsHandler = () => {
  //   if (selectedBrandFilters.length > 0) {
  //     let tempProducts = selectedBrandFilters.map((query) => {
  //       let temp = fakeProducts.filter((product) => product.brand === query);
  //       return temp;
  //     });
  //     setFilteredProducts(tempProducts.flat());
  //   } else {
  //     setFilteredProducts([...fakeProducts]);
  //   }
  // };

  // const filterPriceProductsHandler = () => {
  //   if (selectedPriceFilter === 0) return;
  //   if (selectedPriceFilter === 1) {
  //     let temp = fakeProducts.filter(
  //       (product) => +product.price.slice(3) <= 500
  //     );
  //     setFilteredProducts(temp);
  //   }
  //   if (selectedPriceFilter === 2) {
  //     let temp = fakeProducts.filter(
  //       (product) =>
  //         +product.price.slice(3) > 500 && +product.price.slice(3) <= 1000
  //     );
  //     setFilteredProducts(temp);
  //   }
  //   if (selectedPriceFilter === 3) {
  //     let temp = fakeProducts.filter(
  //       (product) => +product.price.slice(3) > 1000
  //     );
  //     setFilteredProducts(temp);
  //   }
  // };

  const filterBrandProductsHandler = () => {
    if (selectedBrandFilters.length > 0) {
      console.log("brand filter");
      let tempProducts = selectedBrandFilters.map((query) => {
        let temp = fakeProducts.filter((product) => product.brand === query);
        return temp;
      });
      return tempProducts.flat();
    } else {
      return fakeProducts;
    }
  };

  const filterPriceProductsHandler = (
    _intermediateFilteredProducts: fakeProductType[] | undefined
  ) => {
    if (selectedPriceFilter === 0) return _intermediateFilteredProducts;
    if (selectedPriceFilter === 1) {
      let temp = _intermediateFilteredProducts?.filter(
        (product) => +product.price.slice(3) <= 500
      );
      return temp;
    }
    if (selectedPriceFilter === 2) {
      let temp = _intermediateFilteredProducts?.filter(
        (product) =>
          +product.price.slice(3) > 500 && +product.price.slice(3) <= 1000
      );
      return temp;
    }
    if (selectedPriceFilter === 3) {
      let temp = _intermediateFilteredProducts?.filter(
        (product) => +product.price.slice(3) > 1000
      );
      return temp;
    }
  };

  const filterRatingProductHandler = (
    _intermediateFilteredProducts: fakeProductType[] | undefined
  ) => {
    if (selectedRatingFilter === 0) return _intermediateFilteredProducts;

    return _intermediateFilteredProducts?.filter(
      (product) => product.stars == selectedRatingFilter
    );
  };

  const mainFilterHandler = () => {
    const firstFilter = filterBrandProductsHandler();
    const secondFilter = filterPriceProductsHandler(firstFilter);
    const thirdFilter = filterRatingProductHandler(secondFilter);
    setFilteredProducts(thirdFilter);
  };

  useEffect(() => {
    mainFilterHandler();
  }, [selectedBrandFilters, selectedPriceFilter, selectedRatingFilter]);

  return (
    <>
      <div className={styles.Products}>
        {filteredProducts?.map((product, id) => {
          return (
            <SingleProduct
              image={product.image}
              name={product.name}
              price={product.price}
              stars={product.stars}
              brand={product.brand}
              key={Date.now() * id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Products;
