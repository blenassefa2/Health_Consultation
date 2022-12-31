import { useState } from "react";

import { Text, View, TextInput, Button } from "react-native";
import { style } from "../stylesheet/form.style";

// import {icon} from '@iconify/react';
export default function App() {
  const [name, setName] = useState("Feven");
  const [address, setAddress] = useState("30");
  const [consultingdoc, setAconsultingdoc] = useState("Dr. Peter Samuel");
  const [contactnum, setcontactnum] = useState("1234");

  return (
    <>
      <View style={style.container}>
        <Text style={style.styleName}> Name</Text>
        <TextInput
          style={style.input}
          placeholder=" e.g Feven"
          onChangeText={(val) => setName(val)}
        />

        <Text style={style.styleName}> Address</Text>
        <TextInput style={style.input} onChangeText={(val) => setName(val)} />

        <Text style={style.styleName}>Consulting Doctor</Text>
        <TextInput style={style.input} onChangeText={(val) => setName(val)} />

        <Text style={style.styleName}>Contact Number</Text>
        <TextInput style={style.input} onChangeText={(val) => setName(val)} />

        {<Button title="BOOK APPOINTMENT" style={style.styleButton}></Button>}
      </View>
    </>
  );
}
