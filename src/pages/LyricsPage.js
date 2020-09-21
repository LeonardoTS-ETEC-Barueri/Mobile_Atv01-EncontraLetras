import React from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';

import Lyrics from '../component/Lyrics';

export default class LyricsPage extends React.Component{

    render(){

        const {artist} = this.props.navigation.getParam('myStateData', {artist});   // getParam(paramName, defaultValue) --- O destruct é necessário para armazenar os valores contidos em artist. Veja como o 2º parâmetro da navigation no método (goToPage) do arquivo (SearchPage.js) foi configurado.
        const {music} = this.props.navigation.getParam('myStateData', {music});
        const {lyrics} = this.props.navigation.getParam('myStateLyrics', {lyrics});

        return(
        <ImageBackground source={require('../assets/bg_Main.jpg')} style={styles.imageBg} >
            <Lyrics getArtist={artist} 
                    getMusic={music} 
                    getLyrics={lyrics} />
            {/*<Text>{console.log('LyricsPage: Carregou!')}</Text>*/}
        </ImageBackground>
        )

  }

}

const styles = StyleSheet.create({

  imageBg: {
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  }


})

