import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
    logoImage: {
        width: '100%',
        height: 200
    },
    addressBox: {
        flexDirection: 'row',
        marginVertical: 15
    },
    address: {
        fontSize: 22,
        width : '75%',
        color: colors.primary
    },
    contact: {  
        fontSize: 22,
        marginLeft: 10,
        marginBottom: 35,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
      color: 'black',
      fontSize: 25,
    },
    number: {
      fontSize: 26,
      color: 'black',
    },
    callIcon: {
      marginLeft: 10
    },
    contactNo: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: 'blue',
    //   borderWidth: 0.5,
      borderRadius: 15,
      padding: 5,
      margin: 6,
      alignSelf: 'flex-end',
      elevation: 3,
      backgroundColor: '#fff',
      shadowOffset: {
         width: 3,
         height: 3
      },
      shadowColor: '#333',
      shadowOpacity: 1,
      shadowRadius: 2,
    }
});
