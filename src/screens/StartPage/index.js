import React from 'react'
import { View, Text, Image,ScrollView } from 'react-native'
import styles from './styles';
import CustomButton from './../../components/common/CustomButton';
import {AUTH, DRAWER_NAVIGATOR} from './../../constants/routeNames';

const StartPage = ({navigation}) => {
    return (
        <ScrollView style={styles.wrapper}>
            <Image 
                source={require('./../../assets/images/logo.jpg')}
                height={70}
                width={70}
                style={styles.logo}
            />
            <View style={styles.container}>
                <CustomButton 
                    title="Login"
                    titleStyle={{fontSize: 30}}
                    secondary
                    style={{paddingHorizontal: 20,borderRadius: 25,width: '45%'}}
                    onPress={() => {
                        navigation.navigate(AUTH,{state: 0})
                    }}
                />
                <CustomButton 
                    title="Register"
                    titleStyle={{fontSize: 30}}
                    secondary
                    style={{paddingHorizontal: 20,borderRadius: 25,width: '45%'}}
                    onPress={() => {
                        navigation.navigate(AUTH,{state: 1})
                    }}
                />
                <CustomButton 
                    title="Skip"
                    titleStyle={{fontSize: 30}}
                    style={{paddingHorizontal: 20,borderRadius: 25,width: '45%'}}
                    onPress={() => {
                        navigation.navigate(DRAWER_NAVIGATOR)
                    }}
                />
            </View>
        </ScrollView>
    )
}

export default StartPage;
