import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";
import { useAuth } from "../providers/AuthProvider";
import { Button } from "react-native-elements";
import { supabase } from "../lib/supabase";

// There were some errors that i discovered in the code that we cannot assign button a link directly should use touchale opacity
const Index = () => {
  const {session, loading, isAdmin} = useAuth();

  // console.log(session)

  if(loading){
    return<ActivityIndicator />
  }

  if(!session){
    return <Redirect href={"/(auth)/sign-in"} />
  }

  if(!isAdmin){
    return <Redirect href={"/(user)"} />
  }
  
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
      <Link href={"/(user)"} asChild>
        <TouchableOpacity
          style={{ padding: 10, backgroundColor: "blue", marginBottom: 10 }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>User</Text>
        </TouchableOpacity>
      </Link>
      <Link href={"/(admin)"} asChild>
        <TouchableOpacity style={{ padding: 10, backgroundColor: "green", marginBottom: 10 }}>
          <Text style={{ color: "white", textAlign: "center" }}>Admin</Text>
        </TouchableOpacity>
      </Link>

      <Link href={"/(auth)/sign-in"} asChild>
        <TouchableOpacity style={{ padding: 10, backgroundColor: "red", marginBottom: 10 }}>
          <Text style={{ color: "white", textAlign: "center" }}>Auth Screen</Text>
        </TouchableOpacity>
      </Link>

    </View>
  );
};

export default Index;
