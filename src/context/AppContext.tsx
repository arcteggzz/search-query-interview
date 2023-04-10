import React, { createContext, useState } from "react";

type AppContextProviderProps = {
  children: React.ReactNode;
};

type AppContextType = {
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext({} as AppContextType);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [itemsPerPage, setitemsPerPage] = useState(10);
  const [currentPage, setcurrentPage] = useState(1);
  const [paginationLimit, setPaginationLimit] = useState(10);

  return (
    <AppContext.Provider
      value={{
        mobileSidebarOpen: mobileSidebarOpen,
        setMobileSidebarOpen: setMobileSidebarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
