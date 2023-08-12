import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
const NumberContainer = ({ children }) => {
  return (
    <View style={style.container}>
      <Text style={style.numberText}>{children}</Text>
    </View>
  );
};
export default NumberContainer;

const style = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "#FFFAD7",
    padding: 24,
    borderRadius: 8,
    margin: 24,
    textAlign: "center",
    justifyContent: "center",
  },
  numberText: {
    color: "#FFFAD7",
    fontSize: 24,
    fontWeight: "bold",
  },
});
