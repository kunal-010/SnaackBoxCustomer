import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import styles from './styles'
import Icon from '../common/Icon'
import CustomButton from './../common/CustomButton';
import colors from '../../assets/theme/colors'
import { EDIT_ADDRESS } from '../../constants/routeNames'

const AddressComponent = ({
    data,
    selectedAddressId,
    setSelectedAddressId,
    navigation,
    onUpdateAddress
}) => {

    const addressItem = ({item}) => {
        return (
            <View style={styles.container}>
                <View style={styles.addressContainer}>
                    <TouchableOpacity onPress={() => setSelectedAddressId(item._id)}>
                        <Icon 
                            type="material" 
                            name={selectedAddressId === item._id ? 'radio-button-on' : 'radio-button-off'} 
                            size={25} 
                            color={colors.primary} 
                            style={{marginTop: 2}}
                        />
                    </TouchableOpacity>
                    <View style={styles.content}>
                        <Text style={styles.address}>{item?.address}</Text>
                        <Text style={styles.pin}>{`Pin - ${item.pin}`}</Text>
                        <Text style={styles.mobile}>{`Mobile - ${item.mobile}`}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate(EDIT_ADDRESS, {from: 'Edit' , address : item, selectedAddressId})}>
                    <Icon 
                        name="edit" 
                        type="fa5" 
                        size={22} 
                        color={colors.primary} 
                        style={styles.editIcon}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{flex:1,marginTop: 10}}>
            {data.addresses.length !== 0 && 
                <FlatList 
                    renderItem={addressItem}
                    data={data.addresses}
                    keyExtractor={(item) => String(item._id)}
                    ListFooterComponent={
                        <View style={{height:150}}></View>
                    }
                />
            }
            {data.addresses.length !== 0 && 
                <CustomButton 
                    title="Update Address"
                    primary
                    style={styles.updateButton}
                    titleStyle={styles.updateButtonTitle}
                    onPress={onUpdateAddress}
                />
            }
            {data.addresses.length === 0 &&
                <View style={styles.emptyConatiner}>
                    <Icon type="fa" name="address-book" size={120} color={colors.primary} style={{opacity: 0.8}}/>
                    <Text style={styles.emptyTitle}>No address added</Text>
                </View>
            }
        </View>
    )
}

export default AddressComponent;
