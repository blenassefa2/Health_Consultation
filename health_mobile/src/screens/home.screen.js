import React from "react";

import {
  Text,
  Image,
  View,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";
import { stylesheet } from "../stylesheet/home.style";
import HomeRectangleOne from "../components/home.rectangle1";
import HomeRectangleTwo from "../components/home.rectangle2";

export default function Home({ navigation }) {
  let doctors = { status: 0, data: NaN };

  const getDoctors = async () => {
    try {
      const result = await fetch(
        "http://localhost:3000/api/v1/doctor/allDoctors"
      );
      doctors = await result.json();
    } catch (error) {
      console.log(error);
    }
  };

  const pressHandler = async () => {
    try {
      await getDoctors();
    } catch (error) {
      doctors = { name: "blen" };
    }
    console.log(doctors);
    const goToScreen = "Welcome";
    navigation.navigate(goToScreen, doctors);
  };
  const pressHandler1 = () => {
    const goToScreen = "Detail";
    navigation.navigate(goToScreen);
  };

  return (
    <>
      <View scrollEnabled={true} style={stylesheet.styleRectangle1}>
        <Text style={stylesheet.styleChooseFormat}> CHOOSE FORMAT </Text>
        <View style={stylesheet.styleRectangle2}></View>
        <Text style={stylesheet.styleSkip}> Skip </Text>

        <HomeRectangleOne press={pressHandler}></HomeRectangleOne>
        <HomeRectangleTwo></HomeRectangleTwo>
      </View>
    </>
  );
}
