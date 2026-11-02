
import React from 'react';

import {
  NavigationContainer
} from '@react-navigation/native';

import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';

import Login from './screens/login/Login';
import Cadastro from './screens/cadastro/Cadastro';
import Inicio from './screens/Inicio';
import Tarefas from './screens/Tarefas';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2563EB'
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          contentStyle: {
            backgroundColor: '#F3F6FB'
          }
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ title: 'Criar conta' }}
        />

        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ title: 'StudyFlow' }}
        />

        <Stack.Screen
          name="Tarefas"
          component={Tarefas}
          options={{ title: 'Minhas tarefas' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
