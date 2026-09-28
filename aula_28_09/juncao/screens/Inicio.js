import React from 'react';

import {
  View,
  Text,
  Image,
  Button,
  ScrollView
} from 'react-native';

import styles from '../styles/styles';

export default function Inicio({ navigation }) {

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135755.png'
        }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>
        StudyFlow
      </Text>

      <Text style={styles.texto}>
        Organize seus estudos e suas tarefas em um só lugar.
      </Text>

      <Button
        title="Minhas tarefas"
        onPress={() => navigation.navigate('Tarefas')}
      />

    </ScrollView>
  );
}