import React from "react";
import styles from "../../../styles/styles_content";
import conn from "../../../services/conn";
import { useState, useEffect } from "react";
import {View, Text, TouchableOpacity, FlatList} from "react-native";
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
        navigation.navigate('home');
      }

  return (
    
    <View style={styles.container}>
            <Text>Buscar alunos</Text>
            <FlatList
            
              style={styles.list}
              data={name}
              keyExtractor={name=>(name.id_alu)}
              showsVerticalScrollIndicator={false}

              renderItem={({item:name})=>(

                <View style={styles.itemList}>
                  <Text>{name.nome_alu}</Text>
                </View>
              )}
            
            />
                <TouchableOpacity onPress={naviToHome}>
                    <Text>Voltar para a Home</Text>
                </TouchableOpacity>
        </View>
  );
}