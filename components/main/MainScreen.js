import React, { Component } from 'react';
import PropTypes from 'prop-types'; // change this to apply to react new version
import { connect } from 'react-redux';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import { List, ListItem } from "react-native-elements";
import { createStackNavigator, createAppContainer } from "react-navigation";

// import MyListItem from './MyListItem';

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state ={ isLoading: true}  
        this.carList = {}
    }

    componentDidMount(){
        return fetch('http://version1.api.memegenerator.net//Generators_Select_ByPopular?pageIndex=0&pageSize=12&days=&apiKey=demo')
          .then((response) => response.json())
          .then((responseJson) => {
    
            this.setState({
              isLoading: false,
              dataSource: responseJson.result,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
    }


  render(){
    const {navigate} = this.props.navigation;
    const textColor = this.props.selected ? 'red' : 'black';
    if(this.state.isLoading){
      return(
        <View  style={{flex: 10, backgroundColor: '#FFFFFF'}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return(
      <View style={{flex: 10, backgroundColor: '#FFFFFF'}}
      containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.dataSource}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => (
            <ListItem
            leftAvatar={{ source: { uri: item.imageUrl } }}
            title={item.displayName}
            subtitle='subtitle' 
            onPress={() => navigate('ItemScreen', {id: item.generatorID })}
            badge={{ value: item.instancesCount, textStyle: { color: 'white' }, containerStyle: { marginTop: -20 } }}
            />
          )}
        />
      </View>
    );
  }
}



const AppNavigator = createStackNavigator({
  MainScreen: {
    screen: MainScreen
  }
});

export default createAppContainer(AppNavigator);
