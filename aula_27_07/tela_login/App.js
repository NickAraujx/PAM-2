import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Text, Image, ScrollView, TextInput, Button } from 'react-native';

export default function App() {

  const [loading, setLoading] = useState(false);

  return (
    <ScrollView style={styles.container}>

      <Image
          source={{
            uri: 'https://br.pinterest.com/pin/766737905279854532/',
          }}
          style={{width: 200, height: 200}}
        />

      <Text>Digite seu email cadastrado:</Text>
      <TextInput defaultValue="email@gmail.com" ></TextInput>

      <Text>Digite sua senha cadastrada:</Text>
      <TextInput defaultValue="senha123#" ></TextInput>

      <Button
        title={loading ? "Entrar" : "Entrando..."}
        onPress={() => setLoading(true)}
        disabled={loading}
      />

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },

  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});
