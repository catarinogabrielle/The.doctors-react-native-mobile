import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

import Colors from './constants/Colors';
const ColorTheme = Colors['Theme'];

import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor={ColorTheme.Verde} barStyle="light-content" translucent={false} />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}