import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {
    height: 60,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: colors.white,
    paddingHorizontal: 25,
  },

  inputContainer: {
    paddingVertical: 12,
    // marginRight: 10
  },

  textInput: {
    flex: 1,
    width: '100%',
  },

  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
