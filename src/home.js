import React from 'react';
import { View,Text, StyleSheet, Dimensions,Image,ScrollView } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap,TabView } from 'react-native-tab-view';
import General from './general'
import Events from './events'
import Developments from './development'
import Projects from './projects'
import About from './about'
import Courses from './courses'

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};
const FirstRoute = () => <View style={[ styles.container, { backgroundColor: 'white' } ]} >
<General/>
</View>

const SecondRoute = () => <View style={[ styles.container, { backgroundColor: 'red' } ]} >
  <Courses/>
</View>

const ThirdRoute = () => 
<View style={[ styles.container, { backgroundColor: 'white' } ]} >
<Events/>
</View>

const FourthRoute = () => 
<View style={[ styles.container, { backgroundColor: 'red' } ]} >
<Developments/>
</View>
const FifthRoute = () => 
<View style={[ styles.container, { backgroundColor: 'white' } ]} >
  <Projects/>
</View>
const SixthRoute = () => 
<View style={[ styles.container, { backgroundColor: 'red' } ]} >
</View>

export default class home extends React.Component {
    constructor (props){
        super(props)
        this.state = ({
            index: 0,
            routes: [
              { key: 'first', title: 'General' },
              { key: 'second', title: 'Courses' },
              { key: 'third', title: 'Events' },
              { key: 'fourth', title: 'Developments' },
              { key: 'fifth', title: 'Projects' },
              { key: 'sixth', title: 'About us' },
            ],
            W: Dimensions.get('window').width,
        })
        Dimensions.addEventListener('change', () => {
          this.setState({
          W: Dimensions.get('window').width
        })
        })
      }

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => 
  <TabBar 
  {...props} 
  tabStyle={{backgroundColor:'#38ada9'}}
  labelStyle={{backgroundColor:'#38ada9'}}
  style={{backgroundColor:'#38ada9',width: this.state.W}}
  indicatorStyle={{backgroundColor:'red'}}
  scrollEnabled
  />
  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
    fifth: FifthRoute,
    sixth: SixthRoute,
  });

  render() {
    return (

    <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
    >
    </TabView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});