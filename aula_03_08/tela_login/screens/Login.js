import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';

export default function Login({ navigation }) {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>

      <StatusBar style="light" />

      <Image
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        style={styles.logo}
      />

      <Text style={styles.titulo}>Bem-vindo!</Text>

      <Text style={styles.subtitulo}>
        Faça login para continuar
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity>
        <Text style={styles.esqueciSenha}>
          Esqueci minha senha
        </Text>
      </TouchableOpacity>

      <View style={styles.botao}>
        <Button
          title="Entrar"
          color="#2A61D7"
          onPress={() => navigation.navigate('Home')}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#0A2B71",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  logo: {
    width: 110,
    height: 110,
    marginBottom: 25,
  },

  titulo: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
  },

  subtitulo: {
    color: "#D9D9D9",
    marginBottom: 40,
    fontSize: 16,
  },

  input: {
    width: "100%",
    height: 55,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 18,
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },

  esqueciSenha: {
    color: "#BFD4FF",
    marginBottom: 30,
    fontSize: 14,
    alignSelf: "flex-end",
  },

  botao: {
    width: "100%",
    borderRadius: 12,
    overflow: "hidden",
  },

});