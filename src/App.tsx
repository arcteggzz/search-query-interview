import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//Pages
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

//context
import { AppContextProvider } from "./context/AppContext";

const App = () => {
  const location = useLocation();
  return (
    <>
      <AppContextProvider>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* public routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/filter-product-search" element={<SearchPage />} />
          </Routes>
        </AnimatePresence>
      </AppContextProvider>
    </>
  );
};

export default App;
