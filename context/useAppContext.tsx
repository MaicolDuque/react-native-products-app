import { createContext, useContext, useEffect, useState } from "react";

type ContextInfo = {
  products: any[];
  favorites: any[];
  isLoading: boolean;
  addToFavorites: (product: any) => void;
};

const AppContext = createContext<ContextInfo>({
  products: [],
  favorites: [],
  isLoading: false,
  addToFavorites: () => null,
});

export function AppContextProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .finally(() => setIsLoading(false));
  }, []);

  const addToFavorites = (data: any) => {
    const isAlreadyFavorite = favorites.findIndex(
      (item) => item.id === data.productId
    );
    if (isAlreadyFavorite === -1) {
      const product = products.find((item) => item.id === data.productId);
      setFavorites((favs) => [...favs, { product, reason: data.reason }]);
    }
  };
  return (
    <AppContext.Provider
      value={{ products, isLoading, favorites, addToFavorites }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  const appContext = useContext(AppContext);
  return appContext;
};
