import { useRoute } from "@react-navigation/native";
import { Pressable, View, Text, StyleSheet } from "react-native";

export function ProductItem({ title, onPress }: any) {
  return (
    <View style={styles.itemContainer}>
      <Pressable style={styles.pressableContainer} onPress={onPress}>
        <View style={styles.item}>
          <Text style={styles.itemTile}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 5,
    height: 160,
    borderWidth: 1,
    borderRadius: 8,
  },
  pressableContainer: {
    flex: 1,
  },
  item: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  itemTile: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
