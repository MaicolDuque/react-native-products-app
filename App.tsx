import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Products } from "./pages/products";
import { ProductsDetail } from "./pages/products-detail";
import { Favorites } from "./pages/favorites/favorite-item/FavoriteItem";
import { AppContextProvider } from "./context/useAppContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabsNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Products" component={Products} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <AppContextProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Products">
            <Stack.Screen
              options={{ headerShown: false }}
              name="TabsNavigation"
              component={TabsNavigation}
            />
            <Stack.Screen
              options={{ title: "Product Detail" }}
              name="ProductsDetail"
              component={ProductsDetail}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
