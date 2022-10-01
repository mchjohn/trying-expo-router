import React from 'react';
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Page({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello {route?.params?.name}</Text>
      <Text style={styles.subtitle}>
        This is the <Text style={{fontWeight: 'bold'}}>
          Profile
        </Text> page.
      </Text>

      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={{color: "#fff",}}>Go Back Home</Text> 
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 26,
    color: "#38434D",
  },
  button: {
    margin: 10,
    padding: 10,
    fontSize: 18,
    borderRadius: 4,
    backgroundColor: '#38434D',
  },
});
