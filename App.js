import React, { Component } from 'react';
import {Router,Scene,Actions} from 'react-native-router-flux'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Home from './src/home'
import General from './src/general'
import Events from './src/events'
import Developments from './src/development'
import Projects from './src/projects'
import About from './src/about'

export default class App extends Component<{}> {
  render() {
    return (
      <Router navigationBarStyle={styles.navBar}>
      <Scene key="root" hideNavBar={false}  >
      
      <Scene
      key="home"
      component={Home}
      title="Denary Computing Limited"
      initial
      hideNavBar={false}
      />

      </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  navBar: {
    backgroundColor: '#38ada9',
    height: 50
  }
});
