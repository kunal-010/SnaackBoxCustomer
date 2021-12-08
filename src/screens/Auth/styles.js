import {StyleSheet} from 'react-native';
import colors from './../../assets/theme/colors';

export default StyleSheet.create({
    wrapper: {
        backgroundColor: colors.primary,
        flex:1,
    },
    container: {
        backgroundColor: colors.white,
        marginTop: 50,
        alignSelf: 'center',
        width: '90%',
        borderRadius: 10,
        marginBottom: 100
    },
    logo: {
        height: 120,
        width: 180,
        alignSelf: 'center',
        marginTop: 50
    },
    title: {
        fontSize: 25,
        color: colors.secondary,
        padding: 10,
        fontWeight: '500'
    }
});
