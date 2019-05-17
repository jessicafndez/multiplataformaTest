import React, { Component } from 'react';
import PropTypes from 'prop-types'; // change this to apply to react new version
import { connect } from 'react-redux';
import { AppRegistry, StyleSheet, FlatList, ActivityIndicator, Text, View  } from 'react-native';
import { List, ListItem, Button } from "react-native-elements";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faPencilAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const styles = StyleSheet.create({
  user: {
    color: '#FFFFFF',
    marginRight: 20
  }
});

export default class MainScreen extends Component {
    static navigationOptions = {
      title: 'Home',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          fontWeight: 'bold',
      },
      headerRight: (
        <FontAwesomeIcon style={styles.user} icon={ faUser } />

      ),
   
    };
    
    constructor(props) {
        super(props);
        this.state ={ isLoading: true}  
        this.carList = {}
    }

    componentDidMount(){
      fetch('http://version1.api.memegenerator.net//Generators_Select_ByPopular?pageIndex=0&pageSize=12&days=&apiKey=demo')
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

      fetch('http://version1.api.memegenerator.net//Generators_Select_ByPopular?pageIndex=0&pageSize=12&days=&apiKey=demo')
        .then((response) => response.json())
        .then((responseJson) => {
  
          this.setState({
            isLoading: false,
            dataSourceSaved: responseJson.result,
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

    let listObjects = [];
    for(var key in this.state.dataSource) {
      console.log(this.state.dataSource[key]);
      console.log("--");
      let a = this.state.dataSource[key];
      a.recogida = 1;
      listObjects.push(a)
    }

    for(var key in this.state.displayName) {
      console.log(this.state.displayName[key]);
      console.log("--");
      let a = this.state.displayName[key];
      a.recogida = 0;
      listObjects.push(a)
    }

    // Object.keys(this.state.dataSourceSaved).forEach(function(key){
    //   let obj = obj[key];
    //   obj.recogida = 0
    //   listObjects.push(obj);
    // });


    return(
      <View style={{flex: 10, backgroundColor: '#FFFFFF', flexDirection: 'column'}}
      containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <View style={{ flex: 2 }}>
          <Text>Total: </Text>
            <FlatList
              data={listObjects}
              extraData={this.state}
              keyExtractor={this._keyExtractor}
              renderItem={({ item }) => (
                <ListItem
                  leftAvatar={{ source: { uri: item.imageUrl } }}
                  title={item.displayName}
                  subtitle='subtitle' 
                  onPress={() => navigate('ItemScreen', {id:  item.generatorID })}
                  badge={{ value: item.instancesCount, textStyle: { color: 'white' }, containerStyle: { marginTop: -20 } }}
                />
              )}
            />
        </View>
        <View style={{flex: 5 }}>
          <Text>Pendientes recogida</Text>
          <FlatList
            data={this.state.dataSource}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            renderItem={({ item }) => (
              <ListItem
                leftAvatar={{ source: { uri: item.imageUrl } }}
                title={item.displayName}
                subtitle='subtitle' 
                onPress={() => navigate('ItemScreen', {id:  item.generatorID })}
                badge={{ value: item.instancesCount, textStyle: { color: 'white' }, containerStyle: { marginTop: -20 } }}
              />
            )}
          />
        </View>
        <View style={{flex: 5 }}>
          <Text>Vehiculos</Text>
          <FlatList
            data={this.state.dataSourceSaved}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            renderItem={({ item }) => (
              <ListItem
                leftAvatar={{ source: { uri: item.imageUrl } }}
                title={item.displayName}
                subtitle='subtitle' 
                onPress={ () => navigate('ItemMap', {id:  item.generatorID }) }
                badge={{ value: item.instancesCount, textStyle: { color: 'white' }, containerStyle: { marginTop: -20 } }}
              />
            )}
          />
          </View>

      </View>
    );
  }
}

AppRegistry.registerComponent('MainScreen', () => MainScreen);


