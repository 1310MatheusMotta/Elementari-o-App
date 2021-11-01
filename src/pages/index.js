import React from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/styles';

export default function InApp(){

    return(

        <View style={styles.container}>

            <TouchableOpacity>
                <Text>Consultar</Text>
            </TouchableOpacity>

        </View>
    );
}