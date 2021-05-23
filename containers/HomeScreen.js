import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { Button, Text, View, Image, StyleSheet } from "react-native";

//import component
import LilyInput from "../components/LilyInput";
import Clairebutton from "../components/Clairebutton";

export default function HomeScreen() {
  const navigation = useNavigation();

  //Setting des inputs
  const [description, setDescription] = useState("");

  return (
    <View style={styles.container}>
      <Text>Welcome home!</Text>
      <View style={styles.lilyBox}>
        <Text>Bonjour à tous ! c'est Aurélie !</Text>
        <Image
          source={require("../assets/img/aurelie.jpg")}
          style={{ width: 100, height: 100 }}
        />
        <LilyInput
          placeholder="Tapez ce que bon vous semble"
          value={description}
          setValue={setDescription}
        />
      </View>
      <Clairebutton />
      <Button
        title="Go to Profile"
        onPress={() => {
          navigation.navigate("Profile", { userId: 123 });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  lilyBox: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    borderColor: "red",
    borderStyle: "dashed",
    borderWidth: 1,
    padding: 20,
  },
});
