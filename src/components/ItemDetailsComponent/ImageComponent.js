import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

function ImageComponent({image}) {
  
  return (
    <View style={styles.imageContainer}>
      <View>
        <Image
          style={styles.detailPhoto}
          source={image}
        />
      </View>
    </View>
  );
}

export default ImageComponent;
