import React from "react";
import styles from "../../styles/styles_content";
import conn from "../../services/connection";
import { useState, useEffect } from "react";
import {View, Text, TouchableOpacity, FlatList, ImageBackground, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/core";


export default function InApp(){

   const[classmates, setClassmates] = useState('');
  //  const[name, setName] = useState('');

  //     async function GetNames(){
  //       const response = await conn.get('alunos' + name)
  //       setName(response.data);
  //     }

  //     useEffect(()=>{
  //       GetNames();
  //     }, [])

      async function getClassmates(){
        const response = await conn.get('alunos')
        setClassmates(response.data)
      }

      useEffect(()=>{
        getClassmates();
      }, [])
      
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
                data={classmates}
                keyExtractor={classmates=>(classmates.id_alu)}
                showsVerticalScrollIndicator={false}

                renderItem={({item:classmates})=>(

                  <View style={styles.itemList}>
                    <Text>Aluno: {classmates.nome_alu}</Text>
                    <Text>Número: {classmates.numero_alu}</Text>
                  </View>

                )}
              />

              <TouchableOpacity onPress={naviToHome} style={styles.btnBack}>
                <Text>Voltar</Text>
              </TouchableOpacity>
        </View>
  );
}