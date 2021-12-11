import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';

const cara = require('../../imgs/moeda_cara.png')
const coroa = require('../../imgs/moeda_coroa.png')

class Resultado extends Component {

  constructor(props){
    super(props)

    this.state = {img: ''}
  }

  componentDidMount(){
    const numAle = Math.floor(Math.random() * 2);
    const caraOuCoroa = numAle === 0 ? 'cara' : 'coroa';
    this.setState({img: caraOuCoroa}) ;
  }

 render(){
   if( this.state.img === 'cara') {
    return(
      <View style={styles.container}>
        <Image source={cara} />
      </View>
    );
   }
  
    return(
      <View style={styles.container}>
        <Image source={coroa} />
      </View>
    );
  }
 }

export default Resultado;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61BD8C',
    justifyContent: 'center',
    alignItems: 'center',
  },
});