import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  imagem: {
    width: 120,
    height: 120,
    marginBottom: 20
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15
  },

  texto: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15
  },

  subtitulo: {
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10
  },

  item: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10
  },

  itemTexto: {
    fontSize: 17
  }

});

export default styles;