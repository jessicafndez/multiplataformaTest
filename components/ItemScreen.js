import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TextInput, Button, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faPencilAlt, faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import { SliderBox } from 'react-native-image-slider-box';

const styles = StyleSheet.create({
    containerItem: {
        flex: 3,
        fontSize: 30,
        backgroundColor: '#FFFAFA'
    },
    itemMatriculaBlock: {
        flex: 1,
        backgroundColor: '#FFFAFA',  
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
        flex: 3,
        backgroundColor: '#FFFAFA',
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
        backgroundColor: '#FFFAFA',
        paddingRight: 25,
        paddingLeft: 25,
        paddingBottom: 10,
    },
    itemExtraImage: {
        backgroundColor: '#EFEBEB',
        flex: 5,
        // minHeight: '40%',
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
    itemExtraComment: {
        backgroundColor: '#FFFAFA',
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
        backgroundColor: '#FFFAFA',
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
        flex: 1,
        paddingRight: 25,
        paddingLeft: 25,
        backgroundColor: '#FFFAFA',
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
        justifyContent: 'center',
        alignItems: 'center',
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

});


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

    componentDidMount() {
        let carsList =  [
            { modelo: 'Arona', matricula: '0000AAA', estado: "Deplorable", image:require('../resources/img/arona.jpg'), id: 1 },
            { modelo: 'Ibiza', matricula: '0000BBB', estado: "Bueno", image: null, id: 2 },
            { modelo: 'Toledo', matricula: '0000CCC', estado: "Malo", image:require('../resources/img/toledo.jpg'), id: 3 },
            { modelo: 'Ibiza', matricula: '0000DDD', estado: "Malo", image:require('../resources/img/ibiza.jpg'), id: 4 },
            { modelo: 'Mii', matricula: '0000EEE', estado: "Mejorable", image:require('../resources/img/mii.jpg'), id: 5 },
            { modelo: 'León', matricula: '0000FFF', estado: "Normal", image:require('../resources/img/leon.jpg'), id: 6 },
            { modelo: 'Alhambra', matricula: '0000GGG', estado: "Bueno", image:require('../resources/img/alhambra.jpg'), id: 7 },
            { modelo: 'Ibiza', matricula: '000HHH', estado: "Accidentado", image:require('../resources/img/ibiza.jpg'), id: 8 },
            { modelo: 'Toledo', matricula: '0000III', estado: "Mejorable", image:require('../resources/img/toledo.jpg'), id: 9 },
            { modelo: 'Arona', matricula: '0000JJJ', estado: "Bueno", image:require('../resources/img/arona.jpg'), id: 10 },
          ];
  
        const itemId = this.props.navigation.getParam('id', 'NO-ID');
        this.setState({ item: carsList[itemId] });

        console.log("component did mpount");
    }

    render() {
        const { isFocused } = this.props;
        const { navigate } = this.props.navigation;
        
        if(this.state) {
            const { item } = this.state.item;
            
            if(item) {
                console.log("item exists");
            }
            else {
                console.log("item doesnt exists");
            }
        }
        else {
            item = null;
        }
        // console.log("Item: ");
        // console.log(item);

        // if(item) {
        //     console.log("item exists");
        // }
        // else {
        //     console.log("item doesnt exists");
        // }
    
        return(
            <View style={{flex: 1, backgroundColor:'#D7DDE2'}}>
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
                        {item && (
                            <ImageBackground source={item.image} style={{width:'100%', height: '100%'}}></ImageBackground>
                        )}
                        {!item && (
                            <Text>Hello World</Text>
                        )}
                        {/* {!item && (
                            <TouchableOpacity style={styles.capture}
                                onPress={ ()=>navigate('CameraScreen', {id: this.state.carRef}) } >
                                <View>
                                    <FontAwesomeIcon style={styles.photoIcon} icon={ faCameraRetro } size="40"  />   
                                </View>
                            </TouchableOpacity>
                        )} */}
                    </View>
                    <View style={{flex:1}}>
                        <TouchableOpacity style={styles.capture}
                            onPress={ ()=>navigate('CameraScreen_good', {id: this.state.carRef}) } >
                            <View>
                                <FontAwesomeIcon style={styles.photoIcon} icon={ faCameraRetro } size="40"  />   
                            </View>
                        </TouchableOpacity>
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
                </ScrollView>
            </View>
        )
    }
}


AppRegistry.registerComponent('ItemScreen', () => ItemScreen);
