import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Página Inicial' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function Home({ navigation }) {

    const usuarios = [
        { id: '1', nome: 'Laranjo Irritante' },
        { id: '2', nome: 'Bananilson Farofa' },
        { id: '3', nome: 'João Burro Animal da Cleire' },
        { id: '4', nome: 'Cleire Dona do Burro Animal João' },
        { id: '5', nome: 'Kadu da Jocileine BumBum Granada' },
    ];

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Bem-vindo!</Text>

            <Text style={styles.subtitulo}>Lista de usuários:</Text>

            <FlatList
                data={usuarios}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.nome}>{item.nome}</Text>
                    </View>
                )}
            />

        </View>
    );
}