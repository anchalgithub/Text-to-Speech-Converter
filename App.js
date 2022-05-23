import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech'; 
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class App extends React.Component{
constructor(){
super();
this.state={
word:''
}
}


speak=()=>{
var thingToSay = this.state.word;
this.state.word===''
? alert('Make sure you enter a word') 
:Speech.speak(thingToSay);
}
/*If the value is empty, then display this alert, but if not, then speak the word.*/

render(){
return(
<View>
<SafeAreaProvider>

<Header backgroundColor={"#d7e2f7"}
centerComponent={{
text:"Text to Speech Converter",
style:{color:"black", fontSize:15, fontWeight:'bold'}
}}/>

<Text style = {styles.enterText}> Enter </Text>
<TextInput
style={styles.input}
onChangeText={(text)=>{
this.setState({word:text});
}}
value={this.state.text}
/> 

<View>
<TouchableOpacity style = {styles.button} onPress={this.speak}>
<Text style = {styles.hearText}> Hear </Text>
</TouchableOpacity>
</View>

</SafeAreaProvider>
</View>
)
}

}


const styles = StyleSheet.create({
enterText:{
fontSize:20,
textAlign:"center",
marginTop:100
},

input:{
marginTop: 25,
width: "80%",
alignSelf: "center",
height: 40,
textAlign: "center",
borderWidth: 2,
borderRadius:10
},

button:{
textAlign: "center",
backgroundColor: "#d7e2f7",
marginTop: 40,
borderRadius: 20,
width: "40%",
alignSelf: "center",
height: 35,
},

hearText:{
fontSize: 20,
marginTop: 3,
textAlign: "center",
alignSelf: "center",
}
});
