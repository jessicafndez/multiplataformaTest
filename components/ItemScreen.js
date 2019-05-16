import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View  } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 4,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 1,
        paddingTop: 20,
        paddingBottom: 1,
        backgroundColor: '#FF6666',
    },
    textStyle: {
        fontSize: 30,
        color: '#FFFFFF',
        fontWeight: 'bold',
    }
});



export default class ItemScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return(
            <View>
                <View style={styles.container}>
                    <Text style={styles.textStyle}>3567 NSA</Text>
                </View>
            </View>
        )
    }
}


AppRegistry.registerComponent('ItemScreen', () => ItemScreen);
