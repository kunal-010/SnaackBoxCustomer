import React, { useState,useEffect } from 'react'
import { View, Text } from 'react-native'
import NetInfo from '@react-native-community/netinfo';

const NoNetworkBar = () => {

    const [ networkStatus,setNetworkStatus]  = useState();

    useEffect(() =>
        NetInfo.addEventListener((state) => {
            const { isConnected } = state;
            setNetworkStatus(isConnected);
        }),[]
    );


    return !networkStatus ? (
        <View>
            <Text>Network Error</Text>
        </View>
    ) : null;
}

export default NoNetworkBar;
