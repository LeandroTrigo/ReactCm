import React from 'react';
import { View, StatusBar, TouchableOpacity, Image, Modal, Text, TextInput } from 'react-native';
import floatActionButton from '../assets/plus.png'
import Styles from '../styles/Styles'
import MapView from 'react-native-maps';
import * as  Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Report extends React.Component {

  constructor(props) {
    super(props);

    this.getLocation = this.getLocation.bind(this);
    this.openPopUpAddMarker = this.openPopUpAddMarker.bind(this);
    this.closePopUp = this.closePopUp.bind(this);
    this.handleTitulo = this.handleTitulo.bind(this);
    this.handleDescricao = this.handleDescricao.bind(this);
    this.addMarker = this.addMarker.bind(this);

    this.state = {
      navigation: props.navigation,
      idUser: props.idUser,
      Nome: props.Nome,
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0,
      longitudeDelta: 0,
      modalVisible: false,
      tituloMarker: "",
      descricaoMarker: "",
      markers: []
    };

  }

  getLocation() {
    Permissions.askAsync(Permissions.LOCATION).then((resultado) => {
      if (resultado.status == "granted") {

        Location.getProviderStatusAsync().then((resultado) => {

          if (resultado.locationServicesEnabled && resultado.gpsAvailable) {
            Location.getCurrentPositionAsync({ enableHighAccuracy: true, accuracy: Location.Accuracy.High }).then((localizacao) => {

              this.setState({ latitude: localizacao.coords.latitude, longitude: localizacao.coords.longitude, latitudeDelta: 6, longitudeDelta: 2 })

            })
          } else {
            console.log("Erro ao Obter Coordenadas!")
          }
        })

      } else {
        alert("Permissão nao dada!")
      }
    })
  }


  openPopUpAddMarker() {
    this.setState({ modalVisible: true })
    console.log("CRIAR MARKER")
  }

  closePopUp() {
    this.setState({ modalVisible: false })
  }

  componentDidMount() {
    this.getLocation();
  }

  handleTitulo(e){
    this.setState({tituloMarker: e})
  }

  handleDescricao(e){
    this.setState({descricaoMarker: e})
  }

  addMarker(){
    this.state.markers.push({latitude: this.state.latitude,longitude: this.state.longitude, title: this.state.tituloMarker, description: this.state.descricaoMarker})
    this.setState({ modalVisible: false })
    }

/*
  <Marker
  coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }}
  title="Marker Title"
  description="Marker Description"
/>
*/
  render() {


    console.log("ID USER: " + this.state.idUser)
    console.log("NOME USER: " + this.state.Nome)
    console.log("Latitude atual: " + this.state.latitude)
    console.log("Longitude atual: " + this.state.longitude)

    return (
      <View style={{ flex: 1 }}>
        <MapView style={Styles.mapStyle}
          coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }} >
         
    {this.state.markers.map(marker => (
      console.log(marker),
    <Marker
      coordinate={{latitude: marker.latitude,longitude: marker.longitude}}
      title={marker.title}
      description={marker.description}
    />
    ))}

        </MapView>

        <View style={Styles.floatButtonBackground}>
          <TouchableOpacity

            onPress={this.openPopUpAddMarker}>
            <Image
              source={floatActionButton}
              style={Styles.floatButton}>

            </Image>

          </TouchableOpacity>
        </View>



        <Modal visible={this.state.modalVisible} transparent={true} animationType="slide">
          <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
            <View style={Styles.modalView}>
              <TouchableOpacity
                style={{
                  alignSelf: "flex-end",
                  padding: 5,
                  marginTop: 16
                }}
                onPress={this.closePopUp}>

                <Icon
                  name="times-circle"
                  color={"#000"}
                  size={28}
                />

              </TouchableOpacity>

              <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>Novo Problema</Text>

              <View
              style={{backgroundColor: "#000",height:300, width: 200, marginBottom: 16}}>

              </View>


              <View style={Styles.cardViewProblema}>
                <TextInput
                  style={{ height: 40, textAlign: "center", color: "#fff"}}
                  placeholder="Insira um Titulo"
                  placeholderTextColor="#fff"
                  value={this.state.tituloMarker}
                  onChangeText={this.handleTitulo}
                  maxLength={30}
                />
              </View>
              <View style={Styles.cardViewProblema}>
                <TextInput
                  style={{ height: 40, textAlign: "center", color: "#fff" }}
                  multiline={true}
                  numberOfLines={4}
                  placeholder="Insira uma Descrição"
                  placeholderTextColor="#fff"
                  value={this.state.descricaoMarker}
                  onChangeText={this.handleDescricao}
                  maxLength={150}
                />
              </View>
              <View style={{ flexDirection: "row" }}>


                <TouchableOpacity
                  style={Styles.buttonaddnota}
                  onPress ={this.addMarker}>
                  <Text style={Styles.ButtonsText}>
                    Adicionar Problema
                      </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

      </View>
    )
  }

}