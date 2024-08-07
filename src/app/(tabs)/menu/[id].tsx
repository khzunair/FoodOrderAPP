import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ProductProps {
    name: string;
    description: string;
    price: number;
    image: string;
}

const Product: React.FC<ProductProps> = ({ name, description, price, image }) => {
    const {id} = useLocalSearchParams();
    return (
        <View style={styles.container}>
            <Stack.Screen options={{title:"Details "+ id}}/>
            {/* <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>${price.toFixed(2)}</Text> */}
            <Text>Product {id} Detail Page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 8,
        borderRadius: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        marginBottom: 8,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ff6b6b',
    },
});

export default Product;