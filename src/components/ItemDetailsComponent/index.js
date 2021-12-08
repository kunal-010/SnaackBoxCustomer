import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity,Linking, ActivityIndicator, ToastAndroid } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import ImageComponent from './ImageComponent';
import styles from './styles';
import Icon from './../common/Icon';
import colors from '../../assets/theme/colors';
import CustomButton from './../common/CustomButton';
import { getItem, removeItem, setItem } from '../../asyncstorage/cart';
import { ADD_ITEM, GET_ITEM, REMOVE_ITEM } from '../../constants/eventTypes/cart';


const ItemDetailsComponent = ({foodItem,loading,setFoodItem}) => {
    
    const [quantity,setQuantity] = useState(1);
    const [isAdded, setIsAdded] = useState(false);
    
    const onAdd = async () => {
        setIsAdded(true);
        await setItem({type: ADD_ITEM, _id: foodItem._id, data: quantity})
        ToastAndroid.showWithGravity(
            `${foodItem.name} added to the cart!!`,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    }

    const onDecrease = async () => {
        if(quantity === 1){
            
            return;
        }
        setQuantity(prev => prev - 1);
    }

    const onIncrease = async () => {
        setQuantity(prev => prev + 1);
    };

    const onRmove = async () => {
        setIsAdded(false);
        await removeItem({type: REMOVE_ITEM, _id: foodItem._id})
        ToastAndroid.showWithGravity(
            `${foodItem.name} removed from the cart!!`,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    }

    useFocusEffect(
        React.useCallback(() => {
            if(foodItem){
                getItem({type: GET_ITEM,_id: foodItem._id})
                    .then(qty => {
                        if(qty){
                            setIsAdded(true);
                            setQuantity(qty);
                        }
                    })
            }
        },[foodItem])
    );   

    useEffect(() => {
        async function updateQuantity(){
            if(isAdded){
                await setItem({type: ADD_ITEM, _id: foodItem._id, data: quantity})
            }
        }
        if(foodItem){
            updateQuantity();
        }   
    }, [quantity])

    return loading ? (
            <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
                    <ActivityIndicator color={colors.primary} size="large" />
            </View>
        ) : (
        <ScrollView 
            contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column'}}
            style={styles.scrollView}
        >
            <View>
                <ImageComponent image={require('../../assets/images/MenuImages/chaat.jpg')}/>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{foodItem?.name}</Text>
                    <View style={styles.priceContainer}>
                        <Icon name="rupee" type="fa" size={25} color={colors.primary}/>
                        <Text style={styles.price}>{foodItem?.price}</Text>
                    </View>
                </View>
                <Text style={styles.description}>{foodItem?.description}</Text>
                <View style={styles.quantityBox}>
                    <TouchableOpacity style={styles.minusButton} onPress={onDecrease}>
                        <Text style={{fontSize:35,color:colors.white}}>-</Text>
                    </TouchableOpacity>
                    <Text 
                        style={[styles.numberBox, {fontSize: quantity > 9 ? 22: 25,
                                                    width: quantity > 9 ? 35: 30,
                                                    marginLeft: quantity > 9 ? 12: 16 }]}
                    >
                        {quantity}
                    </Text>
                    <TouchableOpacity style={styles.plusButton} onPress={onIncrease}>
                        <Text style={{fontSize:35,color:colors.white}}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            {!isAdded &&
                <CustomButton 
                    title="Add to Cart" 
                    primary
                    style={styles.addButton}
                    titleStyle={{fontSize: 25}}
                    icon={<Icon name="shopping-cart" type="fa" size={25} color={colors.white} style={styles.cartIcon}/>}
                    iconPosition="right"
                    onPress={onAdd}
                />
            }
            {isAdded && 
                <CustomButton 
                    title="Remove" 
                    primary
                    style={styles.addButton}
                    titleStyle={{fontSize: 25}}
                    icon={<Icon name="shopping-cart" type="fa" size={25} color={colors.white} style={styles.cartIcon}/>}
                    iconPosition="right"
                    onPress={onRmove}
                />
            }
        </ScrollView>
    )
}

export default ItemDetailsComponent
