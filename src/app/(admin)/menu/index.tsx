import { StyleSheet, View, FlatList } from "react-native";

import { ProductListItem } from "@/src/components/ProductListItem";

import products from "@/assets/data/products";

const product = products[0];

export default function TabOneScreen() {
  return (
    <View style={styles.appContainer}>
      {/* <ProductListItem product={products[7]} />
      <ProductListItem product={products[2]} /> */}
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ padding: 10, gap: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#F5F5F5",
  },
});
