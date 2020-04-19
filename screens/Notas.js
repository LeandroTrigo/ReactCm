import * as React from 'react';
import {View, Text, TouchableOpacity,FlatList, Modal, TextInput, Alert} from 'react-native';
import Styles from '../styles/Styles'
import CustomRow from '../components/CustomRow'
import Database from '../components/Database'

var today = new Date(),date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


export default class NotasScreen extends React.Component {

  constructor(props) {
    super(props);

    this.setModalVisible = this.setModalVisible.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleValor = this.handleValor.bind(this);
    this.fillLista = this.fillLista.bind(this);
    this.cancelModal = this.cancelModal.bind(this);

    this.state = {
      navigation: props.navigation,
      modalVisible: false,
      textNota: "",
      notas: []
    };
  
  }

  setModalVisible(){
    console.log("ABRE POPUP")
   this.setState({modalVisible: true})
  }

  hideModal(){
    this.setState({modalVisible: false})
    Database.add(this.state.textNota,date)
    this.fillLista()
  }

  cancelModal(){
    this.setState({modalVisible: false})
  }

  handleValor(e) {
    this.state.textNota = e; 
  }

  fillLista(){
     Database.select().then(res => {
      this.setState({notas: res.rows._array})
      console.log(this.state.notas)
    }).catch(err => console.log(err));
  }

  componentDidMount(){
    this.fillLista()
  }



  render(){

    return (
      <View>
        <FlatList
                style={{height: "87%"}}
                data={this.state.notas}
                renderItem={({ item }) => 

                <TouchableWithoutFeedback onPress={ () => console.log("YES")}>
                <CustomRow
                    title={item.data}
                    description={item.descricao}
                />
                </TouchableWithoutFeedback>}
            />
        <TouchableOpacity  
        style={Styles.buttonaddnota}
        onPress ={this.setModalVisible}>
        <Text style={Styles.ButtonsText}>
                          Adiciona Nova Nota
                      </Text>
        </TouchableOpacity>

        <Modal visible={this.state.modalVisible} transparent={true} animationType="slide">
        <View style={Styles.modalView}>
            <Text style={{fontSize: 20,fontWeight: "bold"}}>Nova Nota</Text>
            <TextInput
            style={{height: 80,textAlign: "center"}}
            placeholder="Introduza uma Nota!"
            onChangeText={this.handleValor}
            maxLength={200}
      />
      <View style={{flexDirection: "row"}}>
        <TouchableOpacity  
        style={Styles.doublebutton1}
        onPress ={this.cancelModal}>
        <Text style={Styles.ButtonsText}>
                          Cancelar
                      </Text>
        </TouchableOpacity>
            <TouchableOpacity  
        style={Styles.doublebutton2}
        onPress ={this.hideModal}>
        <Text style={Styles.ButtonsText}>
                          Adiciona Nota
                      </Text>
        </TouchableOpacity>
        </View>
        </View>
        </Modal>


      </View>
    );
  }}

  