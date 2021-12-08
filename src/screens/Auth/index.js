import React, { useEffect,useState } from 'react'
import { View, Text, ScrollView, Image, TouchableWithoutFeedback } from 'react-native'
import colors from '../../assets/theme/colors';
import styles from './styles';
import LoginComponent from './../../components/LoginComponent';
import RegisterComponent from './../../components/RegisterComponent';
import { useFocusEffect } from '@react-navigation/core';

const Auth = ({route}) => {

    const [activeTab,setActiveTab] = useState();
    const {state} = route.params;
    useFocusEffect(
        React.useCallback(() => {
          setActiveTab(state)
        }, [])
      );
    return (
        <ScrollView style={styles.wrapper}>
            <Image 
                source={require('./../../assets/images/logo.jpg')}
                height={70}
                width={70}
                style={styles.logo}
            />
            <View style={styles.container}>
                <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
                    <TouchableWithoutFeedback onPress={() => {
                            setActiveTab(0);
                        }}
                    >
                        <View>
                            <Text style={[styles.title]}>
                                Login
                            </Text>
                            {activeTab === 0 && <View style={{backgroundColor: colors.secondary,height: 3,marginTop: 0,marginBottom: 5}}></View>}
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => {
                            setActiveTab(1);
                        }}
                    >
                        <View>
                            <Text style={[styles.title]}>
                                Register
                            </Text>
                            {activeTab === 1 && <View style={{backgroundColor: colors.secondary,height: 3,marginTop: 0,marginBottom: 5}}></View>}
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                {activeTab === 0 ? <LoginComponent /> : <RegisterComponent />}
            </View>
        </ScrollView>
    )
}

export default Auth;
