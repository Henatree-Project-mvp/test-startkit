import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Button, Text, View, Image } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <>
      <View>
        <Text>Welcome home!</Text>
        <Text>Bonjour à tous ! c'est Aurélie !</Text>
        <Image
          source={require("../assets/img/aurelie.jpg")}
          style={{ width: 100, height: 100 }}
        />
        <Button
          title="Go to Profile"
          onPress={() => {
            navigation.navigate("Profile", { userId: 123 });
          }}
        />
      </View>
    </>
  );
}
