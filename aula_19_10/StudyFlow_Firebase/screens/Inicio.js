
import React from 'react';

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function Inicio({ navigation }) {

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >

      <View style={styles.conteudo}>

        <View style={styles.topo}>
          <Text style={styles.logo}>StudyFlow.</Text>
          <Text style={styles.tag}>SUA ROTINA, MAIS ORGANIZADA</Text>
        </View>

        <View style={styles.cardPrincipal}>

          <View style={styles.destaque}>
            <Text style={styles.destaqueTexto}>
              ORGANIZE SEUS ESTUDOS
            </Text>
          </View>

          <Text style={styles.titulo}>
            Bem-vindo ao StudyFlow!
          </Text>

          <Text style={styles.descricao}>
            Tenha mais controle sobre sua rotina, organize suas
            atividades e acompanhe seu progresso em um só lugar.
          </Text>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate('Tarefas')}
            activeOpacity={0.8}
          >
            <Text style={styles.botaoTexto}>
              Acessar minhas tarefas
            </Text>

            <Text style={styles.seta}>→</Text>
          </TouchableOpacity>

        </View>

        <Text style={styles.subtitulo}>
          O que você pode fazer?
        </Text>

        <View style={styles.cardInformacao}>
          <View style={styles.icone}>
            <Text style={styles.iconeTexto}>01</Text>
          </View>

          <View style={styles.infoTexto}>
            <Text style={styles.infoTitulo}>
              Organizar atividades
            </Text>

            <Text style={styles.infoDescricao}>
              Registre suas tarefas e mantenha tudo organizado.
            </Text>
          </View>
        </View>

        <View style={styles.cardInformacao}>
          <View style={styles.icone}>
            <Text style={styles.iconeTexto}>02</Text>
          </View>

          <View style={styles.infoTexto}>
            <Text style={styles.infoTitulo}>
              Acompanhar seu progresso
            </Text>

            <Text style={styles.infoDescricao}>
              Marque suas atividades como concluídas e acompanhe
              o que já foi realizado.
            </Text>
          </View>
        </View>

        <Text style={styles.rodape}>
          StudyFlow — Simplifique sua vida acadêmica.
        </Text>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: '#F3F6FB',
    padding: 24,
    alignItems: 'center'
  },

  conteudo: {
    width: '100%',
    maxWidth: 850
  },

  topo: {
    marginBottom: 28
  },

  logo: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#2563EB'
  },

  tag: {
    fontSize: 11,
    letterSpacing: 2,
    color: '#6B7280',
    marginTop: 5
  },

  cardPrincipal: {
    backgroundColor: '#FFFFFF',
    padding: 30,
    borderRadius: 20,
    marginBottom: 30,
    elevation: 4,
    shadowColor: '#000000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 }
  },

  destaque: {
    alignSelf: 'flex-start',
    backgroundColor: '#DBEAFE',
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginBottom: 20
  },

  destaqueTexto: {
    color: '#2563EB',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 15
  },

  descricao: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 25,
    marginBottom: 25
  },

  botao: {
    backgroundColor: '#2563EB',
    padding: 17,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold'
  },

  seta: {
    color: '#FFFFFF',
    fontSize: 20,
    marginLeft: 10
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 15
  },

  cardInformacao: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },

  icone: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },

  iconeTexto: {
    color: '#2563EB',
    fontSize: 16,
    fontWeight: 'bold'
  },

  infoTexto: {
    flex: 1
  },

  infoTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 5
  },

  infoDescricao: {
    fontSize: 13,
    color: '#6B7280',
    lineHeight: 20
  },

  rodape: {
    textAlign: 'center',
    color: '#9CA3AF',
    fontSize: 12,
    marginTop: 25,
    marginBottom: 10
  }

});
