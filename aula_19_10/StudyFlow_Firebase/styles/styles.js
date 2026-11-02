
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  // TELAS DE LOGIN E CADASTRO

  authContainer: {
    flexGrow: 1,
    backgroundColor: '#F3F6FB',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  authCard: {
    width: '100%',
    maxWidth: 440,
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 25,
    elevation: 5
  },

  authLogo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2563EB',
    textAlign: 'center',
    marginBottom: 25
  },

  authTitulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 8
  },

  authDescricao: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 25
  },

  authLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 7
  },

  authInput: {
    width: '100%',
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 11,
    padding: 14,
    fontSize: 15,
    marginBottom: 18
  },

  authBotao: {
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 11,
    alignItems: 'center',
    marginTop: 5
  },

  authBotaoTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  },

  authLink: {
    color: '#2563EB',
    textAlign: 'center',
    marginTop: 22,
    fontSize: 14,
    fontWeight: '600'
  },

  // TELA INICIAL

  inicioContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F3F6FB'
  },

  inicioCard: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: '#FFFFFF',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 4
  },

  inicioImagem: {
    width: 110,
    height: 110,
    marginBottom: 20
  },

  inicioTitulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2563EB',
    textAlign: 'center',
    marginBottom: 15
  },

  inicioDescricao: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 25
  },

  inicioBotao: {
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center'
  },

  inicioBotaoTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  }

});

export default styles;
