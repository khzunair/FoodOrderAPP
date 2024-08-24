import React from "react";
import { FlatList, View } from "react-native";
import orders from "../../../../assets/data/orders";
import OrderListItem from "../../../components/OrderListItem";
import { Stack } from "expo-router";

export default function OrdersScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Orders" }} />
      <FlatList
        data={orders.flatMap((order) => order.order_items || [])}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        // renderItem={({ item }) => <OrderListItem item={item} />}
        renderItem={({ item }) => (
          <View key={item.id}>
            <OrderListItem item={item} />
          </View>
        )}
      />
    </>
  );
}
