import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  // TELA INICIAL

  container: {
    flexGrow: 1,
    backgroundColor: '#F3F6FB',
    padding: 20,
    alignItems: 'center'
  },

  cardPrincipal: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    marginTop: 20,
    elevation: 4
  },

  imagem: {
    width: 110,
    height: 110,
    marginBottom: 15
  },

  titulo: {
    fontSize: 22,
    color: '#374151',
    marginBottom: 5
  },

  nomeApp: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 15
  },

  descricao: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24
  },

  cardInfo: {
    width: '100%',
    backgroundColor: '#E8F0FF',
    borderRadius: 16,
    padding: 20,
    marginTop: 20
  },

  infoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E40AF',
    marginBottom: 8
  },

  infoTexto: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 22
  },

  botaoContainer: {
    width: '100%',
    marginTop: 25
  },


  // TELA DE TAREFAS

  tarefasContainer: {
    flexGrow: 1,
    backgroundColor: '#F3F6FB',
    padding: 20
  },

  tarefasTitulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 5
  },

  tarefasDescricao: {
    fontSize: 15,
    color: '#6B7280',
    marginBottom: 20
  },

  inputContainer: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 16,
    elevation: 3,
    marginBottom: 25
  },

  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    padding: 13,
    fontSize: 16,
    marginBottom: 12,
    backgroundColor: '#F9FAFB'
  },

  listaTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12
  },


  // LISTA

  tarefaCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 10,
    elevation: 2
  },

  tarefaConcluida: {
    backgroundColor: '#E8F5E9'
  },

  check: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12
  },

  checkTexto: {
    color: '#2563EB',
    fontSize: 18,
    fontWeight: 'bold'
  },

  tarefaTexto: {
    flex: 1,
    fontSize: 16,
    color: '#374151'
  },

  textoConcluido: {
    textDecorationLine: 'line-through',
    color: '#6B7280'
  },


  // LISTA VAZIA

  vazio: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 30,
    alignItems: 'center',
    marginTop: 10
  },

  vazioEmoji: {
    fontSize: 40,
    marginBottom: 10
  },

  vazioTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 5
  },

  vazioTexto: {
    fontSize: 14,
    color: '#9CA3AF'
  },
  tarefaArea: {
  flexDirection: 'row',
  alignItems: 'center',
  flex: 1
},

botaoExcluir: {
  backgroundColor: '#FEE2E2',
  paddingVertical: 8,
  paddingHorizontal: 10,
  borderRadius: 8,
  marginLeft: 10
},

textoExcluir: {
  color: '#DC2626',
  fontSize: 13,
  fontWeight: 'bold'
},

});

export default styles;