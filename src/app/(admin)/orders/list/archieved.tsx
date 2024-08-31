import React from "react";
import { Text, FlatList, ActivityIndicator } from 'react-native';
// import orders from "@/assets/data/orders";
import OrderListItem from "../../../../components/OrderListItem";
import { Stack } from "expo-router";
import { useAdminOrderList } from "@/src/api/orders";


export default function OrdersScreen() {

  const {
    data: orders,
    isLoading,
    error,
  } = useAdminOrderList({ archived: true });

  if (isLoading) {
    return <ActivityIndicator />;
  }


  if(isLoading) {
    return <ActivityIndicator />
  }

  if(error) {
    return <Text>{`Failed to Fetch: ${error.message}`}</Text>
  } 


  return (
    <>
      <Stack.Screen options={{ title: "Archieve" }} />
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
        contentContainerStyle={{ gap: 10, padding: 10 }}
      />
    </>
  );
}
