import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  loginButton: {
    width:'90%',
    alignSelf: 'center',
    marginVertical: 10
  },
  loginButtonTitle: {
      fontSize: 28,
  },
  forgotPassword:{
      fontSize:18,
      color: colors.secondary,
      alignSelf: 'flex-end',
      marginBottom: 20,
      marginRight: 15,
      textDecorationLine: 'underline'
  }
});
