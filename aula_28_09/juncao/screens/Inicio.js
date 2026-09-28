import React from 'react';

import {
  ScrollView,
  View,
  Image,
  Text,
  Button
} from 'react-native';

import styles from '../styles/styles';

export default function Inicio({ navigation }) {

  return (

    <ScrollView
      contentContainerStyle={styles.container}
    >

      <View style={styles.cardPrincipal}>

        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135755.png'
          }}
          style={styles.imagem}
        />

        <Text style={styles.titulo}>
          Olá! 👋
        </Text>

        <Text style={styles.nomeApp}>
          StudyFlow
        </Text>

        <Text style={styles.descricao}>
          Organize seus estudos, acompanhe suas tarefas
          e mantenha sua rotina em dia.
        </Text>

      </View>

      <View style={styles.cardInfo}>

        <Text style={styles.infoTitulo}>
          📚 Organize seus estudos
        </Text>

        <Text style={styles.infoTexto}>
          Adicione suas tarefas e acompanhe tudo
          de forma simples e organizada.
        </Text>

      </View>

      <View style={styles.botaoContainer}>

        <Button
          title="Ver minhas tarefas"
          color="#2563EB"
          onPress={() => navigation.navigate('Tarefas')}
        />

      </View>

    </ScrollView>
  );
}