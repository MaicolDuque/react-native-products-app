import { View, Text, StyleSheet } from "react-native";

export function FavoriteItem({ item }: any) {
  return (
    <View style={styles.favItemContainer}>
      <Text>Title: {item.product.title}</Text>
      <Text>Reason: {item.reason}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  favItemContainer: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
});
