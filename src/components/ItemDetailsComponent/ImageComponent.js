import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

function ImageComponent({image}) {
  
  return (
      <View style={{margin:10}}>
        <Image
          style={styles.detailPhoto}
          source={image}
        />
      </View>
  );
}

export default ImageComponent;
