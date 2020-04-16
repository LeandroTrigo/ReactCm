import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Nota from '../assets/nota.png'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 5,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFFEE2',
        elevation: 2,
    },
    date: {
        fontSize: 16,
        color: '#000',
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
    },
    photo: {
        height: 80,
        width: 80,
    },
});

const CustomRow = ({ title, description}) => (
    <View style={styles.container}>
        <Image source={Nota} style={styles.photo} />
        <View style={styles.container_text}>
        <Text style={styles.description}>
                {description}
            </Text>
            <Text style={styles.date}>
                {title}
            </Text>
        </View>

    </View>
);

export default CustomRow;