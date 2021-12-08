import React, { useState } from 'react'
import { View, Text, TouchableOpacity,FlatList,Image,ScrollView, ActivityIndicator } from 'react-native'
import colors from '../../assets/theme/colors';
import Icon from '../common/Icon';
import SearchBar from '../common/SearchBar';
import Carousel from './../common/Carousel'
import styles from './styles';
import PopularComponent from './../PopularComponent'
import { CATEGORY, HOME, MENU } from '../../constants/routeNames';
import CardComponent from '../CardComponent';


const HomeComponent = ({
    navigation,
    foodItems,
    categories,
    loading,
    onChangeText,
    onSearch,
    searchedFoodItems
}) => {

    const categoryRenderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.wrapper} onPress={()=> {navigation.navigate(MENU,{from : CATEGORY, _id: item._id})}}>
                <Image source={require('../../assets/images/MenuImages/parathas.jpg')} height={30} width={30} style={styles.categoryImage}/>
                <Text style={styles.categoryName}>{item.name}</Text>
            </TouchableOpacity>
        )
    };

    const popularRenderItem = ({ item }) => {
        return (
            <PopularComponent item={item} navigation={navigation}/>
        );    
    };

    const renderItem = ({item}) => {
        return (
            <CardComponent navigation={navigation} item={item}/>
        )
    }

    const HeaderComponent = () => {
       return(
            <View >
                <View style={styles.categoriesTitleWrapper}>
                    <Text style={styles.title}>Categories</Text>
                    <TouchableOpacity onPress={()=>{navigation.navigate(CATEGORY,{categories:categories})}}>
                        <Text style={styles.viewAll}>View All</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={categories}
                    renderItem={categoryRenderItem}
                    keyExtractor={item => item._id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
                <View style={styles.popularTitleWrapper}>
                    <Text style={styles.title}>Popular</Text>
                    <TouchableOpacity onPress={() => {navigation.navigate(MENU,{from : HOME})}}>
                        <Text style={styles.viewAll}>View All</Text>
                    </TouchableOpacity>
                </View>
            </View>
       )
    };
    const onChangeTextFunction = (value) => {
        onChangeText(value);
    }
    return (
        <View >
            <View style={styles.SearchBarContainer}>
                    <SearchBar 
                        placeholder="Search here..."
                        style={styles.searchBar}
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
            {!loading && searchedFoodItems.length === 0 && 
                <ScrollView nestedScrollEnabled={true} >     
                    <View style={{  flexDirection:'row', justifyContent: 'center', alignItems:'center',marginHorizontal: 10}}>
                        <Carousel />
                    </View>                    
                    <HeaderComponent />
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={popularRenderItem}
                        data={foodItems}
                        keyExtractor={(item) => String(item._id)}
                        style={styles.popularContainer}
                    />
                </ScrollView>
            }
            
            {!loading && searchedFoodItems.length !== 0 &&
                    <FlatList
                        renderItem={renderItem}
                        data={searchedFoodItems}
                        keyExtractor={(item) => String(item._id)}
                        ListFooterComponent={
                            <View style={{height: 100}}></View>
                    }
                />
            }
        </View>
        
    )
}

export default HomeComponent;
