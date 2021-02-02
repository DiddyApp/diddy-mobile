import React, { useEffect } from 'react';
import Svg, { Path, Rect, Circle } from 'react-native-svg';

export const NextIcon = (props) =>{ 
    return(
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M15 5L13.59 6.41L18.17 11H2V13H18.17L13.58 17.59L15 19L22 12L15 5Z" fill="white"/>
        </Svg>
    )
}
export const EclipseIcon = () => {
    return(
        <Svg width="15" height="14" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="6" cy="5.5" r="5.5" fill="#EFF0F2" fill-opacity="0.2"/>
        </Svg>
    )
}


export const ActiveEclipseIcon = () => {
    return(
        <Svg width="24" height="17" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect x="4.5" width="20" height="11" rx="5.5" fill="#333333"/>
        </Svg>
    )
}