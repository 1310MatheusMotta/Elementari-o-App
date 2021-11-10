import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AppRoutes = createNativeStackNavigator();

import HomeApp from "./pages/home/home";
import InApp from "./pages/contents/list";

export default function Routes(){

    return(

        <NavigationContainer>
            <AppRoutes.Navigator>
                <AppRoutes.Screen name='Homepage' component={HomeApp}></AppRoutes.Screen>
                <AppRoutes.Screen name='Página de Alunos' component={InApp}></AppRoutes.Screen>
            </AppRoutes.Navigator>
        </NavigationContainer>
    );
}