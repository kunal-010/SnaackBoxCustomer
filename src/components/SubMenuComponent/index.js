import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import styles from './styles';
import colors from './../../assets/theme/colors';
import Icon from './../common/Icon';
import { ITEM_DETAILS } from '../../constants/routeNames';

const SubMenuComponent = ({route,navigation}) => {

    const {item} = route.params;

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity 
                style={styles.item}
                onPress={() => {
                    navigation.navigate(ITEM_DETAILS,{item});
                }}
            >
                <View style={styles.content}>
                    <Image height={70} width={70} source={item.image} style={styles.image}/>
                    <View style={styles.details}>
                        <Text style={styles.title}>{item.title}</Text>
                        <View style={{flexDirection: 'row', marginTop: 2,alignItems:'center'}}>
                            <Icon name="rupee" type="fa" size={15} color='black' style={{marginRight: 3}} />
                            <Text style={{fontSize: 18,color:'black'}}>{item.price}</Text>
                        </View>
                    </View>
                    
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
                data={item.items}
                keyExtractor={(item) => String(item.title)}
                ItemSeparatorComponent={() => (
                    <View
                      style={{height: 0.5, backgroundColor: colors.grey}}></View>
                )}
                ListHeaderComponent={() => (
                    <Text style={[styles.header]} >{item.title}</Text>
                )}
            />   
        </View>
    )
}

export default SubMenuComponent;
