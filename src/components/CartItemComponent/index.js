import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import colors from '../../assets/theme/colors';
import { removeItem, setItem } from '../../asyncstorage/cart';
import { ADD_ITEM, REMOVE_ITEM } from '../../constants/eventTypes/cart';
import  Icon from '../common/Icon';
import styles from './styles';

const CartItemComponent = ({
    item,
    index,
    changeQuantity
}) => {

    const [quantity,setQuantity] = useState();
    const onDecrease = async () => {
        if(quantity === 1){
            await removeItem({type: REMOVE_ITEM, _id: item._id})
            changeQuantity({type: 'Decrease', _id : item._id, quantity: quantity});
            ToastAndroid.showWithGravity(
                `${item.name} removed from the cart!!`,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
            return;
        }
        
        await setItem({type: ADD_ITEM, _id: item._id, data: quantity - 1})
        changeQuantity({type: 'Decrease', _id : item._id, quantity: quantity,index : index});
        setQuantity(prev => prev - 1);
    }

    const onIncrease = async () => {
        await setItem({type: ADD_ITEM, _id: item._id, data: quantity + 1})
        changeQuantity({type: 'Increase', _id : item._id, quantity: quantity,index : index});
        setQuantity(prev => prev + 1);
    }
    useEffect(() => {
        setQuantity(parseInt(item.quantity));
    },[]);

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Icon type="octicon" name="primitive-dot" size={28} color={colors.primary} style={styles.icon}/>
                    <Text style={styles.name}>{item.name}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Icon name="rupee" type="fa" size={18} color={colors.grey} style={styles.rupeeIcon}/>
                    <Text style={styles.price}>{item?.price}</Text>
                </View>
            </View>
            <View style={styles.quantityBox}>
                <TouchableOpacity style={styles.minusButton} onPress={onDecrease}>
                    <Text style={styles.signs}>-</Text>
                </TouchableOpacity>
                <Text style={[styles.numberBox, {fontSize: quantity > 9 ? 17: 20,
                                    width: quantity > 9 ? 21: 17,
                                    marginLeft: quantity > 9 ? 5: 9 }]}>
                    {quantity}
                </Text>
                <TouchableOpacity style={styles.plusButton} onPress={onIncrease}>
                    <Text style={styles.signs}>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.totalPriceContainer}>
                <Icon name="rupee" type="fa" size={18} color='black' style={styles.rupeeIcon}/>
                <Text style={styles.totalPrice}>{item.price*item.quantity}</Text>
            </View>
            <View style={{backgroundColor: 'black',height: 0.5}}></View>
        </View>
    )
}

export default CartItemComponent;
