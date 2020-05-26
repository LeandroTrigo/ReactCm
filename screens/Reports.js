import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, TextInput, Image } from "react-native";
import axios from 'axios';
import Styles from '../styles/Styles'
import Languages from '../components/Language'
import CustomRow from '../components/CustomRowReports';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import Encrypt from '../components/Encryptor'

export default class Reports extends React.Component {

    constructor(props) {
        super(props);

        this.getPontosUser = this.getPontosUser.bind(this);
        this.actionOnRow = this.actionOnRow.bind(this);
        this._pickImage = this._pickImage.bind(this);
        this.closePopUp = this.closePopUp.bind(this);
        this.handleTitulo = this.handleTitulo.bind(this);
        this.handleDescricao = this.handleDescricao.bind(this);
        this.editMarker = this.editMarker.bind(this);
        this.deleteMarker = this.deleteMarker.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);

        this.state = {
            navigation: props.navigation,
            idUser: props.idUser,
            Nome: props.Nome,
            pontosUser: [],
            modalVisible: false,
            pontoeditar: -1,
            imageeditar: "",
            image64: "",
            tituloeditar: "",
            descricaoeditar: "",
        };

    }

    componentDidMount() {
        this.getPontosUser()
    }

    getPontosUser() {


        console.log("ID USER: " + this.state.idUser)
        console.log("NOME USER: " + this.state.Nome)

        axios.get('http://192.168.1.66:5000/pontos/getpontosuser/' + this.state.idUser)
            .then(function (response) {
                console.log(response.data)
                this.setState({ pontosUser: response.data })
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
    }

    actionOnRow(item) {
        this.setState({ pontoeditar: item.IdPonto })
        this.setState({ imageeditar: "http://192.168.1.66:5000/" + item.Imagem })
        this.setState({ tituloeditar: item.Titulo })
        this.setState({ descricaoeditar: item.Descricao })
        this.setState({ modalVisible: true })
    }

    closePopUp() {
        this.setState({ modalVisible: false })
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
                this.setState({ imageeditar: result.uri });
                this.setState({ image64: result.base64 })
            }

            console.log(result);
        } catch (E) {
            console.log(E);
        }
    }

    handleTitulo(e) {
        this.setState({ tituloeditar: e })
    }

    handleDescricao(e) {
        this.setState({ descricaoeditar: e })
    }

    forceUpdateHandler(){
        this.forceUpdate();
      };

    editMarker() {

        axios.put("http://192.168.1.66:5000/pontos/updatepontos/" + this.state.pontoeditar, {
            Titulo: Encrypt.encrypt(this.state.tituloeditar),
            Descricao: Encrypt.encrypt(this.state.descricaoeditar),
            Imagem: this.state.image64,
        })
            .then(function (response) {
                console.log(response)
                this.setState({ modalVisible: false })
                alert("Ponto Editado com Sucesso!")
                this.getPontosUser()
            }.bind(this))
            .catch(function (error) {
                alert("Erro ao Editar Ponto!")
                console.log(error);
            });

    }


    deleteMarker() {
        axios.delete("http://192.168.1.66:5000/pontos/deletepontos/" + this.state.pontoeditar)
            .then(function (response) {
                console.log(response)
                this.setState({ modalVisible: false })
                alert("Ponto Apagado com Sucesso!")
                this.getPontosUser()
            }.bind(this))
            .catch(function (error) {
                alert("Erro ao Apagar Ponto!")
                console.log(error);
            });
    }

    render() {

        return (
            <View>
                <FlatList
                    style={{ height: "100%" }}
                    data={this.state.pontosUser}
                    renderItem={({ item }) =>

                        <TouchableOpacity onPress={() => this.actionOnRow(item)}>
                            <CustomRow
                                title={item.Titulo}
                                description={item.Descricao}
                                image={item.Imagem}
                            />
                        </TouchableOpacity>}
                />

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

                            <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>Editar Problema</Text>


                            <TouchableOpacity
                                onPress={this._pickImage}>
                                <View
                                    style={{ backgroundColor: "#000", height: 200, width: 200, marginBottom: 16 }}>
                                    {this.state.imageeditar && <Image source={{ uri: this.state.imageeditar }} style={{ width: 200, height: 200 }} />}
                                </View>
                            </TouchableOpacity>



                            <View style={Styles.cardViewProblema}>
                                <TextInput
                                    style={{ height: 40, textAlign: "center", color: "#fff" }}
                                    placeholderTextColor="#fff"
                                    value={this.state.tituloeditar}
                                    onChangeText={this.handleTitulo}
                                    maxLength={30}
                                />
                            </View>
                            <View style={Styles.cardViewProblema}>
                                <TextInput
                                    style={{ height: 40, textAlign: "center", color: "#fff" }}
                                    multiline={true}
                                    numberOfLines={4}
                                    placeholderTextColor="#fff"
                                    value={this.state.descricaoeditar}
                                    onChangeText={this.handleDescricao}
                                    maxLength={150}
                                />
                            </View>
                            <View style={{ flexDirection: "row" }}>

                                <TouchableOpacity
                                    style={Styles.doublebutton1}
                                    onPress={this.deleteMarker}>
                                    <Text style={Styles.ButtonsText}>
                                        Apagar Ponto
            </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={Styles.doublebutton2}
                                    onPress={this.editMarker}>
                                    <Text style={Styles.ButtonsText}>
                                        Editar Ponto
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