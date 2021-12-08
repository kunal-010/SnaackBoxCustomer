import React from 'react'
import { View, Text, ScrollView, TextInput, KeyboardAvoidingView, Alert } from 'react-native'
import styles from './styles';
import CustomButton from './../common/CustomButton';
import Icon from '../common/Icon';
import colors from '../../assets/theme/colors';
import { isPinAvailable } from './../../utils/validations'


const EditAddressComponent = ({
    editableAddress,
    from,
    onChange,
    setErrors,
    errors,
    onSave,
    onDelete
}) => {

    const onSaveClick = async () => {
        if (!editableAddress.address) {
          setErrors((prev) => {
            return {...prev, address: 'Please add full address'};
          });
          return;
        }
        if (!editableAddress.pin || editableAddress.pin.length !== 6) {
          setErrors((prev) => {
            return {...prev, pin: 'Please enter a valid pin of length 6'};
          });
          return;
        }
        if (!editableAddress.mobile || editableAddress.mobile.length !== 10) {
          setErrors((prev) => {
            return {...prev, mobile: 'Please enter a valid mobile number'};
          });
          return;
        }
        let validity = true;
        await isPinAvailable(editableAddress.pin)
            .then(res => {
                if(res.data.data === null){
                    validity = false;
                    return Alert.alert(
                            "Pin Unavailable!!",
                            "Currently we are not delivering at this address..."
                        )
                }
            })
            
        if(!validity)return;

        if (
          Object.values(editableAddress).length >= 3 &&
          Object.values(editableAddress).every((item) => item.trim().length > 0) &&
          Object.values(errors).every((item) => !item)
        ){
            onSave();
        }
    };

    const onDeleteClick = () => {
        return (
            Alert.alert(
                "Delete Address",
                "Do you really want to delete the address?",
                [
                    {
                        text: "Cancel"
                    },
                    {
                        text: "Confirm",
                        onPress: () => onDelete(editableAddress._id)
                    }
                ]
            )
        )
    }

    return (
        <KeyboardAvoidingView style={styles.wrapper}>
            <Text style={styles.title}>{`${from} Address`}</Text>
            <View style={styles.container}>
                <Text style={styles.label}>Address :</Text>
                <TextInput
                    placeholder="Address"
                    value={editableAddress?.address}
                    style={styles.input}
                    onChangeText={(value) => {
                        onChange({name: 'address',value})
                    }}             
                    multiline
                    textAlignVertical="top"   
                    spellCheck={false}
                    autoCorrect={false}    
                />
                {errors.address && <Text style={styles.error}>{errors.address}</Text>}

                <Text style={styles.label}>Pin :</Text>
                <TextInput
                    placeholder="Pin code"
                    value={editableAddress?.pin}
                    style={styles.input}
                    keyboardType = 'numeric'
                    onChangeText={(value) => {
                        onChange({name: 'pin',value})
                    }}
                />
                {errors.pin && <Text style={styles.error}>{errors.pin}</Text>}

                <Text style={styles.label}>Mobile :</Text>
                <TextInput
                    placeholder="Mobile Number"
                    value={editableAddress?.mobile}
                    keyboardType = 'numeric'
                    style={styles.input}
                    onChangeText={(value) => {
                        onChange({name: 'mobile',value})
                    }}
                />
                {errors.mobile && <Text style={styles.error}>{errors.mobile}</Text>}
                <View style={styles.buttonContainer}>
                    {from === 'Edit' && <CustomButton 
                        title="Delete"
                        primary
                        style={styles.button}
                        titleStyle={styles.buttonTitle}
                        onPress={onDeleteClick}
                    />}
                    <CustomButton 
                        title="Save"
                        primary
                        style={styles.button}
                        titleStyle={styles.buttonTitle}
                        onPress={onSaveClick}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default EditAddressComponent;
