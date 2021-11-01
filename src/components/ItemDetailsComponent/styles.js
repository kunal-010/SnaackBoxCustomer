import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  scrollView: {
      backgroundColor: colors.white,
    },
  imageContainer: {
      height: 300, 
      width: '100%',
    },
  detailPhoto: {height: 300, width: '100%', resizeMode: 'cover'},
  imageView: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: 'center',
  },
  descriptionContainer: {
      flexDirection: 'row',
      marginTop: 20
  },
  description: {
      width: '65%',
      fontSize: 17,
      marginLeft: 10,
      color: colors.grey
  },
  priceContainer: {
      marginLeft: 25,
      flexDirection: 'row',
      alignItems: 'center',
  },
  price: {
      fontSize: 35,
      color: 'black',
      marginLeft: 5
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
    // borderWidth: 0.5,
    borderRadius: 15,
    padding: 5,
    margin: 4,
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
