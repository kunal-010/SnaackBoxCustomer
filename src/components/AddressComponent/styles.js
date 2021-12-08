import {StyleSheet} from 'react-native';
import colors from './../../assets/theme/colors';

export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 25,
        paddingBottom: 25,
        marginTop: 4
    },
    addressContainer: {
        flexDirection: 'row'
    },
    content: {
        width: '80%'
    },
    address: {
        fontSize: 20,
        marginLeft: 10,
        color: 'black' 
    },
    pin: {
        marginLeft: 10,
        fontSize: 18,
        marginVertical: 1
    },
    mobile: {
        marginLeft: 10,
        fontSize:18,
        color: colors.grey,
        fontWeight: '500',
        marginVertical: 1
    },
    editIcon: {
        marginRight: 15,
        marginTop: 2
    },
    addAddressButton: {
        backgroundColor: colors.primary,
        position: 'absolute',
        bottom: 20,
        right:20,
        width: 75,
        height: 75,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    updateButton : {
        marginHorizontal: 10,
        marginBottom: 15
    },
    updateButtonTitle : {
        fontSize: 20
    },
    emptyConatiner: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyTitle: {
        fontSize: 35,
        color: 'black',
        marginTop: 10
    }
});
