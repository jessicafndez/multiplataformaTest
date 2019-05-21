import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faPencilAlt, faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import { SliderBox } from 'react-native-image-slider-box';


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
        paddingBottom: 10,
        paddingTop: 10
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
        paddingBottom: 15,
        paddingTop: 15
    },
    itemBasicInfoBlockRow: {
        flex: 1,
        flexDirection: 'row',
        paddingRight: 25,
        paddingLeft: 25,
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
        paddingBottom: 10,
    },
    itemExtraImage: {
        backgroundColor: '#EFEBEB',
        flex: 3,
        minHeight: '20%',
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    carImage: {
        flex: 3,
        width: '90%',
        height: 300,
        resizeMode: 'contain',
    },
    itemExtraCommentRow: {
        
    },  
    itemExtraComment: {
        backgroundColor: '#EFEBEB',
        flex: 1,
        flexDirection: 'row',
        paddingRight: 25,
        paddingLeft: 25,
        paddingTop: 5,
        paddingBottom: 5,
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 1,
    },
    itemExtraKm: {
        backgroundColor: '#EFEBEB',
        flex: 1,
        flexDirection: 'row',
        paddingRight: 25,
        paddingLeft: 25,
        paddingTop: 5,
        paddingBottom: 5,
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 1,
    },
    pencil: {
        color: '#f4511e'
    },
    itemSaveContent: {
        flex: 2,
        paddingRight: 25,
        paddingLeft: 25,
        backgroundColor: '#EFEBEB',
        paddingTop: 15,
        paddingBottom: 30
    },
    saveButton: {
        marginTop: 5,
        paddingTop: 15,
        paddingBottom: 15
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    imagePlaceholder: {
        flex: 4,
        width: '100%',
        backgroundColor: '#808080',
    },
    photoIcon: {
        color:  '#A0A0A0',
        fontSize: 25
    },
    welcome: {
        flex: 1,
        margin: 20,
        backgroundColor: 'orange',
        margin: 10,
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 70,
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
      //  this.images = ['../resources/img/seat_arona.jpg'];
      this.state = {
            images: [
                'https://source.unsplash.com/1024x768/?nature',
                'https://source.unsplash.com/1024x768/?water',
                'https://source.unsplash.com/1024x768/?girl',
                'https://source.unsplash.com/1024x768/?tree'
                ],
            carRef: 1
        }
        
    }

    render() {
        const { isFocused } = this.props;
        const { navigate } = this.props.navigation;
        return(
            <View style={{flex: 1, backgroundColor:'blue'}}>
                <ScrollView style={{flex: 1, backgroundColor: 'steelblue'}} showsVerticalScrollIndicator={false} >
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
                    <View style={styles.itemExtraImage}>
                        <View style={styles.imagePlaceholder}>
                            <TouchableOpacity style={styles.capture}
                                onPress={ ()=>navigate('CameraScreen', {id: this.state.carRef}) } >
                                <View>
                                    <FontAwesomeIcon style={styles.photoIcon} icon={ faCameraRetro } size="40"  />   
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.itemExtraComment}>
                        <FontAwesomeIcon style={styles.pencil} icon={ faPencilAlt } />
                        <TextInput placeholder={'Añadir comentario'}></TextInput>
                    </View>
                    <View style={styles.itemExtraKm}>
                        <Text>Km</Text>
                        <TextInput placeholder={'Añadir kilometraje'}></TextInput>
                    </View>
                    <View style={styles.itemSaveContent}>
                        <Button
                            onPress = { this._onSaveItem }
                            title = "GUARDAR"
                            color = "#f4511e"
                            style = { styles.saveButton }
                            accessibilityLabel = "Learn more about this purple button"
                            />
                    </View>
                    {/* <Text style={styles.welcome}>Welcome to React Native</Text>
   <Text style={styles.welcome}>Welcome to React Native</Text>
   <Text style={styles.welcome}>Welcome to React Native</Text>
   <Text style={styles.welcome}>Welcome to React Native</Text>
   <Text style={styles.welcome}>Welcome to React Native</Text>
   <Text style={styles.welcome}>Welcome to React Native</Text>
   <Text style={styles.welcome}>Welcome to React Native</Text>
   <Text style={styles.welcome}>Welcome to React Native</Text>
   <Text style={styles.welcome}>Welcome to React Native</Text> */}
                </ScrollView>
            </View>
        )
    }
}

AppRegistry.registerComponent('ItemScreen', () => ItemScreen);
