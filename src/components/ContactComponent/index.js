import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import Card from '../common/Card';
import Message from '../common/Message';
import styles from './styles';
import shopDetails from './../../assets/data/shopDetails';
import Icon from '../common/Icon';


const ContactComponent = () => {
    return (
        <Card>
            <View>
                <Image 
                        height={10}
                        width={70}
                        source={require('../../assets/images/logo.jpg')}
                        style={styles.logoImage}
                    />
                <View style={styles.addressBox}>
                    <Text style={{fontSize: 21,color: 'black'}}>Address: </Text>
                    <Text style={styles.address}>{shopDetails.address}</Text>
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
            </View>
        </Card>

    )
}

export default ContactComponent;
