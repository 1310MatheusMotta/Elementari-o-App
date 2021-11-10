import React from "react";
import styles from "../../styles/styles_content";
import conn from "../../services/connection";
import { useState, useEffect } from "react";
import {View, Text, TouchableOpacity, FlatList, ImageBackground, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/core";


export default function InApp(){

    const[name, setName] = useState('');

      async function ConnectInApp(){
                
        // console.log('teste');
        const response = await conn.get('alunos');
        setName(response.data);
      }

      useEffect(()=>{
          ConnectInApp();

      }, [name]);

      
      ////navegação////

      const navigation = useNavigation();

      function naviToHome(){
        navigation.navigate('Homepage');
      }

  return (
    
    <View style={styles.container}>
              <TextInput style={styles.txtInp} placeholder="Filtrar alunos"></TextInput>
              <FlatList
              
                style={styles.list}
                data={name}
                keyExtractor={name=>(name.id_alu)}
                showsVerticalScrollIndicator={false}

                renderItem={({item:name})=>(

                  <View style={styles.itemList}>
                    <Text>Nome: {name.nome_alu}</Text>
                    <Text>Número: {name.numero_alu}</Text>
                  </View>
                )}
              />

              <TouchableOpacity onPress={naviToHome}>
                <Text>Voltar</Text>
              </TouchableOpacity>
        </View>
  );
}