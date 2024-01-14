import { createContext, useContext, useEffect, useState } from "react";

type ContextInfo = {
  products: any[];
  isLoading: boolean;
};

const AppContext = createContext<ContextInfo>({
  products: [],
  isLoading: false,
});

export function AppContextProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <AppContext.Provider value={{ products, isLoading }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  const appContext = useContext(AppContext);
  return appContext;
};
