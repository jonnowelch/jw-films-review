import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text>Thanks for checking out my FilmReview App.</Text>
    </View>
  );
}
