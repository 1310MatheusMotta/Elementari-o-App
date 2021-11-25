import React from "react";
import styles from "../../styles/styles_content";
import conn from "../../services/connection";
import { useState, useEffect } from "react";
import {View, Text, TouchableOpacity, FlatList, ImageBackground, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/core";


export default function InApp(){

   const[classmates, setClassmates] = useState('');
  //  const[otherInfo, setOtherInfo] = useState('');
   const[classmatesName, setClassmatesName] = useState('');
  
      async function getClassmates(){
        const response = await conn.get('alunos')
        setClassmates(response.data)
      }

      async function getClassmatesnome(){
        const response = await conn.get('alunosfiltro' + classmatesName )
        setClassmates(response.data)
      }
      

      useEffect(()=>{
        getClassmates();
      }, [])

      // async function GetOthers(){
      //   const response = await conn.get('instituicao')
      //   setOtherInfo(response.data)
      // }

      // useEffect(()=>{
      //   GetOthers()
      // }, [])

      // async function getNames(){
      //   const response = await conn.get('alunos' + classmatesName)
      //   setClassmatesName(response.data)
      // }

      // useEffect(()=>{
      //   getNames();
      // }, [classmatesName])

      ////navegação////

      const navigation = useNavigation();

      function naviToHome(){
        navigation.navigate('Homepage');
      }

  return (
    
        <View>
          <ImageBackground source={require('../../icons/bg.jpg')} style={styles.bgList}>

          <TextInput style={styles.txtInp} placeholder="Pesquisar por alunos" onChangeText={(e)=>{setClassmatesName(e)}}></TextInput>

              <FlatList

                style={styles.list}
                data={classmates}
                keyExtractor={classmates=>(classmates.id_alu)}
                showsVerticalScrollIndicator={false}

                renderItem={({item:classmates})=>(

                  <View style={styles.itemList}>
                    <Text>Aluno: {classmates.nome_alu}</Text>
                    <Text>Número: {classmates.numero_alu}</Text>
                    <Text>Instituição: </Text>
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