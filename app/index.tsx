import { Link } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Page({ navigation }) {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Hello DEV</Text>
        <Text style={styles.subtitle}>
          This is the <Text style={{fontWeight: 'bold'}}>
          Home
          </Text> page.
        </Text>

        <TextInput
          value={name}
          style={styles.input}
          onChangeText={setName}
          placeholder="Type Your name"
        />
        <Link
          style={styles.link}
          href={`/profile/${name}`}
        >
          <Text style={{color: "#fff",}}>Save Name</Text> 
        </Link>
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
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 26,
    marginBottom: 10,
    color: "#38434D",
  },
  link: {
    margin: 10,
    width: '80%',
    fontSize: 18,
    borderRadius: 4,
    paddingVertical: 12,
    textAlign: 'center',
    backgroundColor: '#38434D',
  },
  input: {
    margin: 10,
    padding: 10,
    borderRadius: 4,
    borderWidth: 0.5,
    width: '80%',
  },
});
