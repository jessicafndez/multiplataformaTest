import React, { Component } from 'react';
import { AppRegistry, View, Text, Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    backgroundColor: 'white',
    width: '100%'
    // width: Dimensions.get("window").width * 0.8
  }
});

export default class SideDrawer extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <View style = { styles.container }>
          <Text> SideDrawer </Text>
        </View>
      )
    }
}

AppRegistry.registerComponent('SideDrawer', () => SideDrawer);