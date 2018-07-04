import React, { Component } from 'react';
var SQLite = require('react-native-sqlite-storage')
var db= SQLite.openDatabase({name: 'testDB',createFromLocation: '~denary.db'})
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Modal,
  FlatList,
} from 'react-native';


type Props = {};
export default class events extends Component<Props> {
  constructor (props){
    super(props)
    this.state = ({
      W: Dimensions.get('window').width,
        })
      Dimensions.addEventListener('change', () => {
        this.setState({
        W: Dimensions.get('window').width
      });
      })

  }

  

  render() {

    return (
      <View style={styles.container}>
<Text>Home Page
    </Text>
      </View>
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
  list: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    height:60,
    width: 300,
    borderWidth: 2,
    borderRadius:15,
    margin: 15,
    alignItems: 'center'

  },
  contentStyle:{
    backgroundColor : 'white',
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth:2,
    borderColor: '#aaa69d',
    margin: 3,
    height: 90,
    padding:10,
    alignItems: 'center'    },
});
