import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from "react-native";

import { ProductListItem } from "@/src/components/ProductListItem";
import { useProductList } from "@/src/api/products";
import { Button } from "react-native-elements";
import { supabase } from "@/src/lib/supabase";

// import products from "@/assets/data/products";

// const product = products[0];

export default function TabOneScreen() {
  const { error, data: products, isLoading } = useProductList();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text> Failed to fetch products.</Text>;
  }

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
            <Button title="Sign out" onPress={()=> supabase.auth.signOut()}  />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#F5F5F5",
  },
});
