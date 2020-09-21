import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchPage from './src/pages/SearchPage'
import LyricsPage from './src/pages/LyricsPage'

const appNavigator = createStackNavigator({

      'Main': {
            screen: SearchPage
      },
      'LyricsPg': {
            screen: LyricsPage
      }

}, {
      defaultNavigationOptions: {
            
            title: 'Encontra Letras',
            headerStyle:{
                  backgroundColor: '#d7d7d7',
                  borderBottomWidth: 3,
                  borderBottomColor: '#c5c5c5'
            },
            headerTitleStyle: {
                  fontSize: 25,
                  flexGrow: 1,
                  textAlign: 'center'
            }

      }
});

const appContainer = createAppContainer(appNavigator);

export default appContainer;