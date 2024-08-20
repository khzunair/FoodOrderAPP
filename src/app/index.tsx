import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';


// There were some errors that i discovered in the code that we cannot assign button a link directly should use touchale opacity
const Index = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
      <Link href={'/(user)'} asChild>
        <TouchableOpacity style={{ padding: 10, backgroundColor: 'blue', marginBottom: 10 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>User</Text>
        </TouchableOpacity>
      </Link>
      <Link href={'/(admin)'} asChild>
        <TouchableOpacity style={{ padding: 10, backgroundColor: 'green' }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Admin</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Index;
