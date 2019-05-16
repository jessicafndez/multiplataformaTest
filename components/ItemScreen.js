import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button  } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 4,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 1,
        paddingTop: 20,
        paddingBottom: 1,
        backgroundColor: '#FFFFFF',
    },
    textStyle: {
        fontSize: 30,
        color: '#000000',
        fontWeight: 'bold',
        paddingTop:10
    },
    itemHeaderTitle: {
        fontSize: 17,
        color: '#A0A0A0',
        fontWeight: 'bold',
    },
    itemHeaderText: {
        fontSize: 20,
        color: '#000000',
        fontWeight: 'bold',
    },
    containerHeader: {
        width: '50%'
    },
    containerInfo: {
        backgroundColor: '#E0E0E0',
        flex: 8

    },
    containerBtnSave: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 2
    }
});


export default class ItemScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return(
            <View style={{flexDirection: 'column'}}>
                <View style={styles.container}>
                    <Text style={styles.textStyle}>3567 NSA</Text>
                </View>
                <View style={{flex: 4, padding: 20, paddingTop:30, flexDirection: 'column'}}>
                    <View style={{flex: 2, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                        <View style={styles.containerHeader}>
                            <Text style={styles.itemHeaderTitle}>MARCA</Text>
                            <Text style={styles.itemHeaderText}>Seat</Text>
                        </View>
                        <View style={styles.containerHeader}>
                            <Text style={styles.itemHeaderTitle}>ESTADO</Text>
                            <Text style={styles.itemHeaderText}>Bueno</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.containerInfo}>
                    <View style={styles.containerImage}>
                        <View style={{backgroundColor: '#style', flex:2}}></View>
                    </View>
                    <View style={styles.containerDescriptions}>
                        <View>
                            <Text>Añadir comentario</Text>
                        </View>
                        <View>
                            <Text>Añadir kilometraje</Text>
                        </View>
                    </View>
                    <View style={styles.containerBtnSave}>
                        <Button title="Guardar" color="#FF6666"></Button>
                    </View>
                </View>
            </View>
        )
    }
}


AppRegistry.registerComponent('ItemScreen', () => FlexDirectionBasics);
