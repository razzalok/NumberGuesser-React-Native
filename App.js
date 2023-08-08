import { useState } from 'react';
import { StyleSheet, ImageBackground} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
export default function App() {
  const [userNumber,setUserNumber] = useState()
  function pickNumberHandler(pickedNumber){
    setUserNumber(pickedNumber)
  }
  let screen = <StartGameScreen onPickNumber={pickNumberHandler}/>

  if(userNumber){
    screen= <GameScreen userNumber={userNumber}/>
  }
  return (
    <LinearGradient colors={['#c6d3b6','#547a25']} style={styles.rootScreen} >
      <ImageBackground 
      source={require('./assets/images/background.png')} 
      resizeMode='cover' style={styles.rootScreen}
      imageStyle={{opacity:0.5}}
      >
      {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
rootScreen:{
  flex:1
}
});
