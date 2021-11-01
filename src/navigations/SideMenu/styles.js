import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  logoImage: {
    height: 150,
    width: 300,
    alignSelf: 'center',
    marginTop: 30,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginVertical: 5,
    borderRadius: 25,
  },

  itemText: {
    fontSize: 25,
    paddingVertical: 7,
    paddingLeft: 20,
    color: 'black'
  },
  icon : {
    marginLeft:12
  }
});
