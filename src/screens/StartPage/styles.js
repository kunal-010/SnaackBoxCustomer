import {StyleSheet} from 'react-native';
import colors from './../../assets/theme/colors';

export default StyleSheet.create({
 wrapper: {
     backgroundColor: colors.primary,
     flex:1
 },
 logo: {
     alignSelf: 'center',
     marginTop: 80
 },
 container: {
     marginTop: 80,
     alignItems: 'center'
 }
});
