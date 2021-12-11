
import React, { Component } from 'react';
import { StyleSheet, Text,  View } from 'react-native';

export default class App extends Component {
    render(){
      return(
        <View style={ styles.container}>
          <Text>
          A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real.
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

