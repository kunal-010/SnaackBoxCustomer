import React,{useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Input from './../common/Input';
import Icon from './../common/Icon';
import CustomButton from './../common/CustomButton';
import styles from './styles';
import colors from '../../assets/theme/colors';

const LoginComponent = () => {
    const [isSecureEntry,setIsSecureEntry] = useState(true)
    return (
        <View>
           <Input 
                placeholder="Mobile Number"
                style={{width: '90%',alignSelf: 'center'}}
                keyboardType="numeric"
                // label="Mobile Number"
           />
           <Input 
                placeholder="Password"
                style={{width: '90%',alignSelf: 'center'}}
                // label="Mobile Number"
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

           <CustomButton 
                title="Login"
                primary
                style={styles.loginButton}
                titleStyle={styles.loginButtonTitle}
                icon={
                    <Icon 
                        name="login" 
                        type="materialCommunity" 
                        color={colors.white} 
                        size={25} 
                        style={{marginTop:6,marginLeft: 8}}
                    />
                }
           />

           <TouchableOpacity>
               <Text style={styles.forgotPassword}>Forgot Password?</Text>
           </TouchableOpacity>
        </View>
    )
}

export default LoginComponent;
