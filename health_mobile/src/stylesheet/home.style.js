import { StyleSheet, Dimensions } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
export const stylesheet = StyleSheet.create({
  styleRectangle1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: Dimensions.get("window").width,
    height: hp(800),
    backgroundColor: "rgba(0.3,0.2,0.1,0.1)",
    //
  },
  styleRectangle2: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 360,
    height: hp(800),
    backgroundColor: "#000",
  },

  styleChooseFormat: {
    position: "absolute",
    left: 20,
    top: 56,
    width: 179,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    letterSpacing: 0,
    fontStyle: "normal",
    textAlign: "left",
    height: "auto",
    lineHeight: 24.2,
  },
  styleRectangle2: {
    position: "absolute",
    right: 30,
    top: 50,
    width: 72,
    height: 23,
    borderRadius: 6,
    backgroundColor: "rgba(255,255,255,1)",
  },
  styleSkip: {
    position: "absolute",
    right: 50,
    top: 40,
    width: 30,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    letterSpacing: 0,
    fontStyle: "normal",
    textAlign: "left",
    height: "auto",
    lineHeight: 16.9,
  },
  styleRectangle3: {
    position: "absolute",
    left: 36,
    top: 137,
    width: 302,
    height: 269,
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,1)",
  },
  styleRectangle5: {
    position: "absolute",
    left: 36,
    top: 449,
    width: 302,
    height: 269,
    borderRadius: 24,
    backgroundColor: "rgba(255,255,255,1)",
  },
  styleOnlineConsultation: {
    position: "absolute",
    left: 116,
    top: 155,
    width: 129,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    letterSpacing: 0,
    fontStyle: "normal",
    textAlign: "center",
    height: "auto",
    lineHeight: 24.2,
  },
  styleEllipse5: {
    position: "absolute",
    left: 143,
    top: 215,
    borderRadius: 50,
    width: 73,
    height: 73,
    backgroundColor: "#F24E1E",
  },
  styleEllipse6: {
    position: "absolute",
    left: 143,
    top: 529,
    borderRadius: 50,
    width: 73,
    height: 73,
    backgroundColor: "#000",
  },
  styleEllipse7: {
    position: "absolute",
    left: 159,
    top: 545,

    width: 48,
    height: 48,
    backgroundColor: "rgba(0,0,0,0)",
  },
  styleStartingFrom50: {
    position: "absolute",
    left: 123,
    top: 296,
    width: 116,
    color: "rgba(242, 78, 30, 1)",
    fontSize: 13,
    letterSpacing: 0,
    fontStyle: "normal",
    textAlign: "center",
    height: "auto",
    lineHeight: 15.7,
  },
  styleStartingFrom50Copy1: {
    position: "absolute",
    left: 123,
    top: 619,
    width: 116,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    letterSpacing: 0,
    fontStyle: "normal",
    textAlign: "center",
    height: "auto",
    lineHeight: 15.7,
  },
  styleRectangle4: {
    position: "absolute",
    left: 102,
    top: 329,
    width: 156,
    height: 42,
    borderRadius: 16,
    backgroundColor: "#F24E1E",
  },
  styleRectangle6: {
    position: "absolute",
    left: 83,
    top: 652,
    width: 193,
    height: 42,
    borderRadius: 16,
    backgroundColor: "rgba(0,0,0,1)",
  },
  styleFindDoctor: {
    position: "absolute",
    left: 143,
    top: 343,
    width: 76,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,

    letterSpacing: 0,
    fontStyle: "normal",
    textAlign: "center",
  },
  styleVector: {
    position: "absolute",
    left: 8,
    right: 1,
    top: -44,
    bottom: 44,
    width: "auto",
    height: "auto",
  },
  styleMaterialSymbolsNavigateNext: {
    position: "absolute",
    left: 219,
    top: 339,
    width: 24,
    height: 24,
  },
  styleVisitADoctor: {
    position: "absolute",
    left: 100,
    top: 480,
    width: 150,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    letterSpacing: 0,
    fontStyle: "normal",
    textAlign: "center",
    height: "auto",
    lineHeight: 24.2,
  },
  styleVectorCopy1: {
    position: "absolute",
    left: 4,
    right: -39,
    top: -46,
    bottom: 16,
    width: "auto",
    height: "auto",
  },
  styleMaterialSymbolsStethoscope: {
    position: "absolute",
    left: 154,
    top: 543,
    width: 52,
    height: 46,
  },
  styleVectorCopy2: {
    position: "absolute",
    left: 7,
    right: -24,
    top: -48,
    bottom: 13,
    width: "auto",
    height: "auto",
  },
  styleMaterialSymbolsMobileFriendlyRounded: {
    position: "absolute",
    left: 165,
    top: 230,
    width: 42,
    height: 42,
    backgroundColor: "rgba(0,0,0,0)",
  },
  styleBookAppointment: {
    position: "absolute",
    left: 55,
    top: 333,
    width: 139,
    color: "#fff",
    fontSize: 15,
    letterSpacing: 0,
    fontStyle: "normal",
    textAlign: "center",
    height: "auto",
    lineHeight: 18.2,
  },
  styleVectorCopy3: {
    position: "absolute",
    left: 8,
    right: 1,
    top: 7,
    bottom: -7,
    width: "auto",
    height: "auto",
  },
  styleMaterialSymbolsNavigateNextCopy1: {
    position: "absolute",
    left: 243,
    top: 757,
    width: 24,
    height: 28,
    backgroundColor: "#fff",
  },
  styleRectangle7: {
    position: "absolute",
    right: 43,
    top: -32,
    borderRadius: 13,
    width: 80,
    height: 52,
  },
  styleStylename: {
    position: "relative",
    width: Dimensions.get("window").width,
    height: 800,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
});
