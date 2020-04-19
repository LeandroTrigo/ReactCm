import * as React from 'react';
import {View, Text, TouchableOpacity,FlatList, Modal, TextInput, Alert} from 'react-native';
import Styles from '../styles/Styles'
import CustomRow from '../components/CustomRow'
import Database from '../components/Database'
import Icon from 'react-native-vector-icons/FontAwesome';

var today = new Date(),date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


export default class NotasScreen extends React.Component {

  constructor(props) {
    super(props);

    this.setModalVisible = this.setModalVisible.bind(this);
    this.addNota = this.addNota.bind(this);
    this.cancelModal = this.cancelModal.bind(this);
    this.handleValor = this.handleValor.bind(this);
    this.EditarNota = this.EditarNota.bind(this);
    this.cancelEditModal = this.cancelEditModal.bind(this);
    this.handleEditValor = this.handleEditValor.bind(this);
    this.fillLista = this.fillLista.bind(this);
    this.actionOnRow = this.actionOnRow.bind(this);
    this.EliminarNota = this.EliminarNota.bind(this);

    this.state = {
      navigation: props.navigation,
      modalVisible: false,
      modalEditVisible: false,
      textEdit: "",
      textNota: "",
      idEditar: 0,
      notas: []
    };
  
  }

  setModalVisible(){
   this.setState({modalVisible: true})
  }

  addNota(){
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

  actionOnRow(item){
    this.setState({textEdit: item.descricao})
    this.setState({idEditar: item.id})
    this.setState({modalEditVisible: true})
    console.log('Selected item ' + item.id)
    console.log('Selected item ' + item.descricao)
  }

  EditarNota(){
    this.setState({modalEditVisible: false})
    Database.update(this.state.idEditar,this.state.textEdit)
    this.fillLista()
  }

  EliminarNota(){
    this.setState({modalEditVisible: false})
    Database.delete(this.state.idEditar)
    this.fillLista()
  }

  cancelEditModal(){
    this.setState({modalEditVisible: false})
  }

  
  handleEditValor(x) {
    this.setState({textEdit: x})
  }
  
  



  render(){

    return (
      <View>
        <FlatList
                style={{height: "87%"}}
                data={this.state.notas}
                renderItem={({ item }) => 

                <TouchableOpacity onPress={ () => this.actionOnRow(item)}>
                <CustomRow
                    title={item.data}
                    description={item.descricao}
                />
                </TouchableOpacity>}
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
        <TouchableOpacity  
        style={{alignSelf: "flex-end",
          padding: 5,
          marginTop: 16}}
        onPress ={this.cancelModal}>

         <Icon
                                    name="times-circle"
                                    color={"#000"}
                                    size={28}
                                />

        </TouchableOpacity>
            <Text style={{fontSize: 20,fontWeight: "bold"}}>Nova Nota</Text>
            <TextInput
            style={{height: 80,textAlign: "center"}}
            placeholder="Introduza uma Nota!"
            onChangeText={this.handleValor}
            maxLength={200}
      />
      <View style={{flexDirection: "row"}}>
            <TouchableOpacity  
        style={Styles.buttonaddnota}
        onPress ={this.addNota}>
        <Text style={Styles.ButtonsText}>
                          Adiciona Nota
                      </Text>
        </TouchableOpacity>
        </View>
        </View>
        </Modal>

        <Modal visible={this.state.modalEditVisible} transparent={true} animationType="slide">
        <View style={Styles.modalView}>
        <TouchableOpacity  
        style={{alignSelf: "flex-end",
          padding: 5,
          marginTop: 16}}
        onPress ={this.cancelEditModal}>

         <Icon
                                    name="times-circle"
                                    color={"#000"}
                                    size={28}
                                />

        </TouchableOpacity>
          
            <Text style={{fontSize: 20,fontWeight: "bold"}}>Editar Nota</Text>
            <TextInput
            style={{height: 80,textAlign: "center"}}
            value={this.state.textEdit}
            onChangeText={this.handleEditValor}
            maxLength={200}
      />
      <View style={{flexDirection: "row"}}>

        <TouchableOpacity  
        style={Styles.doublebutton1}
        onPress ={this.EliminarNota}>
        <Text style={Styles.ButtonsText}>
                         Eliminar
                      </Text>
        </TouchableOpacity>
            <TouchableOpacity  
        style={Styles.doublebutton2}
        onPress ={this.EditarNota}>
        <Text style={Styles.ButtonsText}>
                         Editar
                      </Text>
        </TouchableOpacity>
        </View>
        </View>
        </Modal>


      </View>
    );
  }}

  