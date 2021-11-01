import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  card: {
     borderRadius: 6,
     elevation: 3,
     backgroundColor: '#fff',
     shadowOffset: {
         width: 3,
         height: 3
     },
     shadowColor: '#333',
     shadowOpacity: 1,
     shadowRadius: 2,
     marginHorizontal: 10,
     marginVertical: 10,
     
  },
  cardContent: {
      marginHorizontal: 18,
      marginVertical:10
  }
});
