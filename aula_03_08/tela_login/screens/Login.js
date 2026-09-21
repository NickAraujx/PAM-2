import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';


export default function Login({ navigation }) {

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        Login
      </Text>

      <Text style={styles.texto}>
        Digite seu e-mail
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
      />

      <Text style={styles.texto}>
        Senha
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Home')}
      >

        <Text style={styles.textoBotao}>
          Entrar
        </Text>

      </TouchableOpacity>

    </View>

  );

}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30
  },

  texto: {
    fontSize: 16,
    marginBottom: 5
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15
  },

  botao: {
    backgroundColor: '#007AFF',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10
  },

  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }

});