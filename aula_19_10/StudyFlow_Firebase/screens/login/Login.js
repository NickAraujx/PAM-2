
import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';

import {
  signInWithEmailAndPassword
} from 'firebase/auth';

import { auth } from '../../firebase/firebase';

import styles from '../../styles/styles';

export default function Login({ navigation }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function fazerLogin() {

    if (!email.trim() || !senha) {
      Alert.alert('Atenção', 'Preencha o e-mail e a senha.');
      return;
    }

    try {

      await signInWithEmailAndPassword(
        auth,
        email.trim(),
        senha
      );

      navigation.replace('Inicio');

    } catch (error) {

      console.log(error);

      if (
        error.code === 'auth/invalid-credential' ||
        error.code === 'auth/user-not-found' ||
        error.code === 'auth/wrong-password'
      ) {
        Alert.alert('Erro', 'E-mail ou senha incorretos.');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('Erro', 'Digite um e-mail válido.');
      } else {
        Alert.alert('Erro', 'Não foi possível realizar o login.');
      }
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.authContainer}>

      <View style={styles.authCard}>

        <Text style={styles.authLogo}>StudyFlow</Text>

        <Text style={styles.authTitulo}>
          Bem-vindo de volta!
        </Text>

        <Text style={styles.authDescricao}>
          Entre na sua conta e continue seus estudos.
        </Text>

        <Text style={styles.authLabel}>E-mail</Text>

        <TextInput
          style={styles.authInput}
          placeholder="seuemail@gmail.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.authLabel}>Senha</Text>

        <TextInput
          style={styles.authInput}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.authBotao}
          onPress={fazerLogin}
        >
          <Text style={styles.authBotaoTexto}>
            Entrar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={styles.authLink}>
            Não possui uma conta? Cadastre-se
          </Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}
