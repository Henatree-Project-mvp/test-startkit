import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

const Clairebutton = () => {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={alert("Vous avez cliqué !")}
      >
        <Text style={styles.text}>Clic</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Clairebutton;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "gray",
    padding: 10,
    width: 200,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
