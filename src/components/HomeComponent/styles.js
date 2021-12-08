import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  categoriesTitleWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      marginHorizontal: 10
  },
  popularTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 10
  },
  title: {
      color: 'black',
      fontSize: 20,
      fontWeight: '500'
  },
  viewAll: {
     color: 'black',
     fontSize: 20,
     fontWeight: '500',
     textDecorationLine: 'underline',
  },
  categoryImage: {
      height: 100,
      width:100,
      borderRadius: 100,
      marginBottom: 5
  },
  wrapper: {
      alignItems: 'center',
      marginHorizontal: 5,
      marginVertical: 10
  },
  categoryName: {
      color: 'black',
      fontSize: 17
  },
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
  SearchBarContainer: {
      marginHorizontal: 10,
      padding: 0
  },
  popularContainer: {
      marginBottom: 50
  },
  searchBar: {
      fontSize: 25,
  }
});
