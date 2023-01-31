import React from "react";

import { Text, Image, View, Pressable, ScrollView } from "react-native";
import { stylesheet } from "../stylesheet/welcome.style";
import { useRoute, useNavigation } from "@react-navigation/native";
export default function Welcome({ navigation }) {
  const doctors = navigation.getParam("data");

  const pressHandler6 = () => {
    const goToScreen = "Doctors";
    navigation.navigate(goToScreen);
  };
  return (
    <>
      <View style={stylesheet.styleRectangle16}></View>
      <View style={stylesheet.styleRectangle8}></View>
      <Text style={stylesheet.styleGoodMorning}>Good Morning!</Text>
      <Text style={stylesheet.styleWelcomeBack}>Welcome Back</Text>
      <Text style={stylesheet.styleFindYourDoctor}>Find Your Doctor</Text>
      <Text style={stylesheet.styleSeeAll}>See All</Text>
      <ScrollView horizontal={true}>
        <Image
          style={stylesheet.styleRectangle11}
          source={{ uri: `${doctors[0].photoURL}` }}
        />
        <Text style={stylesheet.styleDrLarryA}>{doctors[0].name}</Text>
        <Text style={stylesheet.styleCardiologist}>
          {doctors[0].specialization}
        </Text>
        <Image
          style={stylesheet.styleRectangle12}
          source={require("../assets/doctor5.jpg")}
        />
        <Text style={stylesheet.styleDrPerrinP}>Dr.Perrin P</Text>
        <Text style={stylesheet.styleNeurologist}>Neurologist</Text>
        <Image
          style={stylesheet.styleRectangle13}
          source={require("../assets/doctor6.jpg")}
        />
        <Text style={stylesheet.styleDrKelly}>Dr.Kelly A</Text>
        <Text style={stylesheet.styleGynecologist}>Gynecologist</Text>
      </ScrollView>
      <Text style={stylesheet.styleCatagories}>Categories</Text>
      <View style={stylesheet.styleRectangle14}></View>
      <Text style={stylesheet.styleDentist}>Dentist</Text>
      <Image
        style={stylesheet.styleTeeth}
        source={require("../assets/teeth2.png")}
      />
      <View style={stylesheet.styleRectangle17}></View>
      <Text style={stylesheet.styleCardiologist}>Cardiologist</Text>
      <Image
        style={stylesheet.styleHeart}
        source={require("../assets/heart.jpg")}
      />

      <View style={stylesheet.styleRectangle18}></View>
      <Pressable style={stylesheet.styleFindDoctors} onPress={pressHandler6}>
        <Text> Find Doctors </Text>
      </Pressable>
    </>
  );
}
