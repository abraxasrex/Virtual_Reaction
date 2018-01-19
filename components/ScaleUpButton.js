import React from 'react';
import {Text, VrButton} from 'react-vr';
import mainUIComponentStyles from '../styles/mainpage.js';

export default class ScaleUpButton extends React.Component {

    render(){
        return <VrButton
        onClick={()=>this.props.onViewClicked()}>
        <Text
        style={mainUIComponentStyles.rightButton}>
            Scale Up
        </Text>
        </VrButton>
    }
    }