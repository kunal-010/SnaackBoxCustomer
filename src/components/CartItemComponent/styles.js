import {StyleSheet} from 'react-native';
import colors from './../../assets/theme/colors';

export default StyleSheet.create({
  name: {
    fontSize: 18,
    color: 'black',
    marginLeft: 10
  },
  wrapper: {
    flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  icon : {
    alignSelf: 'center'
  },
  priceContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    marginLeft: 25
  },
  price: {
    fontSize: 18,
    color: colors.grey,
    fontWeight: '500',
    marginLeft: 3,
  },
  rupeeIcon: {
    // alignSelf: 'center',
    marginTop: 2,
    marginTop: 8
  },
  container: {
    width: '60%',
  },
  content: {
    flexDirection: 'row',
  },  
  quantityBox: {
    flexDirection: 'row',
    marginLeft: 5,
    marginTop: 8
    // alignItems: 'center'
  },
  minusButton: {
    backgroundColor: colors.primary,
    width:25,
    height: 35,
    alignItems: 'center',
    // borderRadius: 100,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10
  },
  plusButton: {
    backgroundColor: colors.primary,
    width:25,
    height: 35,
    alignItems: 'center',
    // borderRadius: 100,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10
  },
  numberBox: {
    backgroundColor: colors.white,
    fontSize: 15,
    color: 'black',
    width:10,
    marginLeft:11,
    marginRight:4
  },
  totalPriceContainer: {
    // alignSelf: 'center',
    flexDirection: 'row',
    marginLeft: 15,
    marginTop: 8
  },
  totalPrice: {
    fontSize: 18,
    color: 'black',
    marginLeft: 2,
    marginTop: 3
  },
  signs: {
    fontSize: 25,
    color: colors.white
  }
});
