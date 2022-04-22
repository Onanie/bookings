import React from 'react';
import {View, Text, Dimensions, Image } from 'react-native';
import componentsStyles from './componentsStyles';
export const SLIDER_WIDTH = Dimensions.get('window').width+80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH*0.7);

const CarouselItem = ({item, index}:any)=>{
    return(
        <View style={[componentsStyles.carouselContainer]}>
            <Image source={item.image}
            style={{width:ITEM_WIDTH, height:250}}/>
        </View>
    )
}
export default CarouselItem;