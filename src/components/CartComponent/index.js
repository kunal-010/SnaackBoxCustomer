import React from 'react'
import { View, Text, ScrollView, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native'
import colors from '../../assets/theme/colors';
import { ADDRESS, CATEGORY, HOME, HOME_NAVIGATOR } from '../../constants/routeNames';
import CartItemComponent from '../CartItemComponent';
import Icon from '../common/Icon';
import CustomButton from './../common/CustomButton';
import styles from './styles';

const CartComponent = ({
    cartFoodItems,
    loading,
    changeQuantity,
    onChange,
    costs,
    data,
    navigation
}) => {
    return loading ? (
        <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
            <ActivityIndicator color={colors.primary} size="large" />
        </View>
    ) : cartFoodItems?.length !==0 ? (
        <ScrollView style={styles.wrapper}>
            <Text style={styles.cartTitle}>Your Cart</Text>
            <View style={styles.itemWrapper}>
                {cartFoodItems?.map((item,index) => {
                    return <CartItemComponent 
                                item={item}  
                                key={item._id} 
                                changeQuantity={changeQuantity}
                                index={index}
                            />
                })}
            </View>
            <View style={styles.instructionContainer}>
                <Icon 
                    type="materialCommunity" 
                    name="drag-horizontal-variant" 
                    size={25} 
                    style={styles.instructionIcon} 
                />
                <TextInput
                     style={styles.instruction}
                     placeholder="Do you want to add cooking instructions?"
                     multiline={true}
                     textAlignVertical="top"
                     onChangeText={onChange}
                />
            </View>
            <View style={styles.totalContainer}>
                {costs.map((cost,index) => {
                    return (
                        <View key={cost.name} style={styles.costContainer}>
                            <Text style={index === 0 ? styles.itemTotal : styles.otherTotal}>{cost.name}</Text>
                            <View style={styles.priceContainer}>
                                <Icon name="rupee" type="fa" size={17}  style={styles.rupeeIcon}/>
                                <Text style={styles.cost}>{cost.cost}</Text>
                            </View>
                        </View>
                    )
                })}
                <View style={{backgroundColor: 'black',borderWidth:0.5,marginHorizontal: 10,marginVertical:10}}></View>
                <View style={styles.grandTotalContainer}>
                    <Text style={styles.grandTotal}>Grand Total</Text>
                    <View style={styles.priceContainer}>
                        <Icon name="rupee" type="fa" size={25} color='black' style={styles.rupeeIcon}/>
                        <Text style={styles.grandTotalCost}>{costs[0].cost + costs[1].cost + costs[2].cost}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.addressContainer}>
                <Text style={styles.addressTitle}>Your Address</Text>
                {!data.selectedAddress && <CustomButton 
                    title="Add a address"
                    primary
                    style={styles.addressButton}
                    titleStyle={styles.addressButtonTitle}
                    onPress={() => {
                        navigation.navigate(ADDRESS)
                    }}
                />}
                {data.selectedAddress &&
                    <View style={styles.addressWrapper}>
                        <View style={styles.addressContent}>{data?.addresses.map(item => {
                            if(data.selectedAddress === item._id){
                                return <Text key={item._id} style={styles.address}>{`${item.address.substr(0,25)}...`}</Text>
                            }
                        })}</View>
                        <TouchableOpacity style={{justifyContent: 'center'}} onPress={() => navigation.navigate(ADDRESS)}>
                            <Text style={styles.addressChangeButton}>Change</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
            <Text style={styles.payment}>
                *Currently we are having only Cash on Delivery Payment Option.
            </Text>
            <CustomButton 
                title="Place Order"
                primary
                style={styles.placeOrderButton}
                titleStyle={styles.placeOrderButtonTitle}
            />
        </ScrollView>
    ) : (
        <View style={styles.emptyCartContainer}>
            <Icon name="cart-outline" type="ionicon" size={120} color={colors.primary} style={{opacity: 0.8}}/>
            <Text style={styles.emptyTitle}>No items in Cart</Text>
            <CustomButton 
                title="Order Now"
                primary
                style={styles.orderNowButton}
                titleStyle={styles.orderNowButtonTitle}
                onPress={() => navigation.navigate(HOME_NAVIGATOR , {screen : CATEGORY})}
            />
        </View>
    )
}

export default CartComponent;
