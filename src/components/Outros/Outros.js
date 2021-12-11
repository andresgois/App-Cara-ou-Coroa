
import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text,  View } from 'react-native';

const logo = require('./src/imgs/logo.png');

export default class App extends Component {
    render(){
      return(
        <View style={ styles.container}>
          <Text style={[styles.texto, {fontWeight: 'bold', fontSize: 30, textAlign: 'center'}]}>
            Jogos
          </Text>
          <View>
            <FlatList 
              data={[
                {key: '> Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
                {key: '> Nam feugiat sem vitae ante feugiat tincidunt.'},
                {key: '> Maecenas venenatis odio in orci ullamcorper, vel tempus elit iaculis.'},
                {key: '> In euismod ante nec metus tristique, imperdiet aliquet libero congue.'},
                {key: '> Aliquam non nibh dapibus neque posuere pharetra.'},
                {key: '> Phasellus ut odio ac nisl imperdiet imperdiet eu vel tellus.'},
              ]}
              renderItem={({item}) => <Text style={styles.texto}> {item.key}</Text>}
            />
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
  texto:{
    padding: 10,
    color: '#fff',
    fontSize: 18,
  }
});

