import React, { Component } from 'react';
import PropTypes from 'prop-types'; // change this to apply to react new version
import { connect } from 'react-redux';
import { AppRegistry, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { List, ListItem, Button,SearchBar } from "react-native-elements";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faPencilAlt, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

const styles = StyleSheet.create({
  user: {
    color: '#FFFFFF',
    marginRight: 20
  },
  search: {
    marginLeft: 20,
    color: '#FFFFFF',
    backgroundColor: '#f4511e'
  },
  searchIcon: {
    color: '#FFFFFF',
    backgroundColor: '#f4511e'
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
        <View style={{ flexDirection: 'row' }}>
          <FontAwesomeIcon style={styles.user} icon={ faUser } />
        </View>
      ),
    };
    
    constructor(props) {
        super(props);
        this.state ={ isLoading: true, showSearch: true, query: "" }  
        this.state.fullList = [];
        this.state.filterList = [];
    }

    componentDidMount(){
      fetch('http://version1.api.memegenerator.net//Generators_Select_ByPopular?pageIndex=0&pageSize=12&days=&apiKey=demo')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          fullList: responseJson.result,
          filterList: responseJson.result,
        }, function(){

        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  handleQueryChange = query => {
    if(query.length == 0) {
      this.handleRestarList();
    }
    this.setState(state => ({ ...state, query: query || ""}));
    this.render();
  }

  handleSearchCancel = () => {
    this.handleRestarList();
    this.handleQueryChange("");
  }

  handleSearchClear = () => {
    this.handleRestarList();
    this.handleQueryChange("");
  }

  handleRestarList = () => {
    this.setState({filterList: this.state.fullList})
  }

  renderHeader = () => {    
    if(this.state.showSearch) {
      return (      
        <SearchBar   
          lightTheme     
          round
          placeholder="Buscar item"    
          clearIcon={true}
          onChangeText={text => this.searchFilterFunction(text)}
          onCancel={this.handleSearchCancel}
          onClear={this.handleSearchClear}
          autoCorrect={false}    
          value={this.state.query}
        />    
      );  
    }
    else {
      return(
        <View></View>
      )
    }
  };

  searchFilterFunction = text => {    
    this.handleQueryChange(text);   
    const newData = this.state.fullList.filter(item => {      
      const itemData = `${item.displayName.toUpperCase()}`;
      const textData = text.toUpperCase(); 
      return itemData.indexOf(textData) > -1;    
    });
    this.setState({ filterList: newData });  
  };

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
      <View style={{flex: 10, backgroundColor: '#CC0066', flexDirection: 'column'}}
      containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <View style={{ flex: 5 }}>
            <FlatList
              style={{backgroundColor: '#E1E8EE'}}
              data={this.state.filterList}
              extraData={this.state}
              keyExtractor={this._keyExtractor}
              renderItem={({ item }) => (
              <TouchableOpacity
              style={{backgroundColor: '#D7DDE2', color: '#FFFFFF'}}
              onPress={ item.recogida ? () => navigate('ItemMap', {id:  item.generatorID }) : () => navigate('ItemScreen', {id:  item.generatorID }) }>
                <ListItem  
                  containerStyle={{backgroundColor: '#E1E8EE'}}
                  style={{backgroundColor: '#E1E8EE'}}
                  leftAvatar={{ source: { uri: item.imageUrl } }}
                  title={item.displayName}
                  subtitle='subtitle' 
                  badge={{ value: item.instancesCount, textStyle: { color: 'white' }, containerStyle: { marginTop: -20 } }}
                />
              </TouchableOpacity>
               
              )}
              ItemSeparatorComponent={this.renderSeparator} 
              ListHeaderComponent={this.renderHeader}   
            />
        </View>
      </View>
    );
  }
}

 AppRegistry.registerComponent('MainScreen', () => MainScreen);


