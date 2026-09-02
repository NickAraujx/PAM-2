import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function App() {

    const jogos = [
        { id: '1', nome: 'Minecraft', genero: 'Aventura' },
        { id: '2', nome: 'GTA V', genero: 'Ação' },
        { id: '3', nome: 'FIFA 26', genero: 'Esportes' },
        { id: '4', nome: 'Fortnite', genero: 'Battle Royale' },
        { id: '5', nome: 'Counter-Strike', genero: 'FPS' },
        { id: '6', nome: 'Rocket League', genero: 'Esportes' },
    ];

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>🎮 Meus Jogos</Text>

            <Text style={styles.subtitulo}>
                Lista de jogos favoritos:
            </Text>

            <FlatList
                data={jogos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>

                        <Text style={styles.nome}>
                            {item.nome}
                        </Text>

                        <Text style={styles.genero}>
                            Gênero: {item.genero}
                        </Text>

                    </View>
                )}
            />

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#101726',
        padding: 20,
        paddingTop: 60,
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 10,
    },

    subtitulo: {
        fontSize: 18,
        color: '#829FD9',
        marginBottom: 20,
    },

    item: {
        backgroundColor: '#2C3B59',
        padding: 18,
        marginBottom: 12,
        borderRadius: 10,
    },

    nome: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 5,
    },

    genero: {
        fontSize: 15,
        color: '#829FD9',
    },

});