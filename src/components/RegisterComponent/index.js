import React,{useState} from 'react';
import { View , Image, KeyboardAvoidingView } from 'react-native';
import Input from './../common/Input';
import Icon from './../common/Icon';
import CustomButton from './../common/CustomButton';
import styles from './styles';
import colors from '../../assets/theme/colors';
import { isEmailValid } from './../../utils/validations'

const RegisterComponent = ({
	errors,
	setErrors,
	form,
	setForm,
	onSubmit	
}) => {
    
    const onChange = ({name,value}) => {
        setForm({...form, [name]: value});
		setErrors((prev) => {
            return {...prev, [name]: null};
        });
    }
    
    const onSubmitClick = () => {
        if (!form.name) {
          setErrors((prev) => {
            return {...prev, name: 'Please add a full name'};
          });
        }
        if (!form.email || !isEmailValid(form.email)) {
          setErrors((prev) => {
            return {...prev, email: 'Please enter a valid email'};
          });
        }
        if (!form.mobile || form.mobile.length !== 10) {
          setErrors((prev) => {
            return {...prev, mobile: 'Please enter a valid mobile number'};
          });
        }
        
        if (
          Object.values(form).length === 3 &&
          Object.values(form).every((item) => item.trim().length > 0) &&
          Object.values(errors).every((item) => !item)
        ){
            onSubmit();
        }
    };
    return (
		<View style={{flex:1,backgroundColor: colors.primary}}>
			<KeyboardAvoidingView behavior="position" style={{backgroundColor: colors.primary}}>
				<View style={styles.wrapper}>
						<Image 
							source={require('./../../assets/images/logo.jpg')}
							height={70}
							width={70}
							style={styles.logo}
						/>
						<View style={styles.container}>
							<Input 
								placeholder="Full Name"
								style={{width: '90%',alignSelf: 'center'}}
								error={errors.name}
								onChangeText={(value) => {
									onChange({name: 'name', value});
								}}
							/>
							<Input 
								placeholder="Email"
								style={{width: '90%',alignSelf: 'center'}}
								error={errors.email}
								onChangeText={(value) => {
									onChange({name: 'email', value});
								}}
							/>
							<Input 
								placeholder="Mobile Number"
								style={{width: '90%',alignSelf: 'center'}}
								keyboardType="numeric"
								error={errors.mobile}
								onChangeText={(value) => {
									onChange({name: 'mobile', value});
								}}
							/>
							{/* <Input 
								placeholder="Address Line 1"
								style={{width: '90%',alignSelf: 'center'}}
								error={errors.addressLine1}
								onChangeText={(value) => {
									onChange({name: 'addressLine1', value});
								}}
							/>
							<Input 
								placeholder="Address Line 2"
								style={{width: '90%',alignSelf: 'center'}}
								onChangeText={(value) => {
									onChange({name: 'addressLine2', value});
								}}
							/>
							<Input 
								placeholder="Address Line 3"
								style={{width: '90%',alignSelf: 'center'}}
								onChangeText={(value) => {
									onChange({name: 'addressLine3', value});
								}}
							/>
							<Input 
								placeholder="Pin Code"
								style={{width: '90%',alignSelf: 'center'}}
								keyboardType="numeric"
								error={errors.pin}
								onChangeText={(value) => {
									onChange({name: 'pin', value});
								}}
							/>
							<Input 
								placeholder="Password"
								style={{width: '90%',alignSelf: 'center'}}
								error={errors.passord}
								onChangeText={(value) => {
									onChange({name: 'passord', value});
								}}
								secureTextEntry={isSecureEntry}
								icon={
								<TouchableOpacity
									onPress={() => {
										setIsSecureEntry((prev) => !prev);
									}}>
									<Icon 
									name={isSecureEntry ? 'eye' : 'eye-off'} 
										type="feather" 
										size={25} 
										color={colors.secondary}
									/>
								</TouchableOpacity>
								}
								iconPosition="right"
							/>

							<Input 
								placeholder="Confirm Password"
								style={{width: '90%',alignSelf: 'center'}}
								error={errors.confirmPassword}
								onChangeText={(value) => {
									onChange({name: 'confirmPassword', value});
								}}dgdg
								secureTextEntry={isConfirmSecureEntry}
								icon={
								<TouchableOpacity
									onPress={() => {
										setIsConfirmSecureEntry((prev) => !prev);
									}}>
									<Icon 
									name={isConfirmSecureEntry ? 'eye' : 'eye-off'} 
										type="feather" 
										size={25} 
										color={colors.secondary}
									/>
								</TouchableOpacity>
								}
								iconPosition="right"
						/> */}

						<CustomButton 
							title="Register"
							primary
							style={styles.registerButton}
							titleStyle={styles.registerButtonTitle}
							onPress={onSubmitClick}
							icon={
								<Icon 
									name="adduser" 
									type="ant" 
									color={colors.white} 
									size={25} 
									style={{marginTop:6,marginLeft: 8}}
								/>
							}
						/>
						</View>
						
					</View>
			</KeyboardAvoidingView>

		</View>
    )
}

export default RegisterComponent;
