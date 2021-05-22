import React from "react";
import { Button, Text, View } from "react-native";

export default function SettingsScreen({ setToken }) {
  return (
    <View>
      <Text>Hello Settings Test Modifications</Text>

      <Button
        title="Log Out"
        onPress={() => {
          setToken(null);
        }}
      />
    </View>
  );
}
