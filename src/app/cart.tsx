import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, FlatList } from "react-native";

import { Text, View } from "@/src/components/Themed";
import { useCart } from "../providers/CartProvider";
import CartListItem from "../components/CartListItem";
const CartScreen = () => {
  const { items } = useCart();
  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        contentContainerStyle={{ padding: 10, gap:10 }}
      />
      {/* <EditScreenInfo path="app/modal.tsx" /> */}

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
