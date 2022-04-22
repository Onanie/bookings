import React from 'react';
import { useRef } from 'react';
import {View } from 'react-native';
import CarouselComp from 'react-native-snap-carousel';
import CarouselItem, {SLIDER_WIDTH , ITEM_WIDTH } from './carouselItem';
import {slider} from './slider';

const Carousel = ()=>{
    const isCarousel = useRef(null);
    return(
        <View style={{flex:2,borderBottomColor:"green", borderWidth:0.5}}>
          <CarouselComp
          layout={"default"}
          ref={isCarousel}
          data={slider}
          renderItem={CarouselItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          />
        </View>
    )
}
export default Carousel;