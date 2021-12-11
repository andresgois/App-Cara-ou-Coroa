
import React, { Component } from 'react';
import { AppRegistry, Button, Text } from 'react-native';
import Route from './src/components/Router';

export default class App extends Component {
    render(){
      return(
        <Route />
      )
    }
};

AppRegistry.registerComponent('App', () => App)

