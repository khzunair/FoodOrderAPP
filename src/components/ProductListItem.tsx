import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Colors from "@/src/app/constants/Colors";
import { Link, Href, useSegments } from "expo-router";
import { Button } from "react-native-elements";
import { supabase } from "../lib/supabase";

interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
}

interface ProductListItemProps {
  product: Product;
}

export const defaultPizzaImage = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

export const ProductListItem = ({ product }: ProductListItemProps) => {

  const segments = useSegments();
  // console.log(segments);

  const href: Href = `/${segments[0]}/menu/${product.id}` as const;



  return (
    <>
    <Link href={href} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image || defaultPizzaImage }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
    {/* <Button title="Sign out" onPress={()=> supabase.auth.signOut()}  /> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    margin: 10,
    maxWidth: "45%",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 10,
  },
  image: {
    aspectRatio: 1,
    width: "100%",
  },
  price: {
    color: Colors.light.tint,
  },
});