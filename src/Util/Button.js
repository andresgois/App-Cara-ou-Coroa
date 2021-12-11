import React, { Component } from 'react';

import {  Image, View } from 'react-native';

//import { styles } from './styles';
const btn_back = require('../imgs/btn_back.png')

export default class Button extends Component(){

  render(){

    return (
      <View>
        <Image source={btn_back} />
      </View>
    );

  }
}