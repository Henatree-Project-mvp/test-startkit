import React from "react";
import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

const LilyInput = ({ placeholder, value, setValue }) => {
  return (
    <TextInput
      style={styles.lilyInput}
      placeholder={placeholder}
      value={value}
      onChangeText={(text) => setValue(text)}
    />
  );
};

export default LilyInput;

const styles = StyleSheet.create({
  lilyInput: {
    width: 300,
    height: 50,
    borderColor: "red",
    borderWidth: 3,
    borderRadius: 10,
    marginTop: 30,
  },
});
