import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.title,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.title,
    padding: 12,
    borderRadius: 4,
  },
});
