import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  scrollView: {
      backgroundColor: colors.white,
      flex:1,
    },
  imageContainer: {
      // height: 300, 
      // width: '100%',
    },
  detailPhoto: {
    height: 300, 
    width: '100%', 
    borderRadius: 25,
    resizeMode: 'cover'  
  },
  imageView: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: 'center',
  },
  descriptionContainer: {
      flexDirection: 'row',
      backgroundColor: colors.white,
      width: '100%'
  },
  description: {
      width: '100%',
      fontSize: 17,
      marginLeft: 10,
      color: colors.grey,
      marginTop: 10
  },
  priceContainer: {
      marginLeft: 25,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
  },
  price: {
      fontSize: 25,
      color: colors.primary,
      marginLeft: 5,
      fontWeight: '800',
      marginBottom: 5
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15
  },
  title: {
    fontSize: 25,
    color: 'black'
  },
  addButton: {
    width:'95%',
    height: 55,
    borderRadius: 25,
    alignSelf: 'center',
    marginBottom: 10
    // marginHorizontal: 10
  },
  quantityBox: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30
  },
  minusButton: {
    backgroundColor: colors.primary,
    width:60,
    height: 45,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20
  },
  plusButton: {
    backgroundColor: colors.primary,
    width:60,
    height: 45,
    alignItems: 'center',
    // borderRadius: 100,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20
  },
  numberBox: {
    backgroundColor: colors.white,
    fontSize: 25,
    color: 'black',
    width:30,
    marginLeft:21,
    marginRight:4
  },
  cartIcon : {
    marginLeft: 10,
    justifyContent: 'center',
    marginTop: 3
  }
});
