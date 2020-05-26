import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Nota from '../assets/nota.png'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 5,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#808080',
        elevation: 2,
    },
    date: {
        fontSize: 16,
        color: '#fff',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
        color: "#fff"
    },
    photo: {
        height: 300,
        width: "100%",
        marginBottom: 16
    },
});

const CustomRowReports = ({ image, title, description}) => (
    <View style={styles.container}>
        <Image source={{uri: "http://192.168.1.70:5000/" + image}} style={styles.photo} />
        <View style={styles.container_text}>
            <Text style={styles.date}>
                {title}
            </Text>

            <Text style={styles.description}>
                {description}
            </Text>
        </View>

    </View>
);

export default CustomRowReports;