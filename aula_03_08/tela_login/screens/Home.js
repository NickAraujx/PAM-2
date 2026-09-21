import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from 'react-native';


export default function Home() {

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

    setTarefas([...tarefas, novaTarefa]);

    setTarefa('');
  }


  function concluirTarefa(id) {

    const listaAtualizada = tarefas.map(item => {

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


  function limparTarefas() {

    setTarefas([]);

  }


  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        Minha Lista
      </Text>


      <TextInput
        style={styles.input}
        placeholder="Digite uma tarefa"
        value={tarefa}
        onChangeText={setTarefa}
      />


      <TouchableOpacity
        style={styles.botao}
        onPress={adicionarTarefa}
      >

        <Text style={styles.textoBotao}>
          Adicionar
        </Text>

      </TouchableOpacity>


      <Text style={styles.contador}>
        Tarefas: {tarefas.length}
      </Text>


      <FlatList
        data={tarefas}

        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (

          <TouchableOpacity
            style={styles.tarefa}
            onPress={() => concluirTarefa(item.id)}
          >

            <Text
              style={
                item.concluida
                  ? styles.tarefaConcluida
                  : styles.tarefaTexto
              }
            >

              {item.concluida ? '✓ ' : '○ '}

              {item.nome}

            </Text>

          </TouchableOpacity>

        )}
      />


      <TouchableOpacity
        style={styles.botaoLimpar}
        onPress={limparTarefas}
      >

        <Text style={styles.textoBotao}>
          Limpar tarefas
        </Text>

      </TouchableOpacity>

    </View>

  );

}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center'
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 10
  },

  botao: {
    backgroundColor: '#007AFF',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15
  },

  botaoLimpar: {
    backgroundColor: '#555',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15
  },

  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },

  contador: {
    fontSize: 18,
    marginBottom: 10
  },

  tarefa: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 8
  },

  tarefaTexto: {
    fontSize: 17
  },

  tarefaConcluida: {
    fontSize: 17,
    textDecorationLine: 'line-through'
  }

});