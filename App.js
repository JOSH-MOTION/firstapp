import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

function App() {
  return (
    <View styles={styles.conntainer}>
      <Image source={require("./assets/profile.jpg")} style={styles.image} />
      <View style={styles.detailContainer}>
        <Text style={{ fontWeight: 300, color: "#9d9d9e" }}>School</Text>
        <TextInput>Progressive international</TextInput>
      </View>
      <View style={styles.detailContainer}>
        <Text style={{ fontWeight: 300, color: "#9d9d9e" }}>Email Address</Text>
        <Text style={{}}>joshuadoe168@gmail.com</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={{ fontWeight: 300, color: "#1968e6" }}>Name</Text>
        <Text style={{ borderBottomWidth: 1 }}>JOSHUA DOE</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={{ fontWeight: 300, color: "#1968e6" }}>Nick Name</Text>
        <Text style={{ borderBottomWidth: 1 }}>Josh_Motions</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={{ fontWeight: 300, color: "#1968e6" }}>
          Emergency contact
        </Text>
        <Text style={{ borderBottomWidth: 1,  }}>+233 242403450</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Update profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  conntainer: {
    flex: 1,
  },

  image:{
    width:150,
     height:150,
       marginBottom:10,
      margin:40,
      borderRadius: 70,
      alignSelf: "center"
     },

  detailContainer: {
    flexDirection: "column",
    marginVertical: 7,
    marginLeft: 20,
    paddingHorizontal: 6,
    
  },
 
  button: {
    backgroundColor: "#1968e6",
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
    
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  // button: {
  //   margin: 0,
  //   justifyContent: "center",
  //   backgroundColor: "blue",
  //   borderColor: "blue",
  //   color: "green",
  //   border: 5,
  // },
});

export default App;