import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext<any>(null);

export function AppContextProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <AppContext.Provider value={{ products, setProducts }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  const appContext = useContext(AppContext);
  return appContext;
};
