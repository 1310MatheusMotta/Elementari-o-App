import React from "react";
import {View, Text, TouchableOpacity, ImageBackground, Image, ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/core";
import styles from "../../styles/styles_home";

export default function HomeApp(){

    const navigation = useNavigation();

    function naviToInApp(){
        navigation.navigate('Página de Alunos');
    }

    return(
            <ScrollView>
                        <View>
                            
                        <ImageBackground source={require('../../icons/bg.jpg')} style={styles.imgBg}>

                            <Image source={require('../../icons/atomo.png')} style={styles.atomLogo}></Image>

                                <Text style={styles.textTitle}>O que é o Elementari-o?</Text>

                                    <Text style={styles.textDesc}>O Elementari-o nada mais é que uma plataforma criada a fim de facilitar o 
                                    trabalho dos professores, em relação ao controle de alunos, turmas, e, principalmente, suas notas.
                                    Neste aplicativo desenvolvido por nós, infelizmente as opções de uso não serão as mesmas que a versão Desktop,
                                    mas garatimos que a facilidade para o uso será a mesma!</Text>

                        </ImageBackground>

                        <View style={styles.viewSec}>

                            <Text style={styles.textTitleSec}>O que será possível fazer?</Text>
                            <Text style={styles.textSecDesc}>O aplicativo irá disponibilizar o serviço de consulta por lista, ou seja,
                            o professor poderá consultar seus alunos, acompanhados de suas médias, através de uma barra de pesquisas. Para 
                            testar esta funcionalidade, cllique no botão abaixo, e começe a procura:</Text>

                            <TouchableOpacity onPress={naviToInApp} style={styles.btnConsult}>
                                <Text style={styles.textBtn}>Consultar</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={styles.textAutors}>Autores</Text>

                            <Image style={styles.imgAutors} source={require('../../icons/tonin.png')}></Image>
                            <Text>Antonio Sala Barbosa</Text>

                            <Image style={styles.imgAutors} source={require('../../icons/danilo.png')}></Image>
                            <Text>Danilo do Carmo Oliveira</Text>

                            <Image style={styles.imgAutors} source={require('../../icons/luis.png')}></Image>
                            <Text>Luís Filipe dos Santos David</Text>

                            <Image style={styles.imgAutors} source={require('../../icons/matheus.png')}></Image>
                            <Text>Matheus Domingues Motta</Text>
                            
                        </View>

                    </View>
            </ScrollView>
    );
}