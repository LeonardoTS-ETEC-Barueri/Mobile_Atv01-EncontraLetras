import React from 'react';
import { View, Button, TextInput, Text, StyleSheet } from 'react-native';

const MusicFinder = (props) => {

    // Podemos observar a utilização das PROPS na função do evento "onChangeText", incluindo a passagem de parâmetros necessária pro funcionamento da função chamada pela PROPS.

    return(
        <View style={styles.container}>
            <TextInput placeholder='Nome do artista' placeholderTextColor='rgba(0,0,0,0.60)' onChangeText={ text => { props.changeArtist(text) } } style={styles.inputBox} />
            <TextInput placeholder='Nome da música' placeholderTextColor='rgba(0,0,0,0.60)' onChangeText={ text => { props.changeMusic(text) } } style={styles.inputBox} />
            <View style={styles.submitArea}>
                <Button title="Procurar letra"
                        onPress={ 
                            () => { 
                                props.goTo('LyricsPg'); // Ativação da função goToPage. A STATE de SearchPage será atualizada com os dados retornados da API REST baseados nos valores passados pelo usuário nos componentes de TextInput.
                                //(console.log(`MusicFinder Artista: ${props.dataState.artist}`));
                                //(console.log(`MusicFinder Musica: ${props.dataState.music}`));
                                //(console.log(`MusicFinder Lyrics: ${props.musicLyrics}`));
                                
                            } 
                        } />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'black',
        padding: 10,
        marginHorizontal: 10

    },
    inputBox: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 10,
        margin: 10
    },
    submitArea: {
        alignItems: 'center'
    }

})

export default MusicFinder;