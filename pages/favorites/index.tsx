import { View, Text, StyleSheet, FlatList } from "react-native";
import { useAppContext } from "../../context/useAppContext";
import { FavoriteItem } from "./favorite-item/FavoriteItem";

export function Favorites() {
  const { favorites } = useAppContext();
  if (favorites.length === 0) {
    return (
      <View style={styles.noFavs}>
        <Text>There is no favorite products</Text>
      </View>
    );
  }
  return (
    <View>
      <FlatList
        data={favorites}
        renderItem={({ item }) => <FavoriteItem item={item} />}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  noFavs: {
    padding: 20,
  },
});
