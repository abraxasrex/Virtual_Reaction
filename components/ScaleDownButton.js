import React from 'react';
import {Text, VrButton,View} from 'react-vr';
import mainUIComponentStyles from '../styles/mainpage.js';
//import FaArrowCircleDown from '../node_modules/react-icons/fa/arrow-circle-down';

import {StyleSheet} from 'react-native';

export default class ScaleDownButton extends React.Component {
    render(){
        return <View><VrButton
        onClick={()=>this.props.onViewClicked()}>
        <Text
        style={[mainUIComponentStyles.standardButton, mainUIComponentStyles.leftButton, mainUIComponentStyles.scaleButton]}>
             Scale Down
        </Text>
        </VrButton>
        </View>
    }
    }