import React,{useContext, useEffect, useState} from 'react'
import  { BackHandler,Alert } from 'react-native';
import axios from './../../helpers/axiosInstance';
import HomeComponent from '../../components/HomeComponent';
import { searchFoodItems } from '../../api/foodItem';
import register from '../../context/actions/auth/register';
import {GlobalContext} from '../../context/Provider';


const Home = ({navigation}) => {
      
      const [foodItems,setFoodItems] = useState([]);
      const [categories,setCategories] = useState([]);
      const [loading,setLoading] = useState(false);
      const [searchedFoodItems,setSearchedFoodItems] = useState([]);
      const [searchText,setSearchText] = useState('');
      const [isSearching,setIsSearching] = useState(false);

      useEffect(() =>
          navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
            BackHandler.exitApp();
            return
          }),[navigation]
      );

      useEffect(() => {
          async function getData(){
            setLoading(true);
            try{
                const res = await axios.get('/foodItem/home');
                if(!res.data.foodItems.err){
                  setFoodItems(res.data.foodItems.data);
                }
                if(!res.data.categories.err){
                  setCategories(res.data.categories.data);
                }
                setLoading(false);
            }catch(err){
                console.log('err fetching home data >>',err);
            }
          }
          getData();          
      },[]);

      useEffect(() => {
        if(searchText.length === 0){
          setSearchedFoodItems([]);
        }
      },[searchText]);

      const onChangeText = (value) => {
        setSearchText(value);
      }
      
      const onSearch = async (value) => {
        setLoading(true);
        setIsSearching(true)
        try{
            const res = await searchFoodItems(searchText);
            if(!res.data.err){
              setSearchedFoodItems(res.data);
              if(res.data.length === 0){
                  Alert.alert(
                      "Item Not Found",
                      "The food Item you searched for not is available.",
                      [
                        { text: "OK",onPress : () => setLoading(false)}
                      ]
                    );
                  } else {
                    setLoading(false);
                  }
              }
              
        }catch(err){
            setLoading(false)
            console.log('error while searching food item >>',err);
        }
      }

    return (
        <HomeComponent 
          navigation={navigation}
          foodItems={foodItems}
          categories={categories}
          loading={loading}
          onChangeText={onChangeText}
          searchText={searchText}
          onSearch={onSearch}
          isSearching={isSearching}
          searchedFoodItems={searchedFoodItems}
        />
    )
}

export default Home;
