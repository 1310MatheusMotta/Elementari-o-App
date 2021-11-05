import React from "react";
import {View, Text, TouchableOpacity, ImageBackground, Image} from "react-native";
import { useNavigation } from "@react-navigation/core";
import styles from "../../styles/styles_home";

export default function HomeApp(){

    const navigation = useNavigation();

    function naviToInApp(){
        navigation.navigate('Página de Alunos');
    }

    return(

        <View>
            <ImageBackground source={require('../../images/bg.jpg')} style={styles.imgBg}>

                <Image source={require('../../images/atomo.png')} style={styles.atomLogo}></Image>
                <Text style={styles.textTitle}>O que é o Elementari-o?</Text>

                <Text style={styles.textDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta nunc eget aliquet vehicula. 
                      Nam eu nibh a mauris vulputate eleifend. 
                      Aliquam finibus purus vel erat tincidunt tincidunt. Praesent non tempus nibh. 
                      Donec sagittis mi eu ultrices ornare. Donec vel eros tortor. Maecenas in magna eget dui varius maximus ac dignissim libero.
                </Text>

            </ImageBackground>

            <View style={styles.viewSec}>

                <Text style={styles.textTitleSec}>O que será possível fazer?</Text>
                <Text style={styles.textSecDesc}>Aqui o professor poderá pesquisar por alunos cadastrados, que junto à eles virão suas notas
                      de cada bimestre, ou trimestre!
                      Para fazer isso, clique no botão abaixo para ver a lista:
                </Text>

                <TouchableOpacity onPress={naviToInApp} style={styles.btnConsult}>
                    <Text style={styles.textBtn}>Consultar</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.textAutors}>Autores</Text>
            </View>

        </View>

    );
}