import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.titulo}>React Native</Text>

      <Text style={styles.subtitulo}>
        Desenvolva aplicativos Android e iOS utilizando JavaScript e React.
      </Text>

      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        style={styles.logo}
      />

      <Text style={styles.tituloSecao}>Principais Recursos</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>⚡ Alta Performance</Text>
        <Text style={styles.cardTexto}>
          Aplicativos rápidos com componentes nativos.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>📱 Multiplataforma</Text>
        <Text style={styles.cardTexto}>
          Um único código para Android e iOS.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>🚀 Hot Reload</Text>
        <Text style={styles.cardTexto}>
          Veja as alterações em tempo real durante o desenvolvimento.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>💙 Comunidade</Text>
        <Text style={styles.cardTexto}>
          Milhares de bibliotecas e uma comunidade ativa.
        </Text>
      </View>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>
          Começar a Desenvolver
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: '#F4F8FF',
    alignItems: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0A2B71',
    marginTop: 20,
  },

  subtitulo: {
    textAlign: 'center',
    fontSize: 16,
    color: '#555',
    marginTop: 10,
    marginBottom: 25,
  },

  logo: {
    width: 120,
    height: 120,
    marginBottom: 25,
  },

  tituloSecao: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2A61D7',
    alignSelf: 'flex-start',
    marginBottom: 15,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },

  cardTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0A2B71',
    marginBottom: 8,
  },

  cardTexto: {
    fontSize: 15,
    color: '#555',
  },

  botao: {
    width: '100%',
    backgroundColor: '#2A61D7',
    padding: 18,
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 30,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

});