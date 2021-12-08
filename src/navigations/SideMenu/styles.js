import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  logoImage: {
    height: 100,
    width: 150,
    alignSelf: 'center',
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginVertical: 5,
    borderRadius: 25,
  },

  itemText: {
    fontSize: 21,
    paddingVertical: 7,
    paddingLeft: 10,
    color: 'black'
  },
  icon : {
    marginLeft:12
  },
  avatar : {
    borderRadius: 100,
    height: 70,
    width:70,
    marginTop: 10,
    marginLeft: 10
  },
  username: {
    fontSize: 20,
    marginLeft:15,
    color: 'black',
    width: '60%'
  }
});
