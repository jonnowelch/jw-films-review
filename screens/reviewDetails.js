import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { globalStyles, iamges, images } from "../styles/global";
import Card from "../shared/card";

export default function ReviewDetails({ navigation }) {
  const rating = navigation.getParam("rating");
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text> {navigation.getParam("title")}</Text>
        <Text> {navigation.getParam("body")}</Text>
        <View style={styles.rating}>
          <Text>FilmReview rating: </Text>
          <Image style={styles.image} source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "hotpink",
  },
  image: {
    height: 20,
    width: 80,
  },
});
