import {StyleSheet} from 'react-native';
import colors from './../../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {
      flex:1,
  },
  cartTitle: {
      fontSize: 30,
      color: colors.primary,
      marginLeft: 25,
      marginTop: 20,
      fontWeight: '500'
  },
  itemWrapper: {
    backgroundColor: colors.white,
    borderRadius:10,
    padding: 10,
    marginTop: 15
  },
  instructionContainer: {
    backgroundColor: colors.white,
    flexDirection: 'row'
  },
  instructionIcon : {
    marginLeft: 5,
  },
  instruction: {
    borderWidth: 1,
    width: '85%',
    marginLeft: 10,
    marginBottom: 20,
    borderColor: 'grey',
    paddingVertical: 5,
    fontSize: 15
  },
  totalContainer: {
    backgroundColor: colors.white,
    marginTop: 20
  },
  costContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 5
  },
  priceContainer: {
    flexDirection: 'row'
  },
  cost: {
    fontSize: 20,
    marginLeft: 3
  },
  rupeeIcon: {
    alignSelf: "center"
  },
  itemTotal: {
    fontSize: 20,
    color: colors.grey
  },
  otherTotal: {
    fontSize: 18,
    borderStyle: 'dotted',
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },
  grandTotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 10
  },
  grandTotal: {
    fontSize: 25,
    color: 'black'
  },
  grandTotalCost: {
    color: 'black',
    fontSize: 25,
    marginLeft: 3
  },
  payment: {
    backgroundColor: colors.white,
    marginTop:20, 
    paddingHorizontal:10, 
    color: 'black',
    fontSize: 18,
    marginBottom: 10
  },
  addressContainer: {
    backgroundColor: colors.white,
    marginTop: 20
  },
  addressButton: {
    marginVertical:10,
    marginHorizontal:10,
  },
  addressButtonTitle: {
    fontSize: 25
  },
  addressTitle: {
    fontSize: 25,
    color:colors.primary,
    marginLeft: 15,
    marginTop: 5
  },
  addressWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 5,
    marginBottom: 10
  },
  address: {
    fontSize: 18,
    color: 'black',
  },
  addressContent: {
    width: '70%'
  },
  addressChangeButton: {
    fontSize: 20,
    color: colors.primary,
  },
  placeOrderButton: {
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 10
  },
  placeOrderButtonTitle: {
    fontSize: 25
  },
  emptyCartContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyTitle: {
    fontSize: 28,
    color: 'black',
  },
  orderNowButton: {
    width: '35%',
    borderRadius: 100,
    marginTop: 10
  },
  orderNowButtonTitle: {
    fontSize: 20
  }
});
