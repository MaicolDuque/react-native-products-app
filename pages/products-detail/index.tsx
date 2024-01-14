import { RouteProp, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";

type ParamList = {
  ProductsDetail: {
    productId: string;
  };
};

export function ProductsDetail() {
  const route = useRoute<RouteProp<ParamList>>();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState<any>({});
  const { productId } = route.params;

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .finally(() => setIsLoading(false));
  }, []);
  if (isLoading) {
    return (
      <ActivityIndicator
        style={styles.loader}
        color={"green"}
        size={"large"}
      ></ActivityIndicator>
    );
  }
  return (
    <View style={styles.container}>
      <Text>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text>${product.price}</Text>
      <Text>{product.rating}</Text>
      <Text>{product.category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  container: {
    padding: 30,
    paddingHorizontal: 15,
    borderWidth: 1,
    margin: 10,
  },
});
