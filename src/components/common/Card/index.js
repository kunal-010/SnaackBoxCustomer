import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const Card = (props) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

export default Card
