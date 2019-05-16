import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TextInput  } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

const styles = StyleSheet.create({
    containerItem: {
        flex: 3,
        fontSize: 30,
        backgroundColor: '#CC0066'
    },
    itemMatriculaBlock: {
        flex: 1,
        backgroundColor: '#F5F5F5',  
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 1,
    },
    itemMatriculaBlockText: {
        textAlign: 'center', 
        fontWeight: 'bold', 
        fontSize: 25,
    },
    itemBasicInfoBlock: {
        flex: 2,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
    },
    itemBasicInfoBlockRow: {
        flex: 1,
        flexDirection: 'row',
        paddingRight: 25,
        paddingLeft: 25,
        paddingTop: 10,
        paddingBottom: 10,
    },
    itemBasicInfoBlockRowColumn: {
        width: '50%',
    },
    itemBasicInfoTitle: {
        fontWeight: 'bold', 
        fontSize: 16,
        color: '#C0C0C0'
    },
    itemBasicInfoSubtitle: {
        fontWeight: 'bold', 
        fontSize: 17,
    },
    itemExtaInfo: {
        flex: 5,
        backgroundColor: '#EFEBEB',
        paddingRight: 25,
        paddingLeft: 25,
        paddingTop: 10,
        paddingBottom: 10,
    },
    itemExtraImage: {
       flex: 3
    },
    carImage: {
        flex: 2,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    itemExtraCommentRow: {
        
    },  
    itemExtraComment: {
        flex: 1,
        flexDirection: 'row'
    },
    itemExtraKm: {
        flex: 1,
        flexDirection: 'row'
    },
    pencil: {
        color: '#f4511e'
    }
});
styles.navigator


export default class ItemScreen extends Component {
    static navigationOptions = {
        title: 'Recogida',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return(
            <View style={{ flex: 1, flexDirection: 'column',  }}>
                <View style={styles.itemMatriculaBlock}>
                    <Text style={styles.itemMatriculaBlockText}>3567 NSA</Text>
                </View>
                <View style={styles.itemBasicInfoBlock}>
                    <View style={styles.itemBasicInfoBlockRow}>
                        <View style={styles.itemBasicInfoBlockRowColumn}>
                            <Text style={styles.itemBasicInfoTitle}>MARCA</Text>
                            <Text style={styles.itemBasicInfoSubtitle}>Seat</Text>
                        </View>
                        <View style={styles.itemBasicInfoBlockRowColumn}>
                            <Text style={styles.itemBasicInfoTitle}>ESTADO</Text>
                            <Text style={styles.itemBasicInfoSubtitle}>Bueno</Text>
                        </View>
                    </View>
                    <View style={styles.itemBasicInfoBlockRow}>
                        <View style={styles.itemBasicInfoBlockRowColumn}>
                            <Text style={styles.itemBasicInfoTitle}>MODELO</Text>
                            <Text style={styles.itemBasicInfoSubtitle}>Arona Xcellence</Text>
                        </View>
                        <View style={styles.itemBasicInfoBlockRowColumn}>
                            <Text style={styles.itemBasicInfoTitle}>ENTREGA</Text>
                            <Text style={styles.itemBasicInfoSubtitle}>Autotaller Fonollar</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.itemExtaInfo}>
                    <View style={styles.itemExtraImage}>
                        <Image style={styles.carImage} 
                            source={require('../resources/img/seat_arona.jpg')} />
                    </View>
                    <View style={styles.itemExtraComment}>
                        <FontAwesomeIcon style={styles.pencil} icon={ faPencilAlt } />
                        <TextInput placeholder={'Añadir comentario'}></TextInput>
                    </View>
                    <View style={styles.itemExtraKm}>
                        <Text>Km</Text>
                        <TextInput placeholder={'Añadir kilometraje'}></TextInput>
                    </View>
                </View>
              </View>
        )
    }
}


AppRegistry.registerComponent('ItemScreen', () => FlexDirectionBasics);
