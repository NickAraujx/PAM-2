import React from 'react';

import {
  NavigationContainer
} from '@react-navigation/native';

import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';

import Inicio from './screens/Inicio';
import Tarefas from './screens/Tarefas';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2563EB'
          },

          headerTintColor: '#FFFFFF',

          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >

        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{
            title: 'StudyFlow'
          }}
        />

        <Stack.Screen
          name="Tarefas"
          component={Tarefas}
          options={{
            title: 'Minhas tarefas'
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}