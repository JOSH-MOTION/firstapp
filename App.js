import React, { Component } from "react";
import {Text,View,StyleSheet,TextInput,Button, TouchableOpacity, ScrollView,FlatList} from "react-native";
import LoginScreen from "./LoginScreen";

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      email:"",
      password:"",
      names:['ama','kofi','joshua','ddd','jdjdj','djdjdj','jdjdjjd','ama','kofi','joshua','ddd','jdjdj','djdjdj','jdjdjjd','ama','kofi','joshua','ddd','jdjdj','djdjdj','jdjdjjd','ama','kofi','joshua','ddd','jdjdj','djdjdj','jdjdjjd','ama','kofi','joshua','ddd','jdjdj','djdjdj','jdjdjjd','ama','kofi','joshua','ddd','jdjdj','djdjdj','jdjdjjd','ama','kofi','joshua','ddd','jdjdj','djdjdj','jdjdjjd','ama','kofi','joshua','ddd','jdjdj','djdjdj','jdjdjjd',]
    }
  }
  render(){
    return (
      <View styles={styles.container}>
      <LoginScreen />

        {/* <TextInput style={styles.input}  
        placeholder="email"
        autoCapitalize="none"
        autoCorrect={false}
        value={this.state.email}
        onChangeText={(email)=>{
          this.setState({email})
        }}
        /> 

        <TextInput style={styles.input}  
        placeholder="password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        value={this.state.password}
        onChangeText={(password)=>{
          this.setState({password})
        }}
        
        />
      <TouchableOpacity  style={styles.buttonContainer}>
        <Text style={styles.button}>LOGIN</Text>
      </TouchableOpacity> */}
        </View>
         
    );
  }
 
}

  

const styles = StyleSheet.create({
  container: {
    marginTop:100
  },
input:{
  backgroundColor: "yellow",
  height: 60,
  marginLeft:10,
  marginBottom: 15
},
button:{
color: "white",
fontSize: 12
},
buttonContainer:{
marginHorizontal: 20,
backgroundColor:"blue",
height: 30,
justifyContent:"center",
alignItems:"center",
borderRadius:5
}
});

export default  App