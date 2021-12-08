import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, SectionList } from 'react-native'
import styles from './styles';
import Icon from './../common/Icon';
import {CATEGORY, HOME, ITEM_DETAILS, SUBMENU} from './../../constants/routeNames';
import colors from '../../assets/theme/colors';
import CustomButton from './../common/CustomButton';
import SearchBar from '../common/SearchBar';
import CardComponent from '../CardComponent';

const MenuComponent = ({
    navigation,
    loading,
    foodItems,
    onChangeText,
    onSearch,
    searchedFoodItems
}) => {

    const renderItem = ({ item }) => {
        return (
            <CardComponent item={item} navigation={navigation}/>
        );    
    };
    
    const onChangeTextFunction = (value) => {
        onChangeText(value);
    }

    return (
        <View style={styles.wrapper}> 
            <View style={{marginHorizontal: 10}}>
                <SearchBar 
                    placeholder="Search here..."
                    style={{fontSize:25}}
                    icon={
                        <TouchableOpacity onPress={onSearch}>
                            <Icon name="search" type="fa" size={22} color={colors.secondary}/>
                        </TouchableOpacity>
                    }
                    iconPosition="right"
                    onChangeText={onChangeTextFunction}
                />
            </View>
            {loading && (
                <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
                    <ActivityIndicator color={colors.primary} size="large" />
                </View>
            )}
            {!loading && 
                <FlatList
                    renderItem={renderItem}
                    data={searchedFoodItems.length === 0 ? foodItems: searchedFoodItems}
                    keyExtractor={(item) => String(item._id)}
                    ListFooterComponent={
                        <View style={{height:150}}></View>
                    }
                /> 
            } 
        </View>
    )
}

export default MenuComponent;
