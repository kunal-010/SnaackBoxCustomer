import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  registerButton: {
    width:'90%',
    alignSelf: 'center',
    marginVertical: 10,
    marginBottom: 15,
    borderRadius: 50
  },
  registerButtonTitle: {
      fontSize: 28,
  },
  wrapper: {
    backgroundColor: colors.primary,
    // flex:1,
  },
  logo: {
    height: 120,
    width: 180,
    alignSelf: 'center',
    marginTop: 50
  },
  container: {
    backgroundColor: colors.white,
    marginHorizontal: 20,
    marginTop: 50,
    borderRadius: 25,
    paddingTop: 10,
    paddingBottom: 20
  }
});
