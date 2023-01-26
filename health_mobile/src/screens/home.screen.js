import React from "react";

import { Text, Image, View, Pressable } from "react-native";
import { stylesheet } from "../stylesheet/home.style";
export default function Home({ navigation }) {
  const pressHandler = () => {
    const goToScreen = "Welcome";
    navigation.navigate(goToScreen);
  };
  

  const pressHandler1 = () => {
    const goToScreen = "Detail";
    navigation.navigate(goToScreen);
  };
  
  return (
    <>
      <View style={stylesheet.styleRectangle1}></View>

      <Text style={stylesheet.styleChooseFormat}> CHOOSE FORMAT </Text>
      <View style={stylesheet.styleRectangle2}> </View>
      <Text style={stylesheet.styleSkip}> Skip </Text>
      <View style={stylesheet.styleRectangle3}> </View>
      <View style={stylesheet.styleRectangle5}> </View>
      <Text style={stylesheet.styleOnlineConsultation}>
        Online Consultation
      </Text>
      <Image
        style={stylesheet.styleEllipse5}
        source={{
          url: "assets/icon.png",
        }}
      ></Image>
      <View style={stylesheet.styleEllipse6}></View>
      <Image
        style={stylesheet.styleEllipse7}
        source={require("../assets/stethescope.png")}
      ></Image>
      <Text style={stylesheet.styleStartingFrom50}> Starting from $SO </Text>
      <Text style={stylesheet.styleStartingFrom50Copy1}>Starting from $50</Text>
      <Pressable
        style={stylesheet.styleRectangle4}
        onPress={pressHandler}
      ></Pressable>
      <View style={stylesheet.styleRectangle6}> </View>

      <Pressable style={stylesheet.styleFindDoctor} onPress={pressHandler}>
        <Text>Find Doctor</Text>
      </Pressable>

      <View style={stylesheet.styleMaterialSymbolsNavigateNext}> </View>
      
      <Text style={stylesheet.styleVisitADoctor}>
        Visit a Doctor
      </Text>
      <View style={stylesheet.styleMaterialSymbolsStethoscope}></View>
      <Image
        source={require("../assets/mobileIcon.png")}
        style={stylesheet.styleMaterialSymbolsMobileFriendlyRounded}
      ></Image>
      <Pressable style={stylesheet.styleBookAppointment} onPress={pressHandler1}>
      <Text> Book Appointment</Text> 
      </Pressable>
      <View style={stylesheet.styleMaterialSymbolsNavigateNextCopy1}> </View>
      <Image
        style={stylesheet.styleRectangle7}
        source={{
          url: "assets/icon.png",
        }}
      ></Image>
    </>
  );
  
}
