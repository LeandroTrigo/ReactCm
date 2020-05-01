import * as React from 'react';
import { View, Text, Image, TextInput, CheckBox, TouchableOpacity } from 'react-native';
import LoginImage from '../assets/login.png'
import Styles from '../styles/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Languages from '../components/Language'
import axios from 'axios'
import jwt from 'jwt-decode'
import Encrypt from '../components/Encryptor'

export default class Login extends React.Component {

  constructor(props) {
    super(props);

    this.enterMainPage = this.enterMainPage.bind(this);
    this.usernameHandler = this.usernameHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
    this.goToMainPage = this.goToMainPage.bind(this);
    this.storeData = this.storeData.bind(this);
    this.getData = this.getData.bind(this);

    this.state = {
      navigation: props.navigation,
      handleIdUser: props.handleIdUser,
      handleNomeUser: props.handleNomeUser,
      email: "",
      password: "",
      checked: false
    };

    this.getData();

  }

  usernameHandler(e){
    this.setState({email: e})
  }

  passwordHandler(e){
    this.setState({password: e})
  }


  enterMainPage(){
    console.log("USERNAME: " + this.state.email + " PASSWORD: " +this.state.password);
    
    let emaile = Encrypt.encrypt(this.state.email)
    let passe = Encrypt.encrypt(this.state.password)
   
    console.log("USERNAME: " + emaile + " PASSWORD: " + passe);

    axios.post("http://192.168.1.66:5000/utilizador/login", {
      Email: emaile,
      Password: passe
    })
    .then(function (response) {
      var token = response.data;
      var decoded = jwt(token);
      console.log(decoded);
      alert(Languages.t('logins'))
      this.goToMainPage(decoded);
    }.bind(this))
    .catch(function (error) {
      alert(Languages.t('loginn'))
      console.log(error);
    });
  }

  goToMainPage(token){
      this.state.navigation.navigate("MainPage");

      this.state.handleIdUser(token.IdUtilizador);
      this.state.handleNomeUser(token.Nome)

      if(this.state.checked == true){
        this.storeData()
      }
  }

  storeData = async () => {
   
    let storeEmail = [ "email", this.state.email ];
    let storePassword = [ "password", this.state.password ];

    try {
      await AsyncStorage.multiSet([storeEmail, storePassword])
    } catch(e) {
      console.log("ERRO AO GUARDAR");
    }
    console.log("Gravei");
  }

  getData = async () => {
    try {
      this.setState({email:  await AsyncStorage.getItem("email")});
      this.setState({password: await AsyncStorage.getItem("password")})
    } catch(e) {
      console.log("ERRO AO OBTER");
    }
  }


  render() {
    return (
      <View>
        <View>
          <Image
            source={LoginImage}
            style={Styles.imageLogin}
          ></Image>
          <Text
            style={Styles.TitleLogin}>
            Login</Text>
        </View>
        <View style={Styles.cardView}>
          <TextInput
            style={{ height: 50, color: "#fff", fontWeight: "bold", width: "80%" }}
            placeholder={'Email'}
            placeholderTextColor={'#fff'}
            keyboardType="email-address"
            onChangeText={this.usernameHandler}
            maxLength={200}
          />
          <Icon
            style={{ marginTop: 15 }}
            name="user"
            color={"#fff"}
            size={20}
          />
        </View>
        <View style={Styles.cardView}>
          <TextInput
            style={{ height: 50, color: "#fff", fontWeight: "bold", width: "80%" }}
            placeholder={'Password'}
            placeholderTextColor={'#fff'}
            secureTextEntry
            onChangeText={this.passwordHandler}
            maxLength={200}
          />
          <Icon
            style={{ marginTop: 15 }}
            name="lock"
            color={"#fff"}
            size={20}
          />
        </View>

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10
          }}
        >
          <CheckBox
            checked={this.state.checked}
            onPress={() => this.setState({checked: !this.state.checked})}
          ></CheckBox>
          <Text style={{ fontWeight: "bold", color: '#164094' }}>Lembra-me</Text>
        </View>
        <View style={{justifyContent: "center", alignSelf: "center"}}>
          <TouchableOpacity
            style={Styles.Buttons}
            onPress={this.enterMainPage}
          >
            <Text style={Styles.ButtonsText}>
            {Languages.t('entrar')}
                      </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}