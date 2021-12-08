import React, {useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, Image, ToastAndroid } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import Card from './../common/Card'
import styles from './styles';
import Icon from '../common/Icon';
import CustomButton from './../common/CustomButton';
import colors from '../../assets/theme/colors';
import { ITEM_DETAILS } from '../../constants/routeNames';
import { getItem, removeItem, setItem } from '../../asyncstorage/cart';
import { ADD_ITEM, GET_ITEM, REMOVE_ITEM } from '../../constants/eventTypes/cart';

const PopularComponent = ({item,navigation}) => {

    const [quantity,setQuantity] = useState(1);
    const [isAdded, setIsAdded] = useState(false);

    const onAdd = async () => {
        setIsAdded(true);
        await setItem({type: ADD_ITEM, _id: item._id, data: quantity})
        ToastAndroid.showWithGravity(
            `${item.name} added to the cart!!`,
            ToastAndroid.LONG,
            ToastAndroid.CENTER
        );
    }

    const onDecrease = async () => {
        if(quantity === 1){
            setIsAdded(false);
            await removeItem({type: REMOVE_ITEM, _id: item._id})
            ToastAndroid.showWithGravity(
                `${item.name} removed from the cart!!`,
                ToastAndroid.LONG,
                ToastAndroid.CENTER
            );
            return;
        }
        setQuantity(prev => prev - 1);
    }

    const onIncrease = async () => {
        setQuantity(prev => prev + 1);
    };

    useFocusEffect(
        React.useCallback(() => {
            getItem({type: GET_ITEM,_id: item._id})
                .then(qty => {
                    if(qty){
                        setIsAdded(true);
                        setQuantity(qty);
                    }else{
                        setIsAdded(false);
                        setQuantity(1);
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
        <Card style={styles.card}>
            
            <TouchableOpacity 
                style={styles.item} 
                onPress={() => {
                    navigation.navigate(ITEM_DETAILS, {_id: item._id});
                }}
            >
                <Image source={require('../../assets/images/MenuImages/chaat.jpg')} height={100} width={100} style={styles.popularImage}/>
                <Text style={styles.unavailable}>{item.availability}</Text>
                <View style={{height: 1, backgroundColor: 'black', marginTop: 10}}></View>
                <View style={styles.popularWrapper}>
                    <Text style={styles.name}>{item.name}</Text>
                    <View style={styles.priceContainer}>
                        <Icon name="rupee" type="fa" size={20} color='black'/>
                        <Text style={styles.price}>{item.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={styles.content}>
                <Text style={styles.description}>{item.description}</Text>
                {!isAdded && <CustomButton 
                    title="Add"
                    primary
                    style={styles.addButton}
                    titleStyle={{fontSize:25}}
                    onPress={onAdd}
                />}
                {isAdded && <View style={styles.quantityBox}>
                    <TouchableOpacity style={styles.minusButton} onPress={onDecrease}>
                        <Text style={{fontSize:35,color:colors.white}}>-</Text>
                    </TouchableOpacity>
                    <Text 
                        style={[styles.numberBox, {fontSize: quantity > 9 ? 20: 25,
                                                    width: quantity > 9 ? 24: 20,
                                                    marginLeft: quantity > 9 ? 6: 11 }]}
                    >
                        {quantity}
                    </Text>
                    <TouchableOpacity style={styles.plusButton} onPress={onIncrease}>
                        <Text style={{fontSize:35,color:colors.white}}>+</Text>
                    </TouchableOpacity>
                </View> }
            </View>
        </Card>
    )
}

export default PopularComponent;
