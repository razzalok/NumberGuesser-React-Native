import { StyleSheet, View, Text } from "react-native";

const GameOverScreen = () => {
  return (
    <View>
      <Text>Game is Over</Text>
    </View>
  );
};

export default GameOverScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
