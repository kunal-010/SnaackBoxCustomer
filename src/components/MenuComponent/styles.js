import {StyleSheet} from 'react-native';
import colors from './../../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {
    // marginVertical: 10
  },
  image: {
    height: 160,
    width:'40%',
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15
  },
  item: {
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: colors.white,
    borderRadius: 15
  },
  price: {
    color: colors.grey,
    fontSize: 18,
    marginLeft: 5
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems:'center',
    marginRight: 2
  },
  name: {
    fontSize: 20,
    color: 'black',
  },
  container: {
    flexDirection: 'row',
  },
  content: {
    marginTop: 30,
    marginLeft: 10
  },
  unavailable: {
    backgroundColor: 'red',
    position: 'absolute',
    width: 115,
    color: colors.white,
    fontSize: 18,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'flex-end'
  },
  addButton: {
    width:100,
    height: 45,
    marginTop: 20,
    // alignSelf: 'flex-end',
    // marginVertical: 20,
    // marginRight: 10,
    borderRadius: 25
  },
  quantityBox: {
    flexDirection: 'row',
    marginTop: 20,
    // alignSelf: 'flex-end',
    // marginVertical: 10,
    // marginRight: 10,
    alignItems: 'center'
  },
  minusButton: {
    backgroundColor: colors.primary,
    width:40,
    height: 45,
    alignItems: 'center',
    // borderRadius: 100,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20
  },
  plusButton: {
    backgroundColor: colors.primary,
    width:40,
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
    width:20,
    marginLeft:11,
    marginRight:4
  },
});
