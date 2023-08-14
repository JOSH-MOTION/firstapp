import React, { Component } from "react";
import {Text,View,StyleSheet,TextInput,Button, TouchableOpacity, ScrollView,FlatList,styles} from "react-native";
import ContactsScreen from "./ContactsScreen";
import LoginScreen from "./LoginScreen";
import Contact from "./components/Contact";

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      email:"",
      password:"",
      names:['ama','kofi','joshua','ddd']
    }
  }
  render(){
    return(
      <View >

    <ContactsScreen /> 
    
    </View>
         
    );
  }
 
}







export default  App;