import React from 'react'
import {useNavigation} from '@react-navigation/native';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import styles from './styles';
import DATA from './../../assets/data/data';
import colors from './../../assets/theme/colors';
import Icon from './../common/Icon';
import {SUBMENU} from './../../constants/routeNames';

const MenuComponent = ({navigation}) => {
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity 
                style={styles.item} 
                onPress={() => {
                    navigation.navigate(SUBMENU, {item});
                }}
            >
                <View style={styles.content}>
                    <Image height={70} width={70} source={item.image} style={styles.image}/>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={styles.arrowContainer}>
                    <Icon name="right"  type="ant" size={21} color={colors.grey} />
                </View>
            </TouchableOpacity>
        );    
    };
    
    return (
        <View style={styles.wrapper}>
            <FlatList
                renderItem={renderItem}
                data={DATA}
                keyExtractor={(item) => String(item.title)}
                ItemSeparatorComponent={() => (
                    <View
                      style={{height: 0.5, backgroundColor: colors.grey}}></View>
                )}
                ListHeaderComponent={() => (
                    <Text style={[styles.header]} >Menu</Text>
                )}
            />

            
        </View>
    )
}

export default MenuComponent;
