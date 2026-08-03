import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [loading, setLoading] = useState(false);

  return (
    <ScrollView style={styles.container}>

      <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
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
