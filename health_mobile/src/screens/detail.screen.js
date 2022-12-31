import React from "react";
import { Text, Image, View } from "react-native";
import { stylesheet } from "../stylesheet/detail.style";
export default function Detail() {
  return (
    <>
      <View style={stylesheet.styleRectangle22}></View>
      <View style={stylesheet.styleRectangle19}></View>
      <Image
        style={stylesheet.styleRectangle20}
        source={require("../assets/doctor.png")}
      />
      <Text style={stylesheet.styleDrLarryA}>Dr.Larry A</Text>
      <Text style={stylesheet.styleNeurologist}>Neurologist</Text>
      <Text style={stylesheet.styleLosAngelesUs}>Los Angeles, US</Text>
      <View style={stylesheet.styleNotoStar}> </View>
      <Text style={stylesheet.style5Star}> 5 Star </Text>

      <View style={stylesheet.styleRectangle21}> </View>
      <Text style={stylesheet.style100Reviews}> 100 Reviews </Text>
      <Text style={stylesheet.style10YearsExp_}> 10 Years exp. </Text>
      <Text style={stylesheet.style1500Patients}> 1500+ Patients </Text>
      <Text style={stylesheet.styleDemography}> Demography </Text>
      <Text style={stylesheet.styleDitarry}>
        Dr. Larry A is board certified in neurology by the American board of
        neurology and Psychiatry. His sub specialities are...more
      </Text>
      <Text style={stylesheet.styleSchedules}> Schedules </Text>
      <View style={stylesheet.styleRectangle23}> </View>
      <Text style={stylesheet.styleMon}>Mon</Text>
      <Text style={stylesheet.style11}>11</Text>
      <View style={stylesheet.styleRectangle24}> </View>
      <Text style={stylesheet.styleTue}> Tue </Text>
      <Text style={stylesheet.style12}> 12 </Text>
      <View style={stylesheet.styleRectangle25}> </View>
      <Text style={stylesheet.styleWed}> Wed </Text>
      <Text style={stylesheet.style13}> 13 </Text>
      <View style={stylesheet.styleRectangle26}> </View>
      <Text style={stylesheet.styleThur}>Thur</Text>
      <Text style={stylesheet.style14}> 14 </Text>
      <View style={stylesheet.styleRectangle27}></View>
      <Text style={stylesheet.styleFri}> Fri </Text>
      <Text style={stylesheet.style15}> 15</Text>
      <Text style={stylesheet.styleChooseTime}> Choose Time</Text>
      <View style={stylesheet.styleRectangle28}> </View>
      <Text style={stylesheet.style0900Am}>09:00 am</Text>
      <View style={stylesheet.styleRectangle29}> </View>
      <Text style={stylesheet.style1000Am}>10:00 am</Text>
      <View style={stylesheet.styleRectangle30}> </View>
      <Text style={stylesheet.style1100Am}>11:00 am</Text>
      <View style={stylesheet.styleRectangle6}> </View>
      <Text style={stylesheet.styleBookAppointment}>Book Appointment</Text>
      <View style={stylesheet.styleMaterialSymbolNavigateNext}></View>
    </>
  );
}
