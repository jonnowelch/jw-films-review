import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import Header from "../shared/header";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='FilmScore' navigation={navigation} />,
      };
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "Review Details",
    },
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerTitleAlign: "center",
    headerStyle: { backgroundColor: "grey", height: 60 },
  },
});

export default HomeStack;
