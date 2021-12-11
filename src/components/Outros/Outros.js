
import React, { Component } from 'react';
import { Image, StyleSheet, Text,  View } from 'react-native';

const logo = require('./src/imgs/logo.png');

export default class App extends Component {
    render(){
      return(
        <View style={ styles.container}>
          <Text>
            Outros Jogos
          </Text>
        </View>
      )
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61BD8C',
  },
});

