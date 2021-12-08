import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({

  popularImage: {
      width: '100%',
      height: 200,
      borderRadius: 10
  },
  popularWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 5,
      alignItems: 'center'
  },
  card: {
    width: windowWidth-60,
    marginBottom: 80
  },  
  item: {
  },
  name: {
      color: 'black',
      fontSize: 22
  },
  price: {
      color: 'black',
      fontSize: 22,
      marginLeft: 5
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems:'center',
    marginRight: 2
  },
  addButton: {
    width:100,
    height: 45,
    alignSelf: 'flex-end',
    borderRadius: 25
  },
  quantityBox: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    // marginVertical: 10,
    // marginRight: 10,
    alignItems: 'center'
  },
  minusButton: {
    backgroundColor: colors.primary,
    width:37,
    height: 45,
    alignItems: 'center',
    // borderRadius: 100,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20
  },
  plusButton: {
    backgroundColor: colors.primary,
    width:38,
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
  description: {
    width: '65%',
    fontSize: 15,
    color:colors.grey
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  unavailable: {
    backgroundColor: 'red',
    position: 'absolute',
    alignSelf: 'flex-end',
    fontSize: 20,
    borderRadius: 10,
    paddingHorizontal: 5,
    color: colors.white
  }
});
