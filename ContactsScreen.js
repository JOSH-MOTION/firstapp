import React from 'react'
import {View, FlatList, Text} from 'react-native';
import Contact from "./components/Contact";

export default function ContactsScreen() {
    const contacts = [
        {name: "joshua", number: "030494 8488 94"},
        {name: "Daniel", number: "+256 849839 989"},
        {name: "Caleb", number: "0209384744"},
        {name: "Yayra", number: "0548083399"},
        {name: "Solomon", number: "027777889"},
        {name: "Dady", number: "0242403450"},
        {name: "Hower", number: "0249873450"},
        {name: "Dayo", number: "0240023450"},
        
        
    ]


  return (
    <View>
        <FlatList 
        data={contacts}
        renderItem={({item})=>{
            return <Contact name={item.name} phone={item.number}/>
          }}
        keyExtractor={(item)=>item.number}
        />
            
     

    </View>
  )
}
