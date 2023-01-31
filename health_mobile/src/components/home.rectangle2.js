import React, { Component } from "react";
import { View, Text, Image, Pressable } from "react-native";

import { stylesheet } from "../stylesheet/home.style";

class HomeRectangleTwo extends Component {
  render() {
    return (
      <>
        <View>
          <View style={stylesheet.styleRectangle5}></View>
          <View style={stylesheet.styleEllipse6}></View>
          <View style={stylesheet.styleRectangle6}></View>
          <Image
            style={stylesheet.styleEllipse7}
            source={require("../assets/stethescope.png")}
          ></Image>

          <View style={stylesheet.styleMaterialSymbolsNavigateNext}></View>

          <Text style={stylesheet.styleVisitADoctor}>Visit a Doctor</Text>
          <View style={stylesheet.styleMaterialSymbolsStethoscope}></View>

          <View style={stylesheet.styleMaterialSymbolsNavigateNextCopy1}></View>
          <Image
            style={stylesheet.styleRectangle7}
            source={{
              url: "assets/icon.png",
            }}
          ></Image>
          <Text style={stylesheet.styleStartingFrom50Copy1}>
            Starting from $50
          </Text>
          <Pressable style={stylesheet.styleBookAppointment}>
            <Text style={stylesheet.styleBookAppointment}>
              Book Appointment
            </Text>
          </Pressable>
        </View>
      </>
    );
  }
}

export default HomeRectangleTwo;
