import React, { createContext, useState } from "react";
import { fakeProducts } from "../utils/FakeProducts";

type AppContextProviderProps = {
  children: React.ReactNode;
};

type AppContextType = {
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  searchHomePanelOpen: boolean;
  setSearchHomePanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedBrandFilters: string[];
  setSelectedBrandFilters: React.Dispatch<React.SetStateAction<string[]>>;
  selectedPriceFilter: number;
  setSelectedPriceFilter: React.Dispatch<React.SetStateAction<number>>;
  selectedRatingFilter: number;
  setSelectedRatingFilter: React.Dispatch<React.SetStateAction<number>>;

  filteredProducts: fakeProductType[] | undefined;
  setFilteredProducts: React.Dispatch<
    React.SetStateAction<fakeProductType[] | undefined>
  >;
};

export type fakeProductType = {
  image: string;
  name: string;
  price: string;
  stars: number;
  brand: string;
};

export const AppContext = createContext({} as AppContextType);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [searchHomePanelOpen, setSearchHomePanelOpen] = useState(false);
  const [selectedBrandFilters, setSelectedBrandFilters] = useState<string[]>(
    []
  );
  const [selectedPriceFilter, setSelectedPriceFilter] = useState(0);
  const [selectedRatingFilter, setSelectedRatingFilter] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState<
    fakeProductType[] | undefined
  >(fakeProducts);

  return (
    <AppContext.Provider
      value={{
        mobileSidebarOpen,
        setMobileSidebarOpen,
        searchHomePanelOpen,
        setSearchHomePanelOpen,
        selectedBrandFilters,
        setSelectedBrandFilters,
        selectedPriceFilter,
        setSelectedPriceFilter,
        selectedRatingFilter,
        setSelectedRatingFilter,
        filteredProducts,
        setFilteredProducts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
