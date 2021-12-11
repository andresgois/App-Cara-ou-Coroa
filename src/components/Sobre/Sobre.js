
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text,  View } from 'react-native';

export default class App extends Component {
    render(){
      return(
        <ScrollView style={ styles.container}>
          <Text style={ [styles.texto, {fontWeight: 'bold', fontSize: 30, textAlign: 'center'}]}>
              What is Lorem Ipsum?
          </Text>
          <Text style={ styles.texto}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. 
          </Text>
          <Text style={ styles.texto}>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in 
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including 
            versions of Lorem Ipsum.
          </Text>
          <Text style={ styles.texto}>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in 
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including 
            versions of Lorem Ipsum.
          </Text>
        </ScrollView>
      )
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61BD8C',
  },
  texto:{
    padding: 15,
    color: '#fff',
    fontSize: 23,
  }
});

