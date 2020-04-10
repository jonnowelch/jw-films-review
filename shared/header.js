import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ title, navigation }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <ImageBackground
      source={require("../assets/headerbg.png")}
      style={styles.header}
    >
      <MaterialIcons
        name='menu'
        size={28}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image
          style={styles.logo}
          source={require("../assets/cinemaIcon.png")}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get("screen").width,
    height: "150%",
    flexDirection: "row",
    flex: 1,
    alignItems: "flex-end",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    letterSpacing: 1,
    height: "100%",
    alignItems: "center",
  },
  icon: {
    position: "relative",
    flexDirection: "column",
    flex: 0.5,
    color: "white",
  },
  logo: {
    height: 30,
    width: 30,
    marginHorizontal: 10,
  },
  headerTitle: {
    flexDirection: "row",
  },
});
