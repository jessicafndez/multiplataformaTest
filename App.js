import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types'; 
import { Provider } from 'react-redux';
import configureStore from '../configureStore';

import { Main }  from './components/Main';

// out


// const
const store = configureStore();


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <div>
          <Provider store={}>
            <Main>
            </Main>
          </Provider>
      </div>
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>Welcome to React Native!</Text>
      //   <Text style={styles.instructions}>To get started, edit App.js</Text>
      //   <Text style={styles.instructions}>{instructions}</Text>
      // </View>
    );
  }
}

App.prototype = {
  store: PropTypes.object.isRequired;
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
});

export default App;
