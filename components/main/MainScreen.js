import React, { Component } from 'react';
import PropTypes from 'prop-types'; // change this to apply to react new version
import { connect } from 'react-redux';
import { AppRegistry, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { List, ListItem, Button,SearchBar } from "react-native-elements";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faBars, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

import { SideDrawer } from '../SideDrawer';

const styles = StyleSheet.create({

  menuIconsLeft: {
    color: '#FFFFFF',
    marginLeft: 20
  },
  menuIconsRight: {
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
    static navigationOptions = ({ navigation }) => {
      return {
        title: 'Home',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerLeft: (
          <TouchableOpacity >
            <FontAwesomeIcon style={styles.menuIconsLeft} icon={ faBars } size="20" />
          </TouchableOpacity>
        ),
        headerRight: (
          <TouchableOpacity style={{ flexDirection: 'row' }}
          onPress={navigation.getParam('showSearchBar')}>
            <FontAwesomeIcon style={styles.menuIconsRight} icon={ faSearch } size="20" />
          </TouchableOpacity>
        ),
      }
     
    };
    
    constructor(props) {
        super(props);
        this.state ={ isLoading: true, showSearch: false, query: "" }  
        this.state.fullList = [];
        this.state.filterList = [];

        this.state.carsList =  [
          { modelo: 'Arona', matricula: '0000AAA', estado: "Deplorable", image:require('../../resources/img/arona.jpg'), id: 1 },
          { modelo: 'Ibiza', matricula: '0000BBB', estado: "Bueno", image:require('../../resources/img/ibiza.jpg'), id: 2 },
          { modelo: 'Toledo', matricula: '0000CCC', estado: "Malo", image:require('../../resources/img/toledo.jpg'), id: 3 },
          { modelo: 'Ibiza', matricula: '0000DDD', estado: "Malo", image:require('../../resources/img/ibiza.jpg'), id: 4 },
          { modelo: 'Mii', matricula: '0000EEE', estado: "Mejorable", image:require('../../resources/img/mii.jpg'), id: 5 },
          { modelo: 'León', matricula: '0000FFF', estado: "Normal", image:require('../../resources/img/leon.jpg'), id: 6 },
          { modelo: 'Alhambra', matricula: '0000GGG', estado: "Bueno", image:require('../../resources/img/alhambra.jpg'), id: 7 },
          { modelo: 'Ibiza', matricula: '000HHH', estado: "Accidentado", image:require('../../resources/img/ibiza.jpg'), id: 8 },
          { modelo: 'Toledo', matricula: '0000III', estado: "Mejorable", image:require('../../resources/img/toledo.jpg'), id: 9 },
          { modelo: 'Arona', matricula: '0000JJJ', estado: "Bueno", image:require('../../resources/img/arona.jpg'), id: 10 },
        ];

        this.state.count = 0
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

      this.props.navigation.setParams({ showSearchBar: this._showSearchBar });
  }

  _showSearchBar = () => {
    if(this.state.showSearch) {
      this.setState({showSearch: false})
    }
    else {
      this.setState({showSearch: true})
    }
  };

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
        containerStyle={{backgroundColor: '#FFFAFA', borderColor: '#eee' }}
        style={{backgroundColor: '#FFFAFA', borderColor: '#eee' }}
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

  keyExtractor = (item, index) => index.toString()

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
              style={{backgroundColor: '#FFFAFA'}}
              data={this.state.carsList}
              extraData={this.state}
              keyExtractor={this.keyExtractor}
              renderItem={({ item }) => (
              <TouchableOpacity
              style={{backgroundColor: '#D7DDE2', color: '#FFFFFF'}}
              onPress={ item.recogida ? () => navigate('ItemMap', {id:  item.id }) : () => navigate('ItemScreen', {id:  item.id }) }>
                <ListItem  
                  containerStyle={{ borderBottomColor: 'red' }}
                  style={{backgroundColor: '#FFFAFA', borderBottomColor: '#eee' }}
                  leftAvatar={{ source: item.image }}
                  title={item.modelo}
                  subtitle={item.matricula} 
                  chevronColor="black"
                  chevron
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


