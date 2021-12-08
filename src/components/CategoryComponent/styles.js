import {StyleSheet} from 'react-native';
import colors from './../../assets/theme/colors';

export default StyleSheet.create({
    wrapper:{
        marginTop:10,
        marginHorizontal: 10
    },
    image: {
        height:100,
        width:'100%',
        borderRadius: 10,
        opacity: 0.9
    },
    name: {
        position: 'absolute',
        color: 'black',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 35,
        fontSize: 25,
        fontWeight: '500'
    }
});
