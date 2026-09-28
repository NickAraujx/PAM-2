import React, { useState } from 'react';

import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity
} from 'react-native';

import styles from '../styles/styles';

export default function Tarefas() {

  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {

    if (tarefa.trim() === '') {
      return;
    }

    const novaTarefa = {
      id: Date.now().toString(),
      nome: tarefa,
      concluida: false
    };

    setTarefas([
      ...tarefas,
      novaTarefa
    ]);

    setTarefa('');
  }

  function concluirTarefa(id) {

    const listaAtualizada = tarefas.map((item) => {

      if (item.id === id) {

        return {
          ...item,
          concluida: !item.concluida
        };

      }

      return item;

    });

    setTarefas(listaAtualizada);
  }

  function removerTarefa(id) {

    const listaAtualizada = tarefas.filter(
      (item) => item.id !== id
    );

    setTarefas(listaAtualizada);
  }

  return (

    <ScrollView
      contentContainerStyle={styles.tarefasContainer}
    >

      <Text style={styles.tarefasTitulo}>
        Minhas tarefas
      </Text>

      <Text style={styles.tarefasDescricao}>
        Adicione suas atividades e organize sua rotina.
      </Text>

      <View style={styles.inputContainer}>

        <TextInput
          style={styles.input}
          placeholder="Digite uma nova tarefa..."
          placeholderTextColor="#9CA3AF"
          value={tarefa}
          onChangeText={setTarefa}
        />

        <Button
          title="Adicionar"
          color="#2563EB"
          onPress={adicionarTarefa}
        />

      </View>

      <Text style={styles.listaTitulo}>
        Suas atividades
      </Text>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}

        ListEmptyComponent={

          <View style={styles.vazio}>

            <Text style={styles.vazioEmoji}>
              📝
            </Text>

            <Text style={styles.vazioTitulo}>
              Nenhuma tarefa ainda
            </Text>

            <Text style={styles.vazioTexto}>
              Adicione uma tarefa para começar.
            </Text>

          </View>

        }

        renderItem={({ item }) => (

          <View
            style={[
              styles.tarefaCard,
              item.concluida && styles.tarefaConcluida
            ]}
          >

            <TouchableOpacity
              style={styles.tarefaArea}
              onPress={() => concluirTarefa(item.id)}
            >

              <View style={styles.check}>

                <Text style={styles.checkTexto}>
                  {item.concluida ? '✓' : ''}
                </Text>

              </View>

              <Text
                style={[
                  styles.tarefaTexto,
                  item.concluida && styles.textoConcluido
                ]}
              >
                {item.nome}
              </Text>

            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoExcluir}
              onPress={() => removerTarefa(item.id)}
            >

              <Text style={styles.textoExcluir}>
                Excluir
              </Text>

            </TouchableOpacity>

          </View>

        )}

      />

    </ScrollView>
  );
}