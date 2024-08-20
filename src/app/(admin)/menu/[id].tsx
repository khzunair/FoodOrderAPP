import products from "@/assets/data/products";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { View, Text, Image, StyleSheet, Pressable, Button } from "react-native";
import { useState } from "react";

import { useCart } from "@/src/providers/CartProvider";
import { PizzaSize } from "@/src/types";

const sizes : PizzaSize[] = ["S", "M", "L", "XL"];

const Product = () => {

  const {addItems} = useCart();
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState<PizzaSize>("L");
  const product = products.find((products) => products.id.toString() === id);

  const router = useRouter();
  
  // const addItem = useCart().addItems;


  const addToCart = () => {
    if(!product){
      return;
    }

    // console.warn("Add to cart", selectedSize, product);
    addItems(product, selectedSize);
    router.push("/cart");
  }


  if (!product) {
    return (
      <>
        <Text>Product not found!</Text>
      </>
    );
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image source={{ uri: product.image }} style={styles.image} />

      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    flex: 1,
  },
  image: {
    width: "100%",
    // height: 200,
    aspectRatio: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ff6b6b",
  },
});

export default Product;
