
import React, { Component } from 'react';
import { Alert, Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

const logo = require('../../imgs/logo.png')
const btnJogar = require('../../imgs/botao_jogar.png');
const outrosJogos = require('../../imgs/outros_jogos.png');
const sobreJogo = require('../../imgs/sobre_jogo.png');

export default class Principal extends Component {
    render(){
      return(
        <View style={ styles.container}>
          <View style={ styles.apresenta}>
            <Image source={ logo } />
            
            <TouchableOpacity
              activeOpacity={0.2}
              onPress={ () => { Actions.resultado()}}
            >
              <Image source={ btnJogar } />
            </TouchableOpacity>

          </View>
          
          <View style={ styles.rodape}>
            <TouchableOpacity
              onPress={ () => { Actions.outros()}}
            >
              <Image source={ outrosJogos } />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={ () => { Actions.sobre()}}
            >
              <Image source={ sobreJogo } />
            </TouchableOpacity>
          </View>
        </View>
      )
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61BD8C',
  },
  apresenta: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rodape: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

