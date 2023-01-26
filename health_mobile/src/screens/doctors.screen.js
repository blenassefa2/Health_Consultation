import { Text, Image, View, Pressable,TextInput} from "react-native";
import { stylesheet } from "../stylesheet/doctors.style";

export default function Doctors({navigation}) {
  const pressHandler4 = () => {
    const goToScreen = "Detail";
    navigation.navigate(goToScreen);
  };
  return (
    <>
      <View style={stylesheet.styleRectangle33}> </View>
      <View>
        <Text style={stylesheet.styleDoctor}>Doctors</Text>{" "}
      </View>
      <Text style={stylesheet.styleSearchDoctor}>Lets Find Your Doctor</Text>
         <View>
        <TextInput style={stylesheet.styleInput} placeholder="Search" ></TextInput>
         </View>
      <View style={stylesheet.styleRectangle9}></View>
      
      {/* <Text style={stylesheet.styleSearch}>Search</Text> */}
      <Text style={stylesheet}>
   
        
      </Text>
      <Image style ={stylesheet.styleIcon} source = {require('../assets/searchIcon.jpg')} /> 
      <View style={stylesheet.styleRectangle36}></View>
      <Text style={stylesheet.styleAll}>All</Text>
      <View style={stylesheet.styleRectangle37}></View>
      <Image
        style={stylesheet.styleRectangle42}
        source={require("../assets/doctor2.png")}
      ></Image>
      <Text style={stylesheet.styleCardiologist}>Cardiologist</Text>
      <View style={stylesheet.styleRectangle40}></View>
      <Text style={stylesheet.stylePaediatrician}>Pediatrician</Text>
      <View style={stylesheet.styleRectangle41}></View>
      <Pressable style={stylesheet.styleDrPeterSamuel} onPress={pressHandler4}>Dr. Peter Samuel</Pressable>
      <Text style={stylesheet.styleCardiologist2}>Cardiologist</Text>
      <Text style={stylesheet.stylefivestar}>5 star</Text>
      <Text style={stylesheet.styleDanielBrayen}>Dr. Daniel Brayn</Text>
      <Text style={stylesheet.styleGynacologistCopy1}>Gynacologist</Text>
      <Text style={stylesheet.stylefivestar1}>5 star</Text>
      <Text style={stylesheet.styleDrSusanParker}>Dr. Susan Parker</Text>
      <Text style={stylesheet.stylePaediatrician1}>Pediatrician</Text>
      <Text style={stylesheet.stylefivestar2}>5 star</Text>
    </>
  );
}
