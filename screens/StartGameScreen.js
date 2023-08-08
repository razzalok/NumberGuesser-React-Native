import { useState } from "react";
import { StyleSheet, View, TextInput, StatusBar, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function resetInputHandler(){
    setEnteredNumber('')
  }
  function confirmInputHandler() {
    const choosenNumber = parseInt(enteredNumber)
    // console.log(typeof choosenNumber);
    if(isNaN(choosenNumber) || choosenNumber <=0 || choosenNumber > 99){
      Alert.alert('Invalid Number','Number has to be number between 1 and 99.',[{text:'Okey',style:'destructive',onPress:resetInputHandler}])
      return;
    }
  }
  return (
    <>
      <StatusBar animated={true} backgroundColor="#873e23" />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.numberinput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Num.."
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </>
  );
};

export default StartGameScreen;
const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "#f3ece9",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
  numberinput: {
    height: 50,
    width: 100,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});