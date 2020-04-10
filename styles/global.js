import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "pink",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
});

export const images = {
  ratings: {
    "1": require("../assets/1star.png"),
    "2": require("../assets/2star.png"),
    "3": require("../assets/3star.png"),
    "4": require("../assets/4star.png"),
    "5": require("../assets/5star.png"),
  },
};
