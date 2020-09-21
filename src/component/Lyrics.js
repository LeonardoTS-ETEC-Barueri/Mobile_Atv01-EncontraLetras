import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

const Lyrics = (props) => {

    return(
        // Os valores abaixo foram passados pelas props definidas em LyricsPage.js
        <View style={styles.container}>
            <ScrollView style={styles.safeTxtArea} persistentScrollbar={true}>
                <Text style={styles.artistName}>{props.getArtist}</Text>
                <Text style={styles.musicName}>{props.getMusic}</Text>
                <Text>{props.getLyrics}</Text>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'grey',
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 50,
        height: '80%'
    },
    safeTxtArea:{
        maxHeight: '100%'
    },
    artistName: {
        fontSize: 20,
        fontWeight: 'bold',
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 5
    },
    musicName: {
        fontSize: 15,
        fontWeight: 'bold',
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 20
    }

})

export default Lyrics;