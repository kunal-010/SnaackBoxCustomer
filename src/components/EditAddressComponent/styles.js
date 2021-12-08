import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.white
    },
    title: {
        fontSize: 30,
        color: colors.primary,
        marginTop: 20,
        marginLeft: 25 
    },
    container: {
        marginHorizontal: 15,
        marginTop: 10,
    },
    label: {
        fontSize: 17,
        fontWeight: '700',
        marginTop: 10
    },
    input: {
        borderBottomWidth: 1,
        fontSize: 20,
        borderBottomColor: 'grey'
    },
    error: {
        color: colors.danger,
        paddingTop: 4,
        fontSize: 12,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button : {
        width: '47%',
        marginTop: 35,
    },
    buttonTitle: {
        fontSize: 20
    }
});
