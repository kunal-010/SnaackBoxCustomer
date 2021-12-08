import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react'
import { getCategories } from '../../api/category';
import CategoryComponent from '../../components/CategoryComponent';

const Category = ({navigation}) => {

    const [categories,setCategories] = useState([]);
    const [loading,setLoading] = useState()

    useFocusEffect(
        React.useCallback(() => {
            setLoading(true);
            getCategories()
                .then(res => {
                    setCategories(res);
                    setLoading(false);
                })
        }, [])
    );

    return (
        <CategoryComponent 
            navigation={navigation}
            categories={categories}
        />
    )
}

export default Category;
