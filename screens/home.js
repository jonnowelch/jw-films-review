import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: "Shawshank", rating: 5, body: "lorem ujpsum", key: "1" },
    { title: "green mile", rating: 4, body: "lorem ujpsum", key: "2" },
    { title: "shining", rating: 3, body: "lorem ujpsum", key: "3" },
  ]);
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Text style={globalStyles.titleText}> {item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
