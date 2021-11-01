import React from 'react'
import { View, Text, ScrollView, TouchableOpacity,Linking } from 'react-native';
import ImageComponent from './ImageComponent';
import styles from './styles';
import Icon from './../common/Icon';
import shopDetails from './../../assets/data/shopDetails';

const ItemDetailsComponent = ({route}) => {

    const {item} = route.params;

    return (
        <ScrollView 
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column' }}
            style={styles.scrollView}
        >
            <View style={styles.container}>
                <ImageComponent image={item.image}/>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>This paratha consists of lots of vegetables and cheese please order this paratha</Text>
                    <View style={styles.priceContainer}>
                        <Icon name="rupee" type="fa" size={31} color='black'/>
                        <Text style={styles.price}>{item.price}</Text>
                    </View>
                </View>
            </View>
            
            <View style={styles.contact}>
                <Text style={styles.text}>Call us now:</Text>

                <TouchableOpacity 
                    style={styles.contactNo} 
                    onPress={() => {
                        Linking.openURL(`tel:${shopDetails.contact_no}`)
                }}>
                    <Text style={styles.number}>{shopDetails.contact_no}</Text>
                    <Icon 
                        name="phone" 
                        type="Feather" 
                        size={26} 
                        color= 'blue' 
                        style={styles.callIcon} 
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default ItemDetailsComponent
