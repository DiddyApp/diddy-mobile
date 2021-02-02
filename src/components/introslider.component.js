import React, { useEffect } from 'react';
import { View } from 'react-native';
import { ActiveEclipseIcon, EclipseIcon } from './icons.component';

const IntroSlider = (props) =>{ 
    const { count, active } = props;
    // console.log(count, active);
    const Sliders = [];
    for (let i = 0; i < count; i++) {
        if(i===active){
            Sliders.push(<ActiveEclipseIcon key={i} />);
        }else{
            Sliders.push(<EclipseIcon key={i} />);
        }
      }
    return(
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', width:100}}>
            {Sliders}
        </View>
    )
}

export default IntroSlider;