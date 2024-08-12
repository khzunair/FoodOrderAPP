import products from "@/assets/data/products";
import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text, Image, StyleSheet, Pressable, Button } from "react-native";
import { useState } from "react";

const sizes = ["S", "M", "L", "XL", "XXL"];

const Product = () => {
  const { id } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState("L");
  const product = products.find((products) => products.id.toString() === id);

  const addToCart = () => {
    console.warn("Add to cart", selectedSize);
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
      <Text>Select Size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable 
          onPress={()=>{
            setSelectedSize(size);
          }}
            style={[
              styles.size,
              {
                backgroundColor: selectedSize === size ? "gainsboro" : "white",
              },
              
            ]}
            key={size}
          >
            <Text style={[styles.sizeText,{
                color: selectedSize === size ? "black" : "gray",
            }]}>{size}</Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>${product.price}</Text>
      <Button onPress={addToCart} title="Add to Cart" />
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
    marginTop: "auto"
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  size: {
    backgroundColor: "gainsboro",
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
  },
});

export default Product;
