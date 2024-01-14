import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useAppContext } from "../../context/useAppContext";
import { ProductItem } from "./product-item/ProductItem";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  ProductsDetail?: { productId: string };
};

export function Products() {
  const { products, isLoading } = useAppContext();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleOnPress = (productId: string) => {
    navigation.navigate("ProductsDetail", { productId });
  };

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
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductItem
            title={item.title}
            onPress={() => handleOnPress(item.id)}
          ></ProductItem>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
