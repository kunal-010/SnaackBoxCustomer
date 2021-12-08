import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { CATEGORY, MENU } from '../../constants/routeNames';
import styles from './styles';

const CategoryComponent= ({navigation,categories}) => {


    const categoryRenderItem = ({item}) => {
        return(
            <TouchableOpacity style={styles.wrapper} onPress={()=>{navigation.navigate(MENU,{from : CATEGORY,_id:item._id})}}>
                <Image source={require('../../assets/images/MenuImages/parathas.jpg')} height={70} width={70} style={styles.image} />
                <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View>
            <FlatList 
                 data={categories}
                 renderItem={categoryRenderItem}
                 keyExtractor={item => item._id}
                 ListFooterComponent={
                     <View style={{height: 25}}></View>
                 }
            />
        </View>
    )
}

export default CategoryComponent;
