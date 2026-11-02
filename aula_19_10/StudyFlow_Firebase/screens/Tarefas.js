
import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from 'react-native';

import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore';

import { auth, db } from '../firebase/firebase';

export default function Tarefas() {

  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [mensagem, setMensagem] = useState('');
  const [carregando, setCarregando] = useState(true);

  // CARREGAR TAREFAS DO FIRESTORE

  useEffect(() => {

    const usuario = auth.currentUser;

    if (!usuario) {
      setMensagem('Faça login para visualizar suas tarefas.');
      setCarregando(false);
      return;
    }

    const tarefasRef = collection(
      db,
      'usuarios',
      usuario.uid,
      'tarefas'
    );

    const cancelarInscricao = onSnapshot(
      tarefasRef,
      (snapshot) => {

        const lista = snapshot.docs.map(documento => ({
          id: documento.id,
          ...documento.data()
        }));

        setTarefas(lista);
        setCarregando(false);
      },
      (error) => {
        console.log(error);
        setMensagem('Não foi possível carregar as tarefas.');
        setCarregando(false);
      }
    );

    return () => cancelarInscricao();

  }, []);

  // ADICIONAR OU EDITAR TAREFA

  async function salvarTarefa() {

    if (tarefa.trim() === '') {
      setMensagem('Digite uma tarefa antes de salvar.');
      return;
    }

    const usuario = auth.currentUser;

    if (!usuario) {
      setMensagem('Usuário não autenticado.');
      return;
    }

    try {

      if (editandoId) {

        await updateDoc(
          doc(db, 'usuarios', usuario.uid, 'tarefas', editandoId),
          {
            nome: tarefa.trim()
          }
        );

        setMensagem('Tarefa atualizada com sucesso.');
        setEditandoId(null);

      } else {

        await addDoc(
          collection(db, 'usuarios', usuario.uid, 'tarefas'),
          {
            nome: tarefa.trim(),
            concluida: false
          }
        );

        setMensagem('Tarefa adicionada com sucesso.');
      }

      setTarefa('');

    } catch (error) {

      console.log(error);
      setMensagem('Não foi possível salvar a tarefa.');
    }
  }

  // EDITAR TAREFA

  function editarTarefa(item) {

    setTarefa(item.nome);
    setEditandoId(item.id);
    setMensagem('');
  }

  // CONCLUIR TAREFA

  async function concluirTarefa(item) {

    const usuario = auth.currentUser;

    if (!usuario) return;

    try {

      await updateDoc(
        doc(db, 'usuarios', usuario.uid, 'tarefas', item.id),
        {
          concluida: !item.concluida
        }
      );

    } catch (error) {

      console.log(error);
      setMensagem('Não foi possível atualizar a tarefa.');
    }
  }

  // EXCLUIR TAREFA

  async function removerTarefa(id) {

    const usuario = auth.currentUser;

    if (!usuario) return;

    try {

      await deleteDoc(
        doc(db, 'usuarios', usuario.uid, 'tarefas', id)
      );

      setMensagem('Tarefa excluída com sucesso.');

    } catch (error) {

      console.log(error);
      setMensagem('Não foi possível excluir a tarefa.');
    }
  }

  const concluidas = tarefas.filter(item => item.concluida).length;
  const pendentes = tarefas.length - concluidas;

  return (

    <View style={styles.container}>

      <View style={styles.conteudo}>

        <Text style={styles.titulo}>
          Minhas tarefas
        </Text>

        <Text style={styles.descricao}>
          Organize suas atividades e acompanhe seu progresso.
        </Text>

        <View style={styles.resumo}>

          <View style={styles.resumoCard}>
            <Text style={styles.resumoNumero}>
              {tarefas.length}
            </Text>

            <Text style={styles.resumoTexto}>
              Total
            </Text>
          </View>

          <View style={styles.resumoCard}>
            <Text style={styles.resumoNumero}>
              {pendentes}
            </Text>

            <Text style={styles.resumoTexto}>
              Pendentes
            </Text>
          </View>

          <View style={styles.resumoCard}>
            <Text style={styles.resumoNumero}>
              {concluidas}
            </Text>

            <Text style={styles.resumoTexto}>
              Concluídas
            </Text>
          </View>

        </View>

        <View style={styles.formulario}>

          <Text style={styles.formularioTitulo}>
            {editandoId ? 'Editar tarefa' : 'Nova tarefa'}
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Ex.: Estudar programação"
            placeholderTextColor="#9CA3AF"
            value={tarefa}
            onChangeText={setTarefa}
          />

          <TouchableOpacity
            onPress={salvarTarefa}
            style={styles.botao}
            activeOpacity={0.8}
          >
            <Text style={styles.botaoTexto}>
              {editandoId ? 'Salvar alterações' : '+ Adicionar tarefa'}
            </Text>
          </TouchableOpacity>

          {editandoId && (
            <TouchableOpacity
              onPress={() => {
                setTarefa('');
                setEditandoId(null);
                setMensagem('');
              }}
              style={styles.botaoCancelar}
            >
              <Text style={styles.cancelarTexto}>
                Cancelar edição
              </Text>
            </TouchableOpacity>
          )}

          {mensagem !== '' && (
            <Text style={styles.mensagem}>
              {mensagem}
            </Text>
          )}

        </View>

        <Text style={styles.listaTitulo}>
          Sua lista de atividades
        </Text>

        {carregando ? (

          <Text style={styles.estado}>
            Carregando tarefas...
          </Text>

        ) : (

          <FlatList
            data={tarefas}
            keyExtractor={item => item.id}
            style={styles.lista}
            contentContainerStyle={styles.listaConteudo}
            keyboardShouldPersistTaps="handled"
            ListEmptyComponent={
              <View style={styles.vazio}>
                <Text style={styles.vazioTitulo}>
                  Nenhuma tarefa por aqui
                </Text>

                <Text style={styles.vazioDescricao}>
                  Adicione sua primeira atividade para começar.
                </Text>
              </View>
            }
            renderItem={({ item }) => (

              <View style={styles.tarefaCard}>

                <View style={styles.tarefaTopo}>

                  <View style={styles.tarefaInformacao}>

                    <Text style={[
                      styles.tarefaNome,
                      item.concluida && styles.tarefaConcluida
                    ]}>
                      {item.nome}
                    </Text>

                    <Text style={[
                      styles.status,
                      item.concluida
                        ? styles.statusConcluida
                        : styles.statusPendente
                    ]}>
                      {item.concluida ? 'Concluída' : 'Pendente'}
                    </Text>

                  </View>

                </View>

                <View style={styles.acoes}>

                  <TouchableOpacity
                    style={styles.botaoConcluir}
                    onPress={() => concluirTarefa(item)}
                  >
                    <Text style={styles.acaoConcluirTexto}>
                      {item.concluida ? 'Desmarcar' : 'Concluir'}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.botaoEditar}
                    onPress={() => editarTarefa(item)}
                  >
                    <Text style={styles.acaoEditarTexto}>
                      Editar
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.botaoExcluir}
                    onPress={() => removerTarefa(item.id)}
                  >
                    <Text style={styles.acaoExcluirTexto}>
                      Excluir
                    </Text>
                  </TouchableOpacity>

                </View>

              </View>

            )}
          />

        )}

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F3F6FB',
    padding: 20,
    alignItems: 'center'
  },

  conteudo: {
    width: '100%',
    maxWidth: 850,
    flex: 1
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827'
  },

  descricao: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 7,
    marginBottom: 22
  },

  resumo: {
    flexDirection: 'row',
    marginBottom: 20
  },

  resumoCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 14,
    alignItems: 'center',
    marginRight: 8,
    elevation: 2
  },

  resumoNumero: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2563EB'
  },

  resumoTexto: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 5
  },

  formulario: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    marginBottom: 22,
    elevation: 2
  },

  formularioTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 15
  },

  input: {
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    padding: 14,
    fontSize: 15,
    marginBottom: 12,
    color: '#111827'
  },

  botao: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },

  botaoTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15
  },

  botaoCancelar: {
    alignItems: 'center',
    padding: 12
  },

  cancelarTexto: {
    color: '#DC2626',
    fontWeight: '600'
  },

  mensagem: {
    color: '#2563EB',
    marginTop: 12,
    fontSize: 13
  },

  listaTitulo: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 12
  },

  lista: {
    flex: 1
  },

  listaConteudo: {
    paddingBottom: 20,
    flexGrow: 1
  },

  estado: {
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 20
  },

  vazio: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 14,
    alignItems: 'center'
  },

  vazioTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 7
  },

  vazioDescricao: {
    color: '#6B7280',
    fontSize: 13,
    textAlign: 'center'
  },

  tarefaCard: {
    backgroundColor: '#FFFFFF',
    padding: 17,
    borderRadius: 14,
    marginBottom: 12,
    elevation: 2
  },

  tarefaTopo: {
    flexDirection: 'row',
    marginBottom: 15
  },

  tarefaInformacao: {
    flex: 1
  },

  tarefaNome: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8
  },

  tarefaConcluida: {
    color: '#9CA3AF',
    textDecorationLine: 'line-through'
  },

  status: {
    fontSize: 12,
    fontWeight: 'bold'
  },

  statusConcluida: {
    color: '#16A34A'
  },

  statusPendente: {
    color: '#D97706'
  },

  acoes: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  botaoConcluir: {
    backgroundColor: '#DCFCE7',
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 5
  },

  acaoConcluirTexto: {
    color: '#15803D',
    fontWeight: '600',
    fontSize: 12
  },

  botaoEditar: {
    backgroundColor: '#DBEAFE',
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 5
  },

  acaoEditarTexto: {
    color: '#2563EB',
    fontWeight: '600',
    fontSize: 12
  },

  botaoExcluir: {
    backgroundColor: '#FEE2E2',
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderRadius: 8,
    marginBottom: 5
  },

  acaoExcluirTexto: {
    color: '#DC2626',
    fontWeight: '600',
    fontSize: 12
  }

});
