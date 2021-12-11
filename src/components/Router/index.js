import React, { Component } from 'react';
import { color } from 'react-native-reanimated';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Principal from '../Main/Principal';
import Outros from '../Outros/Outros';
import Resultado from '../Resultado/Resultado';
import Sobre from '../Sobre/Sobre';

class Route extends Component {
  render(){
    return (
      <Router sceneStyle={{ paddingTop: 50}}>
        <Scene key="root">
          <Scene 
            key='principal' 
            component={ Principal } 
            initial 
            title="Jogo Cara ou Coroa" 
            navigationBarStyle={{backgroundColor: '#274c38'}}
            titleStyle={{ color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 28}}
          />

          <Scene key='outros' component={ Outros } title="Outros Jogos" 
            back
            navBarButtonColor='#61BD8C'             
            titleStyle={{color: '#61BD8C', textAlign: 'center', fontWeight: 'bold', fontSize: 28}}
          />

          <Scene key='sobre' component={ Sobre } title="Sobre o Jogo"             
            back
            navBarButtonColor='#61BD8C'             
            titleStyle={{color: '#61BD8C', textAlign: 'center', fontWeight: 'bold', fontSize: 28}}
          />

          <Scene 
            key='resultado' 
            component={ Resultado } 
            title="Resultado"
            back
            navBarButtonColor='#61BD8C'             
            titleStyle={{color: '#61BD8C', textAlign: 'center', fontWeight: 'bold', fontSize: 28}}
          />
        </Scene>
      </Router>
    );
  }
}

export default Route;



