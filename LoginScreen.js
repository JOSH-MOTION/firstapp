import React, { Component } from 'react'
import { View,ScrollView ,Text,TextInput,TouchableOpacity, StyleSheet } from 'react-native'




export default class LoginScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
 
          <View style={styles.loginTextContainer}>
             <Text style={styles.loginText}>Log in</Text>
          </View>

          <View>
             <TextInput style={styles.input} 
             placeholderTextColor='#7c7c7d'
             placeholder='Username' />
             <TextInput style={styles.input} 
              placeholderTextColor='#7c7c7d'
              secureTextEntry={true}
             placeholder='Password' />
             <Text style={styles.forgotpass}>Forgot Password?</Text>
          </View>
          <View>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Log in</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.noAccount}>
              <Text style={styles.noAccountText} >Don't have an account</Text>
              <Text style={styles.signupText}>Sign up</Text>
          </View>
      </ScrollView>
    )
  }
}


const styles=StyleSheet.create({

container:{
    marginHorizontal: 50,
    marginVertical:50
},
loginText:{
    fontSize: 50,
    color:'#7f03fc',
    fontWeight:'600'
},
loginTextContainer:{
    marginBottom:30
}, 
input:{
    borderBottomWidth:1,
    borderBottomColor:'#7f03fc',
    fontSize: 15, 
    height: 40,
    marginTop: 20
},
forgotpass:{
    alignSelf:"flex-end",
    marginVertical: 6,
    color: '#0232b5'
},
buttonContainer:{
    height: 50,
    backgroundColor:'#7f03fc',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10,
    marginVertical: 40
},
buttonText:{
    color: 'white',
    fontSize:20,
    fontWeight:'700'
},
noAccount:{
    flexDirection:'row',
    justifyContent:'center'
},
noAccountText:{
    marginRight:10,
    fontSize: 13
},
signupText:{
fontSize: 13,
color:'#7f03fc'
}

})