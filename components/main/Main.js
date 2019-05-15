import React, { Component } from 'react';
import PropTypes from 'prop-types'; // change this to apply to react new version
import { connect } from 'react-redux';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';


export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state ={ isLoading: true}  
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

    if(this.state.isLoading){
      return(
        <View  style={{flex: 10, backgroundColor: 'skyblue'}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 10, backgroundColor: 'skyblue'}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.displayName}, {item.totalVotesScore}</Text>}
          keyExtractor={({generatorID}, index) => generatorID}
        />
      </View>
    );
  }
}
