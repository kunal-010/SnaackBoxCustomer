import {StyleSheet} from 'react-native';
import colors from './../../assets/theme/colors';

export default StyleSheet.create({

  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },    
  wrapper: {
    backgroundColor: colors.white,
    flex:1,
  },
  image: {
      height: 70,
      width: 70,
      borderRadius: 100,
      marginLeft: 10
  },
  item: {
      flexDirection: 'row',
      marginVertical: 10,
      justifyContent: 'space-between'
  },
  title: {
      fontSize: 25,
      marginLeft: 20,
      color: 'black'
  },
  arrow: {
      marginRight: 10
  },
  arrowContainer: {
      justifyContent: "center",
      marginRight: 10
  },
  header: {
    fontSize: 45,
    color: colors.secondary,
    paddingLeft: 20,    
    borderBottomWidth: 0.5,
    borderBottomColor: 'black'
  }
});
