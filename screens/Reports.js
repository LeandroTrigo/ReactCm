import React from 'react';
import { View, Text, FlatList, TouchableOpacity} from "react-native";
import axios from 'axios';
import CustomRow from '../components/CustomRowReports';

export default class Reports extends React.Component {

    constructor(props) {
        super(props);

        this.getPontosUser = this.getPontosUser.bind(this);
        this.actionOnRow = this.actionOnRow.bind(this);

        this.state = {
            navigation: props.navigation,
            idUser: props.idUser,
            Nome: props.Nome,
            pontosUser: []
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
                this.setState({pontosUser: response.data})
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
    }

    actionOnRow(item){
        console.log("Dados " + item)
    }

    render() {

        return (
            <View>
              <FlatList
                style={{height: "100%"}}
                data={this.state.pontosUser}
                renderItem={({ item }) => 

                <TouchableOpacity onPress={ () => this.actionOnRow(item)}>
                <CustomRow
                    title={item.Titulo}
                    description={item.Descricao}
                    image={item.Imagem}
                />
                </TouchableOpacity>}
            />
            </View>
        )
    }

}