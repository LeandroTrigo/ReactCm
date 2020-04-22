import * as React from 'react';
import { View, Text, Image, TextInput, CheckBox, TouchableOpacity } from 'react-native';
import LoginImage from '../assets/login.png'
import Styles from '../styles/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Languages from '../components/Language'

export default class Login extends React.Component {

  constructor(props) {
    super(props);

    this.enterMainPage = this.enterMainPage.bind(this)

    this.state = {
      navigation: props.navigation,
    };

  }


  enterMainPage(){
    this.state.navigation.navigate("MainPage");
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
            onChangeText={this.handleValor}
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
            onChangeText={this.handleValor}
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
            checkedColor='red'

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