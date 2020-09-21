import React from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';

import axios from 'axios';

import MusicFinder from '../component/MusicFinder'; // Componente de entrada de dados pelo usuário.

export default class SearchPage extends React.Component{

  // STATE
  constructor(props){
    super(props)

    this.state = {
      data: {
        artist: null,
        music: null
      },
      lyrics: []
    }

  }
  // Implementação inicial "componentDidMount()" e coleta de dados com "Axios" usando uma função de coleta de dados personalizada;
  componentDidMount(){
  this.refreshAPIRequisition();
    console.log('componentDidMount() - Atualizei as coisas.')
  }

  // Função assíncrona de requisição de dados.
  refreshAPIRequisition = async () => {

    const {artist} = this.state.data;
    const {music} = this.state.data;

    // Espera a promessa dos dados da API REST para prosseguir.
    await axios.get(`https://api.lyrics.ovh/v1/${artist}/${music}`)
      .then( (response) => {

        const {lyrics} = response.data;
        
        console.log(`Response 200: ${artist}, ${music}` );
    
        return this.setState({
          lyrics: lyrics  // Nosso Lyrics (State) recebe o Lyrics da (API REST).
        })

      }).catch(err => {
          this.changeArtistState("( 'ಠ⌣ಠ) Ops...");
          this.changeMusicState(null);
          return(
            this.setState({
              lyrics: 'Não foi possível encontrar a letra da musica, verifique se você digitou o nome do artista e da música corretamente.'
            }),
            console.log(`${err} - Erro 404: ${artist}, ${music}` )
          ) 
                
      })

      console.log('refreshAPIRequisition: Requisições foram completas!')
  }

  changeArtistState = (newArtist) => { 

    this.setState({
      'data': {...this.state.data,
      'artist': newArtist}
    })

  }

  changeMusicState = (newMusic) => {

    this.setState({
      data: {...this.state.data,
      music: newMusic}
    })

  }

  // Função assíncrona de navegação.
  goToPage = async (pageName) => {
    console.log(`SearchPage: Enviando dados para outra página.`);

    // Após clicar em 'PROCURAR LETRA', esperar a conclusão da requisição HTTP.
    await this.refreshAPIRequisition();

    this.props.navigation.navigate(pageName, {myStateData: this.state.data, 
                                              myStateLyrics: this.state,
                                            });
  }

  // Início do Render.
  render(){

    return(
     <ImageBackground source={require('../assets/bg_Main.jpg')} style={styles.imageBg} >
      <View>
        {/*<Text>{`Artista: ${this.state.data.artist}, Música: ${this.state.data.music}`}</Text>*/}
        <MusicFinder dataState={this.state.data} 
                     musicLyrics={this.state.lyrics} 
                     changeMusic={this.changeMusicState} 
                     changeArtist={this.changeArtistState} 
                     goTo={this.goToPage} /> 
      </View> 
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

