import React, { createContext, useState } from "react";

type AppContextProviderProps = {
  children: React.ReactNode;
};

type AppContextType = {
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  searchHomePanelOpen: boolean;
  setSearchHomePanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext({} as AppContextType);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [searchHomePanelOpen, setSearchHomePanelOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        mobileSidebarOpen,
        setMobileSidebarOpen,
        searchHomePanelOpen,
        setSearchHomePanelOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
