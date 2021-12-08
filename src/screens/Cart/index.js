import React, { useContext, useEffect, useState } from 'react'
import { useNavigation} from '@react-navigation/native';
import CartComponent from '../../components/CartComponent';
import { TouchableOpacity } from 'react-native';
import Icon from '../../components/common/Icon';
import { getItem } from '../../asyncstorage/cart';
import { GET_ALL_ITEM } from '../../constants/eventTypes/cart';
import { GlobalContext } from '../../context/Provider';
import { DRAWER_NAVIGATOR } from '../../constants/routeNames';

const Cart = ({route,navigation}) => {

  const {setOptions,toggleDrawer} = useNavigation();
  const [cartFoodItems,setCartFoodItems] = useState();
  const {from} = route.params;
  const [loading,setLoading] = useState();
  const {
      authState: {data},
  } = useContext(GlobalContext);
  const [costs,setCosts] = useState([
    {
       name : "Item Total",
       cost : 0
    },
    {
       name : "Delivery Charges",
       cost : 0
    },
    {
       name : "Packaging Charges",
       cost : 0
    }
  ])

    useEffect(() => {
        setOptions({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  if(from === DRAWER_NAVIGATOR){
                      toggleDrawer();
                  }else{
                      navigation.goBack();
                  }
                }}>
                    <Icon 
                    name={from === DRAWER_NAVIGATOR ? "menu" : "arrowleft"} 
                    type={from === DRAWER_NAVIGATOR ? "feather" : "ant"}  
                    size={28} color='black' 
                    style={{marginRight: 20,marginLeft: from === DRAWER_NAVIGATOR ? 10 : 0}}/>
              </TouchableOpacity>
            )
        });
      if(!cartFoodItems){
        setLoading(true);
        getItem({type: GET_ALL_ITEM})
          .then(cartItems => {
              setCartFoodItems(cartItems.data)
              setLoading(false)
          })
      }
    },[]);

    useEffect(() => {
      let total = 0;
      cartFoodItems?.forEach(item => {
        total += (parseInt(item.price) * parseInt(item.quantity));
      }); 
      let items = [...costs];
      let item = {...items[0]};
      item.cost = total;
      items[0] = item;
      setCosts(items);
    },[cartFoodItems]);

    const changeQuantity = ({type,_id,quantity,index}) => {
      if(type === 'Decrease'){
        if(quantity === 1){
          let filteredItems = cartFoodItems?.filter(item => item._id !== _id);
          setCartFoodItems(filteredItems);
        }
        else{
          let items = [...cartFoodItems];
          let item = {...items[index]};
          item.quantity = quantity - 1;
          items[index] = item;
          setCartFoodItems(items);
        }
      }else {
          let items = [...cartFoodItems];
          let item = {...items[index]};
          item.quantity = quantity + 1;
          items[index] = item;
          setCartFoodItems(items);
      }
    }

    const onChange = (value) => {
      setInstruction(value);
    }

    return (
        <CartComponent 
          cartFoodItems={cartFoodItems}
          loading={loading}
          changeQuantity={changeQuantity}
          onChange={onChange}
          costs={costs}
          data={data}
          navigation={navigation}
		    />
    )
}

export default Cart;
