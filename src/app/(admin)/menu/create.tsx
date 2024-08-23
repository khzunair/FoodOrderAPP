import { defaultPizzaImage } from "@/src/components/ProductListItem";
import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Colors from "../../constants/Colors";
import { Stack } from "expo-router";

const CreateProductScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const validateInput = () => {
    setErrors("");
    if (!name) {
      setErrors("Please enter a name");
      return false;
    }
    if (!price) {
      setErrors("Please enter a price");
      return false;
    }
    if (isNaN(parseFloat(price))) {
      setErrors("Please enter a valid number");
      return false;
    }
    return true;
  };

  const resetValues = () => {
    setName("");
    setPrice("");
  };
  const onCreate = () => {
    // Create product
    // console.warn("Product created", name, price);
    if (!validateInput()) {
      return;
    }
    resetValues();
    console.warn("Product created", name, price);
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title:"Create Product"}} />
      <Image
        style={styles.image}
        source={{ uri: image || defaultPizzaImage }}
      />
      <Text onPress={pickImage} style={styles.textButton}>
        Select Image
      </Text>

      <Text style={styles.label}>Product Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        style={styles.input}
      />

      <Text style={styles.label}>Price ($)</Text>
      <TextInput
        keyboardType="numeric"
        placeholder="9.99"
        style={styles.input}
        value={price}
        onChangeText={setPrice}
      />

      <Text style={{ color: "red" }}>{errors}</Text>

      <Button title="Create Product" onPress={onCreate} />
    </View>
  );
};

export default CreateProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
    width: "100%",
  },
  label: {
    color: "gray",
    fontSize: 16,
  },
  image: {
    width: "50%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
    marginVertical: 10,
  },
});
