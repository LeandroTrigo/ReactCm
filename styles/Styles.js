import { StyleSheet } from "react-native";

export default StyleSheet.create({
    Logo: {
        height: 300,
        width: 300,
        marginTop: 100
    },
    Title: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#164094',
        marginBottom: 16
    },
    Buttons: {
        marginTop: 16,
        backgroundColor: '#164094',
        width: 200,
        padding: 10,
    },
    ButtonsText:{
        color: '#fff',
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"
    },
    drawerContent: {
        flex: 1,
    },
    userInfoSelection: {
        padding: 20,
        backgroundColor: '#090459'
    },
    username: {
        fontSize: 16,
        marginTop: 3,
        color: '#fff',
        fontWeight: "bold",
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: "center"
    },
    userprofile: {
        fontSize: 15,
        marginLeft: 10
    },
    buttonnav: {
        alignItems: "center",
        marginLeft: 16
      },
    buttonaddnota: {
        marginTop: 16,
        marginLeft:16,
        backgroundColor: '#164094',
        width: "90%",
        padding: 10,
    },
    doublebutton1: {
        marginTop: 16,
        backgroundColor: '#164094',
        width: "50%",
        padding: 10,
    },
    doublebutton2: {
        marginTop: 16,
        backgroundColor: '#164094',
        marginLeft: 5,
        width: "50%",
        padding: 10,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
    }}
});