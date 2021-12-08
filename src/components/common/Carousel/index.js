import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import DATA from './../../../assets/data/data';
import styles from './styles';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default class App extends React.PureComponent {
    
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: DATA[5].items
      }
    }
    _renderItem({item,index}){
        return (
          <View>
              <Image source={item.image} height={100} width={100} style={styles.image}/>
          </View>

        )
    }
    
    render(){
        return(
            <Carousel
                layout={"default"}
                ref={ref => this.carousel = ref}
                data={this.state.carouselItems}
                sliderWidth={windowWidth}
                itemWidth={windowWidth}
                renderItem={this._renderItem}
                onSnapToItem = { index => this.setState({activeIndex:index}) } 
                loop={true}
                autoplay={true}
                autoplayDelay={1000}
                activeAnimationType="spring"
            />
        )
    }
};

