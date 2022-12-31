import React from "react";

import {
  Text,
  Image,
  View,
  Dimensions,
  StyleSheet,
  Button,
  Pressable,
} from "react-native";
export default function FourDots() {
  return (
    <View style={stylesheet.styleGroup1}>
      <Image
        style={stylesheet.styleEllipse1}
        source={{
          url: "assets/icon.png",
        }}
      ></Image>
      <Image
        style={stylesheet.styleEllipse3}
        source={{
          url: "assets/icon.png",
        }}
      ></Image>
      <Image
        style={stylesheet.styleEllipse2}
        source={{
          url: "assets/icon.png",
        }}
      ></Image>
      <Image
        style={stylesheet.styleEllipse4}
        source={{
          url: "assets/icon.png",
        }}
      ></Image>
    </View>
  );
}
const stylesheet = StyleSheet.create({
  styleEllipse1: {
    position: "absolute",
    left: 0,
    top: 0,
    borderRadius: "50%",
    width: 9,
    height: 9,
    backgroundColor: "#000",
  },
  styleEllipse3: {
    position: "absolute",
    left: 0,
    top: 16,
    borderRadius: "50%",
    width: 9,
    height: 9,
    backgroundColor: "#000",
  },
  styleEllipse2: {
    position: "absolute",
    left: 16,
    top: 0,
    borderRadius: "50%",
    width: 9,
    height: 9,
    backgroundColor: "#000",
  },
  styleEllipse4: {
    position: "absolute",
    left: 16,
    top: 16,
    borderRadius: "50%",
    width: 9,
    height: 9,
    backgroundColor: "#000",
  },
  styleGroup1: {
    position: "absolute",
    left: 37,
    top: 26,
    width: 25,
    height: 25,
    backgroundColor: "rgba(255,255,255,0.1)",
  },
});
