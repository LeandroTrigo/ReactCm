import React from 'react';
import { View, StatusBar, TouchableOpacity, Image, Modal, Text, TextInput } from 'react-native';
import floatActionButton from '../assets/plus.png'
import Styles from '../styles/Styles'
import MapView from 'react-native-maps';
import * as  Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios'
import Languages from '../components/Language'

export default class Report extends React.Component {

  constructor(props) {
    super(props);

    this.getLocation = this.getLocation.bind(this);
    this.openPopUpAddMarker = this.openPopUpAddMarker.bind(this);
    this.closePopUp = this.closePopUp.bind(this);
    this.handleTitulo = this.handleTitulo.bind(this);
    this.handleDescricao = this.handleDescricao.bind(this);
    this.addMarker = this.addMarker.bind(this);
    this.getPermissionCamera = this.getPermissionCamera.bind(this);
    this._pickImage = this._pickImage.bind(this);
    this.getMarkers = this.getMarkers.bind(this);
    this.calloutPress = this.calloutPress.bind(this);
    this.closeImage = this.closeImage.bind(this);
    this.addPontoLongPress = this.addPontoLongPress.bind(this);

    this.state = {
      navigation: props.navigation,
      idUser: props.idUser,
      Nome: props.Nome,
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0,
      longitudeDelta: 0,
      modalVisible: false,
      gps: false,
      tituloMarker: "",
      descricaoMarker: "",
      markers: [],
      image: null,
      image64: "",
      imageVisible: false,
      imageVisibleSource: "",
    };

  }

  getLocation() {
    Permissions.askAsync(Permissions.LOCATION).then((resultado) => {
      if (resultado.status == "granted") {

        Location.getProviderStatusAsync().then((resultado) => {

          if (resultado.locationServicesEnabled && resultado.gpsAvailable) {
            Location.getCurrentPositionAsync({ enableHighAccuracy: true, accuracy: Location.Accuracy.High }).then((localizacao) => {
              this.setState({gps: true})
              this.setState({ latitude: localizacao.coords.latitude, longitude: localizacao.coords.longitude, latitudeDelta: 6, longitudeDelta: 2 })

            })
          } else {
            console.log("Erro ao Obter Coordenadas!")
            this.setState({gps: false})
          }
        })

      } else {
        console.log("Permissão nao dada!")
      }
    })
  }

  getPermissionCamera() {
    Permissions.askAsync(Permissions.CAMERA_ROLL).then((resultado) => {
      if (status !== 'granted') {
        alert(Languages.t('camera'));
      }
    })
  }


  openPopUpAddMarker() {

    this.getLocation();

    console.log(this.state.gps)

    if(this.state.gps == true){
      this.setState({ modalVisible: true })
    }
    else{
      alert(Languages.t('nogps'))
    }

  }

  closePopUp() {
    this.setState({ modalVisible: false })
  }

  closeImage() {
    this.setState({ imageVisible: false })
  }

  componentDidMount() {
    this.getLocation();
    this.getPermissionCamera();
    this.getMarkers();
  }

  handleTitulo(e) {
    this.setState({ tituloMarker: e })
  }

  handleDescricao(e) {
    this.setState({ descricaoMarker: e })
  }


  addMarker() {
    axios.post("http://192.168.1.66:5000/pontos/criarponto", {
      Titulo: this.state.tituloMarker,
      Descricao: this.state.descricaoMarker,
      IdUtilizador: this.state.idUser,
      Latitude: this.state.latitude,
      Longitude: this.state.longitude,
      Imagem: this.state.image64,
    })
      .then(function (response) {
        console.log(response)
        this.setState({ modalVisible: false })
        alert(Languages.t('ponto'))
        this.getMarkers()
      }.bind(this))
      .catch(function (error) {
        alert(Languages.t('ponton'))
        console.log(error);
      });
 }

  getMarkers() {

    axios.get('http://192.168.1.66:5000/pontos/getpontos')
      .then(function (response) {
        this.setState({ markers: response.data })
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });


  }

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        base64: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
        this.setState({ image64: result.base64 })
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  }

  calloutPress(marker) {
    this.setState({ imageVisibleSource: "http://192.168.1.66:5000/" + marker.Imagem })
    this.setState({ imageVisible: true })
    console.log("Imagem : " + "http://192.168.1.66:5000/" + marker.Imagem);
  }


  addPontoLongPress(info){

    this.getLocation();

    console.log(this.state.gps)

    if(this.state.gps == false){

    let { nativeEvent } = info

   console.log(nativeEvent.coordinate.latitude);
   this.setState({latitude: nativeEvent.coordinate.latitude})
   this.setState({longitude: nativeEvent.coordinate.longitude})
   this.setState({modalVisible: true})

    }else{
      alert(Languages.t('yesgps'))
    }

  }


  render() {



    console.log("ID USER: " + this.state.idUser)
    console.log("NOME USER: " + this.state.Nome)
    console.log("Latitude atual: " + this.state.latitude)
    console.log("Longitude atual: " + this.state.longitude)

    return (
      <View style={{ flex: 1 }}>
        <MapView style={Styles.mapStyle}
          onLongPress={this.addPontoLongPress}
          coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude }} >

          {this.state.markers.map(marker => (
            <Marker
              onCalloutPress={() => this.calloutPress(marker)}
              coordinate={{ latitude: marker.Latitude, longitude: marker.Longitude }}
              title={marker.Titulo}
              description={marker.Descricao}
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

              <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>{Languages.t('problem')}</Text>


              <TouchableOpacity
                onPress={this._pickImage}>
                <View
                  style={{ backgroundColor: "#000", height: 200, width: 200, marginBottom: 16 }}>
                  {this.state.image && <Image source={{ uri: this.state.image }} style={{ width: 200, height: 200 }} />}
                </View>
              </TouchableOpacity>



              <View style={Styles.cardViewProblema}>
                <TextInput
                  style={{ height: 40, textAlign: "center", color: "#fff" }}
                  placeholder={Languages.t('titulop')}
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
                  placeholder={Languages.t('descricaop')}
                  placeholderTextColor="#fff"
                  value={this.state.descricaoMarker}
                  onChangeText={this.handleDescricao}
                  maxLength={150}
                />
              </View>
              <View style={{ flexDirection: "row" }}>


                <TouchableOpacity
                  style={Styles.buttonaddnota}
                  onPress={this.addMarker}>
                  <Text style={Styles.ButtonsText}>
                    {Languages.t('addp')}
                      </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

          <Modal visible={this.state.imageVisible} transparent={true} animationType="slide">
            <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
              <View style={Styles.modalView}>
                <TouchableOpacity
                  style={{
                    alignSelf: "flex-end",
                    paddingTop: 10,
                    paddingBottom: 10
                  }}
                  onPress={this.closeImage}>

                  <Icon
                    name="times-circle"
                  color={"#000"}
                  size={28}
                />

              </TouchableOpacity>
              <View style={{borderColor: 'blue', borderWidth: 1}}>
                <Image
                  source={{uri: this.state.imageVisibleSource}}
                  style={{width: 200, height: 200}}
                ></Image>
              </View>
            </View>
          </View>

        </Modal>

      </View>
    )
  }

}