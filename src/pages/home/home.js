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

                                    <Text style={styles.textDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta nunc eget aliquet vehicula. 
                                        Nam eu nibh a mauris vulputate eleifend. 
                                        Aliquam finibus purus vel erat tincidunt tincidunt. Praesent non tempus nibh. 
                                        Donec sagittis mi eu ultrices ornare. Donec vel eros tortor. Maecenas in magna eget dui varius maximus ac dignissim libero.
                                    </Text>

                        </ImageBackground>

                        <View style={styles.viewSec}>

                            <Text style={styles.textTitleSec}>O que será possível fazer?</Text>
                            <Text style={styles.textSecDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta nunc eget aliquet vehicula. 
                                Nam eu nibh a mauris vulputate eleifend. 
                                Aliquam finibus purus vel erat tincidunt tincidunt. Praesent non tempus nibh:
                            </Text>

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