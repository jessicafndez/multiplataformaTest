import React, {Component} from 'react';
import { View } from 'react-native';

// font awesome
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import NavigationBar from 'react-native-navbar';


export default class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <NavigationBar
                    title={titleConfig}
                    rightButton={rightButtonConfig}
                />
            </View>
        )
    }
}
const styles = {
    container: {
      flex: 1,
    },
  };
  
  const rightButtonConfig = {
    title: 'Next',
    handler: () => alert('hello!'),
  };
  
  const titleConfig = {
    title: 'Hello, world',
  };
  