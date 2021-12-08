import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, ToastAndroid } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import colors from '../../assets/theme/colors';
import { getItem, removeItem, setItem } from '../../asyncstorage/cart';
import { ADD_ITEM, GET_ITEM, REMOVE_ITEM } from '../../constants/eventTypes/cart';
import { ITEM_DETAILS } from '../../constants/routeNames';
import CustomButton from '../common/CustomButton';
import Icon from '../common/Icon';
import styles from './styles';

const CardComponent = ({navigation,item}) => {

    const [quantity,setQuantity] = useState(1);
    const [isAdded, setIsAdded] = useState(false);

    const onAdd = async () => {
        setIsAdded(true);
        await setItem({type: ADD_ITEM, _id: item._id, data: quantity})
        ToastAndroid.showWithGravity(
            `${item.name} added to the cart!!`,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    }

    const onDecrease = async () => {
        if(quantity === 1){
            setIsAdded(false);
            await removeItem({type: REMOVE_ITEM, _id: item._id})
            ToastAndroid.showWithGravity(
                `${item.name} removed from the cart!!`,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
            return;
        }
        setQuantity(prev => prev - 1);
    }

    const onIncrease = async () => {
        setQuantity(prev => prev + 1);
    }

    useFocusEffect(
        React.useCallback(() => {
            getItem({type: GET_ITEM,_id: item._id})
                .then(qty => {
                    if(qty){
                        setIsAdded(true);
                        setQuantity(qty);
                    }
                })
        },[])
    );  

    useEffect(() => {
        async function updateQuantity(){
            if(isAdded){
                await setItem({type: ADD_ITEM, _id: item._id, data: quantity})
            }
        }
        updateQuantity();
    }, [quantity])

    return (
        <TouchableOpacity 
            style={styles.item} 
            onPress={() => {
                navigation.navigate(ITEM_DETAILS, {_id: item._id});
            }}
        >
            <View style={styles.container}>
                <Image height={70} width={70} source={require('../../assets/images/MenuImages/parathas.jpg')} style={styles.image}/>
                <View style={styles.content}>
                    <Text style={styles.name}>{item?.name}</Text>
                    <View style={styles.priceContainer}>
                        <Icon name="rupee" type="fa" size={18} color={colors.grey}/>
                        <Text style={styles.price}>{item?.price}</Text>
                    </View>
                    <View >
                        {!isAdded && 
                            <TouchableOpacity >
                                <CustomButton 
                                    title="Add"
                                    primary
                                    style={styles.addButton}
                                    titleStyle={{fontSize:25}}
                                    onPress={onAdd}
                                />
                            </TouchableOpacity>
                        }
                        
                        {isAdded && 
                            <View style={styles.quantityBox}>
                                <TouchableOpacity style={styles.minusButton} onPress={onDecrease}>
                                    <Text style={{fontSize:35,color:colors.white}}>-</Text>
                                </TouchableOpacity>
                                <Text style={[styles.numberBox, {fontSize: quantity > 9 ? 20: 25,
                                                    width: quantity > 9 ? 24: 20,
                                                    marginLeft: quantity > 9 ? 6: 11 }]}>
                                    {quantity}
                                </Text>
                                <TouchableOpacity style={styles.plusButton} onPress={onIncrease}>
                                    <Text style={{fontSize:35,color:colors.white}}>+</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    </View>
                </View>
                
            </View>
            <Text style={styles.unavailable}>Unavailable</Text>
        </TouchableOpacity>
    )
}

export default CardComponent;
