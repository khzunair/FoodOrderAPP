import { supabase } from "@/src/lib/supabase";
import { useAuth } from "@/src/providers/AuthProvider";
import { Link, Redirect, useRouter } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

const ProfileScreen = () => {

    
  const { isAdmin } = useAuth();


  const router = useRouter();
  return (
    <View style={styles.container}>
        <Text>Profile</Text>

        <Button  title="Sign Out" onPress={ async() => { await supabase.auth.signOut()}} />
        {
            isAdmin && (
                <Button style={{marginTop:22}} title={"Admin"} onPress={ async() => { await router.push("/") }}>
                    
                </Button>

            )
        }
    </View>
  )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 10,
    }

})