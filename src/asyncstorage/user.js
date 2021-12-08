import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async (_id) => {
    try{
        await AsyncStorage.setItem('user_id',_id);

    }catch(err){
        console.log('error to store user id >>',err);
    }
}

export const getItem = async () => {
    try{
        const user_id = await AsyncStorage.getItem('user_id');
        return user_id;
    }catch(err){
        console.log('error to get user id >>',err);
    }
}