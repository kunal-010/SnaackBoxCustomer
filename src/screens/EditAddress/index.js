import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect,useState } from 'react'
import { ToastAndroid, TouchableOpacity } from 'react-native'
import { GlobalContext } from '../../context/Provider';
import Icon from '../../components/common/Icon';
import EditAddressComponent from '../../components/EditAddressComponent';
import addAddress from '../../context/actions/auth/addAddress';
import updateAddress from '../../context/actions/auth/updateAddress';
import deleteAddress from '../../context/actions/auth/deleteAddress';

const EditAddress = ({navigation,route}) => {
   
    const {from,address,selectedAddressId} = route.params;
    const {setOptions} = useNavigation();
    const [editableAddress, setEditableAddress] = useState();
    const [errors, setErrors] = useState({});

    const {
        authDispatch,
        authState: {data,loading},
    } = useContext(GlobalContext);

    useEffect(() => {
        setOptions({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}>
                    <Icon name="arrowleft" type="ant" size={28} color='black' style={{marginRight: 20}}/>
              </TouchableOpacity>
            ),
        });
        if(address){
            setEditableAddress(address);
        }
    },[]);

    const onChange = ({name, value}) => {
        setEditableAddress({...editableAddress, [name]: value});
		setErrors((prev) => {
            return {...prev, [name]: null};
        });
    }

    const onSave = async () => {
        if(from === 'Create'){
            await addAddress(editableAddress)(authDispatch);
            navigation.goBack();
        }else{
            await updateAddress(editableAddress)(authDispatch);
        }
    }

    const onDelete = async (_id) => {
        await deleteAddress(_id,selectedAddressId)(authDispatch);
        navigation.goBack();
    }

    return (
        <EditAddressComponent 
            editableAddress={editableAddress}
            from={from}     
            onChange={onChange}
            errors={errors}
            setErrors={setErrors}
            onSave={onSave}
            onDelete={onDelete}
        />
    )
}

export default EditAddress;
