import React from 'react';
import {View,StatusBar} from 'react-native';
import { DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar,Title,Drawer,} from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/Styles'



export function DrawerContent(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSelection}>
                        <View style={{ alignItems: 'center' }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://w0.pngwave.com/png/415/765/user-profile-linkedin-netwerk-money-order-fulfillment-round-face-png-clip-art.png'
                                }}
                                size={100}
                            />
                            <View>
                                <Title style={styles.username}>Anónimo</Title>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section>
                        <Title style={styles.userprofile}>Operações</Title>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="clipboard"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Notas"
                            labelStyle={{ color: 'black', fontSize: 12 }}
                            onPress={() => props.navigation.navigate('NotasAnonimo')}
                        />

</Drawer.Section>
</View>
</DrawerContentScrollView>

</View>
)
}