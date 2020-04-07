import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("ReviewDetails"); //can also use .push instead of navigate
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title="Go to review page" onPress={pressHandler} />
    </View>
  );
}
