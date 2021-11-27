import React from "react";
import styles from "../../styles/styles_content";
import conn from "../../services/connection";
import { useState, useEffect } from "react";
import {View, Text, TouchableOpacity, FlatList, ImageBackground, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/core";


export default function InApp(){

  const[alunos, setAlunos] = useState([])
  
  async function getAll(){
    const response = await conn.get('alunos')
    setAlunos(response.data)
  }

  useEffect(()=>{
    getAll()
  }, [])

  const[nomeAlunos, setNomeAlunos] = useState('')

  async function FilterNames(){
    const response = await conn.get('alunos/' + nomeAlunos)
    setAlunos(response.data)
  }

  useEffect(()=>{
    FilterNames()
  }, [nomeAlunos])


      //navegação

      const navigation = useNavigation();

      function naviToHome(){
        navigation.navigate('Homepage');
      }

  return (
    
        <View>
          <ImageBackground source={require('../../icons/bg.jpg')} style={styles.bgList}>

          <TextInput style={styles.txtInp} placeholder="Pesquisar por alunos" onChangeText={(v)=>setNomeAlunos((v))}></TextInput>

              <FlatList

                style={styles.list}
                data={alunos}
                keyExtractor={alunos=> String(alunos.id_alu)}
                showsVerticalScrollIndicator={false}

                renderItem={({item:alunos})=>(

                  <View style={styles.itemList}>
                    <Text>Aluno: {alunos.nome_alu}</Text>
                    <Text>Número: {alunos.numero_alu}</Text>
                  </View>

                )}
              />

              <TouchableOpacity onPress={naviToHome} style={styles.btnBack}>
                <Text>Voltar</Text>
              </TouchableOpacity>
          </ImageBackground>
        </View>
  );
}