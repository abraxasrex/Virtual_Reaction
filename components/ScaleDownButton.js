import React from 'react';
import {Text, VrButton,View} from 'react-vr';
import mainUIComponentStyles from '../styles/mainpage.js';
//import FaArrowCircleDown from '../node_modules/react-icons/fa/arrow-circle-down';

import Icon from 'react-icons-kit';

//import icons

import { home } from 'react-icons-kit/icomoon';


export default class ScaleDownButton extends React.Component {

    render(){
        return <View><VrButton
        onClick={()=>this.props.onViewClicked()}>
        <Text
        style={mainUIComponentStyles.leftButton}>
             Scale Down
            
        </Text>
        </VrButton>
        </View>
    }
    }