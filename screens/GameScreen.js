
import {StyleSheet, View, Text } from 'react-native'

const GameScreen = ({userNumber}) => {
  return (
    <View>
      <Text>Game Screen! {userNumber}</Text>
    </View>
  )
}

export default GameScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});