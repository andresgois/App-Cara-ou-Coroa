import React, { Component } from 'react';
import { Router, Scene, Stack, Actions } from 'react-native-router-flux';
import Principal from '../Main/Principal';
import Outros from '../Outros/Outros';
import Resultado from '../Resultado/Resultado';
import Sobre from '../Sobre/Sobre';

class Route extends Component {
  render(){
    return (
      <Router sceneStyle={{ paddingTop: 50}}>
        <Stack key='root'>
          <Scene key='principal' component={ Principal } initial title="Jogo Cara ou Coroa" />

          <Scene key='outros' component={ Outros } title="Outros Jogos" 
            leftTitle="<"
            onLeft={() => {
              Actions.pop();
            }}
          />

          <Scene key='sobre' component={ Sobre } title="Sobre o Jogo"             
            leftTitle="<"
            onLeft={() => {
              Actions.pop();
            }}
          />

          <Scene key='resultado' component={ Resultado } title="Resultado"
            leftTitle="<"
            onLeft={() => {
              Actions.pop();
            }}
          />

        </Stack>
      </Router>
    );
  }
}

export default Route;



