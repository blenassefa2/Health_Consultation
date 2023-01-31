import React, { Component } from "react";
import { View, Text, Image, Pressable } from "react-native";

import { stylesheet } from "../stylesheet/home.style";

class HomeRectangleOne extends Component {
  render() {
    return (
      <>
        <View>
          <View style={stylesheet.styleRectangle3}></View>
          <Text style={stylesheet.styleOnlineConsultation}>
            Online Consultation
          </Text>

          <Image
            style={stylesheet.styleEllipse5}
            source={{
              url: "assets/icon.png",
            }}
          ></Image>

          <Text style={stylesheet.styleStartingFrom50}>Starting from $SO</Text>

          <Pressable
            style={stylesheet.styleRectangle4}
            onPress={this.props.press}
          ></Pressable>

          <Image
            source={require("../assets/mobileIcon.png")}
            style={stylesheet.styleMaterialSymbolsMobileFriendlyRounded}
          ></Image>
          <Pressable
            style={stylesheet.styleFindDoctor}
            onPress={this.props.press}
          >
            <Text>Find Doctor</Text>
          </Pressable>
        </View>
      </>
    );
  }
}

export default HomeRectangleOne;
