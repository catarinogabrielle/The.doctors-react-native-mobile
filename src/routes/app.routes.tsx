import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Mycourses from '../pages/Mycourses';
import Material from '../pages/Material';
import Course from '../pages/Course';

import Colors from '../../constants/Colors';
const ColorTheme = Colors['Theme'];

export type StackParamsList = {
  Home: undefined;
  Mycourses: undefined;
  Material: undefined;
  Course: undefined;
};

const Stack = createNativeStackNavigator<StackParamsList>();

function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />

      <Stack.Screen name="Mycourses" options={{
        title: 'Meus Cursos',
        headerStyle: {
          backgroundColor: `${ColorTheme.Branco}`,
        },
        headerTintColor: `${ColorTheme.Cinza}`,
        headerTitleStyle: {
          fontWeight: 'normal',
        },
      }} component={Mycourses} />

      <Stack.Screen name="Material" options={{
        title: 'Materiais Disponiveis',
        headerStyle: {
          backgroundColor: `${ColorTheme.Branco}`,
        },
        headerTintColor: `${ColorTheme.Cinza}`,
        headerTitleStyle: {
          fontWeight: 'normal',
        },
      }} component={Material} />

      <Stack.Screen name="Course" options={{
        title: 'Curso',
        headerStyle: {
          backgroundColor: `${ColorTheme.Branco}`,
        },
        headerTintColor: `${ColorTheme.Cinza}`,
        headerTitleStyle: {
          fontWeight: 'normal',
        },
      }} component={Course} />
    </Stack.Navigator>
  )
}

export default AppRoutes;