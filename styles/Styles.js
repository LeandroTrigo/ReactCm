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
    ButtonsText: {
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
        marginLeft: 16,
        backgroundColor: '#164094',
        width: "90%",
        padding: 10,
    },
    buttonaddnotaLand: {
        marginTop: 16,
        backgroundColor: '#164094',
        width: "95%",
        alignSelf: "center",
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
    
    doublebutton2Land: {
        marginTop: 16,
        backgroundColor: '#164094',
        justifyContent: "center",
        marginLeft: 5,
        width: "50%",
        padding: 10,
    },
    modalView: {
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 20,
        backgroundColor: "white",
        borderRadius: 20,
        paddingLeft: 30,
        paddingBottom: 30,
        paddingRight: 30,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
    },
    modalViewLand: {
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 20,
        width: "80%",
        backgroundColor: "white",
        borderRadius: 20,
        paddingLeft: 30,
        paddingBottom: 30,
        paddingRight: 30,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
    },
    imageLogin: {
        height: 200,
        width: 200,
        marginTop: 80,
        justifyContent: "center",
        alignSelf: "center"
    },
    imageLoginLand: {
        marginTop: 30,
        marginLeft: 70,
        height: 200,
        width: 200,
    },
    TitleLogin: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#164094',
        marginTop: 16,
        marginBottom: 16,
        justifyContent: "center",
        alignSelf: "center"
    },
    TitleLoginLand: {
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: 130,
        color: '#164094',
        marginTop: 16,
    },
    cardView: {
        flexDirection: "row",
        width: "60%",
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 8,
        borderRadius: 50,
        backgroundColor: '#164094',
        elevation: 2,
        justifyContent: "center",
        alignSelf: "center"
    },
    cardViewLand: {
        flexDirection: "row",
        width: "60%",
        marginLeft: 16,
        marginRight: 16,
        marginTop: 50,
        marginBottom: 8,
        borderRadius: 50,
        backgroundColor: '#164094',
        elevation: 2,
        justifyContent: "center",
        alignSelf: "center"
    },
    
    cardViewProblema: {
        width: 230,
        marginLeft: 16,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5,
        marginBottom: 8,
        borderRadius: 50,
        backgroundColor: '#164094',
        elevation: 2,
    },
    cardViewProblemaLand: {
        width: 230,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5,
        marginBottom: 8,
        borderRadius: 50,
        backgroundColor: '#164094',
        elevation: 2,
    },
    mapStyle: {
        flex: 1,
        zIndex: -1
    },
    floatButton:{
        height: 75,
        width: 75,
        margin: 16
    },
    
    floatButtonLand:{
        height: 50,
        width: 50,
        marginRight: 16,
        marginBottom: 30
    },
    floatButtonBackground: {
        position: 'absolute',
        top: "80%",
        alignSelf: 'flex-end'
    }, buttonSteps:{
        position: 'absolute',
        alignSelf: 'flex-start'
    }
});