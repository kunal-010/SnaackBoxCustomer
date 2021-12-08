import React from 'react';
import {View, Text, TextInput, ActivityIndicator,TouchableOpacity} from 'react-native';
import {color} from 'react-native-reanimated';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const CustomButton = ({
  title,
  secondary,
  primary,
  danger,
  disabled,
  loading,
  onPress,
  style,
  titleStyle,
  icon,
  iconPosition
}) => {
  const getBgColor = () => {
    if (primary) {
      return colors.primary;
    }
    if (danger) {
      return colors.danger;
    }

    if (secondary) {
      return colors.secondary;
    }
  };

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.wrapper, {backgroundColor: getBgColor(),flexDirection: getFlexDirection()}, style]}>
      <View style={[styles.loaderSection]}>
        {loading && (
          <ActivityIndicator
            color={primary ? colors.secondary : colors.primary}
          />
        )}
        {title && (
          <Text
            style={[{
              color: disabled ? colors.secondary : colors.white,
              paddingLeft: loading ? 5 : 0,
            },titleStyle]}>
            {title}
          </Text>
        )}
        <View>{icon && icon}</View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
