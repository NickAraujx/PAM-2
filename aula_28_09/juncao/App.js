import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from './screens/Inicio';
import Tarefas from './screens/Tarefas';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator>

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
            title: 'Minhas Tarefas'
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}