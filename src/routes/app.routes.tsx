import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Mycourses from '../pages/Mycourses';

const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Mycourses" component={Mycourses} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default AppRoutes;