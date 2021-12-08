import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react'
import { View, Text,TouchableOpacity, Alert } from 'react-native'
import AddressComponent from '../../components/AddressComponent';
import { EDIT_ADDRESS } from '../../constants/routeNames';
import updateSelectedAddress from '../../context/actions/auth/updateSelectedAddress';
import { GlobalContext } from '../../context/Provider';
import Icon from './../../components/common/Icon';

const Address = ({navigation}) => {

    const [selectedAddressId,setSelectedAddressId] = useState();
    const {
        authDispatch,
        authState: {error, data},
    } = useContext(GlobalContext);

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}>
                    <Icon name="arrowleft" type="ant" size={28} color='black' style={{marginRight: 20}}/>
              </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(EDIT_ADDRESS, {from: 'Create' })
                  }}>
                      <Icon name="plus" type="ant" size={28} color='black' />
                </TouchableOpacity>
              ),
        });
        if(data.selectedAddress){
            setSelectedAddressId(data.selectedAddress);
        }
    },[]);

    const onUpdateAddress = async () => {
        if(!selectedAddressId){
            return Alert.alert(
                "Address Not Selected!!",
                "You have not selected/added address"
            )
        }
        await updateSelectedAddress(selectedAddressId)(authDispatch);
    }

    return (
        <AddressComponent 
            data={data}
            selectedAddressId={selectedAddressId}
            setSelectedAddressId={setSelectedAddressId}
            navigation={navigation}
            onUpdateAddress={onUpdateAddress}
        />
    )
}

export default Address;
