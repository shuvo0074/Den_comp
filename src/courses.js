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

class CourseComponents extends React.Component {
    constructor (props){
      super(props)
      this.state = ({
        W: Dimensions.get('window').width,
      })
      Dimensions.addEventListener('change', () => {
        this.setState({
        W: Dimensions.get('window').width
      })
      })
    }
    render(){
      return(
        
        <View style={[ styles.contentStyle, { width: this.state.W -10, } ]}>
          <View style={{width: this.state.W-120}} >
            <Text style={styles.listItemFonts}>{this.props.item.name}</Text>
            <Text>{this.props.item.description}</Text>
          </View>
        </View>
      )
    }
  }




type Props = {};
export default class courses extends Component<Props> {
  constructor (props){
    super(props)
    this.state = ({
      W: Dimensions.get('window').width,
      data: [],
      modalVisible: false,
      modalText: '',
        })
      Dimensions.addEventListener('change', () => {
        this.setState({
        W: Dimensions.get('window').width
      });
      })

      db.transaction((tx) => {
        tx.executeSql('SELECT * FROM courses', [], (tx, results) => {
            var len = results.rows.length;
            if (len>0){
              for ( let i=0;i<len;i++){
                console.log("sql exe "+ i)
                var rec= results.rows.item(i)
                var arr= this.state.data
                arr.push(rec)
                this.setState({data: arr})
              }
            }
          });
      })

  }

  

  render() {

    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={()=>{}}
          >
          <View style={{marginTop: 22,height: this.state.W-200,width: this.state.W-200 }}>
              <Text>{this.state.modalText}</Text>
              <TouchableOpacity
              style= {{width: this.state.W -20, height: 60, marginTop: 50, padding:5, borderWidth:2,
               borderColor: 'black',borderRadius: 15,margin:20,alignItems: 'center'}}
              onPress={()=>{
              this.setState({modalVisible : false})
              }}
              >
              <Text>
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>

        {this.state.data.map((x)=>{
          return(
            <TouchableOpacity
              onPress={()=>{
              this.setState({modalVisible : true})
              this.setState({modalText: x.details})
              }}
              >
            <CourseComponents item={x} />
            </TouchableOpacity>
          )
        })}

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
