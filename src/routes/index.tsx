import React, { useContext } from "react";
import { View, ActivityIndicator } from 'react-native';

import Colors from '../../constants/Colors';
const ColorTheme = Colors['Theme'];

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import { AuthContext } from '../contexts/AuthContext';

function Routes() {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{
        flex: 1,
        backgroundColor: ColorTheme.Branco,
        justifyContent: 'center',
        alignContent: 'center'
      }}>
        <ActivityIndicator size={60} color={ColorTheme.Cinza} />
      </View>
    )
  }

  return (
    isAuthenticated ? <AppRoutes /> : <AuthRoutes />
  )
}

export default Routes;