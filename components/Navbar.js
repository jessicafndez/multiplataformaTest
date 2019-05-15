import React, {Component} from 'react';
import { View } from 'react-native';

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import NavigationBar from 'react-native-navbar';


export default class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.navbar}>
                <NavigationBar
                    title={titleConfig}
                    rightButton={
                        <View>
                            <FontAwesomeIcon icon={ faCoffee } />
                        </View>
                    }
                />
            </View>
        )
    }
}
const styles = {
    navbar: {
      flex: 1,
    },
  };
   

  const titleConfig = {
    title: 'Hello, world',
  };
   