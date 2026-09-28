import React, { useState } from 'react';

import {
  Text,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  View,
  Pressable
} from 'react-native';

import styles from '../styles/styles';

export default function Tarefas() {

  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {

    if (tarefa.trim() !== '') {

      setTarefas([
        ...tarefas,
        {
          id: Date.now().toString(),
          nome: tarefa
        }
      ]);

      setTarefa('');
    }
  }

  function removerTarefa(id) {
    setTarefas(tarefasAtuais => tarefasAtuais.filter(item => item.id !== id));
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.titulo}>
        Minhas tarefas
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite uma tarefa"
        value={tarefa}
        onChangeText={setTarefa}
      />

      <Button
        title="Adicionar tarefa"
        onPress={adicionarTarefa}
      />

      <Text style={styles.subtitulo}>
        Lista de tarefas:
      </Text>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (

          <View style={styles.item}>

            <Text style={styles.itemTexto}>
              • {item.nome}
            </Text>

            <Pressable
              style={styles.botaoRemover}
              onPress={() => removerTarefa(item.id)}
              accessibilityRole="button"
              accessibilityLabel={`Remover tarefa ${item.nome}`}
            >
              <Text style={styles.botaoRemoverTexto}>X</Text>
            </Pressable>

          </View>

        )}
      />

    </ScrollView>
  );
}