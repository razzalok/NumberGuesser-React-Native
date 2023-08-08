import {StyleSheet, View,Text,Pressable } from "react-native"

const PrimaryButton = ({children,onPress}) => {
 
  return (
      <View style={styles.buttonOuterContainer}>
    <Pressable
    onPress={onPress}
    android_ripple={{color:'#47512b'}}
    style={({pressed})=>pressed? [styles.pressed,styles.buttonInnerContainer] : styles.buttonInnerContainer}
    >
        <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
      </View>
    
  )
}

export default PrimaryButton
const styles = StyleSheet.create({
  buttonOuterContainer:{
    borderRadius:28,
    margin:4,
    overflow:'hidden'
  },
  buttonInnerContainer: {
    backgroundColor: '#c7d1aa',
    paddingVertical:10,
    paddingHorizontal:16,
    elevation:2,
    shadowColor:'black',
    shadowOffset:{width:0,height:2},
    shadowRadius:6,
    shadowOpacity:0.25,
  },
  buttonText:{
    color:'#434d28',
    textAlign:'center',
    fontWeight:'600',
  },
  pressed:{
    opacity:0.75,
  }
});