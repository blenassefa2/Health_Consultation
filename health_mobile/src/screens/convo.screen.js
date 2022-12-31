import { stylesheet } from "../stylesheet/convo.style";
import React from "react";
import { Text, View } from "react-native";

export default function Convo() {
  return (
    <>
      <View style={stylesheet.styleRectangle32}></View>
      <Text style={stylesheet.styleChooseConsultationFormat}>
        Choose Consultaion Format
      </Text>
      <View style={stylesheet.styleRectangle31}></View>
      <View style={stylesheet.styleZondiconsConversation}></View>
      <Text style={stylesheet.styleStartConversation}>Start Conversation</Text>
      <View style={stylesheet.styleMaterialSymbolNavigateNext}></View>
      <View style={stylesheet.styleMaterialSymbolNavigateNextCopy1}></View>
    </>
  );
}
