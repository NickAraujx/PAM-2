
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
  createUserWithEmailAndPassword
} from 'firebase/auth';

import {
  doc,
  setDoc
} from 'firebase/firestore';

import { auth, db } from '../../firebase/firebase';

import styles from '../../styles/styles';

export default function Cadastro({ navigation }) {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  async function cadastrar() {

    if (!nome.trim() || !email.trim() || !senha || !confirmarSenha) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    if (senha.length < 6) {
      Alert.alert('Atenção', 'A senha precisa ter pelo menos 6 caracteres.');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Atenção', 'As senhas não são iguais.');
      return;
    }

    try {

      const usuarioCriado = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        senha
      );

      const uid = usuarioCriado.user.uid;

      await setDoc(doc(db, 'usuarios', uid), {
        nome: nome.trim(),
        email: email.trim()
      });

      navigation.replace('Inicio');

    } catch (error) {

      console.log(error);

      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Erro', 'Este e-mail já está cadastrado.');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('Erro', 'Digite um e-mail válido.');
      } else {
        Alert.alert('Erro', 'Não foi possível realizar o cadastro.');
      }
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.authContainer}>

      <View style={styles.authCard}>

        <Text style={styles.authLogo}>StudyFlow</Text>

        <Text style={styles.authTitulo}>
          Crie sua conta
        </Text>

        <Text style={styles.authDescricao}>
          Organize seus estudos de maneira simples.
        </Text>

        <Text style={styles.authLabel}>Nome completo</Text>

        <TextInput
          style={styles.authInput}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />

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
          placeholder="Mínimo de 6 caracteres"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <Text style={styles.authLabel}>Confirmar senha</Text>

        <TextInput
          style={styles.authInput}
          placeholder="Digite a senha novamente"
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.authBotao}
          onPress={cadastrar}
        >
          <Text style={styles.authBotaoTexto}>
            Criar minha conta
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.authLink}>
            Já possui uma conta? Entrar
          </Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}
