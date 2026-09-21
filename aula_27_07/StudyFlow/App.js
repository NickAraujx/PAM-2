import React, { useState } from 'react';
import {
  ScrollView,
  Image,
  Text,
  TextInput,
  Button,
  StyleSheet,
  View
} from 'react-native';

export default function App() {
  const [materia, setMateria] = useState('');
  const [tarefa, setTarefa] = useState('');

  const adicionarTarefa = () => {
    alert(
      'Tarefa adicionada!\n\nMatéria: ' +
      materia +
      '\nTarefa: ' +
      tarefa
    );
  };

  return (
    <ScrollView style={styles.container}>

      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'
        }}
        style={styles.imagem}
      />

      <Text style={styles.titulo}>
        StudyFlow
      </Text>

      <Text style={styles.subtitulo}>
        Organize seus estudos de forma simples!
      </Text>

      <View style={styles.card}>

        <Text style={styles.label}>
          Matéria
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite a matéria"
          value={materia}
          onChangeText={setMateria}
        />

        <Text style={styles.label}>
          Tarefa
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite o que precisa estudar"
          value={tarefa}
          onChangeText={setTarefa}
        />

        <Button
          title="Adicionar tarefa"
          onPress={adicionarTarefa}
        />

      </View>

      <Text style={styles.rodape}>
        Mantenha seus estudos organizados e alcance seus objetivos!
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F6FC',
    padding: 20,
  },

  imagem: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 15,
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1E3A8A',
  },

  subtitulo: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginTop: 8,
    marginBottom: 25,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 8,
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#B8C7E0',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#F9FAFC',
  },

  rodape: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
    marginTop: 25,
    marginBottom: 30,
  },
});
